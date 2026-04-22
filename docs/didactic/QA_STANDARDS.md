# Quality Assurance Standards — raw'r'not (The Digital Apex)

This document defines the mandatory quality assurance procedures for this project. Every agent — Claude, Gemini, ChatGPT, Manus, Codex, or any other — must follow these standards before reporting any work as complete. No exceptions.

---

## THE ZERO-DEFECT VERIFICATION PROTOCOL (6 Modes)

Before declaring any deliverable complete, the responsible agent must verify across all 6 modes:

```
┌─────────────────────────────────────────────────────────────┐
│  THE 6-MODE VERIFICATION PROTOCOL                           │
├────┬────────────┬────────────────────────────────────────── ┤
│ #  │ MODE       │ WHAT TO CHECK                            │
├────┼────────────┼──────────────────────────────────────────┤
│ 1  │ CLI        │ npm run build (0 errors), swift build,   │
│    │            │ tsc --noEmit, lint — all must pass       │
├────┼────────────┼──────────────────────────────────────────┤
│ 2  │ API        │ curl the relevant endpoints. Real HTTP   │
│    │            │ responses, not assumptions.              │
├────┼────────────┼──────────────────────────────────────────┤
│ 3  │ MCP        │ Verify MCP gateway tools respond         │
│    │            │ correctly if MCP-touching code changed.  │
├────┼────────────┼──────────────────────────────────────────┤
│ 4  │ AGENT      │ Re-read your own output with critical    │
│    │            │ eyes. Is it efficient? Scalable? Right?  │
├────┼────────────┼──────────────────────────────────────────┤
│ 5  │ APP        │ Confirm UI renders, no React errors,     │
│    │            │ state flows correctly, routes resolve.   │
├────┼────────────┼──────────────────────────────────────────┤
│ 6  │ HUMAN      │ Ask: "Is this useful, beautiful,         │
│    │ (MOST      │ intuitive, and perfect for the user?"    │
│    │ IMPORTANT) │ If the answer is "meh" — redo it.       │
└────┴────────────┴──────────────────────────────────────────┘
```

---

## RESPONSIVENESS INVARIANTS

Every UI change must be verified at these breakpoints **before** committing:

```
┌──────────────────────────────────────────────────────────────────┐
│  REQUIRED BREAKPOINT VERIFICATION                                │
├─────────────────────┬──────────────────────────────────────────  ┤
│ Device              │ Verification method                        │
├─────────────────────┼────────────────────────────────────────────┤
│ Apple Watch         │ max-width: 300px — hide-on-watch class,    │
│                     │ font min 12px, buttons min 36px touch area  │
├─────────────────────┼────────────────────────────────────────────┤
│ iPhone 13 mini      │ 375px viewport — nav hamburger visible,    │
│                     │ no horizontal overflow                     │
├─────────────────────┼────────────────────────────────────────────┤
│ iPhone / Android    │ 390–430px — safe-area insets applied       │
├─────────────────────┼────────────────────────────────────────────┤
│ iPad / iPadOS       │ 768–1024px — layout adapts gracefully      │
├─────────────────────┼────────────────────────────────────────────┤
│ Mac / Desktop       │ 1280px+ — max-width container, not broken  │
├─────────────────────┼────────────────────────────────────────────┤
│ Apple Vision Pro    │ Liquid Glass depth, saturated backdrop     │
├─────────────────────┼────────────────────────────────────────────┤
│ ChromeOS            │ Standard Chrome rendering — test in Chrome │
└─────────────────────┴────────────────────────────────────────────┘
```

**BANNED patterns — will fail QA:**
- `w-[Npx]` or `h-[Npx]` with fixed pixel values for layout-critical elements
- `min-w-[Npx]` that prevents shrinking below mobile width
- Hardcoded `px-[N]` padding on main containers instead of responsive variants

---

## CODE QUALITY GATES

### TypeScript / React
- `npm run build` must exit 0
- Zero TypeScript errors (`tsc -b` clean)
- No unused imports (TS6133 errors blocked by Husky)
- No `any` types without explicit justification comment

### Swift / Vapor
- `swift build` must exit 0
- Migrations must run cleanly: `swift run App migrate -y`
- No force-unwraps (`!`) in production code paths without guard

### Git
- Never commit `infra/security/secrets.env` or any file containing real API keys
- Never commit session transcript files containing unredacted secrets
- Branch protection: `main` requires passing CI before merge
- Commit messages follow: `type(scope): description` (feat, fix, docs, chore, refactor)

---

## DIDACTIC LOG QUALITY GATE

Every agent session must produce at least one DIDACTIC_LOG entry if any meaningful change was made. A session without a log entry fails QA for the teaching component of this project.

**Log entry checklist:**
- [ ] Machine-readable comment tag at top with all required fields
- [ ] TUI box drawn with correct box-drawing characters
- [ ] Plain English explanation (max 100 words, no unexplained jargon)
- [ ] At least one analogy
- [ ] "What would have broken" section completed
- [ ] Question for the learner included
- [ ] SKILLS_REGISTRY.md updated if new concept introduced

---

## QA FOR MULTI-AGENT HANDOFFS

When one agent hands off to another:

1. **Source agent** must update HANDOFF.md before ending session
2. **Source agent** must complete all open DIDACTIC_LOG entries
3. **Receiving agent** must read HANDOFF.md + last 3 DIDACTIC_LOG entries before starting
4. **Receiving agent** must not re-explain concepts already logged (reference by number instead)
5. **Both agents** must avoid overwriting each other's work without explicit justification

---

## PRODUCTION DEPLOYMENT GATE

Before anything goes to `rawrnot.com` (live):

```
[ ] npm run build passes with 0 errors
[ ] All 6-Mode Verification modes checked
[ ] All breakpoints tested (see responsiveness table above)
[ ] HANDOFF.md updated with new live status
[ ] Git tag created for the release
[ ] DIDACTIC_LOG entry written for the deployment
[ ] User (you) has reviewed the live URL and confirmed it looks correct
```

The last item is non-negotiable. No deployment is "done" until you say it is.

---

## QA FOR AUTHENTICATION AND USER ACCOUNTS

The following users are defined for testing. Any authentication-related change must be verified with all 5 test accounts:

| Account | Role | Emails | Expected Access |
|---|---|---|---|
| Anyssa Salazar | OWNER | anyssa.salazar@thelaunchpadtlp.education, anyssa.salazar@thelaunchpadtlp.com, anyssa.salazar@rawrnot.com | Full access to all modules, tools, panels |
| Joaquín Muñoz | ADMIN (casi-dueño) | joaquin.munoz@thelaunchpadtlp.com, joaquin.munoz@thelaunchpadtlp.education | Creative + admin access, near-owner |
| Agencia (Test) | AGENCY | agencia@thelaunchpadtlp.com, agencia@thelaunchpadtlp.education | Agency-level portal |
| Cliente (Test) | CLIENT | cliente@thelaunchpadtlp.education, cliente@thelaunchpadtlp.com | Client portal only |
| Guest (Test) | GUEST | guest@thelaunchpadtlp.com, guest@thelaunchpadtlp.education | Visitor/pre-registration only |

**OAuth error to fix (open):** `Error 401: invalid_client` — The Google OAuth Client ID is not configured or not found in Google Cloud Console. Fix requires: correct OAuth 2.0 client ID + authorized redirect URIs set in GCP Console → APIs & Services → Credentials.

---

*Last updated: 2026-04-21 · Updated by: Claude Code (Sonnet 4.6) · Session: 12*
