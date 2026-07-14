import { Platform } from 'react-native'

// Cross-platform "soft card" shadow — NativeWind's shadow utilities are
// inconsistent between iOS/Android, so this is applied via style prop.
export const cardShadow = Platform.select({
  ios: {
    shadowColor: '#0f0e13',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  android: { elevation: 3 },
  default: {},
})

export const navShadow = Platform.select({
  ios: {
    shadowColor: '#0f0e13',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 18,
  },
  android: { elevation: 8 },
  default: {},
})
