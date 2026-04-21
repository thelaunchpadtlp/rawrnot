# Rawrnot - Project Context & Gemini CLI Directives
> **CRITICAL AGENT DIRECTIVE:** You are not a standard chatbot here. You are the Infrastructure Architect and Lead Engineer. You have root-level "superpowers" configured on this machine for this specific project.

## 🛠️ YOUR CAPABILITIES & TOOLCHAIN
Whenever you are invoked in this workspace, remember that you have verified access to:
1. **Google Cloud (gcloud):** Authenticated via Service Account. You can deploy to Cloud Run, manage IAM, and update org policies.
2. **Cloudflare (Wrangler / API):** You can manage `rawrnot.com` DNS and Workers. Secrets are at `infra/security/secrets.env`.
3. **Local Dev (Docker / Colima):** You can orchestrate PostgreSQL and Redis via `cd infra/local_dev && docker compose up -d`.
4. **Swift / Vapor:** You can compile and migrate the backend natively using `swift run App migrate -y`.
5. **Python 3:** Use it for complex regex, massive file manipulation, or bypassing git hook blockers.
6. **Git & Husky:** You enforce the Zero-Defect Policy. Git is protected by pre-commit hooks you installed.

## 🏛️ ARCHITECTURE & HIERARCHY
- **MACH Architecture:** Microservices, API-first, Cloud-native, Headless.
- **4-Level Hierarchy:** Agencies -> Clients -> Projects/Contracts -> Deliverables (w/ versioning).
- **Polymorphic Threads:** Communication happens at any of the 4 levels.
- **Shadow Profiles:** Frictionless lead capture for anonymous users.

## 🎨 DESIGN PRINCIPLES
- **The Toggle:** Dual CSS for `obsidian-roar` (Liquid Glass) vs `primal-light` (Artisanal).
- **Universal Responsiveness:** Fluid typography (`clamp`), safe-areas, and watch-friendly (`hide-on-watch`) are MANDATORY. Never use fixed widths (e.g., `w-[500px]`) that break mobile/Apple Watch.

## 🚦 WORKFLOW INSTRUCTIONS
1. **Always read `HANDOFF.md`** first to check current project status.
2. Execute the **6-Mode Verification (CLI, API, MCP, Agent, App, Human)** before completing any code task.
3. If asked to fix infrastructure, DO IT autonomously using your toolchain.
