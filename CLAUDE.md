# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GIA test practice application - a client-side SPA for practicing five cognitive ability test types (Reasoning, Perceptual Speed, Number Speed & Accuracy, Word Meaning, Spatial Visualisation). All question generation and scoring happens client-side with no backend required.

## Development Commands

```bash
pnpm install          # Install dependencies
pnpm run dev          # Start dev server (Vite)
pnpm run build        # Production build
pnpm run preview      # Preview production build
pnpm run check        # Type-check with svelte-check
pnpm run check:watch  # Type-check in watch mode
```

## Tech Stack

- **Framework**: SvelteKit 2.50+ with Svelte 5 (uses runes: `$props()`, `$state()`, etc.)
- **Build**: Vite 7
- **Styling**: Tailwind CSS v4 with `@theme` directive in `src/routes/layout.css`
- **Components**: Flowbite Svelte (`flowbite-svelte`) + Icons (`flowbite-svelte-icons`)
- **Package Manager**: pnpm

## Architecture

- `src/routes/` - SvelteKit file-based routing (`+page.svelte`, `+layout.svelte`)
- `src/lib/` - Shared components and utilities
- `src/routes/layout.css` - Global styles with Tailwind theme (primary: coral/red, secondary: sky blue)

## Project Requirements

See `instructions.md` for detailed specifications:
- Five test types with specific timing (2-5 minutes each)
- Mouse/touch-only interaction (no keyboard)
- Visible timer, auto-progression after answering
- i18n support (English, French, Spanish planned)
- Results page showing correct answers, total attempted, accuracy %, speed
