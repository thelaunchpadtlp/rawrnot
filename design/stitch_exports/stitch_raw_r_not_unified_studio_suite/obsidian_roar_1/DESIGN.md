# Design System Specification: The Digital Apex

## 1. Creative North Star: The Digital Apex
This design system is a study in tension and prestige. It rejects the "templated" web in favor of a **High-End Editorial** experience. We do not just display information; we curate it. 

The system operates on a dual-aesthetic logic:
*   **Obsidian Dark:** A realm of "Liquid Glass." High-contrast, futuristic precision, and deep charcoal depths. It feels like a high-performance instrument.
*   **Lightcraft Roar:** A "Living Archive." Artisanal paper textures, skeuomorphic depth, and the tactile soul of a vintage letterpress.

By utilizing intentional asymmetry, overlapping elements, and a total prohibition of standard 1px borders, we create a UI that feels layered, architectural, and bespoke.

---

## 2. Color Logic & CSS Variables

### The "No-Line" Rule
**Borders are forbidden for sectioning.** Boundaries are defined strictly through background shifts or tonal transitions. Use `surface-container` tiers to nest depth.

### Surface Hierarchy & Nesting
Treat the UI as physical layers. 
*   **Obsidian:** Layers of smoked glass. Use `backdrop-blur` to let background energy bleed through.
*   **Lightcraft:** Stacked sheets of heavy-weight cotton paper.