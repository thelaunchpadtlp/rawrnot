import Vapor
import Fluent

struct SinpeTransactionController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let payments = routes.grouped("api", "payments")
        
        // Crear transacción (Checkout Frontend)
        payments.post("create", use: createPayment)
        
        // El cliente sube el comprobante REAL. La IA lo analiza e intenta pre-aprobar.
        payments.on(.POST, ":id", "upload-receipt", body: .collect(maxSize: "10mb"), use: uploadReceiptAndAiValidate)
        
        // El owner hace la aprobación final humana en The Architect
        let ownerRoutes = payments.grouped(RoleMiddleware(requiredRole: .owner))
        ownerRoutes.post(":id", "owner-approve", use: ownerApprove)
        
        payments.get(use: index)
    }

    func index(req: Request) async throws -> [SinpeTransaction] {
        try await SinpeTransaction.query(on: req.db).all()
    }

    struct CreatePaymentReq: Content {
        let orderId: UUID
        let expectedAmount: Double
        let paymentMethod: String // "sinpe" o "bank_transfer"
    }

    func createPayment(req: Request) async throws -> SinpeTransaction {
        let data = try req.content.decode(CreatePaymentReq.self)
        let transaction = SinpeTransaction(orderId: data.orderId, expectedAmount: data.expectedAmount, paymentMethod: data.paymentMethod)
        try await transaction.save(on: req.db)
        return transaction
    }

    func uploadReceiptAndAiValidate(req: Request) async throws -> SinpeTransaction {
        guard let id = req.parameters.get("id", as: UUID.self),
              let transaction = try await SinpeTransaction.find(id, on: req.db) else {
            throw Abort(.notFound)
        }
        
        // Extraer los bytes de la imagen del cuerpo del request
        guard let imageData = req.body.data else {
            throw Abort(.badRequest, reason: "No se recibió imagen del comprobante.")
        }
        
        // INVOCACIÓN DEL PROTOCOLO APEX OCR
        let ocrResult = try await OCRService.shared.processReceipt(imageData: imageData, on: req)
        
        transaction.referenceNumber = ocrResult.referenceNumber
        
        // Lógica de Validación: Si el número de referencia existe, la IA lo marca como pre-aprobado.
        if transaction.referenceNumber != nil {
            transaction.aiStatus = "pre_approved"
            req.logger.info("IA ha pre-aprobado la transacción \(id) con éxito.")
        } else {
            transaction.aiStatus = "flagged"
            req.logger.warning("IA no pudo confirmar los datos. Requiere atención inmediata.")
        }
        
        // TODO: Subir la imagen a Google Cloud Storage y guardar el receiptUrl
        transaction.receiptUrl = "storage://receipts/\(id.uuidString).png"
        
        try await transaction.save(on: req.db)
        return transaction
    }

    struct OwnerActionReq: Content {
        let action: String // "approve", "reject"
    }

    func ownerApprove(req: Request) async throws -> SinpeTransaction {
        guard let id = req.parameters.get("id", as: UUID.self),
              let transaction = try await SinpeTransaction.find(id, on: req.db) else {
            throw Abort(.notFound)
        }
        
        let data = try req.content.decode(OwnerActionReq.self)
        
        if data.action == "approve" {
            transaction.ownerStatus = "approved"
            req.logger.info("EL OWNER (\(try req.auth.require(UserPayload.self).email)) ha liberado la orden \(transaction.orderId).")
        } else {
            transaction.ownerStatus = "rejected"
        }
        
        try await transaction.save(on: req.db)
        return transaction
    }
}
