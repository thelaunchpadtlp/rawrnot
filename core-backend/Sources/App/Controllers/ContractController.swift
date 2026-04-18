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
        return contract
    }
}
