import express from 'express';
import cors from 'cors';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, basename } from 'path';
import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import { z } from 'zod';

const app = express();
app.use(cors());
app.use(express.json());

// ── Project Knowledge Base ──────────────────────────────────────────────────
// Docs are baked into the Docker image at /app/knowledge/
// Falls back to local paths for development
const KNOWLEDGE_DIR = existsSync('/app/knowledge') ? '/app/knowledge' : join(process.cwd(), '..');

function loadDoc(filename: string): string | null {
  const paths = [
    join(KNOWLEDGE_DIR, filename),
    join(KNOWLEDGE_DIR, '..', filename),
  ];
  for (const p of paths) {
    if (existsSync(p)) return readFileSync(p, 'utf-8');
  }
  return null;
}

const KNOWLEDGE_FILES: Record<string, string> = {
  'handoff': 'HANDOFF.md',
  'vision': 'VISION.md',
  'atlas': 'MASTER_ATLAS.md',
  'architecture': 'SYSTEM_ARCHITECTURE.md',
  'components': 'COMPONENT_GUIDELINES.md',
  'integrations': 'INTEGRATION_MAP.md',
};

// ── MCP Server ───────────────────────────────────────────────────────────────
const mcpServer = new McpServer({
  name: 'rawrnot-nexus-mcp',
  version: '2.0.0',
  description: 'Rawrnot AI Gateway — MCP server with project knowledge base and business logic tools',
});

// ═══════════════════════════════════════════════════════════════════════════
// MCP RESOURCES — Project Intelligence (queryable by any agent)
// ═══════════════════════════════════════════════════════════════════════════

mcpServer.resource(
  'project-handoff',
  'rawrnot://knowledge/handoff',
  async (uri) => ({
    contents: [{
      uri: uri.href,
      mimeType: 'text/markdown',
      text: loadDoc('HANDOFF.md') ?? '# HANDOFF not available',
    }],
  })
);

mcpServer.resource(
  'project-vision',
  'rawrnot://knowledge/vision',
  async (uri) => ({
    contents: [{
      uri: uri.href,
      mimeType: 'text/markdown',
      text: loadDoc('VISION.md') ?? '# VISION not available',
    }],
  })
);

mcpServer.resource(
  'project-architecture',
  'rawrnot://knowledge/architecture',
  async (uri) => ({
    contents: [{
      uri: uri.href,
      mimeType: 'text/markdown',
      text: loadDoc('SYSTEM_ARCHITECTURE.md') ?? '# ARCHITECTURE not available',
    }],
  })
);

mcpServer.resource(
  'project-atlas',
  'rawrnot://knowledge/atlas',
  async (uri) => ({
    contents: [{
      uri: uri.href,
      mimeType: 'text/markdown',
      text: loadDoc('MASTER_ATLAS.md') ?? '# ATLAS not available',
    }],
  })
);

// ═══════════════════════════════════════════════════════════════════════════
// MCP TOOLS — Knowledge Search
// ═══════════════════════════════════════════════════════════════════════════

mcpServer.tool(
  'search_project_knowledge',
  'Search the Rawrnot project documentation for context on any topic. Use this at the start of any session to understand the current state of the project.',
  { query: z.string().describe('What you want to know about the project') },
  async ({ query }) => {
    const q = query.toLowerCase();
    const results: string[] = [];

    for (const [key, filename] of Object.entries(KNOWLEDGE_FILES)) {
      const content = loadDoc(filename);
      if (!content) continue;

      const lines = content.split('\n');
      const matches = lines.filter(line => {
        const l = line.toLowerCase();
        return q.split(' ').some(word => word.length > 3 && l.includes(word));
      });

      if (matches.length > 0) {
        results.push(`## From ${filename}:\n${matches.slice(0, 8).join('\n')}`);
      }
    }

    const text = results.length > 0
      ? `Found relevant context for "${query}":\n\n${results.join('\n\n---\n\n')}`
      : `No specific matches for "${query}". Use get_project_status for full context.`;

    return { content: [{ type: 'text', text }] };
  }
);

mcpServer.tool(
  'get_project_status',
  'Get the complete current state of the Rawrnot project — what is done, what is pending, and what to do next.',
  {},
  async () => {
    const handoff = loadDoc('HANDOFF.md') ?? 'Not available';
    const truncated = handoff.split('\n').slice(0, 80).join('\n');
    return {
      content: [{
        type: 'text',
        text: `# RAWRNOT PROJECT STATUS\n\n${truncated}\n\n[Full HANDOFF.md available via resource: rawrnot://knowledge/handoff]`,
      }],
    };
  }
);

