import Fluent
import Vapor

final class FormDefinition: Model, Content {
    static let schema = "form_definitions"
    
    @ID(key: .id)
    var id: UUID?

    @Field(key: "name")
    var name: String // e.g. "B2B Onboarding", "Family Shoot Inquiry"
    
    @Field(key: "schema")
    var schema: String // JSON string defining fields: label, type, required
    
    @Timestamp(key: "created_at", on: .create)
    var createdAt: Date?
    
    init() { }

    init(id: UUID? = nil, name: String, schema: String) {
        self.id = id
        self.name = name
        self.schema = schema
    }
}

final class FormSubmission: Model, Content {
    static let schema = "form_submissions"
    
    @ID(key: .id)
    var id: UUID?

    @Parent(key: "form_id")
    var form: FormDefinition
    
    @Field(key: "data")
    var data: String // JSON string with user answers
    
    @Field(key: "status")
    var status: String // "new", "reviewed", "converted"
    
    @Timestamp(key: "created_at", on: .create)
    var createdAt: Date?
    
    init() { }

    init(id: UUID? = nil, formID: FormDefinition.IDValue, data: String, status: String = "new") {
        self.id = id
        self.$form.id = formID
        self.data = data
        self.status = status
    }
}
