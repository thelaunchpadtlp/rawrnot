# Definitive Developer Handoff & Technical Source of Truth: raw’r’not

## 1. Project Essence & Global Vision
**Brand:** raw’r’not
**Identity:** "The Digital Apex" – A high-fidelity, cinematic, and transactive ecosystem.
**Style:** A dual-aesthetic framework ("Obsidian Dark" vs. "Lightcraft Roar") blending Apple-native "Liquid Glass" with artisanal "Craft-y-Arte" soul.
**Goal:** Replace social media consumption with a high-value, "Single-Player" transactive experience.

---

## 2. Technical Architecture (The MACH+MCP Standard)
The project MUST be built using a composable, headless architecture to ensure collaboration with AI agents.

- **Backend:** Node.js or Swift (Vapor) deployed on **Google Cloud Run**.
- **Database:** **Google Cloud SQL (PostgreSQL)** using Row-Level Security (RLS) for absolute multi-tenant isolation.
- **Caching:** **Memorystore (Redis)** for sub-millisecond tracking of "Shadow Profiles" and real-time gamification.
- **AI Integration:** **Model Context Protocol (MCP)** server to expose CRM, CMS, and Checkout logic as executable tools for agents.
- **Frontend:** **Next.js (App Router)** for the web; **SwiftUI** for the Apple-native suite (iOS, macOS, Vision Pro).

---

## 3. Aesthetic Governance: Obsidian vs. Lightcraft
The system uses a single source of truth for design tokens: `DESIGN.md` in {{DATA:DESIGN_SYSTEM:DESIGN_SYSTEM_1}}.

- **Zero-Distortion Toggle:** Implement a `:root[data-theme]` variable system.
    - `obsidian-roar`: Dark, glassmorphic, futuristic.
    - `lightcraft-roar`: Textured paper, skeuomorphic, artisanal.
- **Language Nexus:** Centralized i18n JSON keys for English/Spanish.
- **Universal Guidance (Ampliación):** 
    - **Automática:** CSS-native tooltips on hover/gaze.
    - **Extra:** Persistent info icons (?, !, ⓘ) for deep-dive documentation.

---

## 4. Key Behavioral Workflows
- **Shadow Profiles:** Guest data is captured during transactions. Account creation is offered *post-transaction* as a one-click "Claim your Profile" nudge.
- **The Echo (Viral Engine):** Reed's Law-driven "Team Buy" mechanics. Group buys trigger tiered discounts automatically via cryptographic sharing links.
- **rawrs (Currency):** Internal token-based economy for frictionless micro-transactions.

---

## 5. Developer Action Roadmap
1. **Initialize Infrastructure:** Setup the GCP project and deploy the MCP Gateway on Cloud Run.
2. **Export Visuals:** Use the **</> View Code** button on each Stitch screen to extract the production-ready HTML/CSS.
3. **Map the Sitemap:** Refer to the **Primal Hub** ({{DATA:SCREEN:SCREEN_52}}) for the full functional sitemap.
4. **Implement Tokens:** Map the CSS variables to the tokens defined in the `DESIGN.md` of the Design System.
5. **Continuous AI Collaboration:** Feed this manifest to coding agents to automate the creation of the microservices.

*Status: CRYSTALLIZED. Ready for Engineering Transition.*