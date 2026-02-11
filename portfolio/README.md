# Interactive Research Portfolio

A cinematic, research-grade narrative computational experience built for a CS + Law researcher.

## Architecture Overview

The application is built on **Next.js 16 (App Router)** and uses **React Three Fiber** for the 3D environment.

### Core Stack
- **Framework**: Next.js 16 (TypeScript)
- **3D Engine**: Three.js + React Three Fiber
- **Abstraction**: @react-three/drei
- **State Management**: Zustand
- **Styling**: TailwindCSS
- **Animation**: Framer Motion (DOM), Maath (Math helpers)

### Concept
The site treats scroll as a timeline. As the user scrolls, the camera moves along the Z-axis through 7 distinct scenes. The DOM overlay syncs with the scroll position via a global Zustand store, ensuring 60fps performance by avoiding unnecessary React renders in the 3D scene loop.

## Folder Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── globals.css     # Global styles (Tailwind + Custom)
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Main entry (Canvas + Overlay)
│   ├── components/
│   │   ├── canvas/         # 3D Components
│   │   │   ├── Scene.tsx   # Main scene manager & Camera Rig
│   │   │   └── scenes/     # Individual thematic scenes
│   │   │       ├── Genesis.tsx
│   │   │       ├── Systems.tsx
│   │   │       ├── Law.tsx
│   │   │       ├── Research.tsx
│   │   │       ├── Publications.tsx
│   │   │       ├── Identity.tsx
│   │   │       └── Contact.tsx
│   │   └── dom/            # HTML Overlay Components
│   │       └── Overlay.tsx # Scroll-reactive UI
│   ├── shaders/            # GLSL Shader strings
│   │   ├── haze.ts
│   │   └── particles.ts
│   └── store/              # Global State (Zustand)
│       └── store.ts
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies
└── postcss.config.mjs      # Tailwind PostCSS config
```

## Setup Instructions

1.  **Prerequisites**: Node.js v18+ installed.
2.  **Navigate to project**:
    ```bash
    cd portfolio
    ```
3.  **Install Dependencies**:
    ```bash
    npm install
    ```

## Run Instructions

**Development Mode**:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

**Production Build**:
```bash
npm run build
npm start
```

## Vercel Deployment Guide

1.  Push this repository to GitHub.
2.  Login to [Vercel](https://vercel.com).
3.  Click "Add New..." -> "Project".
4.  Import the repository `portfolio`.
5.  Vercel will auto-detect Next.js.
6.  Click **Deploy**.
7.  The site will be live in minutes.

## Performance Explanation

### 1. Scroll Management
We separate the scroll event (handled by `ScrollControls` in R3F) from the React render cycle.
- **Camera Rig**: Updates camera position directly in `useFrame` (animation loop) without triggering React state updates.
- **Zustand Store**: The scroll offset is synced to a Zustand store.
- **Overlay Optimization**: The HTML Overlay subscribes only to the *section index* derived from scroll, not the raw float value. This prevents the UI from re-rendering 60 times per second, ensuring smooth DOM updates.

### 2. Scene Management
Scenes are positioned along the Z-axis. Three.js automatically handles frustum culling (not drawing objects behind the camera).

### 3. Shader Use
Particle systems use custom GLSL shaders (in `src/shaders`) to offload animation logic to the GPU, allowing thousands of particles to animate smoothly on integrated graphics.

### 4. Minimal Draw Calls
Geometry is kept simple and instanced where possible. Text rendering uses SDF (via `@react-three/drei/Text`) for crisp quality at low cost.

## Interaction Philosophy
The movement is damped (`damping={0.3}` in ScrollControls) to give a "cinematic" weight to the camera, making it feel like a physical dolly rather than a standard web scroll.
