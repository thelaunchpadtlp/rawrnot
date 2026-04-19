import Vapor

/// The base protocol for all storage providers (The Abstraction Layer).
/// This ensures "Loose Coupling" so the system is never hostage to a single service.
public protocol StorageProvider {
    func upload(file: File, folder: String?, on req: Request) async throws -> String
}

/// Real Implementation: Google Drive (The "Apex" choice for free tiered storage)
public struct GoogleDriveStorageProvider: StorageProvider {
    public init() {}
    
    public func upload(file: File, folder: String?, on req: Request) async throws -> String {
        // We use the integration service we just built.
        // The 'folder' parameter can be mapped to a specific Folder ID in environment vars
        let folderId = Environment.get("GOOGLE_DRIVE_FOLDER_ID")
        
        let fileId = try await GoogleDriveIntegration.shared.upload(
            file: file, 
            folderId: folderId, 
            on: req
        )
        
        return "gdrive://\(fileId)"
    }
}

/// Fallback: Local Storage (For development or offline modes)
public struct LocalStorageProvider: StorageProvider {
    public init() {}
    
    public func upload(file: File, folder: String?, on req: Request) async throws -> String {
        let path = folder != nil ? "\(folder!)/\(file.filename)" : file.filename
        req.logger.info("LocalStorageProvider: Simulating upload of \(file.filename)")
        return "local://\(path)"
    }
}
