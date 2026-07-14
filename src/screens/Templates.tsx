import { useState } from 'react'
import clsx from 'clsx'
import { templates, getUnit } from '../data/content'
import { useStore } from '../state/store'
import Card from '../components/Card'
import BottomNav from '../components/BottomNav'

export default function Templates() {
  const completedUnitIds = useStore((s) => s.completedUnitIds)
  const [openId, setOpenId] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const isUnlocked = (unlockUnitId: string | null) =>
    unlockUnitId === null || completedUnitIds.includes(unlockUnitId)

  const handleCopy = async (id: string, body: string) => {
    try {
      await navigator.clipboard.writeText(body)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 1500)
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <div className="flex-1 flex flex-col bg-cloud-50">
      <div className="px-6 pt-[calc(env(safe-area-inset-top)+20px)] pb-4 bg-white border-b border-cloud-200">
        <h1 className="font-display font-extrabold text-xl text-ink-900">Templates</h1>
        <p className="text-ink-500 text-sm mt-0.5">
          Real tools, unlocked as you finish units — no separate paywall.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-3">
        {templates.map((tmpl) => {
          const unlocked = isUnlocked(tmpl.unlockUnitId)
          const open = openId === tmpl.id
          const lockUnit = tmpl.unlockUnitId ? getUnit(tmpl.unlockUnitId) : null

          return (
            <Card key={tmpl.id} className={clsx('!p-4', !unlocked && 'opacity-70')}>
              <button
                className="w-full text-left flex items-start gap-3"
                onClick={() => unlocked && setOpenId(open ? null : tmpl.id)}
                disabled={!unlocked}
              >
                <span className="text-2xl shrink-0">{unlocked ? tmpl.emoji : '🔒'}</span>
                <div className="flex-1">
                  <p className="text-[11px] font-display font-bold text-brand-500 uppercase tracking-wide">
                    {tmpl.category}
                  </p>
                  <p className="font-display font-bold text-ink-900 text-sm">{tmpl.title}</p>
                  <p className="text-ink-500 text-xs mt-0.5">
                    {unlocked ? tmpl.description : `Unlock by finishing "${lockUnit?.title}"`}
                  </p>
                </div>
                {unlocked && <span className="text-ink-300">{open ? '▲' : '▼'}</span>}
              </button>
              {unlocked && open && (
                <div className="mt-3">
                  <pre className="whitespace-pre-wrap font-body text-sm text-ink-700 bg-cloud-100 rounded-xl p-3 leading-relaxed">
                    {tmpl.body}
                  </pre>
                  <button
                    onClick={() => handleCopy(tmpl.id, tmpl.body)}
                    className="mt-2 text-brand-500 text-sm font-display font-semibold"
                  >
                    {copiedId === tmpl.id ? 'Copied!' : 'Copy to clipboard'}
                  </button>
                </div>
              )}
            </Card>
          )
        })}
      </div>

      <BottomNav />
    </div>
  )
}
