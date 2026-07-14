# Learnerware — mobile (Expo)

The native mobile version of Learnerware, built with Expo Router. This is a separate app from the web version at the repo root — same curriculum content, same design language, ported to React Native.

## Running it on your phone with Expo Go

This only works from **your own machine** — a cloud/remote session can't reach your phone over the network.

1. Clone the repo and install dependencies:
   ```bash
   git clone <repo-url>
   cd learnerware/mobile
   npm install
   ```
2. Install [Expo Go](https://expo.dev/go) on your phone (App Store / Play Store).
3. Start the dev server:
   ```bash
   npx expo start
   ```
4. Scan the QR code that appears — with the Camera app on iOS, or directly in the Expo Go app on Android. Your phone and computer need to be on the same Wi-Fi network. If they aren't (or the QR scan fails to connect), press `s` in the terminal to switch to tunnel mode, or run `npx expo start --tunnel`.

## Enabling the AI features (discovery call simulator, caption feedback)

These call the same Vercel-hosted `/api/*` functions as the web app — the native app has no "same origin" server of its own, so it needs an absolute URL:

1. Deploy the web app (repo root) to Vercel with `ANTHROPIC_API_KEY` set, per the root README.
2. In `mobile/app.json`, set `expo.extra.apiBaseUrl` to that deployment's URL, e.g. `"https://learnerware.vercel.app"`.
3. Restart `npx expo start` (Expo config changes require a restart, not just a reload).

Without this set, the rest of the app works fully offline — only the simulator and caption feedback will show an inline "not configured" error.

## Stack

- Expo Router (file-based routing, `app/`)
- NativeWind (Tailwind classes on React Native — `tailwind.config.js` mirrors the web app's design tokens)
- Moti + react-native-reanimated for animations
- Zustand + AsyncStorage for progress persistence
- lucide-react-native for icons
- `@expo-google-fonts/plus-jakarta-sans` for the display font

## How it's organized

- `data/` — the curriculum, copied from the web app's `src/data` (framework-agnostic, no changes needed)
- `state/store.ts` — same store as web, with AsyncStorage instead of localStorage
- `app/` — screens, file-based routing (`index.tsx` = splash, `tracks.tsx` = track picker, `(tabs)/` = the 4-tab home/templates/leaderboard/profile group, `lesson/[lessonId]/`, `module/[moduleId]/task.tsx`)
- `components/` — shared UI (Button, Card, Tag, Badges, ProgressBar, Confetti, TabBarButton, question-type views, end-task views)
- `lib/` — colors, shadows, palette, API client, progress helpers

## Known limitations

- The decorative splash-screen illustration (hand-drawn line art via `react-native-svg`) has a minor rendering quirk when previewed through `expo export --platform web` — react-native-svg's web target is a secondary platform for that library. It's expected to render correctly on actual iOS/Android via Expo Go, which uses native SVG rendering, not the web shim. Worth a quick look once you're testing on-device.
- Static web export (`expo export --platform web`) doesn't support client-side route fallback out of the box when served with a plain static file server — deep-linking directly to a route like `/tracks` 404s unless you navigate there through the app. Not relevant to native usage.
