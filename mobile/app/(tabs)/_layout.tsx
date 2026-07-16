import { Tabs, TabSlot, TabList, TabTrigger } from 'expo-router/ui'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Home, LayoutGrid, Trophy, User } from 'lucide-react-native'
import TabBarButton from '../../components/TabBarButton'
import { navShadow } from '../../lib/shadow'

export default function TabsLayout() {
  const insets = useSafeAreaInsets()

  return (
    // NOTE: TabList must be a DIRECT child of <Tabs> (only a Fragment or TabList
    // may sit between them). expo-router's parseTriggersFromChildren walks the
    // children of <Tabs> and only recurses into Fragments and <TabList> — a
    // wrapping <View> hides the <TabTrigger>s, yielding zero screens and the
    // "Couldn't find any screens for the navigator" crash (on native AND web).
    // So the pill's outer spacing lives here as margins, not on a wrapper View.
    <Tabs>
      <TabSlot />
      <TabList
        className="mx-auto w-full max-w-xs bg-ink-950 rounded-full px-2 py-2 flex-row items-stretch justify-between"
        style={[navShadow, { marginTop: 12, marginBottom: insets.bottom + 14 }]}
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
    </Tabs>
  )
}
