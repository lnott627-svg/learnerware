/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  // Use class-based dark mode. Default ('media') makes NativeWind's web runtime
  // throw "Cannot manually set color scheme, as dark mode is type 'media'",
  // which pops a full-screen LogBox error overlay on the web dev server and
  // blocks interaction. The app is light-only, so 'class' (never toggled) just
  // keeps it light while silencing the crash.
  darkMode: 'class',
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        // Instrument Serif — H1 / display titles (Regular only).
        display: ['InstrumentSerif_400Regular'],
        serif: ['InstrumentSerif_400Regular'],
        // Host Grotesk — H2, body, labels, emphasis.
        'host-regular': ['HostGrotesk_400Regular'],
        'host-medium': ['HostGrotesk_500Medium'],
        'host-semibold': ['HostGrotesk_600SemiBold'],
        'host-bold': ['HostGrotesk_700Bold'],
        'host-extrabold': ['HostGrotesk_800ExtraBold'],
        // Legacy jakarta-* names repointed to Host Grotesk so existing classes
        // keep working without a repo-wide rename (regular/body, medium=H2,
        // bold/extrabold = emphasis like numbers, badges, buttons).
        'jakarta-regular': ['HostGrotesk_400Regular'],
        'jakarta-medium': ['HostGrotesk_500Medium'],
        'jakarta-semibold': ['HostGrotesk_600SemiBold'],
        'jakarta-bold': ['HostGrotesk_700Bold'],
        'jakarta-extrabold': ['HostGrotesk_800ExtraBold'],
      },
      colors: {
        ink: {
          950: '#0f0e13',
          900: '#17151d',
          700: '#3a3742',
          500: '#6b6874',
          300: '#a6a3ad',
          200: '#d7d5da',
          100: '#ececee',
        },
        paper: {
          50: '#fafafa',
          0: '#ffffff',
        },
        // Brand palette (100 tint / 200 card bg / 600 saturated fg).
        rose: { 100: '#F8E4EA', 200: '#EFC8D1', 600: '#C1506B' },
        brick: { 100: '#F4DFDF', 200: '#E6BEBF', 600: '#BE393B' },
        orange: { 100: '#FAEAD8', 200: '#F3D4B4', 600: '#D76D17' },
        // Functional state colors (correct / completion).
        success: { 100: '#E3F1E8', 200: '#C7E5D3', 600: '#2E8B57' },
        // Legacy aliases repointed to the new palette so existing className
        // color utilities keep resolving. lilac == primary highlight == brick.
        pink: { 100: '#F8E4EA', 200: '#EFC8D1', 600: '#C1506B' },
        coral: { 100: '#FAEAD8', 200: '#F3D4B4', 600: '#D76D17' },
        yellow: { 100: '#FAEAD8', 200: '#F3D4B4', 600: '#D76D17' },
        lilac: { 100: '#F4DFDF', 200: '#E6BEBF', 600: '#BE393B' },
        mint: { 100: '#E3F1E8', 200: '#C7E5D3', 600: '#2E8B57' },
      },
    },
  },
  plugins: [],
};
