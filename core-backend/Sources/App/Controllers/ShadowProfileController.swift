import Vapor
import Fluent

struct ShadowProfileController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let profiles = routes.grouped("api", "shadow-profiles")
        profiles.post(use: create)
        profiles.get(use: index)
    }

    func index(req: Request) async throws -> [ShadowProfile] {
        try await ShadowProfile.query(on: req.db).all()
    }

    func create(req: Request) async throws -> ShadowProfile {
        let profile = try req.content.decode(ShadowProfile.self)
        try await profile.save(on: req.db)
        return profile
    }
}
