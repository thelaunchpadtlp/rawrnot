# Rawrnot — Instrucciones para Claude Code

## Inicialización Obligatoria
Al iniciar cualquier sesión en este proyecto, leer en este orden:
1. `HANDOFF.md` — Estado actual del proyecto
2. `VISION.md` — Visión de producto
3. `MASTER_ATLAS.md` — Índice y links

## Capacidades Especiales de Claude en este Proyecto
- **Lectura visual de Stitch**: Claude puede leer los `screen.png` de cada módulo como imágenes multimodales. Hacerlo SIEMPRE que se trabaje en un módulo nuevo para calibrar el diseño.
- **MCP Tools disponibles**: Figma MCP disponible (para Figma, no Stitch). Los demás MCPs del proyecto están en `ai-gateway/`.
- **Herramientas de terminal**: Acceso completo a `gcloud`, `gh`, `docker`, `swift`, `npm`.

## Autenticación GCP
```bash
gcloud auth activate-service-account --key-file=/Users/piqui/Rawrnot_Workspace/sa-key-rawrnot.json
gcloud config set project thelaunchpadtlp
```

## Comandos Frecuentes
```bash
# Deploy manual a Cloud Run (si es urgente, sin esperar CI/CD)
gcloud run deploy [SERVICE] --image [IMAGE] --region us-east1 --platform managed

# Ver logs de un servicio
gcloud run services logs read core-backend --region us-east1 --limit 50

# Build frontend local
cd rawrnot-app && npm run dev

# Test backend local
cd core-backend && swift run
```

## Convención de Commits
Usar mensajes descriptivos en español o inglés (como vinieron haciéndolo).
Hacer commit de cambios importantes al terminar la sesión.
**Nunca** commitear: `sa-key-*.json`, `.env`, archivos con credenciales.

## Al Terminar la Sesión
1. Hacer commit de todos los cambios relevantes
2. Actualizar la sección "Estado Actual" de `HANDOFF.md`
3. El usuario guardará la transcripción como: `Claude Sesión YYYY-MM-DD.txt` en `Rawrnot/sesiones/`
