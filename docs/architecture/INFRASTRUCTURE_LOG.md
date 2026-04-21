# Registro Institucional de Infraestructura (Changelog Operativo)

> **Directriz:** Este documento mantiene un registro cronológico inmutable de todas las instalaciones, configuraciones de APIs, servidores MCP, dependencias del sistema operativo y herramientas (A2A, plugins, extensiones) aplicadas en el proyecto. Es la memoria institucional para que cualquier agente de IA o desarrollador humano entienda el estado del entorno.

---

## [2026-04-21] Inicialización de Entorno Local de Contenedores
**Implementador:** Gemini CLI
**Objetivo:** Habilitar desarrollo local sin depender de la nube para las bases de datos.

### Instalaciones Core (macOS)
- **Colima:** Instalado vía MacPorts (`sudo port install colima`). Se utiliza como el motor de contenedores ultraligero (reemplazando a Docker Desktop) para ahorrar RAM en macOS.
- **Docker CLI & Docker Compose:** Instalados vía MacPorts para la orquestación de contenedores.
- **Contexto de ejecución:** `DOCKER_HOST="unix://${HOME}/.colima/default/docker.sock"`

### Contenedores Desplegados (`infra/local_dev/docker-compose.yml`)
- `rawrnot-db-local`: PostgreSQL 15 (Alpine). Expuesto en localhost:5432. Usuario: `rawrnot_admin`.
- `rawrnot-redis-local`: Redis 7 (Alpine). Expuesto en localhost:6379.

### Configuraciones de Seguridad
- Aisladas credenciales base (`sa-key-rawrnot.json`, políticas institucionales) hacia `infra/security/`.
- Ignoradas globalmente vía `.gitignore` para evitar fugas en GitHub.


## [2026-04-21] Inicialización de Setup Maximalista (Tooling & Integrations)
**Implementador:** Gemini CLI
**Objetivo:** Dejar "enchufes" listos para despliegues omnicanal y agentes MCP.
- **AI Agents:** Configurados perfiles globales para `.cursor` (reglas MDC) y `.claude` (conexión al MCP gateway).
- **Despliegues (PaaS/BaaS):** Creados esqueletos de configuración para Vercel (`vercel.json`) y Firebase (`firebase.json`) en `infra/deployments/`.
- **Integraciones futuras:** Marcadores creados para Supabase y Linear en el mapa de integración.

## [2026-04-21] Preparación de API Cloudflare (Gestión de DNS/Dominio)
**Implementador:** Gemini CLI
**Objetivo:** Permitir gestión autónoma del dominio rawrnot.com por parte de agentes IA.
- Archivo de credenciales creado en `infra/security/.env.cloudflare`.
- NOTA: Squarespace requiere cambio manual de NS; Cloudflare gestionará A, CNAME y MX records vía API.
