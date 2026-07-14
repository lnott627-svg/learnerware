import type { ReactNode } from 'react'
import { View, type ViewProps } from 'react-native'
import { cardShadow } from '../lib/shadow'

interface CardProps extends ViewProps {
  children: ReactNode
}

export default function Card({ style, children, ...props }: CardProps) {
  return (
    <View
      className="bg-white rounded-3xl p-5"
      style={[cardShadow, style]}
      {...props}
    >
      {children}
    </View>
  )
}
