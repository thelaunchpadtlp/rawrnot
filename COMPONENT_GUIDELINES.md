# 🎨 COMPONENT BLUEPRINT: Next-Gen Component Design

## Objective
Provide a strict but flexible standard for AI Agents and Developers to build new blocks that maintain the "Obsidian/Lightcraft" dual-aesthetic with "Zero Distortion".

## 1. Visual DNA (The Global Tokens)
Every component MUST use the following CSS variables defined in `index.css`:

| Token | obsidian (Dark) | Lightcraft (Light) |
| :--- | :--- | :--- |
| `--primary` | `#E4BDC2` (Dusty Rose) | `#E4BDC2` |
| `--background` | `#0A0A0A` (Deepest Ink) | `#FAF9F6` (Bone White) |
| `--surface` | `#171717` (Glassy Dark) | `#FFFFFF` (Pure White) |
| `--on-background` | `#F5F5F5` | `#1A1A1A` |

## 2. Component Structure
All new blocks must follow this pattern in `rawrnot-app`:

1.  **Component File:** `src/components/Blocks/[Name]Block.tsx`
2.  **Interface:** Define a clear `Payload` interface for the JSON data.
3.  **Animation:** Use `framer-motion` for entry/exit (standard: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`).
4.  **Factory Registration:** Add the case to `RenderFactory.tsx`.

### Example Payload Structure
```json
{
  "type": "CinematicPlayer",
  "payload": {
    "videoUrl": "...",
    "aspectRatio": "21:9",
    "overlayText": "Artisanal Pulse",
    "autoPlay": true
  }
}
```

## 3. The "The Architect" Rule
If a component requires user configuration (e.g., colors, text), it MUST be exposed via the JSON payload. "The Architect" will eventually read these schemas to provide a UI (Toggles, Sliders, Color Pickers) for that component.

## 4. Skeuomorphism & Glassmorphism
*   **Shadows:** Use large, soft blurs with low opacity.
*   **Borders:** Use `ghost-border` class (0.5px or 1px with 10% opacity).
*   **Textures:** Use the Noise Overlay provided in the global layout for all surfaces.

---
*Status: V1.0 - Design Standards Locked.*
