# RAWRNOT — UNIVERSAL AGENT HANDOFF (CLEAN ARCHITECTURE EDITION)
> **Lee esto primero.** Este documento es para cualquier agente de IA (Claude, Gemini, Codex, ChatGPT, Manus, Perplexity) que se una al proyecto. Es la única fuente de verdad operativa. Si buscas teoría o manifiestos, revisa la carpeta `docs/`.

---

## ¿QUÉ ES ESTE PROYECTO?
**raw'r'not (The Digital Apex)** — Sistema operativo comercial completo para un estudio de producción visual de élite. Reemplaza: CRM, portfolio, checkout, blog, portal de clientes, herramientas de equipo, y sistema de referidos virales.

---

## ESTRUCTURA DEL ESPACIO DE TRABAJO (NUEVA ORGANIZACIÓN)
- `docs/architecture/INFRASTRUCTURE_LOG.md` → Registro cronológico de todas las instalaciones y configuraciones.

Para maximizar la eficiencia de los agentes de IA (reducción de tokens y alucinaciones), el espacio de trabajo se ha reorganizado estrictamente:

- `rawrnot-app/`     → Frontend: React 19 + Vite + Tailwind 4 (TypeScript)
- `core-backend/`    → Backend: Swift + Vapor (Desplegado en GCP Cloud Run)
- `ai-gateway/`      → MCP Server: Node.js + TypeScript (Desplegado en GCP Cloud Run)
- `docs/`            → Documentación
  - `product/`       → `VISION.md`, `MASTER_ATLAS.md` (Specs y visión)
  - `architecture/`  → `SYSTEM_ARCHITECTURE.md`, guidelines, integrations.
  - `sessions/`      → Transcripciones de sesiones (ej. Gemini Sesión.txt)
  - `theory_and_manifestos/` → Archivos `.md` teóricos antiguos y exportados.
- `design/`          → Assets Visuales (Stitch exports, zips).
- `infra/`           → Infraestructura
  - `local_dev/`     → `docker-compose.yml` (Postgres 15, Redis 7 local)
  - `security/`      → Service accounts, políticas (IGNORED en Git)

---

## ARQUITECTURA DE DATOS Y JERARQUÍA (NUEVO MODELO)
El sistema debe respetar la siguiente jerarquía relacional estricta en la base de datos y la UI:
1. **Agencias o Medios (Opcional):** Entidades corporativas de alto nivel.
2. **Clientes:** Clientes finales (pueden ser independientes o pertenecer a una Agencia).
3. **Proyectos o Contratos:** Agrupan el trabajo.
4. **Entregables o Piezas:** (Incluye Cotizaciones y Contratos). Soporte estricto para **versiones** (v1, v2, v3...).

## SISTEMA DE COMUNICACIÓN (THE DARK ROOM / PORTAL)
- **Threads Polimórficos:** Los hilos de mensajes/cambios pueden anclarse a *cualquier* nivel de la jerarquía (Agencia, Cliente, Proyecto o Entregable).
- **Características de Threads:** Archivar, Finalizar, Etiquetar, Delegar.
- **Adjuntos Independientes:** Un mensaje puede tener adjuntos que no se mezclen con las versiones oficiales del "Entregable" base.
- **Captura de Leads (Fricción Cero):** Si un visitante anónimo intenta enviar un mensaje/solicitud, se piden datos mínimos (email/teléfono) creando un `ShadowProfile` pre-registrado para seguimiento y retargeting, incentivando el registro completo posteriormente.

## STACK TÉCNICO
```
Database:          GCP Cloud SQL (PostgreSQL 15) — instancia: rawrnot-db (Local via Docker)
Cache:             GCP Memorystore (Redis) (Local via Docker)
CI/CD:             GitHub Actions → Artifact Registry → Cloud Run
Repo:              github.com/thelaunchpadtlp/rawrnot
GCP Project:       thelaunchpadtlp (ID: 662148571449)
Domain:            rawrnot.com (Proyectado para Google Cloud/Vercel)
```

---

## ESTADO ACTUAL
### ✅ Completado
- Limpieza arquitectónica profunda del espacio de trabajo.
- Frontend base con toggle Obsidian/Lightcraft funcional.
- Auth, LanguageContext (EN/ES).
- Backend Swift: Migrations y Controllers principales.
- MCP Gateway v2.0 (8 tools, 4 resources).
- Diseño Stitch consolidado en `design/`.
- Entorno local Dockerizado (`infra/local_dev/docker-compose.yml`).

### 🚧 En Progreso / Pendiente prioritario
- Levantar backend y gateway localmente conectados a Docker.
- Mover DATABASE_URL y secrets de `.env` a Secret Manager en GCP.
- Conexión real E2E: Frontend -> Swift Backend -> Base de Datos (Checkout SINPE y Marketplace "The Vault").
- Implementación de "The Echo" (Team Buy).

---

## REGLAS DEL PROYECTO (Para todos los Agentes)
1. **No inventar archivos en la raíz.** Usa `rawrnot-app`, `core-backend` o `ai-gateway`.
2. **Desarrollo Local Primero.** Usa `docker-compose up -d` en `infra/local_dev` para BD.
3. **No leer manifiestos al inicio.** Usa este HANDOFF.md para contexto técnico. Lee los documentos en `docs/theory_and_manifestos/` SOLO si el usuario pide explícitamente revisar una regla de negocio teórica.
4. **No commitear secrets**: Jamás tocar `infra/security/` para commits. Todo va a `.env` local.
5. **Componer, no sobrescribir.** Actualiza ESTE archivo (`HANDOFF.md`) en la sección "Estado Actual" al terminar tu sesión.

---
*Actualizado: Sesión de reestructuración profunda.*
