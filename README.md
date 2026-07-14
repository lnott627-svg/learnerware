# Learnerware

A mobile-first edtech app that teaches digital marketing and social media management skills — with a focus on real income (freelancing, agency work, creator monetization, brand partnerships).

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4 for styling
- Framer Motion for micro-animations and drag/swipe interactions
- Zustand (with localStorage persistence) for progress, XP, streaks, and portfolio state
- React Router (hash-based) for navigation

The app is built responsive/mobile-first as a web app: full-bleed on real mobile viewports, framed like a phone on wider desktop viewports.

## Getting started

```bash
npm install
npm run dev
```

## How it's organized

- `src/data` — the curriculum: tracks, units, lessons, questions, portfolio pieces, and templates
- `src/state/store.ts` — XP, streak, progress, difficulty inference, and portfolio piece generation
- `src/screens` — the app's screens (splash, track selection, lesson player, home path map, profile, templates, leaderboard)
- `src/screens/lesson` — the four interactive question types (multiple choice, drag-to-order, fill-in-blank, swipe-to-sort) plus the info and micro-task step views
- `src/components` — shared UI (buttons, cards, progress bar, badges, bottom nav, confetti)

## Onboarding flow

Splash → pick a track → straight into Lesson 1 (no account wall) → soft "save your progress" prompt after the first lesson completes. Difficulty/pace is inferred from first-lesson performance and adjustable later in Profile.
