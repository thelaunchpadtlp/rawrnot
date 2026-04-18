import Vapor
import Fluent

struct PageController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let pages = routes.grouped("api", "pages")
        pages.get(use: index)
        pages.get(":slug", use: getBySlug)
        pages.post(use: create)
        pages.post(":id", "blocks", use: addBlock)
    }

    func index(req: Request) async throws -> [Page] {
        try await Page.query(on: req.db).all()
    }

    func getBySlug(req: Request) async throws -> Page {
        guard let slug = req.parameters.get("slug") else { throw Abort(.badRequest) }
        guard let page = try await Page.query(on: req.db)
            .filter(\.$slug == slug)
            .with(\.$blocks)
            .first() else { throw Abort(.notFound) }
        
        // Ordenar bloques manualmente si es necesario o por query
        page.blocks.sort { $0.order < $1.order }
        return page
    }

    func create(req: Request) async throws -> Page {
        let page = try req.content.decode(Page.self)
        try await page.save(on: req.db)
        return page
    }

    func addBlock(req: Request) async throws -> ComponentBlock {
        let block = try req.content.decode(ComponentBlock.self)
        try await block.save(on: req.db)
        return block
    }
}
