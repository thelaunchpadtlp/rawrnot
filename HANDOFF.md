# RAWRNOT — UNIVERSAL AGENT HANDOFF
> **Lee esto primero.** Este documento es para cualquier agente de IA (Claude, Gemini, Codex, ChatGPT, Manus, Perplexity) que se una al proyecto. Es la fuente de verdad del estado actual.

---

## ¿QUÉ ES ESTE PROYECTO?
**raw'r'not (The Digital Apex)** — Sistema operativo comercial completo para un estudio de producción visual de élite. No es solo un sitio web. Reemplaza: CRM, portfolio, checkout, blog, portal de clientes, herramientas de equipo, y sistema de referidos virales.

**Documento de visión completo:** `VISION.md` (leerlo antes de hacer cualquier decisión de producto)

---

## STACK TÉCNICO (no cambiar sin razón)
```
rawrnot-app/     → Frontend: React 19 + Vite + Tailwind 4 (TypeScript)
core-backend/    → Backend: Swift + Vapor → GCP Cloud Run
ai-gateway/      → MCP Server: Node.js + TypeScript → GCP Cloud Run
Database:          GCP Cloud SQL (PostgreSQL 15) — instancia: rawrnot-db
Cache:             GCP Memorystore (Redis) — pendiente configurar
CI/CD:             GitHub Actions → Artifact Registry → Cloud Run
Repo:              github.com/thelaunchpadtlp/rawrnot
GCP Project:       thelaunchpadtlp (ID: 662148571449)
Region:            us-east1
```

---

## ESTADO ACTUAL (actualizar al final de cada sesión)

### ✅ Completado
- Frontend base con toggle Obsidian/Lightcraft funcional (ThemeContext)
- Auth (Google SSO), LanguageContext (EN/ES)
- Backend Swift: todos los Models, Migrations, Controllers principales
- Services: OCRService (SINPE), StorageProvider (GCS/GDrive/Local)
- MCP Gateway: 6 tools implementados (ShadowProfile, Quote, SINPE, Echo, CRM, Apple Sync)
- Cloud Run desplegado: core-backend + rawrnot-app
- Cloud SQL: rawrnot-db (PostgreSQL 15) corriendo
- Artifact Registry: rawrnot-repo configurado
- GitHub Actions CI/CD: deploy on push to main
- Diseño completo en Stitch (37 pantallas exportadas en `stitch_raw_r_not_unified_studio_suite/`)
- VISION.md v2.0 — visión de producto mejorada

### 🚧 En Progreso / Pendiente
- [ ] ai-gateway: falta Dockerfile y deploy a Cloud Run
- [ ] DATABASE_URL secret en Secret Manager (actualmente usa env vars directas)
- [ ] Memorystore (Redis) — no configurado aún
- [ ] Implementar todos los módulos frontend desde los exports de Stitch
- [ ] Analytics dashboard en Nexus Hub
- [ ] rawrs economy — definida en visión, no implementada en código
- [ ] Mobile-first client journey (check WhatsApp referral links)
- [ ] Email transaccional (SendGrid o similar)
- [ ] Onboarding de cliente vs. admin (separar flujos)
- [ ] The Echo — Team Buy completo end-to-end
- [ ] SINPE OCR — integración real (Tesseract + Gemini fallback)

### 🎯 Próximo paso prioritario
**Implementar el Journey completo del cliente:** Vault → Brief → Quote → SINPE → Territory

---

## DISEÑOS DE STITCH
Los diseños visuales están en: `stitch_raw_r_not_unified_studio_suite/`
- Cada módulo tiene: `screen.png` (visual) + `code.html` (HTML/CSS exportado)
- Los agentes con visión (Claude, Gemini) pueden leer los PNGs directamente
- Gemini CLI tiene acceso nativo a Stitch vía MCP (cuando funciona)
- Google Stitch URL: https://stitch.withgoogle.com/projects/15210566021067634587

### Pantallas principales disponibles:
| Módulo | Carpeta |
|---|---|
| Nexus Hub (admin) | `nexus_hub_obsidian_dark_final_crystallization/` |
| The Echo (viral) | `the_echo_viral_engine_final_crystallization/` |
| SINPE Checkout | `the_checkout_primal_transaction/` |
| Marketplace (The Vault) | `the_vault_service_marketplace_quoting/` |
| Client Portal | `the_territory_client_portal_reservations/` |
| Worker Den | `the_worker_s_den_lightcraft_roar_variation_1/` |
| Pricing | `the_sub_apex_tiered_subscription_plans/` |
| CRM Dashboard | `obsidian_dashboard_crm_management/` |
| Portfolio | `the_apex_immersive_portfolio/` |
| Journal/Blog | `the_journal_multimedia_blog/` |
| Membership | `the_pride_membership_registration_nudge/` |
| Team Buy Dynamics | `the_echo_viral_dynamics_team_buys/` |

---

## ARCHIVOS CRÍTICOS (leer en este orden)
1. `VISION.md` — Visión de producto completa v2.0
2. `HANDOFF.md` — Este archivo (estado actual)
3. `MASTER_ATLAS.md` — Índice general + links a Stitch y GCP
4. `SYSTEM_ARCHITECTURE.md` — Arquitectura técnica
5. `COMPONENT_GUIDELINES.md` — Reglas de componentes React
6. `GEMINI.md` / `CLAUDE.md` — Instrucciones específicas por agente

---

## CREDENCIALES Y ACCESOS (no commitear nunca)
- **SA Key GCP**: `sa-key-rawrnot.json` (en .gitignore — usar Secret Manager en prod)
- **GitHub Repo**: `thelaunchpadtlp/rawrnot`
- **Stitch Account 1**: `joaquin.munoz@thelaunchpadtlp.education`
- **Stitch Account 2**: `jotform@thelaunchpadtlp.education`
- **gcloud profile activo**: `rawrnot-master-sa@thelaunchpadtlp.iam.gserviceaccount.com`

---

## REGLAS DEL PROYECTO (para todos los agentes)
1. **Estética es ley**: Todo componente nuevo usa las variables CSS de `index.css`. Nunca hardcodear colores.
2. **API-first**: Toda feature nueva = endpoint en core-backend primero, luego UI.
3. **RenderFactory**: Todo bloque visual se registra en `rawrnot-app/src/components/RenderFactory.tsx`.
4. **MACH estricto**: No coupling directo entre servicios. Todo va por API o MCP.
5. **i18n**: Todo string visible al usuario va en `src/i18n/en.json` y `es.json`.
6. **No commitear secrets**: SA keys, JWT secrets, DB passwords → Secret Manager o .env local.
7. **Actualizar HANDOFF.md**: Al terminar cualquier sesión, actualizar la sección "Estado Actual".

---

## HISTORIAL DE SESIONES
Ver: `Rawrnot/sesiones/` — transcripciones completas ordenadas cronológicamente
- `Terminal Saved Output.txt` → `Terminal Saved Output 8.txt`: Sesiones de Gemini CLI
- `00_UNIFIED_MASTER_SESSIONS.md`: Compilación y resumen de todas las sesiones
- Convención para nuevas sesiones: `[AgenteName] Sesión YYYY-MM-DD.txt`

---
*Actualizado: 2026-04-18 — Sesión Claude Code (revisión de visión + setup multi-agente)*
