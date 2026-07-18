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
        'jakarta-regular': ['PlusJakartaSans_400Regular'],
        'jakarta-medium': ['PlusJakartaSans_500Medium'],
        'jakarta-semibold': ['PlusJakartaSans_600SemiBold'],
        'jakarta-bold': ['PlusJakartaSans_700Bold'],
        'jakarta-extrabold': ['PlusJakartaSans_800ExtraBold'],
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
        pink: {
          100: '#ffe4e4',
          200: '#ffd6d6',
          600: '#e0566b',
        },
        mint: {
          100: '#dcf6e8',
          200: '#c8f2dc',
          600: '#1f9d63',
        },
        yellow: {
          100: '#fef3d6',
          200: '#fdecb8',
          600: '#b8860e',
        },
        coral: {
          100: '#ffe2d1',
          200: '#ffd2b8',
          600: '#d1621f',
        },
        lilac: {
          100: '#ece4ff',
          200: '#ddccff',
          600: '#6c47c9',
        },
      },
    },
  },
  plugins: [],
};
