# Learnerware

A mobile-first edtech app that teaches digital marketing, social media management, freelancing, content creation, and personal branding — with a focus on real income and a real portfolio of work.

This repo has two apps sharing one curriculum:
- **This directory** — the web app (React + Vite), responsive/mobile-first, deployable to Vercel.
- **`mobile/`** — the native app (Expo Router + React Native), for testing on a real phone via Expo Go. See [`mobile/README.md`](mobile/README.md) for setup.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4 for styling (off-white/pastel design system, Plus Jakarta Sans, lucide-react icons)
- Framer Motion for micro-animations
- Zustand (with localStorage persistence) for progress, XP, streaks, and portfolio state
- React Router (hash-based) for navigation
- Vercel serverless functions (`/api`) + the Anthropic SDK for the AI-powered discovery call simulator and caption feedback

The app is responsive/mobile-first: full-bleed on real mobile viewports, framed like a phone on wider desktop viewports.

## Getting started

```bash
npm install
npm run dev
```

The `/api` functions only run under Vercel (locally via `vercel dev`, or once deployed) — a plain `vite dev` server will 404 on those routes, and the AI features (discovery call simulator, caption feedback) will show an inline error but the rest of the app works fully offline.

## Setting up the AI features

The discovery call simulator (Freelancing track) and caption feedback (Content Creation track) call an Anthropic model server-side, never from the browser:

1. Set `ANTHROPIC_API_KEY` as an environment variable in your Vercel project (Settings → Environment Variables) — or in a local `.env.local` for `vercel dev`.
2. Never prefix it with `VITE_` — that would bundle it into client-side JS.

## How it's organized

- `src/data` — the curriculum: 4 tracks, each with 3 modules of 4 lessons + one end-of-module task (`src/data/tracks/*.ts`)
- `src/state/store.ts` — XP, streak, progress, difficulty inference, and portfolio entries
- `src/screens` — the app's screens (splash, track picker, lesson player, home dashboard, end task, profile, templates, leaderboard)
- `src/screens/lesson` — the three question types (multiple choice, true/false, short answer) plus the info step view
- `src/screens/endtask` — the three end-task types (builder form, multi-caption with AI feedback, AI client simulator)
- `src/components` — shared UI (buttons, cards, chips, tags, progress bar, badges, floating bottom nav, confetti)
- `api/` — Vercel serverless functions that call Anthropic server-side (`simulator-reply`, `simulator-score`, `caption-feedback`)

## Onboarding flow

Splash → pick a track (chip grid) → straight into Lesson 1 (no account wall) → soft "save your progress" prompt after the first lesson completes. Difficulty/pace is inferred from first-lesson performance and adjustable later in Profile.

## Core loop

Each module: 4 bite-sized lessons (info + mixed question types) → one end-of-module task that produces a real, savable deliverable. Every submitted end task lands in **My Portfolio** on the Profile screen, and unlocks the matching template in the Templates library.
