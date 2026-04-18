import Vapor

@main
struct Main {
    static func main() async throws {
        let env = try Environment.detect()
        let app = Application(env)
        defer { app.shutdown() }
        
        try routes(app)
        
        try await app.execute()
    }
}
