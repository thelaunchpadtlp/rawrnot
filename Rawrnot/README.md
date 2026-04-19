# Rawrnot/ — Project Intelligence Folder

Este directorio es el **"cerebro" del proyecto** — contiene la memoria histórica,
contexto de decisiones y materiales de referencia para los agentes de IA y el equipo.

**NO es código. NO se despliega. NO afecta Cloud Run ni GitHub Actions.**

---

## Propósito y Uso

Este folder existe para que cualquier agente de IA (Claude, Gemini, Codex, Manus, etc.)
pueda reconstruir el contexto completo del proyecto sin necesidad de leer el código entero.

**Flujo recomendado al iniciar una sesión:**
1. Leer `../HANDOFF.md` (en la raíz — estado actual del proyecto)
2. Leer `sesiones/00_UNIFIED_MASTER_SESSIONS.md` (historia consolidada)
3. Si se necesita detalle: buscar en las transcripciones de `sesiones/`

---

## Estructura

```
Rawrnot/
├── README.md             ← Este archivo
├── .gitignore            ← Excluye los archivos pesados de git
└── sesiones/             ← Transcripciones de sesiones de trabajo con IA
    ├── README.md         ← Convención de nombres y uso
    ├── 00_UNIFIED_MASTER_SESSIONS.md  ← Compilación histórica (Gemini)
    └── [Claude/Gemini/Codex] Sesión YYYY-MM-DD.txt
```

---

## Lo que NO está aquí (y dónde encontrarlo)

| Contenido | Ubicación canónica |
|---|---|
| Diseños de Stitch (HTML + screenshots) | `../stitch_raw_r_not_unified_studio_suite/` |
| Documentos de diseño (markdown) | `../mds/` |
| Manifiestos de arquitectura | `../SYSTEM_ARCHITECTURE.md`, `../VISION.md` |
| Estado actual del proyecto | `../HANDOFF.md` |
| Índice general | `../MASTER_ATLAS.md` |

> Los subdirectorios `mds/` y `stitch_raw_r_not_unified_studio_suite/` que pueden
> aparecer aquí localmente son **copias locales** de conveniencia, excluidas de git.
> Siempre usar las versiones en la raíz como fuente de verdad.

---

## Relación con GitHub y Cloud Run

| Sistema | ¿Este folder le importa? | Detalle |
|---|---|---|
| **GitHub** | Parcialmente | Solo se commitean README y el archivo unificado de sesiones. Las transcripciones `.txt` pesadas están en `.gitignore`. |
| **GitHub Actions** | No | Los workflows de CI/CD no referencian este folder. |
| **Cloud Run** | No | Los `.dockerignore` de cada servicio excluyen este folder. |
| **Docker** | No | Ningún Dockerfile lo copia. |
| **Agentes de IA** | Sí | Razón de ser de este folder. Leerlo al inicio de cada sesión. |
