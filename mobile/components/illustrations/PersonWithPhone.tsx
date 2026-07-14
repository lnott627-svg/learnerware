import Svg, { Circle, Path, Rect } from 'react-native-svg'

export default function PersonWithPhone({ size = 192, color = '#0f0e13' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 320 320" fill="none">
      {/* floating accents */}
      <Circle cx="52" cy="56" r="14" stroke={color} strokeWidth="2" />
      <Path
        d="M258 44 L262 54 L272 58 L262 62 L258 72 L254 62 L244 58 L254 54 Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <Path
        d="M46 220c0-8 6-14 14-14h16c8 0 14 6 14 14v6c0 2-2 4-4 4h-8l-6 8-4-8h-8c-2 0-4-2-4-4Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <Path d="M270 210c10 0 18 8 18 18s-8 18-18 18" stroke={color} strokeWidth="2" strokeLinecap="round" />

      {/* ground */}
      <Path d="M92 268c8 10 128 10 136 0" stroke={color} strokeWidth="2" strokeLinecap="round" />

      {/* body */}
      <Circle cx="160" cy="108" r="30" stroke={color} strokeWidth="2.5" />
      <Path d="M110 250c0-38 22-64 50-64s50 26 50 64" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <Path d="M112 250c10-14 34-20 48-8" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <Path d="M208 250c-10-14-34-20-48-8" stroke={color} strokeWidth="2.5" strokeLinecap="round" />

      {/* arms raised holding phone */}
      <Path d="M132 196c-6-24-2-46 14-56" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <Path d="M188 196c6-24 2-46-14-56" stroke={color} strokeWidth="2.5" strokeLinecap="round" />

      {/* phone */}
      <Rect x="136" y="118" width="48" height="80" rx="10" stroke={color} strokeWidth="2.5" />
      <Path d="M152 128h16" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <Circle cx="160" cy="158" r="14" stroke={color} strokeWidth="2" />
      <Path d="M156 152l10 6-10 6Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </Svg>
  )
}
