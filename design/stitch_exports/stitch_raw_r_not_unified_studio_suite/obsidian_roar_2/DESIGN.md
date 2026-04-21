# Design System Document: The Primal Precision Framework

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Apex."** 

This system represents the intersection of untamed creative instinct (the 'raw') and elite technical execution (the 'not'). It moves away from the sterile, modular appearance of standard SaaS platforms toward a high-end editorial experience. We achieve this through **Intentional Asymmetry**: hero sections should feel like magazine spreads, utilizing overlapping elements and "Liquid Glass" containers that break the traditional 12-column grid. The goal is to make the user feel they are not just using a tool, but inhabiting a premium, multimedia-rich environment where power and authenticity (The Lion) are palpable in every interaction.

---

## 2. Colors & Surface Logic

Our palette is anchored in deep obsidian and charcoal, providing a high-contrast stage for "liquid" highlights and vibrant burgundy accents.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined solely through background color shifts or tonal transitions. Use `surface-container-low` against a `background` to define a section. 

### Surface Hierarchy & Nesting
Treat the UI as physical layers of stacked material.
- **Base Level:** `surface` (#131313) or `background` (#131313).
- **Recessed Areas:** Use `surface-container-lowest` (#0e0e0e) for input fields or immersive video wells.
- **Elevated Areas:** Use `surface-container-high` (#2a2a2a) or `surface-container-highest` (#353534) for cards and panels.
- **Nesting:** An inner element (like a button) inside a `surface-container-high` card should use `surface-bright` or a glass effect to create a natural, "stepped" lift.

### The "Liquid & Gradient" Rule
To capture the "Super-Futuristic" aesthetic, avoid flat primary colors. 
- **CTAs:** Use a linear gradient from `primary` (#ffb2bf) to `primary-container` (#ff4d81) at a 135-degree angle.
- **Glassmorphism:** For floating menus and navigation, use `surface_variant` at 40% opacity with a `backdrop-filter: blur(24px)`. This creates the signature "Liquid Glass" look, allowing multimedia content to bleed through softly.

---

## 3. Typography: The Editorial Tension

The system relies on the tension between a sophisticated serif and a high-precision sans-serif.

| Category | Token | Font Family | Size | Intent |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Newsreader | 3.5rem | High-impact "Roar" moments. |
| **Headline**| `headline-md` | Newsreader | 1.75rem | Storytelling and section headers. |
| **Title** | `title-lg` | Inter | 1.375rem | Functional UI headers. |
| **Body** | `body-lg` | Inter | 1.0rem | Standard reading text. |
| **Label** | `label-md` | Inter | 0.75rem | Metadata and micro-copy. |

**Stylistic Rule:** All `display` and `headline` tokens should use a tighter letter-spacing (-0.02em) to evoke a "premium print" feel. `Newsreader` represents the 'raw' craft, while `Inter` represents the 'sleek' tech.

---

## 4. Elevation & Depth

We eschew traditional drop shadows for **Ambient Tonal Layering**.

- **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-lowest` card on a `surface-container-low` background. The slight shift in hex value creates a soft, natural edge.
- **Ambient Shadows:** For floating elements (e.g., Modals), use a multi-layered shadow:
  - `box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(228, 189, 194, 0.1);`
  - The second shadow acts as a "Ghost Border," using `outline-variant` at 10% opacity to catch the light.
- **Interactive Depth:** On hover, a card should not just grow; it should transition from `surface-container-high` to `surface-bright`, mimicking a light source moving closer to the surface.

---

## 5. Components

### Glassmorphic Panels
Containers for creative assets. 
- **Style:** Background: `surface_variant` (20% opacity), backdrop-blur: 32px.
- **Corner Radius:** `xl` (1.5rem) for main containers to mimic polished glass edges.

### The 'Nudge' (Gamified Elements)
Interactive achievement badges and progress bars.
- **Progress Bars:** Base: `surface-container-highest`. Fill: Gradient from `tertiary` (#ffb3b5) to `on_tertiary_container` (#5b0015).
- **Badges:** Use `surface_tint` at 10% opacity with a 1px `ghost border`.

### Buttons
- **Primary:** Gradient (`primary` to `primary-container`), white text (`on_primary_fixed`), `full` roundedness.
- **Secondary:** Transparent background, `outline` token at 20% opacity, `primary` text.
- **Tertiary:** No background, `on_surface` text, underline on hover using `primary` color.

### Input Fields
- **Style:** `surface-container-lowest` background, `none` or `sm` roundedness for a "brutalist" sharp edge, `outline-variant` for the focus state only. Forbid dividers between stacked inputs; use 12px vertical spacing instead.

---

## 6. Do’s and Don’ts

### Do
- **Use "Active Negative Space":** Leave large gaps (e.g., 80px+) between major sections to let the "Liquid Glass" breathe.
- **Embrace Asymmetry:** Offset images and text blocks. A video container might take up 7 columns, while the heading overlaps it by 2 columns.
- **Use Multimedia as UI:** A background video should feel like part of the surface, not an iframe.

### Don’t
- **Don’t use 100% Opaque Borders:** This shatters the "Liquid Glass" illusion. If you need a line, use a 10% opacity `outline-variant`.
- **Don’t use Standard Grids:** Avoid the "3-column card row" look. Vary card widths (e.g., 40% / 60%) to maintain the high-end editorial feel.
- **Don’t Over-Shadow:** If a component looks "heavy," reduce the shadow and increase the background color contrast instead.