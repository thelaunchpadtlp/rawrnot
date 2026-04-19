FROM node:22-alpine AS builder

WORKDIR /app

# Install deps first (better layer caching)
COPY ai-gateway/package*.json ./
RUN npm ci

COPY ai-gateway/tsconfig.json ./
COPY ai-gateway/src/ ./src/
RUN npx tsc

# ─── Production image ────────────────────────────────────────────────────────
FROM node:22-alpine

WORKDIR /app

COPY ai-gateway/package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist

# ── Project Intelligence: baked into the container ──
# These docs make the MCP server a living knowledge base for all AI agents.
# Any agent connected to this MCP can query the full project context.
RUN mkdir -p ./knowledge
COPY HANDOFF.md VISION.md MASTER_ATLAS.md SYSTEM_ARCHITECTURE.md COMPONENT_GUIDELINES.md INTEGRATION_MAP.md ./knowledge/
COPY agents/ ./knowledge/agents/

EXPOSE 8080

CMD ["node", "dist/index.js"]
