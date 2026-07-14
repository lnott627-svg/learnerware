import { View } from 'react-native'
import { Tabs, TabSlot, TabList, TabTrigger } from 'expo-router/ui'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Home, LayoutGrid, Trophy, User } from 'lucide-react-native'
import TabBarButton from '../../components/TabBarButton'
import { navShadow } from '../../lib/shadow'

export default function TabsLayout() {
  const insets = useSafeAreaInsets()

  return (
    <Tabs>
      <TabSlot />
      <View className="px-4" style={{ paddingBottom: insets.bottom + 14, paddingTop: 12 }}>
        <TabList
          className="mx-auto w-full max-w-xs bg-ink-950 rounded-full px-2 py-2 flex-row items-stretch justify-between"
          style={navShadow}
        >
          <TabTrigger name="home" href="/home" asChild>
            <TabBarButton Icon={Home} label="Home" />
          </TabTrigger>
          <TabTrigger name="templates" href="/templates" asChild>
            <TabBarButton Icon={LayoutGrid} label="Templates" />
          </TabTrigger>
          <TabTrigger name="leaderboard" href="/leaderboard" asChild>
            <TabBarButton Icon={Trophy} label="Community" />
          </TabTrigger>
          <TabTrigger name="profile" href="/profile" asChild>
            <TabBarButton Icon={User} label="Profile" />
          </TabTrigger>
        </TabList>
      </View>
    </Tabs>
  )
}
