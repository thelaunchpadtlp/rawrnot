# Skills Registry — raw'r'not (The Digital Apex)

This file catalogs all project-important skills: skills the agents use, skills the human collaborator is developing, and the teaching tools built into this project's development process. It is a living document — updated by every agent at the end of every session.

---

## HOW TO USE THIS FILE

**For AI agents:** Before starting work, scan this file to know:
- What skills the human has already encountered and at what level
- Which project-management skills (Claude Code, Gemini, etc.) are active
- What QA and teaching protocols are enforced

**For the human (you):** This is your progress map. It shows what you're learning, how far you've come, and what's coming next.

---

## PART 1 — ACTIVE AI AGENT SKILLS (Slash Commands / Invocable)

These skills are available to all agents working on this project.

| Skill Name | Location | Scope | Purpose | Status |
|---|---|---|---|---|
| `didactic-explanatory-educational-formative-ai-teaching-human-development-mode` | `~/.claude/commands/` + `docs/didactic/` | Global + Project | Personalized teaching mode — explains all actions in plain English, logs to DIDACTIC_LOG | ✅ Active |
| `update-config` | Claude Code built-in | Global | Modify Claude Code settings.json safely | ✅ Active |
| `simplify` | Claude Code built-in | Global | Review changed code for quality and efficiency | ✅ Active |
| `security-review` | Claude Code built-in | Global | Security review of pending branch changes | ✅ Active |
| `review` | Claude Code built-in | Global | Pull request review | ✅ Active |
| `init` | Claude Code built-in | Global | Initialize CLAUDE.md documentation | ✅ Active |

---

## PART 2 — HUMAN LEARNER SKILL PROGRESS

These are the real-world software development skills you are developing through this project. Each entry tracks: what the skill is, when you first encountered it, and your current level (estimated by the agent).

**Level Scale:**  ○○○○○ = Not yet encountered · ●○○○○ = Introduced · ●●○○○ = Familiar · ●●●○○ = Comfortable · ●●●●○ = Confident · ●●●●● = Fluent

### Frontend / React / TypeScript

| Skill | First Seen | Current Level | Last Practiced | Notes |
|---|---|---|---|---|
| Reading TypeScript error messages | Session 12 (Claude) | ●●○○○ | 2026-04-21 | Fixed 4 errors in Prototype.tsx and Modelo.tsx |
| Understanding unused imports | Session 12 (Claude) | ●●○○○ | 2026-04-21 | React import not needed in Vite+React 19 JSX transform |
| Responsive design with Tailwind | Session 11B (Gemini) | ●●○○○ | 2026-04-21 | Fluid typography, safe-areas, Apple Watch breakpoint |
| JSX component structure | Sessions 6–11 (Gemini) | ●●○○○ | 2026-04-21 | Multiple pages created |

### Backend / Swift / Vapor

| Skill | First Seen | Current Level | Notes |
|---|---|---|---|
| Swift compilation and error fixing | Session 11B (Gemini) | ●○○○○ | Gemini fixed 3 Swift errors in OCRService and GoogleDriveIntegration |
| Database migrations (Fluent ORM) | Sessions 3–11 (Gemini) | ●○○○○ | Migrations ran successfully locally |
| API endpoint structure | Sessions 3–11 (Gemini) | ●○○○○ | Routes.swift examined |

### Infrastructure / DevOps / Cloud

| Skill | First Seen | Current Level | Notes |
|---|---|---|---|
| Google Cloud Run concepts | Sessions 5–11 (Gemini) | ●●○○○ | Deployed and configured Cloud Run services |
| Cloudflare Workers (proxy) | Session 11B (Gemini) | ●○○○○ | Worker deployed to route rawrnot.com traffic |
| Docker / local dev databases | Session 11B (Gemini) | ●○○○○ | PostgreSQL + Redis via docker compose up |
| Git commits and pushes | Sessions 1–11 (Gemini) | ●●○○○ | Multiple commits made throughout project |
| GitHub secret scanning protection | Session 11B (Gemini) | ●●○○○ | Push blocked due to API keys in session transcripts |

### Configuration / Settings

| Skill | First Seen | Current Level | Notes |
|---|---|---|---|
| Claude Code settings.json | Session 12 (Claude) | ●●○○○ | Created project + user settings, set defaultMode, allow rules |
| Reading and understanding permission systems | Session 12 (Claude) | ●○○○○ | Introduced via settings.json permissions object |

### Architecture / Systems Design

| Skill | First Seen | Current Level | Notes |
|---|---|---|---|
| 4-Level Hierarchy design | Sessions 10–11 Think Tank | ●●○○○ | Agency→Client→Project→Deliverable model |
| Polymorphic data relationships | Sessions 10–11 Think Tank | ●○○○○ | Threads that attach to any level |
| MACH Architecture principles | Sessions 1–11 | ●○○○○ | Microservices, API-first, Cloud-native, Headless |

---

## PART 3 — PROJECT RULES AND QUALITY STANDARDS

These are the non-negotiable standards for this project, enforced by all agents.

| Rule | Source | Enforcement | Details |
|---|---|---|---|
| Zero-Defect Policy | Sessions 11–11B (Gemini) | Husky pre-commit hook | `npm run build` must pass before any commit |
| 6-Mode Verification | Sessions 11–11B (Gemini) | Manual / agent discipline | CLI, API, MCP, Agent, App, Human |
| Universal Responsiveness | Session 11B (Gemini) | Tailwind rules in CLAUDE.md | No fixed pixel widths; fluid typography; Apple Watch support |
| 4-Level Hierarchy | Think Tank (Session 11) | HANDOFF.md architecture section | Agency→Client→Project→Deliverable |
| Didactic Logging | Session 12 (Claude) | This skills registry + DIDACTIC_LOG | Every significant action explained and logged |
| No Secrets in Git | Session 11B (Gemini) | GitHub secret scanning + .gitignore | Secrets in infra/security/secrets.env only |

---

## PART 4 — CONCEPTS INTRODUCED (Index)

A searchable index of every technical concept explained to the learner. Referenced by DIDACTIC_LOG entry number.

| Concept | Log Entry # | Plain English Tag | Category |
|---|---|---|---|
| TypeScript unused import error | #001 | "compiler complaint about unused code" | TypeScript |
| JSX / React component | #001 | "a reusable building block of the app's screens" | React |
| Vite JSX transform | #001 | "automatic React magic that removes boilerplate" | React / Build Tools |
| Claude Code settings.json | #002 | "the rulebook for this AI assistant" | Claude Code |
| defaultMode: acceptEdits | #002 | "auto-approve file edits without asking each time" | Claude Code |
| Permission allow rules | #002 | "a list of what the AI is allowed to touch" | Claude Code |
| additionalDirectories | #002 | "extra folders Claude is given access to" | Claude Code |
| Claude Code skill / slash command | #003 | "a custom instruction set you can call by name" | Claude Code |
| Didactic log | #003 | "the project's learning journal" | Project Process |

---

## PART 5 — AGENT ROSTER FOR THIS PROJECT

| Agent | Tool | Primary Responsibility | Status | Sessions |
|---|---|---|---|---|
| Gemini (CLI) | `gemini` in terminal | Infrastructure, GCP, Cloudflare, initial builds | Active (but stuck as of 2026-04-21) | 1–11B |
| Claude Code (Sonnet 4.6) | `claude` in terminal | Code quality, architecture, teaching, documentation | Active | 12+ |
| Claude (claude.ai) | Web browser | Planning, strategy, design thinking | On call | — |

---

*Last updated: 2026-04-21 · Updated by: Claude Code (Sonnet 4.6) · Session: 12*
