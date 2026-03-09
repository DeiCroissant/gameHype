# PLAN-gameverse-3d

> **Status:** PLANNING
> **Last Updated:** 2026-01-30

## 1. Overview
Develop a high-end "3D Immersive Web" prototype for **GameVerse**. This supersedes the previous HTML/CSS-only plan. The core feature is a **Three.js WebGL Hero Section** with interactive particles and a mouse-reactive atmosphere, combined with a 5-column game grid featuring **3D Tilt Effects**.

## 2. Project Type
**WEB** (Frontend Specialist Only)

## 3. Success Criteria
1.  **WebGL Hero:** Three.js scene renders a dark, atmospheric particle system (Neon Green #a3ff12) reacting to mouse movement.
2.  **Performance:** 60fps animation loop, efficient rendering.
3.  **Visuals:** "floating embers/digital fog" aesthetic for the hero.
4.  **Grid Interactivity:** Game cards physically tilt/rotate in 3D space on hover (Mouse parallax).
5.  **Tech Compliance:** Use Three.js, ES6 Modules, and Semantic HTML.

## 4. Tech Stack
-   **Core:** HTML5, CSS3, JavaScript (ES6+)
-   **3D Engine:** Three.js (via ESM CDN or local vendor)
-   **Animations:** GSAP (optional, for smooth transitions), Custom RAF loop
-   **Fonts:** 'Russo One', 'Chakra Petch'

## 5. File Structure
```
/
├── index.html              # Entry point (Canvas container)
├── css/
│   ├── variables.css       # Design tokens (#a3ff12, #0f1014)
│   └── style.css           # Glassmorphism & Layout styles
└── js/
    ├── main.js             # Entry logic & Tilt Modules
    └── hero-scene.js       # Three.js setup (Scene, Camera, Renderer)
```

## 6. Task Breakdown

### Phase 1: Foundation & Assets
| UI | Task Name | Agent | Skill | Input | Output | Verify |
|----|-----------|-------|-------|-------|--------|--------|
| [ ] | **Project Scaffold** | `frontend-specialist` | `html-structure` | `MASTER.md` | `index.html`, `css/variables.css` | Files exist, Three.js linked |
| [ ] | **Global Styles** | `frontend-specialist` | `css-variables` | Color Palette | `css/style.css` | Background #0f1014, Fonts loaded |

### Phase 2: Three.js Hero Section (WebGL)
| UI | Task Name | Agent | Skill | Input | Output | Verify |
|----|-----------|-------|-------|-------|--------|--------|
| [ ] | **Scene Setup** | `frontend-specialist` | `three-js` | Three.js docs | `js/hero-scene.js` | Canvas renders black screen (no errors) |
| [ ] | **Particle System** | `frontend-specialist` | `three-js` | Neon Green #a3ff12 | `js/hero-scene.js` | Particles visible in scene |
| [ ] | **Interaction Loop** | `frontend-specialist` | `three-js` | Mouse events | `js/hero-scene.js` | Particles move/shift on mousemove |
| [ ] | **Hero Overlay** | `frontend-specialist` | `css-layout` | Text "The Witcher 3" | `index.html` | Text layered OVER canvas |

### Phase 3: 3D Grid & Cards
| UI | Task Name | Agent | Skill | Input | Output | Verify |
|----|-----------|-------|-------|-------|--------|--------|
| [ ] | **Grid Layout** | `frontend-specialist` | `css-grid` | 5-column spec | `css/style.css` | 5 cols dsk, responsive mobile |
| [ ] | **Card Component** | `frontend-specialist` | `component-design` | Glassmorphism | `css/style.css` | Blur backgrounds, glow borders |
| [ ] | **3D Tilt Logic** | `frontend-specialist` | `interaction-design` | Mouse perspective | `js/main.js` | Cards tilt based on mouse position |
| [ ] | **Content Entry** | `frontend-specialist` | `content-entry` | Game Data | `index.html` | Real titles (Elden Ring, etc.) |

## 7. Phase X: Verification
- [ ] **Console check:** No Three.js warnings or memory leaks.
- [ ] **Performance:** ~60fps on standard laptop.
- [ ] **Visuals:** Particle color matches #a3ff12 exactly.
- [ ] **Responsiveness:** Canvas resizes correctly on window resize.
