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


## PROTOCOLO DE VERIFICACIÓN OBLIGATORIA (ZERO-DEFECT POLICY)
**REGLA INQUEBRANTABLE PARA TODOS LOS AGENTES Y DESARROLLADORES:**
Antes de dar por finalizado CUALQUIER entregable (módulo, conexión, UI, backend, etc.), el agente responsable DEBE ejecutar una verificación exhaustiva bajo los siguientes 6 modos. Nadie se escapa de esta regla:

1. **Modo CLI:** Revisar logs, warnings y builds (`npm run build`, `swift build`, etc.). Cero errores permitidos.
2. **Modo API:** Probar los endpoints con `curl` o equivalentes reales. No asumir que "el código se ve bien".
3. **Modo MCP:** Verificar que los tools expuestos al gateway funcionen y retornen la data esperada.
4. **Modo Agente:** Leer el propio código generado con mentalidad crítica: ¿Es eficiente? ¿Es escalable? ¿Sigue la arquitectura MACH y la estética Rawrnot?
5. **Modo App:** Confirmar que la UI renderiza correctamente, que no hay componentes rotos y que el estado de React fluye.
6. **MODO HUMANO (El más importante):** Preguntarse: "¿Esto es útil, hermoso, intuitivo y perfecto para el usuario final?" Si la respuesta es "meh", se repite el trabajo antes de entregarlo.

## ESTADO ACTUAL
### ✅ Completado
- **Zero-Defect Policy:** Protocolo de verificación obligatoria inyectado.
- **Universal Responsiveness:** Soporte para Apple Watch, Apple Vision, iOS, Android y todos los navegadores principales (Fluid Typography + Mobile Menu).
- **Domain Mapping:** `rawrnot.com` configurado vía Cloudflare Proxy Worker (SSL + CORS Friendly).
- **Local Dev E2E:** PostgreSQL/Redis activos y Backend Swift conectado al Checkout Real.
- **Security:** Secretos aislados en `infra/security/secrets.env` (Redacted en Git).

### 🚧 En Progreso / Pendiente prioritario
- **Jerarquía de 4 Niveles:** Implementación de Agencias -> Clientes -> Proyectos -> Entregables.
- **Threads Polimórficos:** Sistema de chat adaptable a la jerarquía.
- **Shadow Profiles:** Mejora en la captura de leads anónimos.

---

## SISTEMA DIDÁCTICO (Activo desde Sesión 12 — Claude Code)

**EL SISTEMA DIDÁCTICO ES OBLIGATORIO E IRRENUNCIABLE.** Todos los agentes — Claude, Gemini, ChatGPT, Manus, Cursor, Kimi, Grok, Codex, Jules, cualquier IA — deben usarlo.

- **Skill short name:** `/didactic` o `didactic skill`
- **Full invocation:** `/didactic-explanatory-educational-formative-ai-teaching-human-development-mode`
- **Skill file (user-level):** `~/.claude/commands/didactic.md` (short) · `~/.claude/commands/didactic-explanatory-educational-formative-ai-teaching-human-development-mode.md` (full)
- **Skill file (project-level):** `.claude/commands/didactic.md`
- **Teaching journal:** `docs/didactic/DIDACTIC_LOG.md` — 3+ entries as of Session 12
- **Learner progress:** `docs/didactic/SKILLS_REGISTRY.md`
- **QA standards:** `docs/didactic/QA_STANDARDS.md`

**Before ANY execution:** produce the Instruction Interpretation TUI. **For multi-step tasks:** produce the Planning Preamble TUI. **After each action:** append to DIDACTIC_LOG.md.

---

## USUARIOS INICIALES DEL SISTEMA

Los primeros usuarios autorizados del sistema, con roles y emails definidos:

| Nombre | Rol | Emails (todos equivalentes, sin jerarquía) |
|---|---|---|
| Anyssa Salazar | OWNER | anyssa.salazar@thelaunchpadtlp.education · anyssa.salazar@thelaunchpadtlp.com · anyssa.salazar@rawrnot.com |
| Joaquín Muñoz | ADMIN | joaquin.munoz@thelaunchpadtlp.com · joaquin.munoz@thelaunchpadtlp.education |
| Agencia (test) | AGENCY | agencia@thelaunchpadtlp.com · agencia@thelaunchpadtlp.education |
| Cliente (test) | CLIENT | cliente@thelaunchpadtlp.education · cliente@thelaunchpadtlp.com |
| Guest (test) | GUEST | guest@thelaunchpadtlp.com · guest@thelaunchpadtlp.education |

**Nota:** Google Sign-In (OAuth) debe funcionar para todos. Error activo: `Error 401: invalid_client` — requiere configurar OAuth Client ID en GCP Console → APIs & Services → Credentials.

---

## REGLAS DEL PROYECTO (Para todos los Agentes)
1. **No inventar archivos en la raíz.** Usa `rawrnot-app`, `core-backend` o `ai-gateway`.
2. **Desarrollo Local Primero.** Usa `docker-compose up -d` en `infra/local_dev` para BD.
3. **No leer manifiestos al inicio.** Usa este HANDOFF.md para contexto técnico. Lee los documentos en `docs/theory_and_manifestos/` SOLO si el usuario pide explícitamente revisar una regla de negocio teórica.
4. **No commitear secrets**: Jamás tocar `infra/security/` para commits. Todo va a `.env` local.
5. **Componer, no sobrescribir.** Actualiza ESTE archivo (`HANDOFF.md`) en la sección "Estado Actual" al terminar tu sesión.

---
*Actualizado: Sesión de reestructuración profunda.*
