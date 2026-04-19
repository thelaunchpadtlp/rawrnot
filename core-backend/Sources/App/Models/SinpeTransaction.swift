import Fluent
import Vapor

final class SinpeTransaction: Model, Content {
    // Mantendremos el nombre de la tabla para no romper la base de datos actual, 
    // pero conceptualmente abarca transferencias bancarias manuales también.
    static let schema = "sinpe_transactions"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "order_id")
    var orderId: UUID
    
    @Field(key: "reference_number")
    var referenceNumber: String? // From OCR / User Input
    
    @Field(key: "expected_amount")
    var expectedAmount: Double
    
    @Field(key: "payment_method")
    var paymentMethod: String // "sinpe" o "bank_transfer"
    
    @Field(key: "receipt_url")
    var receiptUrl: String? // URL al comprobante subido a Google Drive/S3
    
    // TWO-STEP VERIFICATION
    @Field(key: "ai_status")
    var aiStatus: String // "pending", "pre_approved", "flagged"
    
    @Field(key: "owner_status")
    var ownerStatus: String // "pending", "approved", "rejected"
    
    // Tax compliance: Facturación 4.4 requires code "06" for SINPE, "04" for Transfer
    @Field(key: "hacienda_payment_code")
    var haciendaPaymentCode: String 
    
    @Timestamp(key: "created_at", on: .create)
    var createdAt: Date?
    
    init() { }

    init(id: UUID? = nil, orderId: UUID, expectedAmount: Double, paymentMethod: String = "sinpe") {
        self.id = id
        self.orderId = orderId
        self.expectedAmount = expectedAmount
        self.paymentMethod = paymentMethod
        self.aiStatus = "pending"
        self.ownerStatus = "pending"
        self.haciendaPaymentCode = paymentMethod == "sinpe" ? "06" : "04" 
    }
}
