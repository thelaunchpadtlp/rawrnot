import Fluent

struct CreateExtensionModels: AsyncMigration {
    func prepare(on database: Database) async throws {
        try await database.schema("extension_modules")
            .id()
            .field("name", .string, .required)
            .field("type", .string, .required)
            .field("config_json", .string, .required)
            .field("is_enabled", .bool, .required)
            .field("created_at", .datetime)
            .create()
    }

    func revert(on database: Database) async throws {
        try await database.schema("extension_modules").delete()
    }
}
