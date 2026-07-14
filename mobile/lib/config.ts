import Constants from 'expo-constants'

// Set this to your deployed web app's origin (the one with /api/* Vercel functions),
// e.g. "https://learnerware.vercel.app" — configured in app.json under expo.extra.apiBaseUrl.
// Native apps have no "same origin" server, so this must be an absolute URL.
export const API_BASE_URL: string = Constants.expoConfig?.extra?.apiBaseUrl ?? ''
