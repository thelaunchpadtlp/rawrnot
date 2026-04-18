import Fluent

struct CreateUser: AsyncMigration {
    func prepare(on database: Database) async throws {
        try await database.schema("users")
            .id()
            .field("name", .string, .required)
            .field("role", .string, .required)
            .create()

        try await database.schema("user_emails")
            .id()
            .field("email", .string, .required)
            .field("is_primary", .bool, .required)
            .field("user_id", .uuid, .required, .references("users", "id", onDelete: .cascade))
            .unique(on: "email")
            .create()
    }

    func revert(on database: Database) async throws {
        try await database.schema("user_emails").delete()
        try await database.schema("users").delete()
    }
}
