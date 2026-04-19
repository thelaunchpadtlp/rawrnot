import Vapor
import Fluent

struct SinpeTransactionController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let payments = routes.grouped("api", "payments")
        
        // Crear transacción
        payments.post("create", use: createPayment)
        
        // El cliente sube el comprobante. La IA lo pre-aprueba
        payments.post(":id", "upload-receipt", use: uploadReceiptAndAiValidate)
        
        // El owner hace la aprobación final
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

    struct UploadReceiptReq: Content {
        let receiptImageUrl: String // Asumimos que el front ya lo subió a StorageProvider y pasa el link, o lo sube aquí.
        let referenceNumber: String? // Número digitado por el usuario opcionalmente
    }

    func uploadReceiptAndAiValidate(req: Request) async throws -> SinpeTransaction {
        guard let id = req.parameters.get("id", as: UUID.self),
              let transaction = try await SinpeTransaction.find(id, on: req.db) else {
            throw Abort(.notFound)
        }
        
        let data = try req.content.decode(UploadReceiptReq.self)
        transaction.receiptUrl = data.receiptImageUrl
        transaction.referenceNumber = data.referenceNumber
        
        // Simulación: El Gateway MCP / Agente IA procesa el OCR del comprobante
        req.logger.info("Agente IA procesando el recibo en URL: \(data.receiptImageUrl)")
        
        // Lógica de IA (Mock): Si parece válido, lo pre-aprueba.
        // El estado real del cliente sigue siendo "pendiente" porque falta la aprobación del Owner.
        transaction.aiStatus = "pre_approved"
        transaction.ownerStatus = "pending" // Esperando al humano
        
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
            req.logger.info("El OWNER ha aprobado manualmente la orden \(transaction.orderId)")
            // TODO: Aquí se dispararía un evento para liberar The Portal al cliente
        } else {
            transaction.ownerStatus = "rejected"
        }
        
        try await transaction.save(on: req.db)
        return transaction
    }
}
