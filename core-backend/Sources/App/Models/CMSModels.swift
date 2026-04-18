import Fluent
import Vapor

final class Page: Model, Content {
    static let schema = "pages"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "title")
    var title: String
    
    @Field(key: "slug")
    var slug: String // e.g. "portfolio", "about"
    
    @Field(key: "is_published")
    var isPublished: Bool
    
    @Children(for: \.$page)
    var blocks: [ComponentBlock]
    
    @Timestamp(key: "created_at", on: .create)
    var createdAt: Date?
    
    init() { }

    init(id: UUID? = nil, title: String, slug: String, isPublished: Bool = false) {
        self.id = id
        self.title = title
        self.slug = slug
        self.isPublished = isPublished
    }
}

final class ComponentBlock: Model, Content {
    static let schema = "component_blocks"
    
    @ID(key: .id)
    var id: UUID?

    @Parent(key: "page_id")
    var page: Page
    
    @Field(key: "type")
    var type: String // e.g. "Hero", "ImageGrid", "TextLedger"
    
    @Field(key: "order")
    var order: Int
    
    @Field(key: "payload")
    var payload: String // JSON string containing specific block config
    
    init() { }

    init(id: UUID? = nil, pageID: Page.IDValue, type: String, order: Int, payload: String) {
        self.id = id
        self.$page.id = pageID
        self.type = type
        self.order = order
        self.payload = payload
    }
}
