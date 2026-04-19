import Vapor
import Fluent
import JWT

struct AuthController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let auth = routes.grouped("auth")
        auth.post("login", use: login)
        auth.post("google", use: googleLogin)
        
        // Development-only route to simulate login for owners
        auth.get("dev-owner-token", use: getOwnerToken)
    }

    func login(req: Request) async throws -> TokenResponse {
        struct LoginRequest: Content {
            let email: String
        }
        let loginReq = try req.content.decode(LoginRequest.self)
        
        guard let userEmail = try await UserEmail.query(on: req.db)
            .filter(\.$email == loginReq.email)
            .with(\.$user)
            .first() else {
            throw Abort(.unauthorized, reason: "Email not registered.")
        }

        let user = userEmail.user
        return try await generateTokenResponse(for: user, email: userEmail.email, on: req)
    }

    func googleLogin(req: Request) async throws -> TokenResponse {
        struct GoogleLoginRequest: Content {
            let idToken: String
        }
        let googleReq = try req.content.decode(GoogleLoginRequest.self)
        
        // 1. Verify token with Google
        let googleResponse = try await req.client.get("https://oauth2.googleapis.com/tokeninfo") { clientReq in
            try clientReq.query.encode(["id_token": googleReq.idToken])
        }
        
        guard googleResponse.status.code == 200 else {
            throw Abort(.unauthorized, reason: "Invalid Google token.")
        }
        
        struct GoogleTokenInfo: Content {
            let email: String
            let name: String?
            let picture: String?
            let sub: String // Google user ID
        }
        
        let info = try googleResponse.content.decode(GoogleTokenInfo.self)
        
        // 2. Find or Create User
        var userEmail = try await UserEmail.query(on: req.db)
            .filter(\.$email == info.email)
            .with(\.$user)
            .first()
            
        if userEmail == nil {
            // New user (or alternative email not yet linked)
            // For now, let's create a new CLIENT user
            let newUser = User(name: info.name ?? "New User", role: .client)
            try await newUser.save(on: req.db)
            let newUserEmail = UserEmail(email: info.email, isPrimary: true, userID: try newUser.requireID())
            try await newUserEmail.save(on: req.db)
            let newId = try newUserEmail.requireID()
            userEmail = try await UserEmail.query(on: req.db)
                .filter(\.$id == newId)
                .with(\.$user)
                .first()
        }
        
        guard let finalUserEmail = userEmail else {
            throw Abort(.internalServerError)
        }
        
        return try await generateTokenResponse(for: finalUserEmail.user, email: finalUserEmail.email, on: req)
    }

    private func generateTokenResponse(for user: User, email: String, on req: Request) async throws -> TokenResponse {
        let payload = UserPayload(
            subject: .init(value: user.id?.uuidString ?? ""),
            expiration: .init(value: .init(timeIntervalSinceNow: UserPayload.Expiration.duration)),
            userID: try user.requireID(),
            role: user.role,
            email: email
        )

        let token = try req.jwt.sign(payload)
        return TokenResponse(token: token, user: user)
    }

    func getOwnerToken(req: Request) async throws -> TokenResponse {
        guard let email = req.query[String.self, at: "email"] else {
            throw Abort(.badRequest, reason: "Missing email query parameter.")
        }
        
        let ownerEmails = [
            "joaquin.munoz@thelaunchpadtlp.com",
            "joaquin.munoz@thelaunchpadtlp.education",
            "joaquin.munoz@rawrnot.com",
            "anyssa.salazar@thelaunchpadtlp.com",
            "anyssa.salazar@rawrnot.com",
            "anyssa.salazar@thelaunchpadtlp.education"
        ]
        
        guard ownerEmails.contains(email) else {
            throw Abort(.forbidden, reason: "This route is only for owners.")
        }

        guard let userEmail = try await UserEmail.query(on: req.db)
            .filter(\.$email == email)
            .with(\.$user)
            .first() else {
            throw Abort(.notFound, reason: "Owner email not found in DB. Did you seed?")
        }

        return try await generateTokenResponse(for: userEmail.user, email: userEmail.email, on: req)
    }
}

struct TokenResponse: Content {
    let token: String
    let user: User
}
