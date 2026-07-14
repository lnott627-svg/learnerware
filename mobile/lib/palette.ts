export interface PastelTheme {
  name: string
  bg: string // tailwind bg class, light
  bgSolid: string // tailwind bg class, deeper (for icon chips etc)
  text: string // tailwind text class for accent text on paper bg
}

export const PASTELS: PastelTheme[] = [
  { name: 'pink', bg: 'bg-pink-200', bgSolid: 'bg-pink-100', text: 'text-pink-600' },
  { name: 'mint', bg: 'bg-mint-200', bgSolid: 'bg-mint-100', text: 'text-mint-600' },
  { name: 'yellow', bg: 'bg-yellow-200', bgSolid: 'bg-yellow-100', text: 'text-yellow-600' },
  { name: 'coral', bg: 'bg-coral-200', bgSolid: 'bg-coral-100', text: 'text-coral-600' },
  { name: 'lilac', bg: 'bg-lilac-200', bgSolid: 'bg-lilac-100', text: 'text-lilac-600' },
]

export function pastelFor(index: number): PastelTheme {
  return PASTELS[index % PASTELS.length]
}
