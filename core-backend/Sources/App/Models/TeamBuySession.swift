import Fluent
import Vapor

final class TeamBuySession: Model, Content {
    static let schema = "team_buy_sessions"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "service_id")
    var serviceId: UUID
    
    @Field(key: "required_participants")
    var requiredParticipants: Int
    
    @Field(key: "current_participants")
    var currentParticipants: Int
    
    @Field(key: "status")
    var status: String // "active", "captured", "refunded"
    
    @Field(key: "expires_at")
    var expiresAt: Date
    
    @Timestamp(key: "created_at", on: .create)
    var createdAt: Date?
    
    init() { }

    init(id: UUID? = nil, serviceId: UUID, requiredParticipants: Int, expiresAt: Date) {
        self.id = id
        self.serviceId = serviceId
        self.requiredParticipants = requiredParticipants
        self.currentParticipants = 0
        self.status = "active"
        self.expiresAt = expiresAt
    }
}