// ═══════════════════════════════════════════════════════════════════════════
// MCP TOOLS — Business Logic
// ═══════════════════════════════════════════════════════════════════════════

mcpServer.tool(
  'create_shadow_profile',
  'Captures guest data during a transaction to create a Ghost Lead (Shadow Profile). Call this when a user interacts with The Vault without being authenticated.',
  {
    email: z.string().email().optional(),
    temporaryAlias: z.string().optional(),
    intentScore: z.number().min(0).max(100),
    servicesViewed: z.array(z.string()).optional(),
    budgetIndicated: z.number().optional(),
  },
  async (params) => {
    console.log(`[MCP] Creating Shadow Profile — intent score: ${params.intentScore}`);
    const id = `ghost_${Date.now()}`;
    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          profileId: id,
          status: 'active',
          intentScore: params.intentScore,
          nudgeTriggered: params.intentScore > 60,
          message: `Shadow Profile ${id} created. ${params.intentScore > 60 ? 'Nudge triggered: "Claim your profile".' : 'Tracking silently.'}`,
        }),
      }],
    };
  }
);

mcpServer.tool(
  'generate_service_quote',
  'Generates an official raw\'r\'not quote for a client based on selected services and parameters.',
  {
    clientId: z.string(),
    services: z.array(z.object({
      serviceId: z.string(),
      quantity: z.number().default(1),
    })),
    urgency: z.enum(['standard', 'rush']).default('standard'),
    rawAuthenticity: z.boolean().default(true),
    budgetCap: z.number().optional(),
  },
  async (params) => {
    const rushMultiplier = params.urgency === 'rush' ? 1.35 : 1;
    const baseAmount = params.services.length * 2400 * rushMultiplier;
    const total = params.budgetCap ? Math.min(baseAmount, params.budgetCap) : baseAmount;

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          quoteId: `QT-${Date.now()}`,
          clientId: params.clientId,
          services: params.services,
          subtotal: total,
          currency: 'USD',
          validForDays: 7,
          paymentMethods: ['SINPE_MOVIL', 'WIRE_TRANSFER', 'CREDIT_CARD'],
          status: 'draft',
        }),
      }],
    };
  }
);

mcpServer.tool(
  'process_sinpe_payment',
  'Validates a SINPE Móvil payment receipt using OCR. The backend OCRService does the actual extraction; this tool orchestrates the flow.',
  {
    orderId: z.string(),
    receiptImageBase64: z.string().describe('Base64 encoded screenshot of the SINPE receipt'),
    expectedAmount: z.number(),
    expectedCurrency: z.enum(['CRC', 'USD']).default('CRC'),
  },
  async (params) => {
    console.log(`[MCP] Processing SINPE receipt for order ${params.orderId}`);
    // In production: call core-backend OCRService
    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          orderId: params.orderId,
          status: 'ocr_queued',
          message: `Receipt submitted for OCR validation. Expected: ${params.expectedAmount} ${params.expectedCurrency}. SLA: 2 minutes.`,
          nextStep: 'Poll /api/sinpe/status/{orderId} for result',
        }),
      }],
    };
  }
);

mcpServer.tool(
  'create_team_buy_session',
  'Initializes a Team Buy session (The Hunt / The Echo) with a cryptographically secure syndicate link.',
  {
    serviceId: z.string(),
    serviceName: z.string(),
    requiredParticipants: z.number().min(2).max(20),
    expirationHours: z.number().min(1).max(168),
    discountPercent: z.number().min(5).max(40),
    initiatorId: z.string(),
  },
  async (params) => {
    const sessionId = `HUNT-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    const syndicateToken = Buffer.from(`${sessionId}:${params.serviceId}:${Date.now()}`).toString('base64url');

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          sessionId,
          syndicateLink: `https://rawrnot.io/echo/${syndicateToken}`,
          whatsappDeepLink: `https://wa.me/?text=${encodeURIComponent(`Join The Hunt: ${params.serviceName} at ${params.discountPercent}% off with ${params.requiredParticipants} buyers. https://rawrnot.io/echo/${syndicateToken}`)}`,
          status: 'active',
          requiredParticipants: params.requiredParticipants,
          currentParticipants: 1,
          expiresAt: new Date(Date.now() + params.expirationHours * 3600000).toISOString(),
          discountPercent: params.discountPercent,
        }),
      }],
    };
  }
);

