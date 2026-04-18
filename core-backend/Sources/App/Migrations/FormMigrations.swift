import Fluent

struct CreateFormModels: AsyncMigration {
    func prepare(on database: Database) async throws {
        try await database.schema("form_definitions")
            .id()
            .field("name", .string, .required)
            .field("schema", .string, .required)
            .field("created_at", .datetime)
            .create()
            
        try await database.schema("form_submissions")
            .id()
            .field("form_id", .uuid, .required, .references("form_definitions", "id", onDelete: .cascade))
            .field("data", .string, .required)
            .field("status", .string, .required)
            .field("created_at", .datetime)
            .create()
    }

    func revert(on database: Database) async throws {
        try await database.schema("form_submissions").delete()
        try await database.schema("form_definitions").delete()
    }
}
