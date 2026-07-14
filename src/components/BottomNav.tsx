import { NavLink } from 'react-router-dom'
import { Home, LayoutGrid, Trophy, User } from 'lucide-react'
import clsx from 'clsx'

const tabs = [
  { to: '/home', label: 'Home', Icon: Home },
  { to: '/templates', label: 'Templates', Icon: LayoutGrid },
  { to: '/leaderboard', label: 'Community', Icon: Trophy },
  { to: '/profile', label: 'Profile', Icon: User },
]

export default function BottomNav() {
  return (
    <div className="sticky bottom-0 left-0 right-0 px-4 pb-[calc(env(safe-area-inset-bottom)+14px)] pt-3 pointer-events-none">
      <nav className="pointer-events-auto mx-auto max-w-xs bg-ink-950 rounded-full shadow-[var(--shadow-nav)] px-2 py-2 flex items-stretch justify-between">
        {tabs.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-1.5 rounded-full px-3.5 py-2.5 text-xs font-display font-semibold transition-colors',
                isActive ? 'bg-white text-ink-950' : 'text-white/55',
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={17} strokeWidth={2.25} />
                {isActive && <span className="whitespace-nowrap">{label}</span>}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
