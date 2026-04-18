import Fluent
import Vapor

enum UserRole: String, Codable {
    case owner = "OWNER"
    case client = "CLIENT"
    case lead = "LEAD"
}

final class User: Model, Content {
    static let schema = "users"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String

    @Field(key: "role")
    var role: UserRole

    @Children(for: \.$user)
    var emails: [UserEmail]

    init() { }

    init(id: UUID? = nil, name: String, role: UserRole = .lead) {
        self.id = id
        self.name = name
        self.role = role
    }
}

final class UserEmail: Model, Content {
    static let schema = "user_emails"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "email")
    var email: String

    @Field(key: "is_primary")
    var isPrimary: Bool

    @Parent(key: "user_id")
    var user: User

    init() { }

    init(id: UUID? = nil, email: String, isPrimary: Bool = false, userID: User.IDValue) {
        self.id = id
        self.email = email
        self.isPrimary = isPrimary
        self.$user.id = userID
    }
}

import JWT

struct UserPayload: JWTPayload, Authenticatable {
    enum Expiration {
        static let duration: TimeInterval = 60 * 60 * 24 * 7 // 1 week
    }

    var subject: SubjectClaim
    var expiration: ExpirationClaim
    var userID: UUID
    var role: UserRole
    var email: String

    func verify(using signer: JWTSigner) throws {
        try self.expiration.verifyNotExpired()
    }
}
