# Rawrnot - Claude Code / AI Agent Entry Point

**STOP.** Before anything else:
1. Invoke `/didactic` (the didactic skill) — it is **mandatory, non-optional, and non-dismissable** for all agents on this project.
2. The didactic skill's short name is **`/didactic`** or **`didactic skill`**. Full name: `didactic-explanatory-educational-formative-ai-teaching-human-development-mode`. Both invoke the same skill.
3. Before executing ANY instruction, produce the **Instruction Interpretation TUI** defined in the skill.
4. Then read `HANDOFF.md`.

**THE DIDACTIC SKILL IS NOT OPTIONAL.** It is the operating protocol of this project. Every action must be explained to the human collaborator in plain English with analogies. Every explanation is logged to `docs/didactic/DIDACTIC_LOG.md`.

## 🛡️ ZERO-DEFECT POLICY ENFORCED
The project has a strict quality control system in place:
- **Husky & Git Hooks** will block your commits if `npm run build` fails in `rawrnot-app`.
- **Responsive Invariants:** You MUST use Tailwind's responsive prefixes (sm:, md:, lg:, xl:). NEVER use fixed sizes like `w-[500px]` that break the Apple Watch or iPhone 13 mini views. Use `w-full max-w-md` instead.
- **Local Dev:** You MUST test against the local dockerized database (`docker-compose up -d` in `infra/local_dev`).
- **Hierarchy:** You MUST respect the 4-level hierarchy (Agencies -> Clients -> Projects -> Deliverables) in your database models and interfaces.

## HOW TO START YOUR TASK
1. Read `HANDOFF.md` to understand the state.
2. Read the prompt/instruction.
3. Code the Swift models or React views.
4. Execute the 6-Mode Verification (CLI, API, MCP, Agent, App, Human).
5. Only then, commit and report success.
