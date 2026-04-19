import Vapor

/// Model Context Protocol (MCP) Gateway para Rawrnot
/// Permite que agentes IA (Gemini, Claude) utilicen las herramientas Open Source del ecosistema.
struct MCPController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let mcp = routes.grouped("api", "mcp")
        
        // Endpoints básicos de MCP vía HTTP/REST
        mcp.get("tools", use: listTools)
        mcp.post("tools", "execute", use: executeTool)
    }

    func listTools(req: Request) async throws -> Response {
        // Exponemos las herramientas Open Source a los Agentes de IA
        let toolsResponse = """
        {
            "tools": [
                {
                    "name": "n8n_trigger_workflow",
                    "description": "Ejecuta un workflow en n8n para automatizaciones de marketing y CRM.",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "workflow_id": { "type": "string" },
                            "payload": { "type": "string" }
                        },
                        "required": ["workflow_id"]
                    }
                },
                {
                    "name": "formbricks_create_survey",
                    "description": "Genera una nueva micro-encuesta en Formbricks para inyectarla en The Echo.",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "title": { "type": "string" }
                        },
                        "required": ["title"]
                    }
                },
                {
                    "name": "plausible_get_metrics",
                    "description": "Obtiene analíticas de tráfico y conversión desde Plausible Analytics (Open Source).",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "period": { "type": "string", "enum": ["day", "week", "month"] }
                        }
                    }
                }
            ]
        }
        """
        return Response(status: .ok, headers: ["Content-Type": "application/json"], body: .init(string: toolsResponse))
    }

    struct ToolExecutionRequest: Content {
        let name: String
        let parameters: [String: String]
    }

    func executeTool(req: Request) async throws -> Response {
        let execReq = try req.content.decode(ToolExecutionRequest.self)
        
        req.logger.info("Agente IA ejecutando herramienta MCP: \(execReq.name)")
        
        var resultJson = "{}"
        
        // Simulación del puente de ejecución hacia las herramientas Open Source
        switch execReq.name {
        case "n8n_trigger_workflow":
            resultJson = "{\"status\": \"success\", \"message\": \"Workflow \(execReq.parameters["workflow_id"] ?? "unknown") disparado en n8n.\"}"
        case "formbricks_create_survey":
            resultJson = "{\"status\": \"success\", \"survey_url\": \"https://formbricks.rawrnot.com/s/xyz123\"}"
        case "plausible_get_metrics":
            resultJson = "{\"visitors\": 1250, \"conversion_rate\": \"4.5%\"}"
        default:
            throw Abort(.badRequest, reason: "Herramienta MCP no soportada.")
        }
        
        return Response(status: .ok, headers: ["Content-Type": "application/json"], body: .init(string: resultJson))
    }
}
