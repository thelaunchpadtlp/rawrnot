\# The universal mega-skill framework for AI-assisted creation

\*\*A single, platform-agnostic skill architecture can power every creative and technical project across Claude, Codex, Gemini, and 15+ AI platforms.\*\* This framework leverages the convergence of three open standards—Agent Skills (SKILL.md), AGENTS.md, and Model Context Protocol (MCP)—to deliver a modular, phase-gated system that works for software development, physical product design, media production, scientific research, business operations, and personal projects. The approach draws on Anthropic’s context engineering principles, OpenAI’s sandbox execution model, Google’s progressive consolidation of AI tools, and cross-domain project management research to create a framework that is both deeply structured and maximally portable.

\-----

\## The architectural foundation: why one framework can serve all platforms

The AI tooling landscape has converged on a remarkably uniform architecture. \*\*Every major platform now reads Markdown-based instruction files with YAML frontmatter\*\*, implements progressive disclosure (loading metadata first, full instructions only when needed), and supports the Model Context Protocol for tool integration. This convergence makes a universal mega-skill not just possible but practical.

The SKILL.md format, published as an open standard at agentskills.io in December 2025 by Anthropic, now works natively across Claude Code, OpenAI Codex, Gemini CLI, Google Stitch, Cursor, Windsurf, VS Code Copilot, JetBrains, and \*\*16+ coding agents\*\*. The AGENTS.md format, co-developed by OpenAI, Google Jules, Cursor, and Factory under the Linux Foundation, serves as the repository-level instruction layer. Together, these two formats create a complete instruction hierarchy: AGENTS.md for project-level conventions, SKILL.md for task-specific workflows.

The mega-skill framework uses a three-layer architecture designed around Anthropic’s progressive disclosure principle—\*\*never load context until it’s needed\*\*:

|Layer |Token cost |When loaded |Content |

|--------------------|---------------------|-----------------------|--------------------------------------------|

|\*\*L1: Metadata\*\* |~100 tokens per skill|Always (startup scan) |Skill name + description in YAML frontmatter|

|\*\*L2: Instructions\*\*|<5,000 tokens |When skill is triggered|SKILL.md body with workflow steps |

|\*\*L3: Resources\*\* |Unlimited |On demand |Reference docs, scripts, templates, examples|

