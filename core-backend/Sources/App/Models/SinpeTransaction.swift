import Fluent
import Vapor

final class SinpeTransaction: Model, Content {
    static let schema = "sinpe_transactions"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "order_id")
    var orderId: UUID
    
    @Field(key: "reference_number")
    var referenceNumber: String // From OCR
    
    @Field(key: "expected_amount")
    var expectedAmount: Double
    
    @Field(key: "status")
    var status: String // "pending", "ocr_validated", "rejected", "manual_review"
    
    // Tax compliance: Facturación 4.4 requires code "06" for SINPE
    @Field(key: "hacienda_payment_code")
    var haciendaPaymentCode: String 
    
    @Timestamp(key: "created_at", on: .create)
    var createdAt: Date?
    
    init() { }

    init(id: UUID? = nil, orderId: UUID, referenceNumber: String, expectedAmount: Double) {
        self.id = id
        self.orderId = orderId
        self.referenceNumber = referenceNumber
        self.expectedAmount = expectedAmount
        self.status = "pending"
        self.haciendaPaymentCode = "06" // Hardcoded for SINPE
    }
}
