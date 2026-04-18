import Vapor
import Fluent

struct ServiceController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let services = routes.grouped("api", "services")
        services.get(use: index)
        services.post(use: create)
    }

    func index(req: Request) async throws -> [Service] {
        try await Service.query(on: req.db).all()
    }

    func create(req: Request) async throws -> Service {
        let service = try req.content.decode(Service.self)
        try await service.save(on: req.db)
        return service
    }
}

struct ProjectController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let projects = routes.grouped("api", "projects")
        projects.get(use: index)
        projects.post(use: create)
    }

    func index(req: Request) async throws -> [CreativeProject] {
        try await CreativeProject.query(on: req.db).all()
    }

    func create(req: Request) async throws -> CreativeProject {
        let project = try req.content.decode(CreativeProject.self)
        try await project.save(on: req.db)
        return project
    }
}
