// Mirrors tailwind.config.js — used wherever a raw color value is needed
// (icon `color` props, StatusBar, etc.) since NativeWind className styling
// doesn't reach into SVG icon strokes.
export const colors = {
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
  pink: { 100: '#ffe4e4', 200: '#ffd6d6', 600: '#e0566b' },
  mint: { 100: '#dcf6e8', 200: '#c8f2dc', 600: '#1f9d63' },
  yellow: { 100: '#fef3d6', 200: '#fdecb8', 600: '#b8860e' },
  coral: { 100: '#ffe2d1', 200: '#ffd2b8', 600: '#d1621f' },
  lilac: { 100: '#ece4ff', 200: '#ddccff', 600: '#6c47c9' },
}

export const pastelColors = [
  { bg: colors.pink[200], bgSolid: colors.pink[100], text: colors.pink[600] },
  { bg: colors.mint[200], bgSolid: colors.mint[100], text: colors.mint[600] },
  { bg: colors.yellow[200], bgSolid: colors.yellow[100], text: colors.yellow[600] },
  { bg: colors.coral[200], bgSolid: colors.coral[100], text: colors.coral[600] },
  { bg: colors.lilac[200], bgSolid: colors.lilac[100], text: colors.lilac[600] },
]

export function pastelColorFor(index: number) {
  return pastelColors[index % pastelColors.length]
}
