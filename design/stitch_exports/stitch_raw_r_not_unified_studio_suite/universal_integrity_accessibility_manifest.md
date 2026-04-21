# Universal Integrity & Accessibility Manifest (raw’r’not)

## 1. Core Accessibility Standards (A11Y)
- **WCAG 2.2 Level AAA:** The platform must meet the highest contrast and readability standards.
- **Semantic HTML:** Use landmarks (`<main>`, `<nav>`, `<aside>`) and ARIA roles for complex components (modals, tooltips, carousels) to ensure screen readers navigate intuitively.
- **Focus Management:** Visible focus rings and logical tab order are non-negotiable for keyboard-only users.
- **Screen Reader Support:** All decorative elements (illustrations) must have `aria-hidden="true"`, while functional imagery requires descriptive `alt` text.

## 2. Cross-Platform & Legacy Performance
- **Progressive Enhancement:** The "Liquid Glass" and advanced animations are the "enhancement." The "core" must be a performant, functional HTML/CSS experience that works on browsers like Internet Explorer 11 or old Android WebViews.
- **Performance Budget:** Initial load must be < 1.5s on 3G connections. Assets should be lazy-loaded, and "rawrs" token interactions must be prioritized in the network queue.
- **Responsive Fluidity:** Use CSS Container Queries and Clamp-based typography to ensure the "Obsidian Roar" aesthetic scales from a 1.2-inch watch face to a 100-inch spatial canvas.

## 3. Localization & i18n
- **Right-to-Left (RTL) Support:** Layouts must be mirrored for Arabic and Hebrew users.
- **Dynamic Font Scaling:** Newsreader and Inter Mono must handle varying character widths for languages like German or Thai without breaking the grid.
- **Cultural Context:** Color semiotics (e.g., the use of pink/red) must be evaluated for different regions.

## 4. Input & Control Paradigms
- **Pointer, Touch, Gaze:** Interfaces must handle mouse hover (Desktop), touch-down (Mobile), and Gaze-and-Pinch (Apple Vision/XR) with unique visual feedback for each.
- **Haptic Feedback:** Native apps must use the Taptic Engine for transactional success ("rawrs" earned) and error alerts.

## 5. Gamification & Cognitive Safety
- **Nudge Ethics:** Use "nudges" to help users (e.g., saving progress), but avoid "dark patterns" that trap vulnerable users (children/elderly).
- **Cognitive Load:** Complex CRM data must be chunked into bento-box views to prevent overwhelm for non-technical users.
