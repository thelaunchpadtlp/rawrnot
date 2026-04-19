import Fluent
import Vapor

func routes(_ app: Application) throws {
    app.get { req async in
        "Rawrnot API is running (MACH Architecture)"
    }

    // Public / Auth routes
    try app.register(collection: AuthController())
    try app.register(collection: FormController())
    try app.register(collection: ContractController())
    try app.register(collection: MCPController())

    // Protected Routes
    let protected = app.grouped(UserPayload.authenticator(), UserPayload.guardMiddleware())
    
    // Owner-only routes (Nexus, Architect, Den)
    let ownerOnly = protected.grouped(RoleMiddleware(requiredRole: .owner))
    
    try ownerOnly.register(collection: PageController())
    try ownerOnly.register(collection: ServiceController())
    try ownerOnly.register(collection: ProjectController())
    // For now we allow owners to see all form submissions and contracts via these controllers
    // Internal admin routes would ideally be grouped separately in a future refactor

    // Client/Owner routes
    try protected.register(collection: ShadowProfileController())
    try protected.register(collection: SinpeTransactionController())
}

struct RoleMiddleware: AsyncMiddleware {
    let requiredRole: UserRole

    func respond(to request: Request, chainingTo next: AsyncResponder) async throws -> Response {
        guard let payload = request.auth.get(UserPayload.self) else {
            throw Abort(.unauthorized)
        }
        
        guard payload.role == requiredRole else {
            throw Abort(.forbidden, reason: "Usted no tiene permisos para acceder a esta 'Casa'.")
        }
        
        return try await next.respond(to: request)
    }
}
