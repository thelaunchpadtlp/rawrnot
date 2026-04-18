import Fluent
import Vapor

final class Contract: Model, Content {
    static let schema = "contracts"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "title")
    var title: String
    
    @Field(key: "content_md")
    var contentMd: String
    
    @Field(key: "status")
    var status: String // "draft", "sent", "signed", "void"
    
    @Field(key: "client_email")
    var clientEmail: String
    
    // E-Signature Data
    @Field(key: "signature_data")
    var signatureData: String? // SVG path or Base64 Image
    
    @Field(key: "signed_at")
    var signedAt: Date?
    
    @Field(key: "ip_address")
    var ipAddress: String?
    
    @Timestamp(key: "created_at", on: .create)
    var createdAt: Date?
    
    init() { }

    init(id: UUID? = nil, title: String, contentMd: String, clientEmail: String, status: String = "draft") {
        self.id = id
        self.title = title
        self.contentMd = contentMd
        self.clientEmail = clientEmail
        self.status = status
    }
}
