// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "core-backend",
    platforms: [
       .macOS(.v13)
    ],
    dependencies: [
        // 💧 A server-side Swift web framework.
        .package(url: "https://github.com/vapor/vapor.git", from: "4.89.0"),
        // 🗄 An ORM for Swift.
        .package(url: "https://github.com/vapor/fluent.git", from: "4.8.0"),
        // 🐘 PostgreSQL driver for Fluent.
        .package(url: "https://github.com/vapor/fluent-postgres-driver.git", from: "2.7.2"),
        // 🔑 JWT Authentication
        .package(url: "https://github.com/vapor/jwt.git", from: "4.2.0"),
    ],
    targets: [
        .executableTarget(
            name: "App",
            dependencies: [
                .product(name: "Fluent", package: "fluent"),
                .product(name: "FluentPostgresDriver", package: "fluent-postgres-driver"),
                .product(name: "Vapor", package: "vapor"),
                .product(name: "JWT", package: "jwt"),
            ]
        ),
        .testTarget(name: "AppTests", dependencies: [
            .target(name: "App"),
            .product(name: "XCTVapor", package: "vapor"),
        ])
    ]
)