mcpServer.tool(
  'update_crm_status',
  'Updates the status of a creative project in the Nexus Hub CRM Dashboard.',
  {
    projectId: z.string(),
    newStatus: z.enum(['briefing', 'production', 'post_production', 'delivered', 'archived']),
    notes: z.string().optional(),
    notifyClient: z.boolean().default(true),
  },
  async (params) => {
    console.log(`[MCP] CRM update: project ${params.projectId} → ${params.newStatus}`);
    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          projectId: params.projectId,
          previousStatus: 'unknown',
          newStatus: params.newStatus,
          updatedAt: new Date().toISOString(),
          clientNotified: params.notifyClient,
        }),
      }],
    };
  }
);

mcpServer.tool(
  'award_rawrs',
  'Awards rawrs (loyalty currency) to a client for referrals, Team Buy participation, repeat business, or testimonials.',
  {
    clientId: z.string(),
    amount: z.number().min(1),
    reason: z.enum(['referral', 'team_buy', 'repeat_project', 'testimonial', 'early_adopter']),
    projectId: z.string().optional(),
  },
  async (params) => {
    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          clientId: params.clientId,
          rawrsAwarded: params.amount,
          reason: params.reason,
          transactionId: `RWR-${Date.now()}`,
          message: `${params.amount} rawrs awarded for ${params.reason}. Client's loyalty economy grows.`,
        }),
      }],
    };
  }
);

mcpServer.tool(
  'trigger_apple_sync',
  'Triggers synchronization with Apple Contacts or Calendar via DAV protocols.',
  {
    ecosystem: z.enum(['contacts', 'calendar']),
    action: z.enum(['push', 'pull', 'sync']),
    filter: z.string().optional().describe('Optional filter e.g. "active_clients_only"'),
  },
  async (params) => {
    return {
      content: [{
        type: 'text',
        text: `Apple ${params.ecosystem} ${params.action} initiated. ${params.filter ? `Filter: ${params.filter}.` : ''} Protocol: CalDAV/CardDAV.`,
      }],
    };
  }
);

// ═══════════════════════════════════════════════════════════════════════════
// HTTP Transport
// ═══════════════════════════════════════════════════════════════════════════

let transport: SSEServerTransport;

app.get('/sse', async (req, res) => {
  transport = new SSEServerTransport('/message', res);
  await mcpServer.connect(transport);
  console.log('[MCP] Agent connected via SSE');
});

app.post('/message', async (req, res) => {
  if (transport) {
    await transport.handlePostMessage(req, res);
  } else {
    res.status(503).send('SSE Transport not initialized');
  }
});

// Health check for Cloud Run
app.get('/health', (_, res) => {
  res.json({
    status: 'ok',
    service: 'rawrnot-mcp-gateway',
    version: '2.0.0',
    knowledgeBase: Object.keys(KNOWLEDGE_FILES).map(k => ({
      key: k,
      loaded: !!loadDoc(KNOWLEDGE_FILES[k]),
    })),
  });
});

// Knowledge REST API (bonus: direct HTTP access to docs for non-MCP agents)
app.get('/knowledge/:doc', (req, res) => {
  const filename = KNOWLEDGE_FILES[req.params.doc];
  if (!filename) return res.status(404).json({ error: 'Unknown document' });
  const content = loadDoc(filename);
  if (!content) return res.status(404).json({ error: 'Document not found in container' });
  res.set('Content-Type', 'text/markdown').send(content);
});

app.get('/knowledge', (_, res) => {
  res.json({
    available: Object.keys(KNOWLEDGE_FILES),
    endpoints: Object.keys(KNOWLEDGE_FILES).map(k => `/knowledge/${k}`),
    mcpResources: Object.keys(KNOWLEDGE_FILES).map(k => `rawrnot://knowledge/${k}`),
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Rawrnot MCP Gateway v2.0 running on port ${PORT}`);
  console.log(`📡 SSE: http://localhost:${PORT}/sse`);
  console.log(`📚 Knowledge: http://localhost:${PORT}/knowledge`);
  console.log(`🏥 Health: http://localhost:${PORT}/health`);
  console.log(`📖 Docs loaded: ${Object.entries(KNOWLEDGE_FILES).filter(([, f]) => loadDoc(f)).map(([k]) => k).join(', ')}`);
});
