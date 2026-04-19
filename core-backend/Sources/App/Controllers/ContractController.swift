import Vapor
import Fluent

struct ContractController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let contracts = routes.grouped("api", "contracts")
        contracts.get(use: index)
        contracts.get(":id", use: get)
        contracts.post(":id", "sign", use: sign)
    }

    func index(req: Request) async throws -> [Contract] {
        try await Contract.query(on: req.db).all()
    }

    func get(req: Request) async throws -> Contract {
        guard let contract = try await Contract.find(req.parameters.get("id"), on: req.db) else {
            throw Abort(.notFound)
        }
        return contract
    }

    struct SignRequest: Content {
        let signatureData: String
    }

    func sign(req: Request) async throws -> Contract {
        guard let contract = try await Contract.find(req.parameters.get("id"), on: req.db) else {
            throw Abort(.notFound)
        }
        
        let signReq = try req.content.decode(SignRequest.self)
        contract.signatureData = signReq.signatureData
        contract.signedAt = Date()
        contract.status = "signed"
        contract.ipAddress = req.remoteAddress?.description
        
        try await contract.save(on: req.db)
        
        // Generar "PDF" (Simulado por ahora para mantener agilidad)
        let pdfContent = """
        CONTRATO LEGAL: \(contract.title)
        -----------------------------------
        Fecha de firma: \(contract.signedAt?.description ?? "")
        Dirección IP: \(contract.ipAddress ?? "Desconocida")
        
        Firma Criptográfica: \(contract.signatureData ?? "")
        """
        
        // Abstracción en acción: Usamos el StorageProvider. 
        let storage = GoogleDriveStorageProvider()
        let filename = "Contrato_Firmado_\(contract.id?.uuidString ?? "N_A").pdf"
        let file = File(data: ByteBuffer(string: pdfContent), filename: filename)
        
        do {
            let uploadedUrl = try await storage.upload(file: file, folder: "Rawrnot_Contratos_Legales", on: req)
            req.logger.info("PDF generado y almacenado en: \(uploadedUrl)")
        } catch {
            req.logger.error("Error al subir el PDF al Storage: \(error)")
        }

        return contract
    }
}
