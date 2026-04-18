import Vapor
import Fluent
import FluentPostgresDriver

public func configure(_ app: Application) async throws {
    // 1. Setup Database Connection (Cloud Run / Local)
    if let databaseURL = Environment.get("DATABASE_URL") {
        var postgresConfig = try SQLPostgresConfiguration(url: databaseURL)
        app.databases.use(.postgres(configuration: postgresConfig), as: .psql)
    } else {
        app.logger.warning("DATABASE_URL no encontrada. Usando configuración local por defecto.")
        app.databases.use(.postgres(
            hostname: Environment.get("DATABASE_HOST") ?? "localhost",
            port: Environment.get("DATABASE_PORT").flatMap(Int.init) ?? 5432,
            username: Environment.get("DATABASE_USERNAME") ?? "postgres",
            password: Environment.get("DATABASE_PASSWORD") ?? "",
            database: Environment.get("DATABASE_NAME") ?? "rawrnot"
        ), as: .psql)
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

    // 3. Seed initial data
    try await seedOwners(app)
    try await seedServices(app)
    try await seedCMS(app)

    // 4. Register routes
    try routes(app)
}

func seedOwners(_ app: Application) async throws {
    let count = try await User.query(on: app.db).count()
    if count == 0 {
        // Joaquin Muñoz
        let joaquin = User(name: "Joaquín Muñoz", role: .owner)
        try await joaquin.save(on: app.db)
        let joaquinEmails = [
            "joaquin.munoz@thelaunchpadtlp.com",
            "joaquin.munoz@thelaunchpadtlp.education",
            "joaquin.munoz@rawrnot.com"
        ]
        for (index, email) in joaquinEmails.enumerated() {
            let userEmail = UserEmail(email: email, isPrimary: index == 0, userID: try joaquin.requireID())
            try await userEmail.save(on: app.db)
        }

        // Anyssa Salazar
        let anyssa = User(name: "Anyssa Salazar", role: .owner)
        try await anyssa.save(on: app.db)
        let anyssaEmails = [
            "anyssa.salazar@thelaunchpadtlp.com",
            "anyssa.salazar@rawrnot.com",
            "anyssa.salazar@thelaunchpadtlp.education"
        ]
        for (index, email) in anyssaEmails.enumerated() {
            let userEmail = UserEmail(email: email, isPrimary: index == 0, userID: try anyssa.requireID())
            try await userEmail.save(on: app.db)
        }
        
        app.logger.info("Owners Seeded: Joaquin and Anyssa.")
    }
}

func seedCMS(_ app: Application) async throws {
    let count = try await Page.query(on: app.db).count()
    if count == 0 {
        // 1. Landing Page
        let landing = Page(title: "The Home", slug: "home", isPublished: true)
        try await landing.save(on: app.db)
        
        let heroBlock = ComponentBlock(pageID: try landing.requireID(), type: "Hero", order: 0, payload: "{\"title\":\"Visual Storytelling\",\"subtitle\":\"Raw or Not.\",\"tag\":\"THE DIGITAL APEX\",\"description\":\"High-fidelity cinematic immersion for the bold and the artisanal.\",\"cta\":\"Initialize Protocol\"}")
        try await heroBlock.save(on: app.db)

        let statusBlock = ComponentBlock(pageID: try landing.requireID(), type: "BentoStatusGrid", order: 1, payload: "{\"title\":\"Ecosystem Pulse\",\"subtitle\":\"Real-time diagnostics\",\"cards\":[{\"title\":\"Core Processing\",\"description\":\"Latency status\",\"metricLabel\":\"Latency\",\"metric\":\"12ms\",\"percent\":\"85%\",\"large\":true,\"icon\":\"database\"},{\"title\":\"Neural Engine\",\"description\":\"Active node cluster\",\"icon\":\"memory\",\"status\":\"Stable\"},{\"title\":\"Firewall\",\"description\":\"Zero breaches\",\"icon\":\"security\",\"status\":\"Secured\"}]}")
        try await statusBlock.save(on: app.db)
        
        // 2. Portfolio
        let portfolio = Page(title: "The Portfolio", slug: "portfolio", isPublished: true)
        try await portfolio.save(on: app.db)
        
        let portfolioHero = ComponentBlock(pageID: try portfolio.requireID(), type: "Hero", order: 0, payload: "{\"title\":\"Artisanal Gallery\",\"subtitle\":\"Immersive Renders\",\"tag\":\"VISUAL VAULT\",\"description\":\"Explore our high-contrast glassmorphism and textured skeuomorphic art.\"}")
        try await portfolioHero.save(on: app.db)
        
        // 3. The Journal (Blog)
        let journal = Page(title: "The Journal", slug: "journal", isPublished: true)
        try await journal.save(on: app.db)
        
        let journalIntro = ComponentBlock(pageID: try journal.requireID(), type: "Hero", order: 0, payload: "{\"title\":\"The Journal\",\"subtitle\":\"Editorial Insights\",\"tag\":\"CHRONICLES\",\"description\":\"Thoughts on design, technology, and the primal lifestyle.\"}")
        try await journalIntro.save(on: app.db)
        
        app.logger.info("CMS Seeded with Home, Portfolio, and Journal.")
    }
}

func seedServices(_ app: Application) async throws {
    let count = try await Service.query(on: app.db).count()
    if count == 0 {
        let services = [
            Service(title: "The Den Shoot", type: "Cinematic", price: 50000, description: "Full day immersive brand photography."),
            Service(title: "Editorial Core", type: "Fashion", price: 85000, description: "High-fidelity magazine style campaign."),
            Service(title: "Nexus Identity", type: "Branding", price: 120000, description: "Complete visual DNA and MCP integration.")
        ]
        for service in services {
            try await service.save(on: app.db)
        }
        app.logger.info("Database seeded with default services.")
    }
}
