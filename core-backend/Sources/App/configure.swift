import Vapor
import Fluent
import FluentPostgresDriver

public func configure(_ app: Application) async throws {
    // 1. Setup Database Connection (Cloud Run / Local)
    if let databaseURL = Environment.get("DATABASE_URL") {
        do {
            let postgresConfig = try SQLPostgresConfiguration(url: databaseURL)
            app.databases.use(.postgres(configuration: postgresConfig), as: .psql)
        } catch {
            app.logger.error("Failed to configure database from DATABASE_URL: \(error)")
        }
    } else {
        app.logger.warning("DATABASE_URL no encontrada. Intentando configuracion manual.")
        let host = Environment.get("DATABASE_HOST") ?? "localhost"
        let port = Environment.get("DATABASE_PORT").flatMap(Int.init) ?? 5432
        let user = Environment.get("DATABASE_USERNAME") ?? "postgres"
        let pass = Environment.get("DATABASE_PASSWORD") ?? ""
        let db = Environment.get("DATABASE_NAME") ?? "rawrnot"
        
        let config = SQLPostgresConfiguration(hostname: host, port: port, username: user, password: pass, database: db, tls: .disable)
        app.databases.use(.postgres(configuration: config), as: .psql)
    }
    
    // 1b. Setup JWT Signer
    if let jwtSecret = Environment.get("JWT_SECRET") {
        app.jwt.signers.use(.hs256(key: jwtSecret))
    } else {
        app.logger.warning("JWT_SECRET no encontrada. Usando clave de desarrollo insegura.")
        app.jwt.signers.use(.hs256(key: "dev-secret-rawrnot-2026"))
    }

    // 2. Register Migrations (Architectural Data Schema)
    app.migrations.add(CreateUser())
    app.migrations.add(CreateShadowProfile())
    app.migrations.add(CreateTeamBuySession())
    app.migrations.add(CreateSinpeTransaction())
    app.migrations.add(CreateBusinessModels())
    app.migrations.add(CreateCMSModels())
    app.migrations.add(CreateFormModels())
    app.migrations.add(CreateContractModels())
    app.migrations.add(CreateExtensionModels())

    // 3. Seed initial data (Wrapped in do-catch to prevent startup crash)
    do {
        try await seedOwners(app)
        try await seedServices(app)
        try await seedCMS(app)
        try await seedForms(app)
        try await seedExtensions(app)
    } catch {
        app.logger.error("Database Seeding Failed: \(error). Check database connection.")
    }

    // 4. Register routes
    try routes(app)

    // 5. Bind to Google Cloud Run PORT
    let port = Environment.get("PORT").flatMap(Int.init) ?? 8080
    app.http.server.configuration.hostname = "0.0.0.0"
    app.http.server.configuration.port = port
}

func seedExtensions(_ app: Application) async throws {
    let count = try await ExtensionModule.query(on: app.db).count()
    if count == 0 {
        let adobePlugin = ExtensionModule(name: "Adobe Bridge Connector", type: "connector", configJson: "{\"apiKey\":\"pending\",\"syncFolder\":\"/rawrnot/renders\"}")
        try await adobePlugin.save(on: app.db)
        app.logger.info("Extensions Seeded.")
    }
}

func seedForms(_ app: Application) async throws {
    let count = try await FormDefinition.query(on: app.db).count()
    if count == 0 {
        let inquiryForm = FormDefinition(name: "Initial Inquiry", schema: "[]")
        try await inquiryForm.save(on: app.db)
    }
}

func seedOwners(_ app: Application) async throws {
    let count = try await User.query(on: app.db).count()
    if count == 0 {
        let joaquin = User(name: "Joaquín Muñoz", role: .owner)
        try await joaquin.save(on: app.db)
        app.logger.info("Owners Seeded.")
    }
}

func seedCMS(_ app: Application) async throws {
    let count = try await Page.query(on: app.db).count()
    if count == 0 {
        let landing = Page(title: "The Home", slug: "home", isPublished: true)
        try await landing.save(on: app.db)
    }
}

func seedServices(_ app: Application) async throws {
    let count = try await Service.query(on: app.db).count()
    if count == 0 {
        let service = Service(title: "The Den Shoot", type: "Cinematic", price: 50000, description: "Full day shoot.")
        try await service.save(on: app.db)
    }
}
