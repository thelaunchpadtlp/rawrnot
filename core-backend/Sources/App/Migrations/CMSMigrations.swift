import Fluent

struct CreateCMSModels: AsyncMigration {
    func prepare(on database: Database) async throws {
        try await database.schema("pages")
            .id()
            .field("title", .string, .required)
            .field("slug", .string, .required)
            .field("is_published", .bool, .required)
            .field("created_at", .datetime)
            .unique(on: "slug")
            .create()
            
        try await database.schema("component_blocks")
            .id()
            .field("page_id", .uuid, .required, .references("pages", "id", onDelete: .cascade))
            .field("type", .string, .required)
            .field("order", .int, .required)
            .field("payload", .string, .required)
            .create()
    }

    func revert(on database: Database) async throws {
        try await database.schema("component_blocks").delete()
        try await database.schema("pages").delete()
    }
}
