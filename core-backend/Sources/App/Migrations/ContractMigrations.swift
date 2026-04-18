import Fluent

struct CreateContractModels: AsyncMigration {
    func prepare(on database: Database) async throws {
        try await database.schema("contracts")
            .id()
            .field("title", .string, .required)
            .field("content_md", .string, .required)
            .field("status", .string, .required)
            .field("client_email", .string, .required)
            .field("signature_data", .string)
            .field("signed_at", .datetime)
            .field("ip_address", .string)
            .field("created_at", .datetime)
            .create()
    }

    func revert(on database: Database) async throws {
        try await database.schema("contracts").delete()
    }
}
