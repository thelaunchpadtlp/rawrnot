import Vapor

let env = try Environment.detect()
let app = try await Application.make(env)

do {
    try await configure(app)
} catch {
    app.logger.report(error: error)
    try await app.asyncShutdown()
    throw error
}

try await app.execute()
try await app.asyncShutdown()
