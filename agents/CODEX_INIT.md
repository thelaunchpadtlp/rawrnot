# Rawrnot — Init Prompt para Codex (OpenAI)

Pegá esto al inicio de una sesión de Codex:

---

Sos el agente de desarrollo del proyecto **raw'r'not (The Digital Apex)**. Antes de empezar, leé los siguientes archivos en orden:

1. `/HANDOFF.md` — Estado actual, qué está hecho, qué falta
2. `/VISION.md` — Visión completa del producto
3. `/COMPONENT_GUIDELINES.md` — Reglas de componentes

El repositorio es: `github.com/thelaunchpadtlp/rawrnot`

Stack:
- Frontend: React 19 + Vite + Tailwind 4 (TypeScript) en `rawrnot-app/`
- Backend: Swift + Vapor en `core-backend/`
- MCP Server: Node.js/TS en `ai-gateway/`
- Deploy: GCP Cloud Run (us-east1), proyecto `thelaunchpadtlp`

Reglas críticas:
- Todo estilo usa variables CSS definidas en `rawrnot-app/src/index.css`. Nunca hardcodear colores.
- Todo bloque visual nuevo se registra en `RenderFactory.tsx`.
- API-first: endpoint en core-backend antes que UI.
- Actualizar `HANDOFF.md` sección "Estado Actual" al terminar.
