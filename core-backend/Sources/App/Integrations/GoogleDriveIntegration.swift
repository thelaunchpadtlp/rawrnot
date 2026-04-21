import Vapor

/// Google Drive Integration via OAuth2 / Service Account
/// Fulfills the "Costo Cero" strategy by using Google Cloud's free tier storage.
final class GoogleDriveIntegration {
    static let shared = GoogleDriveIntegration()
    
    private let uploadUrl = "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart"
    
    /// Uploads a file to a specific folder in Google Drive
    func upload(file: File, folderId: String? = nil, on req: Request) async throws -> String {
        req.logger.info("Starting Google Drive Upload Protocol for \(file.filename)...")
        
        // 1. Get Access Token (In production, this comes from a Service Account or OAuth manager)
        // For now, we expect it in the environment or a vault.
        guard let accessToken = Environment.get("GOOGLE_DRIVE_ACCESS_TOKEN") else {
            req.logger.error("Missing GOOGLE_DRIVE_ACCESS_TOKEN. Check environment variables.")
            throw Abort(.internalServerError, reason: "Drive Integration not authenticated.")
        }
        
        // 2. Build Multipart Payload
        let boundary = "Boundary-\(UUID().uuidString)"
        var body = ByteBuffer()
        
        // Metadata Part
        body.writeString("--\(boundary)\r\n")
        body.writeString("Content-Type: application/json; charset=UTF-8\r\n\r\n")
        
        let metadata: [String: Any] = [
            "name": file.filename,
            "parents": folderId != nil ? [folderId!] : []
        ]
        let metadataData = try JSONSerialization.data(withJSONObject: metadata)
        body.writeBytes(metadataData)
        body.writeString("\r\n")
        
        // Media Part
        body.writeString("--\(boundary)\r\n")
        body.writeString("Content-Type: \(file.contentType?.description ?? "application/octet-stream")\r\n\r\n")
        var fileData = file.data
        body.writeBuffer(&fileData)
        body.writeString("\r\n")
        
        body.writeString("--\(boundary)--\r\n")
        
        // 3. Dispatch to Google
        let response = try await req.client.post(URI(string: uploadUrl)) { clientReq in
            clientReq.headers.replaceOrAdd(name: .authorization, value: "Bearer \(accessToken)")
            clientReq.headers.replaceOrAdd(name: .contentType, value: "multipart/related; boundary=\(boundary)")
            clientReq.body = .init(buffer: body)
        }
        
        guard response.status == .ok else {
            req.logger.error("Google Drive Upload Failed: \(response.status)")
            throw Abort(.internalServerError, reason: "Error al subir a Google Drive.")
        }
        
        struct DriveResponse: Content {
            let id: String
            let name: String
        }
        
        let driveFile = try response.content.decode(DriveResponse.self)
        req.logger.info("File successfully secured in Drive. ID: \(driveFile.id)")
        
        return driveFile.id
    }
}
