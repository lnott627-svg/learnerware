import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

const tabs = [
  { to: '/home', label: 'Home', icon: '🏠' },
  { to: '/templates', label: 'Templates', icon: '🗂️' },
  { to: '/leaderboard', label: 'Community', icon: '🏆' },
  { to: '/profile', label: 'Profile', icon: '👤' },
]

export default function BottomNav() {
  return (
    <nav className="sticky bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-cloud-200 px-2 pt-2 pb-[calc(env(safe-area-inset-bottom)+8px)] flex items-stretch justify-around">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) =>
            clsx(
              'flex flex-col items-center justify-center gap-0.5 flex-1 py-1.5 rounded-xl text-[11px] font-display font-semibold transition-colors',
              isActive ? 'text-brand-600' : 'text-ink-300',
            )
          }
        >
          <span className="text-xl leading-none">{tab.icon}</span>
          <span>{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
