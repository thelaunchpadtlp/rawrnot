import Fluent

struct CreateBusinessModels: AsyncMigration {
    func prepare(on database: Database) async throws {
        try await database.schema("services")
            .id()
            .field("title", .string, .required)
            .field("type", .string, .required)
            .field("price", .double, .required)
            .field("description", .string, .required)
            .create()
            
        try await database.schema("creative_projects")
            .id()
            .field("title", .string, .required)
            .field("status", .string, .required)
            .field("client_id", .uuid, .required)
            .field("notes", .string)
            .field("created_at", .datetime)
            .create()
    }

    func revert(on database: Database) async throws {
        try await database.schema("creative_projects").delete()
        try await database.schema("services").delete()
    }
}
