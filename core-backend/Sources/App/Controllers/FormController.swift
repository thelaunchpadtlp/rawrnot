import Vapor
import Fluent

struct FormController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let forms = routes.grouped("api", "forms")
        forms.get("definitions", use: getDefinitions)
        forms.post("submit", ":id", use: submit)
        
        // Admin only (Owner check logic would go here)
        forms.get("submissions", use: getSubmissions)
    }

    func getDefinitions(req: Request) async throws -> [FormDefinition] {
        try await FormDefinition.query(on: req.db).all()
    }

    func submit(req: Request) async throws -> FormSubmission {
        guard let formID = req.parameters.get("id", as: UUID.self) else { throw Abort(.badRequest) }
        let data = try req.content.decode(String.self) // Expected raw JSON string or structured object
        
        let submission = FormSubmission(formID: formID, data: data)
        try await submission.save(on: req.db)
        return submission
    }

    func getSubmissions(req: Request) async throws -> [FormSubmission] {
        try await FormSubmission.query(on: req.db).with(\.$form).all()
    }
}
