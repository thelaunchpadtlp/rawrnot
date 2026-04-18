import Fluent

struct CreateShadowProfile: AsyncMigration {
    func prepare(on database: Database) async throws {
        try await database.schema("shadow_profiles")
            .id()
            .field("email", .string, .required)
            .field("temporary_alias", .string)
            .field("intent_score", .int, .required)
            .field("created_at", .datetime)
            .field("claimed_at", .datetime)
            .create()
    }

    func revert(on database: Database) async throws {
        try await database.schema("shadow_profiles").delete()
    }
}

struct CreateTeamBuySession: AsyncMigration {
    func prepare(on database: Database) async throws {
        try await database.schema("team_buy_sessions")
            .id()
            .field("service_id", .uuid, .required)
            .field("required_participants", .int, .required)
            .field("current_participants", .int, .required)
            .field("status", .string, .required)
            .field("expires_at", .datetime, .required)
            .field("created_at", .datetime)
            .create()
    }

    func revert(on database: Database) async throws {
        try await database.schema("team_buy_sessions").delete()
    }
}

struct CreateSinpeTransaction: AsyncMigration {
    func prepare(on database: Database) async throws {
        try await database.schema("sinpe_transactions")
            .id()
            .field("order_id", .uuid, .required)
            .field("reference_number", .string, .required)
            .field("expected_amount", .double, .required)
            .field("status", .string, .required)
            .field("hacienda_payment_code", .string, .required)
            .field("created_at", .datetime)
            .create()
    }

    func revert(on database: Database) async throws {
        try await database.schema("sinpe_transactions").delete()
    }
}
