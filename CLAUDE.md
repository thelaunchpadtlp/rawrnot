# Rawrnot - Claude Code / AI Agent Entry Point

**STOP.** Do not start writing code until you read the exact rules in `HANDOFF.md` in this repository's root.

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
