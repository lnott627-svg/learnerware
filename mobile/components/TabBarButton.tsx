import { forwardRef } from 'react'
import { Pressable, Text, View, type PressableProps } from 'react-native'
import type { LucideIcon } from 'lucide-react-native'

interface TabBarButtonProps extends PressableProps {
  isFocused?: boolean
  Icon: LucideIcon
  label: string
}

const TabBarButton = forwardRef<View, TabBarButtonProps>(function TabBarButton(
  { isFocused, Icon, label, ...props },
  ref,
) {
  return (
    <Pressable ref={ref} {...props} className="flex-1">
      <View
        className={`flex-row items-center justify-center gap-1.5 rounded-full py-2.5 px-3 ${
          isFocused ? 'bg-white' : 'bg-transparent'
        }`}
      >
        <Icon size={17} strokeWidth={2.25} color={isFocused ? '#0f0e13' : 'rgba(255,255,255,0.55)'} />
        {isFocused && <Text className="text-white font-jakarta-semibold text-xs" style={{ color: '#0f0e13' }}>{label}</Text>}
      </View>
    </Pressable>
  )
})

export default TabBarButton
