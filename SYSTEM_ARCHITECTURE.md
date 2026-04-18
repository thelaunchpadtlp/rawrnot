# 🏗️ RAWRNOT SYSTEM ARCHITECTURE: The "System of Systems"

## Vision
Rawrnot is not just a website; it is an extensible platform designed for "Infinite Evolution". The architecture follows the **MACH** principle (Microservices, API-first, Cloud-native, Headless) ensuring that "The Architect" CMS remains an agile interface for users, while the core remains fully programmable by AI Agents and IDEs.

## 1. Extensibility Layers

### Layer A: The Core (Headless API)
*   **Technology:** Swift (Vapor) + PostgreSQL.
*   **Role:** Single source of truth. Manages Data, Auth, and Business Logic.
*   **Extensibility:** Every new feature is an API Endpoint first. Agents can bypass the GUI and interact directly with the Core.

### Layer B: The Extension Engine (Plugins & Connectors)
*   **Mechanism:** Middleware and dynamic routing.
*   **Plugins:** Server-side modules that can intercept requests (e.g., an "Adobe Bridge" plugin that auto-syncs assets).
*   **Connectors:** Pre-configured API adapters for Google, Apple, Amazon, Adobe, and specialized Photo/Video APIs.

### Layer C: The Visual UI (The Architect + RenderFactory)
*   **Technology:** React + Tailwind CSS + Framer Motion.
*   **Role:** High-fidelity presentation and visual editing.
*   **Extensibility:** New visual features are added as "Blocks" in the `RenderFactory`. Once registered, they appear in "The Architect" automatically.

## 2. Integration Standards (The "Glue")
*   **Webhooks:** Outbound notifications to external SaaS (Slack, Discord, CRM).
*   **MCP (Model Context Protocol):** Native support for MCP servers to allow AI Agents (like Gemini or Claude) to "read and write" to the Rawrnot database with full context.
*   **SDKs:** Future Javascript/Swift SDKs to allow 3rd party apps to embed Rawrnot services.

## 3. Deployment & Scalability (GitOps)
*   **CI/CD:** GitHub Actions -> Google Artifact Registry -> Google Cloud Run.
*   **Database:** Google Cloud SQL (Auto-scaling PostgreSQL).
*   **Assets:** Google Cloud Storage (CDN-backed).

---
*Status: V1.0 - Core Implemented. Ready for Extension Phase.*
