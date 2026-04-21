# Rawrnot — Historial de Sesiones de Trabajo

Este directorio contiene las transcripciones de todas las sesiones de desarrollo del proyecto con agentes de IA.

## Convención de Nombres

```
[AgenteName] Sesión YYYY-MM-DD.txt
```

Ejemplos:
- `Gemini Sesión 2026-04-18 AM.txt`
- `Claude Sesión 2026-04-18.txt`
- `Codex Sesión 2026-04-19.txt`

## Archivos Existentes (Gemini CLI)

| Archivo | Contenido |
|---|---|
| `Terminal Saved Output.txt` | Sesión 1 — Setup inicial, git, estructura base |
| `Terminal Saved Output 2.txt` | Sesión 2 — Primeros designs de Stitch, frontend base |
| `Terminal Saved Output 3.txt` | Sesión 3 — Backend Swift, migrations, controllers |
| `Terminal Saved Output 4.txt` | Sesión 4 — OCR Service, StorageProvider, Drive integration |
| `Terminal Saved Output 5.txt` | Sesión 5 — GCP Cloud Run deploy, CI/CD GitHub Actions |
| `Terminal Saved Output 6.txt` | Sesión 6 — Frontend componentes, TheArchitect CMS |
| `Terminal Saved Output 7.txt` | Sesión 7 — MCP Gateway, herramientas MCP |
| `Terminal Saved Output 8.txt` | Sesión 8 — StorageProvider, revisión completa, preguntas a usuario |
| `00_UNIFIED_MASTER_SESSIONS.md` | Compilación histórica de todas las sesiones de Gemini |

## Cómo Guardar una Sesión de Claude

Al terminar una sesión con Claude Code:
1. Claude Code → Menu → Export / Save conversation
2. Guardar como: `Claude Sesión YYYY-MM-DD.txt` en este directorio
3. Actualizar `00_UNIFIED_MASTER_SESSIONS.md` con un resumen de la sesión

## Cómo Usar estas Transcripciones

**Al iniciar una nueva sesión con cualquier agente:**
1. Leer `HANDOFF.md` en la raíz del proyecto (estado actual consolidado)
2. Leer `00_UNIFIED_MASTER_SESSIONS.md` para contexto histórico
3. Si se necesita detalle específico, buscar en los `.txt` de las sesiones relevantes

**Los agentes con mayor contexto window (Claude Opus, Gemini Ultra) pueden leer más sesiones históricas.**
**Los agentes con contexto limitado deben priorizar HANDOFF.md + la última sesión.**

## Lo que NO Guardar en Sesiones

- Claves API o tokens (reemplazar con `[REDACTED]` si aparecen)
- Contraseñas o credenciales
- Datos personales de clientes reales
| `Terminal Saved Output 10.txt` | Sesión — Añadida automáticamente |
| `Terminal Saved Output 9.txt` | Sesión — Añadida automáticamente |
| `Terminal Saved Output 11.txt` | Sesión 11 — Master Reset, Reorganización, Análisis Crítico y Plan de Acción |
