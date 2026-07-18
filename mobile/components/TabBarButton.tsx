import { forwardRef } from 'react'
import { Pressable, View, type PressableProps } from 'react-native'
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
  // Icon-only tab bar — the page title now lives as a heading at the top of each
  // screen, so we drop the visible label here (kept as accessibilityLabel).
  return (
    <Pressable ref={ref} accessibilityLabel={label} {...props} className="flex-1">
      <View
        className={`items-center justify-center rounded-full py-2.5 ${
          isFocused ? 'bg-white' : 'bg-transparent'
        }`}
      >
        <Icon size={20} strokeWidth={2.25} color={isFocused ? '#0f0e13' : 'rgba(255,255,255,0.55)'} />
      </View>
    </Pressable>
  )
})

export default TabBarButton
