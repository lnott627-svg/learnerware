import { Platform } from 'react-native'
import type { AuthProvider } from '../state/store'

// =============================================================================
//  AUTH SEAM — feature-detected, working-but-scaffold
// -----------------------------------------------------------------------------
//  Every screen calls `signIn(provider)` and never touches a native module
//  directly. Right now that resolves to a LOCAL MOCK session so the entire
//  onboarding flow is testable on web and in Expo Go without a dev build.
//
//  `isNativeAuthAvailable()` is the feature detection: it stays false until a
//  real EAS/dev build ships the native modules AND `NATIVE_AUTH_ENABLED` is
//  flipped on. At that point `signInNative()` (reference implementation in the
//  comment block below) takes over — no screen changes required, because the
//  return shape (`AuthResult`) is identical for the mock and native paths.
//
//  We intentionally do NOT import expo-apple-authentication / expo-auth-session
//  yet: those are native modules that would break the web + Expo Go targets.
//  They get installed only when we decide to test Apple/Google end-to-end.
// =============================================================================

export interface AuthProfile {
  name?: string | null
  email?: string | null
}

export interface AuthResult {
  ok: boolean
  canceled: boolean
  usedNative: boolean
  profile?: AuthProfile
  error?: string
}

// Flip to true ONLY inside a dev/EAS build that has the native modules installed
// (see the reference block at the bottom of this file). Left false so web +
// Expo Go keep working on the mock path.
export const NATIVE_AUTH_ENABLED = false

/**
 * Feature detection. Returns whether a real, native sign-in is possible on this
 * device+build for the given provider. Until a dev build enables native auth
 * this is always false and callers fall back to the mock session.
 */
export function isNativeAuthAvailable(provider: AuthProvider): boolean {
  if (!NATIVE_AUTH_ENABLED) return false
  // Apple sign-in is iOS-only; Google works on iOS/Android/web (via redirect).
  if (provider === 'apple') return Platform.OS === 'ios'
  return Platform.OS === 'ios' || Platform.OS === 'android'
}

/**
 * The single entry point every screen uses. Tries the native provider when the
 * build supports it, otherwise returns a mock session so progress can still be
 * saved locally. Never throws — failures come back as `{ ok: false, error }`.
 */
export async function signIn(provider: AuthProvider): Promise<AuthResult> {
  if (isNativeAuthAvailable(provider)) {
    try {
      return await signInNative(provider)
    } catch (err) {
      // Native attempt blew up (misconfig, user offline). Rather than dead-end
      // the learner, fall through to the mock so they still get into the app.
      return {
        ok: false,
        canceled: false,
        usedNative: true,
        error: err instanceof Error ? err.message : 'Native sign-in failed',
      }
    }
  }
  return signInMock(provider)
}

/**
 * Mock session. Produces a deterministic-enough local identity so the app can
 * treat the user as "signed in" and keep their progress under a real account
 * shape. Replaced transparently by `signInNative` once native auth is enabled.
 */
async function signInMock(provider: AuthProvider): Promise<AuthResult> {
  return {
    ok: true,
    canceled: false,
    usedNative: false,
    // Mock never learns a real name/email; the store keeps whatever the learner
    // typed at the profile step. Real providers fill these in (see below).
    profile: { name: null, email: null },
  }
}

/**
 * NATIVE IMPLEMENTATION — reference only until NATIVE_AUTH_ENABLED is true.
 *
 * This function is never reached while native auth is disabled, so the imports
 * it needs are kept OUT of the module graph (they'd break web + Expo Go). To
 * activate, in a dev/EAS build:
 *
 *   1. npx expo install expo-apple-authentication expo-auth-session \
 *        expo-crypto expo-web-browser
 *   2. Add the "expo-apple-authentication" plugin + iOS entitlement in app.json,
 *      and a Google OAuth client id (iOS/web) via expo-auth-session.
 *   3. Uncomment the two branches below (and their imports), set
 *      NATIVE_AUTH_ENABLED = true, and build with EAS.
 *
 * // import * as AppleAuthentication from 'expo-apple-authentication'
 * // import * as Google from 'expo-auth-session/providers/google'
 *
 * Apple branch:
 *   const available = await AppleAuthentication.isAvailableAsync()
 *   if (!available) return { ok: false, canceled: false, usedNative: true,
 *                            error: 'Apple sign-in unavailable' }
 *   try {
 *     const cred = await AppleAuthentication.signInAsync({
 *       requestedScopes: [
 *         AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
 *         AppleAuthentication.AppleAuthenticationScope.EMAIL,
 *       ],
 *     })
 *     const name = cred.fullName?.givenName ?? null
 *     return { ok: true, canceled: false, usedNative: true,
 *              profile: { name, email: cred.email ?? null } }
 *   } catch (e: any) {
 *     if (e.code === 'ERR_REQUEST_CANCELED')
 *       return { ok: false, canceled: true, usedNative: true }
 *     throw e
 *   }
 *
 * Google branch: use the `Google.useAuthRequest` hook at the screen level (hooks
 * can't run here), exchange the returned id_token, and map it into AuthResult.
 * Because Google needs a hook, the results screen will call a small
 * `useGoogleSignIn()` wrapper when enabled; the mock path needs no hook, which
 * is why the screen currently just awaits `signIn('google')`.
 */
async function signInNative(provider: AuthProvider): Promise<AuthResult> {
  // Unreachable while NATIVE_AUTH_ENABLED === false (guarded in `signIn`).
  throw new Error(`Native auth for ${provider} is not enabled in this build`)
}
