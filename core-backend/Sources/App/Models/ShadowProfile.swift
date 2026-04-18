import Fluent
import Vapor

final class ShadowProfile: Model, Content {
    static let schema = "shadow_profiles"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "email")
    var email: String
    
    @OptionalField(key: "temporary_alias")
    var temporaryAlias: String?
    
    @Field(key: "intent_score")
    var intentScore: Int // 0 to 100 based on behavior
    
    @Timestamp(key: "created_at", on: .create)
    var createdAt: Date?
    
    @Timestamp(key: "claimed_at", on: .update)
    var claimedAt: Date? // When they make a real account
    
    init() { }

    init(id: UUID? = nil, email: String, temporaryAlias: String? = nil, intentScore: Int) {
        self.id = id
        self.email = email
        self.temporaryAlias = temporaryAlias
        self.intentScore = intentScore
    }
}
