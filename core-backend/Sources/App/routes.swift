import Vapor

func routes(_ app: Application) throws {
    app.get { req async in
        "Rawrnot Core Backend [Elite Execution - Swift/Vapor]"
    }

    app.get("health") { req async in
        ["status": "up", "version": "1.0.0"]
    }
}
