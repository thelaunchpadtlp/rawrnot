# Guía de Handoff Paso a Paso: De Stitch al Agente de IA (Jules/AI Studio/Claude Code)

Esta guía detalla cómo transferir la "inteligencia" y el diseño de **raw’r’not** a un agente de desarrollo para que lo convierta en una aplicación funcional.

## Paso 1: Preparación del "Contexto Maestro"
Antes de abrir el agente de IA, asegúrate de tener a mano los siguientes elementos de este proyecto de Stitch:
1.  **Enlace Público de Stitch:** Copia la URL de este proyecto para que el agente pueda (si tiene acceso a internet) ver las visualizaciones.
2.  **El Manifiesto de Handoff IA ({{DATA:DOCUMENT:DOCUMENT_57}}):** Este es el documento más importante. Cópialo íntegramente. Contiene las instrucciones "core" para el agente.
3.  **El archivo DESIGN.md (del Design System {{DATA:DESIGN_SYSTEM:DESIGN_SYSTEM_1}}):** Copia el contenido de este archivo, ya que contiene los tokens (colores, fuentes, lógica de toggle) que evitarán distorsiones estéticas.

## Paso 2: El "Primer Prompt" (Iniciación)
Abre tu herramienta de IA (Google Jules, AI Studio o Claude Code) e inicia una nueva sesión pegando el siguiente prompt:

> *"Hola. Vamos a construir un ecosistema digital de alta fidelidad llamado **raw’r’not**. Aquí tienes el Manifiesto Maestro de Handoff que contiene la arquitectura MACH+MCP, la visión estratégica y las especificaciones técnicas. Léelo detenidamente y confírmame cuando estés listo para empezar a configurar el entorno de Google Cloud."*
>
> [PEGAR AQUÍ EL CONTENIDO DEL DOCUMENTO {{DATA:DOCUMENT:DOCUMENT_57}}]

## Paso 3: Definición del ADN Visual
Una vez que el agente confirme, dale las reglas estéticas para que no "alucine" diseños genéricos:

> *"Para el diseño visual, utilizaremos el sistema de diseño **Obsidian Roar**. Es vital que implementes un sistema de variables CSS (o tokens en SwiftUI) basado en este archivo para que podamos alternar entre los temas 'Obsidian Dark' (Futurista) y 'Lightcraft Roar' (Artesanal) sin errores."*
>
> [PEGAR AQUÍ EL CONTENIDO DE DESIGN.md]

## Paso 4: Extracción de Código de Pantallas
Para cada módulo que quieras que el agente empiece a programar (ej. el Checkout o el CRM):
1.  Ve a la pantalla correspondiente en Stitch.
2.  Haz clic en el botón **</> View Code** en la barra de herramientas.
3.  Copia el código HTML/CSS y dáselo al agente diciendo:
> *"Aquí tienes el código base de la interfaz para el módulo de [Nombre del Módulo]. Utilízalo como referencia estructural para crear los componentes en Next.js/SwiftUI."*

## Paso 5: Implementación del Servidor MCP
Instruye al agente para que cree el "Traductor Universal":
> *"Basado en la sección MCP del manifiesto, crea un servidor MCP en Node.js para desplegarlo en Google Cloud Run. Este servidor debe exponer las funciones de 'Crear Quoting' y 'Gestión de Shadow Profiles' como herramientas ejecutables."*

## Paso 6: Verificación de "Ampliación"
Finalmente, asegúrate de que el agente implemente tu sistema de ayuda:
> *"No olvides implementar el sistema de 'Ampliación Automática' (tooltips en hover/gaze) y 'Ampliación Extra' (iconos de info para documentación profunda) en todos los componentes interactivos, tal como se especifica en el manifiesto."*

---
*Con este proceso, el agente de IA no solo escribirá código, sino que heredará toda la historia y la lógica que hemos construido juntos.*