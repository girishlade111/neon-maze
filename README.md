# Neon Maze

An animated neon isometric maze rendered in real time on an HTML5 canvas — glowing cyan-to-magenta isometric "pillars" that pulse and ripple in a wave pattern, creating a hypnotic synthwave city-grid effect. Full-screen, fully responsive, and pure client-side.

Originally generated with [v0.app](https://v0.app); hardened and documented here for open use.

## What it does

- Renders a full-screen isometric grid of neon "maze walls" on a `<canvas>` via the 2D rendering context.
- Each cell is drawn with a cyan → magenta linear gradient fill, yellow glow strokes, and white edge highlights.
- A sine-wave phase (`sin(m * 0.5 + t)`) modulated by radial distance from the center makes the pillars rise and fall like a living 3D wave.
- Faint trailing (`rgba(0,0,0,.1)` overpaint) creates motion blur / glow trails.
- Canvas resizes to the window and re-renders on `resize`; animation runs on `requestAnimationFrame` with proper cleanup on unmount.

## Features

- Real-time animated isometric maze visualization
- Neon gradient palette (cyan `#00FFFF` → magenta `#FF00FF`) with glow strokes
- Radial wave animation with motion-blur trails
- Fullscreen responsive canvas (adapts to window size)
- Zero dependencies for the visual itself — plain canvas 2D API
- Static export ready (`output: 'export'`) — deployable to any static host
- Dark, distraction-free presentation (black background)

## Tech stack

- Next.js 15 (App Router, static export)
- React 19
- TypeScript
- Tailwind CSS 3 + tailwindcss-animate
- shadcn/ui component set (Radix primitives) available in `components/`
- lucide-react icons
- Canvas 2D API for the animation

## Quick start

```bash
# install dependencies (pnpm or npm)
pnpm install
# or: npm install --legacy-peer-deps

# run the dev server
pnpm dev
# open http://localhost:3000

# production build (static export → ./out)
pnpm build

# serve the exported site locally
npx serve out
```

## Project structure

```
├── neon-isometric-maze.tsx   # the animated canvas component (the whole show)
├── page.tsx                  # home page — renders <NeonIsometricMaze /> fullscreen
├── app/
│   ├── layout.tsx            # root layout
│   └── globals.css           # global styles
├── components/               # shadcn/ui components (button, dialog, etc.)
├── lib/                      # shared utilities (cn, etc.)
├── styles/                   # additional styles
├── public/                   # static assets
└── next.config.mjs           # static export + basePath configuration
```

## Configuration

`next.config.mjs` sets:

- `output: 'export'` — builds a fully static site into `out/`
- `basePath: '/neon-maze'` — required when served from the `girishlade111.github.io/neon-maze` GitHub Pages subpath. **Remove `basePath` (or point it at `/`) if deploying to a domain root or Vercel.**
- `images.unoptimized: true` — required for static export

## Environment variables

None required. The app is 100% client-side and calls no APIs.

## Deployment

- **GitHub Pages:** `pnpm build` → publish `out/` to the `gh-pages` branch. Live at `https://girishlade111.github.io/neon-maze/`
- **Vercel / Netlify / Cloudflare Pages:** push the repo and deploy as a Next.js/static site (set output directory to `out`). If deploying to a root domain, remove the `basePath` setting from `next.config.mjs` first.

## Credits

Built by Girish Lade — https://ladestack.in