This mirrors how both Claude Code (\`.claude/skills/\`) and OpenAI Codex (\`.agents/skills/\`) discover and load skills. The universal framework stores skills in a platform-neutral directory structure that maps cleanly to either system:

\`\`\`

mega-skill/

├── SKILL.md # Universal entry point

├── core/

│ ├── project-classifier/SKILL.md # Routes to correct domain workflow

│ ├── phase-manager/SKILL.md # Enforces phase gates

│ ├── quality-gate/SKILL.md # Validation at each transition

│ └── artifact-tracker/SKILL.md # Deliverable state management

├── domains/

│ ├── software/SKILL.md # Software development workflow

│ ├── physical-creative/SKILL.md # Physical art/design/architecture

│ ├── hybrid/SKILL.md # Physical-digital products

│ ├── media/SKILL.md # Content and media production

│ ├── business/SKILL.md # Business ops and brand dev

│ ├── events/SKILL.md # Event planning and personal projects

│ └── scientific/SKILL.md # Research and engineering

├── utilities/

│ ├── writing/SKILL.md # Documentation and communication

│ ├── data-analysis/SKILL.md # Charts, statistics, visualization

│ ├── design/SKILL.md # Visual assets and mockups

│ └── research/SKILL.md # Web search and competitive analysis

├── platform-adapters/

│ ├── agents/openai.yaml # Codex-specific metadata

│ ├── .stitch/DESIGN.md # Stitch design tokens

│ └── airules.md # Firebase Studio config

├── references/ # L3 deep-dive documentation

├── scripts/ # Executable validators

├── templates/ # Project templates

└── examples/ # Gold-standard examples

\`\`\`

\-----

\## The six universal phases every project shares

Cross-domain analysis reveals that software, film, architecture, scientific research, business creation, and event planning all follow the same macro-structure. The framework codifies this into \*\*six phases with explicit gates\*\*, adapted from Stage-Gate® methodology and validated across every creative and technical domain:

\### Phase 1 — Discovery and research

Every project begins with exploration. The AI gathers context, analyzes the problem space, identifies constraints, and surfaces opportunities. In software this means requirements gathering; in science, literature review and hypothesis formulation; in event planning, vision definition and venue research. The framework’s \`research/SKILL.md\` utility provides web search, competitive analysis, and structured synthesis capabilities.

\*\*Gate 1 criteria\*\*: Problem statement defined. Sufficient evidence the project is worth pursuing. Initial feasibility assessed. Key constraints identified.

\*\*Gate decision options\*\*: Go (proceed to planning), Hold (gather more information), or Kill (abandon).

\### Phase 2 — Scoping and planning

The most critical phase. McKinsey research confirms that \*\*rule-based workflow engines outperform letting AI decide “what comes next”\*\*, and Addy Osmani’s AI-assisted development data shows planning should consume roughly \*\*75% of total effort\*\* for optimal outcomes. The framework enforces detailed planning: scope definition, resource estimation, architecture decisions, risk assessment, and explicit definition of “done.”

\*\*Gate 2 criteria\*\*: Feasibility confirmed. Business case or project justification documented. Architecture or design direction chosen. Resource plan in place. Risks identified with mitigations.

\### Phase 3 — Design and prototyping

The framework transitions from planning to tangible proof-of-concept. For software, this means wireframes, technical spikes, or an MVP. For physical products, CAD models or material samples. For media, storyboards or pilot episodes. For science, pilot studies or protocol validation. The \`design/SKILL.md\` utility generates visual assets, mockups, and interactive prototypes.

\*\*Gate 3 criteria\*\*: Prototype validates the concept. Design is feasible within constraints. Stakeholder approval obtained. Technical risks retired.

\### Phase 4 — Production and development

Full-scale creation with iterative cycles. The framework breaks work into manageable units with clear dependencies, following the universal “prototype-test-iterate” loop that appears in every domain. For software, this means sprint-based development with TDD. For creative projects, asset production with periodic review. For science, data collection and experimental runs.

\*\*Gate 4 criteria\*\*: Milestone reviews passed. Quality checkpoints met. Work progressing within scope, timeline, and budget.

\### Phase 5 — Testing and validation

Domain-appropriate quality assurance. The framework’s \`quality-gate/SKILL.md\` loads the correct validation approach based on project type: automated testing for code, peer review for research, user testing for products, test screenings for media, brand compliance checks for content.

\*\*Gate 5 criteria\*\*: All quality criteria met. User acceptance validated. Compliance requirements satisfied. No blocking defects.

\### Phase 6 — Launch and iteration

Release, deployment, distribution, and post-launch monitoring. The framework includes retrospective processes and feeds learnings back into the skill system itself—updating SKILL.md files based on observed failures, following both Anthropic’s and OpenAI’s recommendation to \*\*iteratively improve instruction files based on real-world results\*\*.

\*\*Gate 6 criteria\*\*: Launch readiness checklist complete. Monitoring in place. Stakeholder sign-off obtained. Iteration backlog prioritized.

\-----

\## How the project classifier routes to the right workflow

The framework’s entry point is a decision engine that identifies the project type and loads the appropriate domain skill. This prevents context pollution—a mural project never loads software deployment instructions. The classifier uses a cascading decision tree:

\*\*Primary classification\*\* determines the dominant output type. Is the primary output code/software? A physical object? Content/media? A business system? Scientific knowledge? An event or personal project? Each branch loads the corresponding domain skill from \`domains/\`.

\*\*Secondary classification\*\* adjusts depth and rigor. The framework evaluates three dimensions that determine how heavily each phase is weighted:

\- \*\*Scale\*\*: Personal → Team → Enterprise (determines governance overhead)

\- \*\*Risk\*\*: Experimental → Low → Medium → High → Safety-critical (determines QA rigor)

\- \*\*Complexity\*\*: Light → Standard → Deep (determines planning depth)

A simple personal project like a birthday party uses the “Light” path—abbreviated planning, minimal formal gates, plain-language outputs. An operating system uses the “Deep” path—formal architecture review, comprehensive test suites, security audits, phased deployment. \*\*The same framework serves both\*\* because the phase structure is universal; only the depth and formality adapt.

For hybrid projects—a board game with a companion app, an illustrated book with AR elements—the classifier loads multiple domain skills and establishes explicit synchronization checkpoints where physical and digital work streams must align. The framework flags the critical asymmetry: \*\*physical components cannot be “patched”\*\* after manufacturing, so physical design decisions must be locked earlier than digital ones.

\-----

\## Platform-specific capabilities and how to leverage them

While the SKILL.md format is universal, each platform offers unique capabilities that the framework exploits through thin adapter layers in \`platform-adapters/\`. The core instructions remain platform-agnostic; adapters add platform-specific optimizations.

\*\*Claude (claude.ai and Claude Code)\*\* excels at progressive disclosure and context management. Skills live in \`.claude/skills/\`, with \`CLAUDE.md\` providing always-loaded project conventions. Claude’s unique strengths include artifacts (interactive HTML/React outputs), extended thinking for complex reasoning, and the richest MCP integration ecosystem. The framework leverages Claude’s XML tag preference for structured instructions (\`\`, \`\`, \`\`) within skill bodies. Claude Code’s auto-compaction preserves the most recent invocation of each skill, keeping the \*\*first 5,000 tokens per skill\*\* within a combined \*\*25,000-token budget\*\* after compaction.

\*\*OpenAI Codex\*\* brings cloud-based parallel execution and the strongest automation capabilities. Its two-phase sandbox runtime—network access during setup, offline during agent execution—provides security isolation ideal for autonomous coding tasks. Codex supports \*\*explicit skill invocation via \`$skill-name\` syntax\*\* and can run multiple tasks in parallel across separate environments. The framework’s \`agents/openai.yaml\` adapter provides UI metadata and invocation policies specific to the Codex app. Codex also offers Automations for scheduled, unprompted background work.

\*\*Google’s ecosystem\*\* offers the most complete vertical integration. The framework chains \*\*Stitch\*\* (AI-native design canvas, text/image to high-fidelity UI) → \*\*Antigravity or AI Studio\*\* (agentic IDE for development) → \*\*Firebase\*\* (backend and deployment) → \*\*Cloud Run\*\* (production hosting). \*\*Jules\*\* handles asynchronous coding tasks via GitHub integration, supporting up to 60 concurrent tasks on the Ultra tier. Gemini’s \*\*1M+ token context window\*\* enables loading entire codebases. The framework’s \`.stitch/DESIGN.md\` adapter stores design system tokens for Stitch integration, while \`airules.md\` configures Firebase Studio behavior.

\*\*ChatGPT\*\* provides the broadest consumer accessibility through Custom GPTs (system instructions + knowledge files + actions), Canvas for visual code/writing collaboration, and the GPT Store marketplace. The framework maps to ChatGPT by providing its core instructions as GPT system prompts and domain skills as uploadable knowledge files.

\*\*Perplexity\*\* serves as the framework’s research engine, with Deep Research performing autonomous \*\*2-4 minute investigations synthesizing 200+ sources\*\* with sentence-level citations. Spaces provide persistent research workspaces with custom instructions. The framework’s Discovery phase explicitly recommends Perplexity for initial research and literature review.

\*\*Manus.im\*\* (acquired by Meta for $2-3B) represents the highest-autonomy tier—a fully autonomous multi-agent system that plans, executes, and delivers end-to-end without human intervention. The framework maps to Manus by providing its instructions as natural-language task descriptions, since Manus has no file-based skill system.

\*\*Apple Xcode + Claude Agent SDK\*\* integration (Xcode 26.3, February 2026) brings the framework’s software development skills into native iOS/macOS development. The Agent SDK’s four-phase feedback cycle—Gather Context → Plan → Execute → Verify—mirrors the framework’s phase structure. Xcode exposes capabilities via MCP, enabling any MCP-compatible agent to interact with build systems, previews, and documentation.

\-----

\## Quality assurance: the multi-layered evaluation system

The framework implements a four-layer QA architecture, drawing on Anthropic’s “never send an LLM to do a linter’s job” principle and the industry consensus that \*\*writing evals is the highest-leverage skill\*\* in AI-assisted work:

\*\*Layer 1 — Deterministic validation\*\* runs first. Linters, type checkers, test suites, accessibility scanners, brand compliance validators, and statistical tests catch objective errors without consuming AI tokens. The framework’s \`scripts/\` directory contains executable validators that produce pass/fail results. For code: compile, lint, test. For content: plagiarism check, readability score, fact extraction. For design: WCAG compliance, responsive layout verification.

\*\*Layer 2 — AI-as-judge evaluation\*\* uses a second AI instance to assess quality against defined rubrics. The framework provides a universal scoring rubric across seven dimensions: \*\*Accuracy/Faithfulness\*\*, \*\*Relevance\*\*, \*\*Completeness\*\*, \*\*Coherence\*\*, \*\*Originality\*\*, \*\*Bias/Fairness\*\*, and \*\*Actionability\*\*. Each dimension is scored 1-5 with specific criteria. This layer catches semantic issues that deterministic tools miss.

\*\*Layer 3 — Human review at gates\*\* follows the ConSiDERS-The-Human Framework (ACL 2024), which establishes six pillars for systematic human evaluation: Consistency, Scoring Criteria, Differentiating, Ethical considerations, Reproducibility, and Scalability. The framework specifies exactly what humans should review at each gate—strategic alignment at Gate 1, technical feasibility at Gate 2, design quality at Gate 3, functional correctness at Gate 4, user acceptance at Gate 5, launch readiness at Gate 6.

\*\*Layer 4 — Continuous monitoring\*\* applies post-launch. The framework tracks drift, performance degradation, and anomalies in deployed outputs. Research shows diminishing returns and compounding error risk after \*\*3-4 AI iterations without human intervention\*\*, so the framework enforces mandatory human checkpoints at that threshold.

Domain-specific QA adapts this foundation. Scientific projects add reproducibility verification and citation provenance tracking. Software projects add security scanning and performance benchmarks. Physical products add FMEA (Failure Mode Effects Analysis) and material compatibility testing. Media production adds brand voice consistency and platform-specific format validation.

\-----

\## Context engineering principles that make the framework effective

Anthropic’s context engineering research reveals that \*\*context rot degrades model performance along a gradient, not a cliff\*\*—every added token depletes the model’s finite attention budget. The framework applies five key principles from this research:

\*\*Minimal high-signal context.\*\* The framework never loads instructions the AI already knows. Each SKILL.md encodes only domain-specific procedural knowledge (“how to do X”) that the model wouldn’t know otherwise. Project facts go in CLAUDE.md/AGENTS.md (always loaded). Specialized workflows go in skills (loaded on demand). Reference material goes in separate files (loaded only when explicitly needed).

\*\*Just-in-time retrieval.\*\* Rather than front-loading all project context, the framework maintains lightweight identifiers (file paths, search queries, URLs) and uses tools to dynamically load data at runtime. This mirrors how Claude Code uses \`grep\`, \`head\`, and \`tail\` to analyze codebases without loading full files into context.

\*\*Structured note-taking for long-horizon tasks.\*\* The framework includes an \`artifact-tracker/SKILL.md\` that writes persistent notes outside the context window—tracking deliverable states, architectural decisions, unresolved issues, and progress metrics. These notes survive compaction and can be pulled back into context at later stages.

\*\*Sub-agent delegation for deep exploration.\*\* Complex research, testing, or analysis tasks fork to sub-agents with clean context windows. Each sub-agent may consume tens of thousands of tokens internally but returns a \*\*condensed summary of 1,000-2,000 tokens\*\* to the main agent. This prevents context pollution while enabling deep investigation.

\*\*Iterative instruction improvement.\*\* The framework treats its own SKILL.md files as living documents. When an AI agent makes the same mistake twice, the framework’s retrospective process updates the relevant skill. Anthropic’s “Claude A/Claude B” testing pattern—draft with one instance, test with a fresh instance, refine based on observations—is built into the skill development lifecycle.

\-----

\## The interoperability stack: MCP and A2A protocols

Two open protocols under the Linux Foundation’s Agentic AI Foundation complete the framework’s interoperability story:

\*\*Model Context Protocol (MCP)\*\* connects AI systems to external tools and data sources. With \*\*10,000+ active MCP servers\*\* and adoption by Anthropic, OpenAI, Google, Microsoft, and AWS, MCP is the universal integration layer. The framework’s skills can orchestrate MCP servers for version control (GitHub), project management (Jira, Linear), design tools (Figma), databases, cloud services, and any API. The relationship is complementary: \*\*MCP provides the plumbing (tool access); skills provide the playbook (workflow knowledge)\*\*.

\*\*Agent-to-Agent (A2A) protocol\*\* enables communication between AI agents regardless of vendor or framework. Launched by Google in April 2025 and now at v0.3, A2A uses Agent Cards (JSON metadata at \`/.well-known/agent.json\`) for discovery, task-based workflows for execution, and server-sent events for streaming. \*\*150+ organizations\*\* including Adobe, SAP, and Salesforce support A2A. The framework can expose its skills as A2A-compatible agents, enabling multi-agent orchestration where specialized agents handle specific domains.

Together, \*\*Skills + MCP + A2A\*\* form a complete stack: Skills define what to do, MCP provides tool access, and A2A enables agent collaboration.

\-----

\## Domain skill modules: what each workflow covers

Each domain skill in \`domains/\` encodes the specific phases, quality criteria, tools, and deliverables appropriate to that project type. All share the universal six-phase structure but customize sub-phases and gate criteria.

\### Software development

Sub-phases include requirements analysis, architecture design, implementation planning (which should consume ~75% of effort), test-driven development, code review, deployment, and monitoring. The skill enforces the “repository as source of truth” pattern—every decision is captured in version-controlled files. Quality gates include: all tests passing, no security vulnerabilities, code review approval, performance benchmarks met, and accessibility compliance verified. The skill recommends \*\*Claude Code or Codex\*\* for implementation, \*\*Jules\*\* for asynchronous bug fixes and test generation, and \*\*Perplexity\*\* for technology research.

\### Physical creative works

Sub-phases cover concept ideation with mood boards, reference research (historical and cultural context), composition and color theory, material selection with physical constraint awareness, production planning with safety considerations, and execution guidance. The skill understands that \*\*AI-generated images lack individual layers\*\* (requiring masking workflows), that physical materials cannot be “patched” after application, and that upscaling is needed for print resolution. It separates “AI as ideation tool” from “AI as production tool” and includes material safety notes.

\### Media production

Sub-phases span content strategy, scripting, pre-production, recording/filming, post-production, platform optimization, distribution, and analytics. The skill’s unique capability is \*\*multi-format adaptation from single source content\*\*—transforming a blog post into video script, social media posts, newsletter, and podcast outline. Platform-specific formatting rules load as sub-skills: YouTube (SEO-optimized, chapters), TikTok (vertical, hook-within-3-seconds), Instagram (carousel, hashtag strategy), podcast (RSS, transcription).

\### Scientific and engineering research

Sub-phases follow the canonical scientific method: literature navigation (using tools like Elicit that search \*\*138M+ papers\*\*), hypothesis generation, experimental design, data collection, statistical analysis, manuscript writing, and peer review preparation. The skill enforces epistemic rigor—distinguishing AI prediction from AI understanding, requiring provenance tracking for all claims, and mandating reproducibility documentation. It integrates with specialized databases (PubMed, ChEMBL, COSMIC) and supports LaTeX output for publication.

\### Business operations and event planning

These two domains share the framework but at different complexity levels. Business operations covers market analysis, requirements gathering, system design, CRM configuration, brand development, and go-to-market execution with enterprise-grade data privacy compliance. Event planning uses simplified workflows with \*\*plain-language, jargon-free outputs\*\*, template-driven approaches, budget tracking, and timeline management. Both emphasize that human judgment remains critical for taste, atmosphere, and crisis management.

\-----

\## Practical templates and the entry-point SKILL.md

The framework’s root \`SKILL.md\` serves as the universal entry point. Its description triggers on any creative or development project:

\`\`\`yaml

\---

name: universal-creation-framework

description: >

Activates for any project involving research, design, development, or creation.

Routes to the appropriate domain workflow (software, physical creative, hybrid,

media, business, events, or scientific) and manages the full lifecycle from

discovery through deployment and iteration. Use this skill when starting any

new project, when unclear which workflow to follow, or when a project spans

multiple domains.

\---

\`\`\`

The SKILL.md body contains the project classifier decision tree, the six-phase overview with gate criteria, and instructions to load domain-specific sub-skills based on classification results. It stays under 500 lines per the Anthropic best practice, with detailed reference material in \`references/\`.

Each domain skill template follows a consistent internal structure:

\`\`\`markdown

\## When to use

\[Trigger conditions for this domain\]

\## Phase adaptations

\[How the six universal phases customize for this domain\]

\## Quality criteria

\[Domain-specific quality checklist\]

\## Recommended tools

\[Platform-specific tool recommendations\]

\## Common deliverables

\[What this workflow produces at each phase\]

\## Anti-patterns

\[What to avoid in this domain\]

\`\`\`

\-----

\## Future-proofing through modular extensibility

The framework is designed to evolve. Three mechanisms ensure longevity:

\*\*New domains\*\* are added by creating a new \`SKILL.md\` in \`domains/\` and updating the project classifier. No existing skills need modification. The progressive disclosure architecture means new skills add only ~100 tokens of metadata overhead until actually used.

\*\*Platform changes\*\* are absorbed by the adapter layer. When a new AI platform emerges, a thin adapter in \`platform-adapters/\` maps the universal SKILL.md format to the platform’s native configuration. The core skills remain unchanged.

\*\*Model improvements\*\* may make some instructions unnecessary. Following Anthropic’s guidance that “harnesses should be frequently questioned as models improve,” the framework includes a periodic review process: test each skill with the latest model, remove instructions the model follows correctly without being told, and add new instructions only for observed failure modes. \*\*Start with a minimal prompt using the best model, then add instructions based on observed failures\*\*—never the reverse.

The convergence of Agent Skills, AGENTS.md, MCP, and A2A under the Linux Foundation signals that the era of proprietary AI configuration is ending. A skill written today in the SKILL.md format will work across the growing ecosystem of compliant agents. The framework bets on this convergence—and the evidence from \*\*1,234+ cataloged skills\*\* already working across 16+ platforms confirms the bet is sound.

\-----

\## Conclusion: the meta-pattern beneath all creation

The deepest insight from this research is that \*\*all human creative and technical work follows the same meta-pattern\*\*: diverge then converge, commit resources progressively as uncertainty decreases, validate through prototyping before full commitment, and separate the act of creation from the act of evaluation. These patterns appear whether you’re building an operating system, painting a mural, launching a business, or planning a birthday party.

The mega-skill framework codifies this meta-pattern into a machine-readable format that any AI platform can execute. Its power comes not from comprehensive coverage of every possible task—that would create unmanageable context bloat—but from \*\*progressive disclosure of domain-specific knowledge within a universal phase structure\*\*. The AI loads only what it needs, when it needs it, while maintaining consistent quality gates and human oversight checkpoints throughout.

Three actionable principles emerge for anyone building on this framework. First, invest heavily in the planning phase—data consistently shows that front-loaded planning (60-75% of effort) produces better outcomes than premature execution. Second, write evaluation criteria before generating outputs—the quality of AI work is bounded by the quality of the specification. Third, treat your skills as code: version them, test them, review them, and update them based on observed failures. The universal creation framework is not a static document but a living system that improves with every project it powers.