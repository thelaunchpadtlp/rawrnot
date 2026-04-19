import Vapor
import Foundation

struct OCRResult: Content {
    let referenceNumber: String?
    let amount: Double?
    let confidence: String // "local" or "ai"
}

final class OCRService {
    static let shared = OCRService()
    
    /// Main entry point: Tries Tesseract (Local/Free) first, falls back to Gemini AI (Cognitive)
    func processReceipt(imageData: ByteBuffer, on req: Request) async throws -> OCRResult {
        req.logger.info("Starting Hyrbid OCR Protocol...")
        
        // 1. Try Local Tesseract OCR (Costo $0)
        if let localResult = try? await runTesseract(imageData: imageData, on: req) {
            if localResult.referenceNumber != nil {
                req.logger.info("Local OCR Success. Data extracted via Tesseract.")
                return localResult
            }
        }
        
        // 2. Fallback to Gemini AI if local fails or is low confidence
        req.logger.warning("Local OCR insufficient. Dispatched to Gemini Cognitive Core.")
        return try await runGeminiAI(imageData: imageData, on: req)
    }
    
    private func runTesseract(imageData: ByteBuffer, on req: Request) async throws -> OCRResult {
        let tempFile = "/tmp/receipt_\(UUID().uuidString).png"
        let data = Data(buffer: imageData)
        try data.write(to: URL(fileURLWithPath: tempFile))
        
        let process = Process()
        process.executableURL = URL(fileURLWithPath: "/usr/bin/tesseract")
        process.arguments = [tempFile, "stdout", "-l", "spa"]
        
        let outputPipe = Pipe()
        process.standardOutput = outputPipe
        
        try process.run()
        process.waitUntilExit()
        
        let outputData = outputPipe.fileHandleForReading.readDataToEndOfFile()
        let text = String(data: outputData, encoding: .utf8) ?? ""
        
        // Cleanup
        try? FileManager.default.removeItem(atPath: tempFile)
        
        // Regex logic for SINPE (Usually 6-10 digits)
        let ref = extractReference(from: text)
        let amount = extractAmount(from: text)
        
        return OCRResult(referenceNumber: ref, amount: amount, confidence: "local")
    }
    
    private func runGeminiAI(imageData: ByteBuffer, on req: Request) async throws -> OCRResult {
        guard let apiKey = Environment.get("GEMINI_API_KEY") else {
            req.logger.error("GEMINI_API_KEY not set. AI Fallback failed.")
            throw Abort(.internalServerError, reason: "IA Core no configurado.")
        }
        
        let base64Image = imageData.getData(at: 0, length: imageData.readableBytes)?.base64EncodedString() ?? ""
        
        let prompt = "Extract the bank transfer reference number and the total amount from this receipt image. Return ONLY a JSON object with keys 'reference' (string) and 'amount' (number)."
        
        let geminiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=\(apiKey)"
        
        let payload: [String: Any] = [
            "contents": [[
                "parts": [
                    ["text": prompt],
                    ["inline_data": ["mime_type": "image/png", "data": base64Image]]
                ]
            ]]
        ]
        
        let response = try await req.client.post(URI(string: geminiUrl)) { clientReq in
            try clientReq.content.encode(payload, as: .json)
        }
        
        // Simplified extraction for the demo logic
        // TODO: Map the full Gemini JSON response structure
        req.logger.info("Gemini AI Response received.")
        
        return OCRResult(referenceNumber: "AI_EXTRACTED_REF", amount: 0.0, confidence: "ai")
    }
    
    private func extractReference(from text: String) -> String? {
        // Regex for SINPE/Bancario: Looking for patterns like "Referencia: 123456"
        let pattern = #"\b\d{6,12}\b"#
        if let range = text.range(of: pattern, options: .regularExpression) {
            return String(text[range])
        }
        return nil
    }
    
    private func extractAmount(from text: String) -> Double? {
        let pattern = #"\d{1,3}(?:,\d{3})*(?:\.\d{2})?"#
        if let range = text.range(of: pattern, options: .regularExpression) {
            let amountStr = text[range].replacingOccurrences(of: ",", with: "")
            return Double(amountStr)
        }
        return nil
    }
}
