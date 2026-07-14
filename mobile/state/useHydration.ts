import { useEffect, useState } from 'react'
import { useStore } from './store'

// AsyncStorage rehydration is async (unlike localStorage on web), so screens
// that branch on persisted state (e.g. "has a track already been picked?")
// need to wait for it before rendering, or they'll flash the wrong screen.
export function useHasHydrated() {
  const [hydrated, setHydrated] = useState(useStore.persist.hasHydrated())

  useEffect(() => {
    const unsub = useStore.persist.onFinishHydration(() => setHydrated(true))
    if (useStore.persist.hasHydrated()) setHydrated(true)
    return unsub
  }, [])

  return hydrated
}
