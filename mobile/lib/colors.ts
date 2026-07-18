// Mirrors tailwind.config.js — used wherever a raw color value is needed
// (icon `color` props, StatusBar, etc.) since NativeWind className styling
// doesn't reach into SVG icon strokes.

// Neutrals (unchanged): near-black text + off-white paper background.
const ink = {
  950: '#0f0e13',
  900: '#17151d',
  700: '#3a3742',
  500: '#6b6874',
  300: '#a6a3ad',
  200: '#d7d5da',
  100: '#ececee',
}
const paper = {
  50: '#fafafa',
  0: '#ffffff',
}

// ---- Brand palette -----------------------------------------------------------
// Three warm hues from the design spec. Each family: 100 = light tint (surfaces),
// 200 = card background, 600 = saturated foreground (icons / accents / text).
const rose = { 100: '#F8E4EA', 200: '#EFC8D1', 600: '#C1506B' } // pale pink
const brick = { 100: '#F4DFDF', 200: '#E6BEBF', 600: '#BE393B' } // brick red
const orange = { 100: '#FAEAD8', 200: '#F3D4B4', 600: '#D76D17' } // burnt orange

// Functional state colors — kept (intentionally) for correct/incorrect answer
// feedback and completion, where green=right / red=wrong reads instantly. The
// error red reuses the brand brick so it still sits in the palette.
const success = { 100: '#E3F1E8', 200: '#C7E5D3', 600: '#2E8B57' }

export const colors = {
  ink,
  paper,
  rose,
  brick,
  orange,
  success,
  // Legacy aliases so existing screens keep compiling; repointed to the new
  // palette. `lilac` was the primary highlight accent -> brick red now.
  pink: rose,
  coral: orange,
  yellow: orange,
  lilac: brick,
  mint: success,
}

// Module cards / badges rotate through the three brand hues.
export const pastelColors = [
  { bg: rose[200], bgSolid: rose[100], text: rose[600] },
  { bg: brick[200], bgSolid: brick[100], text: brick[600] },
  { bg: orange[200], bgSolid: orange[100], text: orange[600] },
]

export function pastelColorFor(index: number) {
  return pastelColors[index % pastelColors.length]
}
