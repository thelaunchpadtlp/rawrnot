# Development Environment & Infrastructure Manifest (raw’r’not)

## 1. Google Cloud Platform (GCP) Setup
- **Compute:** Deploy the backend microservices as containers on **Google Cloud Run**.
    - *Config:* Enable 'Min Instances' (warm starts) and high concurrency (1000 requests/container) to maintain the 'Flow' state.
- **Data Persistence:**
    - **Cloud SQL (PostgreSQL):** Use Row-Level Security (RLS) for multi-tenant isolation.
    - **Memorystore (Redis):** Essential for sub-millisecond 'Shadow Profile' tracking and real-time gamification updates.
- **Storage:** Use **Cloud Storage** for high-fidelity assets (4K Video, High-Res Raw images).

## 2. AI-Native & Agentic Integration (MCP)
To enable collaboration with agents like Gemini, Claude Code, and Manus:
- **Model Context Protocol (MCP) Server:** Deploy an MCP server on Cloud Run.
- **Resources:** Expose CRM data, CMS article schemas, and Transactional logs as MCP resources.
- **Tools:** Expose 'CreateQuote', 'ReserveSlot', and 'UpdateProfile' as executable tools for AI agents.
- **Zero-Trust:** All AI access must be verified via OIDC/OAuth 2.0 through the MCP Gateway.

## 3. Google Workspace & CI/CD
- **Identity:** Use Google Workspace as the Primary IdP for Federated Authentication (SSO).
- **GitHub Actions:** 
    - Automate build/deploy to Cloud Run on every push.
    - Integrate 'Fastlane' for the Apple-native (SwiftUI) distribution to TestFlight and Apple Business Manager.

## 4. Dual-Aesthetic Logic (The Toggle)
- **Design Tokens:** The frontend must support two CSS variable sets:
    - `:root[data-theme='obsidian-roar']`: High-contrast, dark glassmorphism.
    - `:root[data-theme='primal-light']`: Textured paper, skeuomorphic shadows, vintage serifs.

## 5. First Handoff Target
The ideal candidate for the first handoff is a **Full-Stack Cloud Engineer** or a specialized **DevOps/Architect** who understands:
1. Serverless Node.js/Swift (Vapor) on Cloud Run.
2. Composable MACH architecture.
3. Apple's Enterprise distribution via ABM/ASM.
4. AI Agent integration via MCP.

*Status: Ready for Deployment Phase*