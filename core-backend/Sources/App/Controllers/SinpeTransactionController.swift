import Vapor
import Fluent

struct SinpeTransactionController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let sinpe = routes.grouped("api", "sinpe")
        sinpe.post("validate", use: validateOCR)
        sinpe.get(use: index)
    }

    func index(req: Request) async throws -> [SinpeTransaction] {
        try await SinpeTransaction.query(on: req.db).all()
    }

    func validateOCR(req: Request) async throws -> SinpeTransaction {
        // En una implementación real, aquí se llamaría al servicio OCR.
        // Simulamos la recepción de datos extraídos.
        let transaction = try req.content.decode(SinpeTransaction.self)
        
        // Simulación de validación
        if transaction.referenceNumber.count > 5 {
            transaction.status = "ocr_validated"
        } else {
            transaction.status = "manual_review"
        }
        
        try await transaction.save(on: req.db)
        return transaction
    }
}
