# Xofira

Xofira is a next-generation fintech platform enabling seamless, bidirectional money transfers between **Nigeria (NGN)** and **Ivory Coast (XOF)**.

Fast. Secure. Global.

## Overview

This repository contains the Xofira marketing and product website: a responsive, accessible landing experience with a live, bidirectional transfer calculator for the NGN ↔ XOF corridor.

Highlights:

- Bidirectional rate calculator (send from NGN or XOF) with transparent fees and indicative exchange rates
- Brand-aligned design system built on the Xofira identity
- Fully responsive, accessible (WCAG-aware contrast, focus states, reduced-motion support)
- SEO metadata and structured data

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- lucide-react icons
- IBM Plex Sans / IBM Plex Mono

## Getting started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  app/            Routes, layout, global styles
  components/     UI sections and primitives
  lib/            Rate engine and utilities
public/           Brand assets
```

## Rate engine

Conversion logic lives in `src/lib/rates.ts`. Exchange rates shown are indicative and applied with a transparent FX margin and fee model. The engine is structured so an indicative constant can be swapped for a live rate feed without changing the UI.
