import Fluent
import Vapor

final class Service: Model, Content {
    static let schema = "services"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "title")
    var title: String
    
    @Field(key: "type")
    var type: String // Cinematic, Editorial, Branding
    
    @Field(key: "price")
    var price: Double
    
    @Field(key: "description")
    var description: String
    
    init() { }

    init(id: UUID? = nil, title: String, type: String, price: Double, description: String) {
        self.id = id
        self.title = title
        self.type = type
        self.price = price
        self.description = description
    }
}

final class CreativeProject: Model, Content {
    static let schema = "creative_projects"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "title")
    var title: String
    
    @Field(key: "status")
    var status: String // briefing, production, delivered
    
    @Field(key: "client_id")
    var clientId: UUID
    
    @Field(key: "notes")
    var notes: String?
    
    @Timestamp(key: "created_at", on: .create)
    var createdAt: Date?
    
    init() { }

    init(id: UUID? = nil, title: String, status: String, clientId: UUID, notes: String? = nil) {
        self.id = id
        self.title = title
        self.status = status
        self.clientId = clientId
        self.notes = notes
    }
}
