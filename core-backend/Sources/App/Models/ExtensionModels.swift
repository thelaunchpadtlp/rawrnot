import Fluent
import Vapor

final class ExtensionModule: Model, Content {
    static let schema = "extension_modules"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String
    
    @Field(key: "type")
    var type: String // "plugin", "connector", "app"
    
    @Field(key: "config_json")
    var configJson: String
    
    @Field(key: "is_enabled")
    var isEnabled: Bool
    
    @Timestamp(key: "created_at", on: .create)
    var createdAt: Date?
    
    init() { }

    init(id: UUID? = nil, name: String, type: String, configJson: String, isEnabled: Bool = true) {
        self.id = id
        self.name = name
        self.type = type
        self.configJson = configJson
        self.isEnabled = isEnabled
    }
}
