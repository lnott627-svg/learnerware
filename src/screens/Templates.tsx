import { useState } from 'react'
import clsx from 'clsx'
import { ChevronDown, ChevronUp, Lock, Copy } from 'lucide-react'
import { templates, getModule } from '../data/content'
import { useStore } from '../state/store'
import Card from '../components/Card'
import BottomNav from '../components/BottomNav'

export default function Templates() {
  const completedModuleIds = useStore((s) => s.completedModuleIds)
  const [openId, setOpenId] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const isUnlocked = (unlockModuleId: string | null) =>
    unlockModuleId === null || completedModuleIds.includes(unlockModuleId)

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
    <div className="flex-1 flex flex-col bg-paper-50">
      <div className="px-6 pt-[calc(env(safe-area-inset-top)+20px)] pb-4">
        <h1 className="font-display font-extrabold text-xl text-ink-950">Templates</h1>
        <p className="text-ink-500 text-sm mt-0.5">
          Real tools, unlocked as you finish modules — no separate paywall.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-3">
        {templates.map((tmpl) => {
          const unlocked = isUnlocked(tmpl.unlockModuleId)
          const open = openId === tmpl.id
          const lockModule = tmpl.unlockModuleId ? getModule(tmpl.unlockModuleId) : null
          const Icon = tmpl.icon

          return (
            <Card key={tmpl.id} className={clsx('!p-4', !unlocked && 'opacity-60')}>
              <button
                className="w-full text-left flex items-start gap-3"
                onClick={() => unlocked && setOpenId(open ? null : tmpl.id)}
                disabled={!unlocked}
              >
                <div className="w-10 h-10 rounded-xl bg-ink-100 flex items-center justify-center shrink-0">
                  {unlocked ? (
                    <Icon size={18} strokeWidth={2.25} className="text-ink-950" />
                  ) : (
                    <Lock size={16} strokeWidth={2.25} className="text-ink-300" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-display font-bold text-lilac-600 uppercase tracking-wide">
                    {tmpl.category}
                  </p>
                  <p className="font-display font-bold text-ink-950 text-sm">{tmpl.title}</p>
                  <p className="text-ink-500 text-xs mt-0.5">
                    {unlocked ? tmpl.description : `Unlock by finishing "${lockModule?.title}"`}
                  </p>
                </div>
                {unlocked && (open ? <ChevronUp size={18} className="text-ink-300 shrink-0" /> : <ChevronDown size={18} className="text-ink-300 shrink-0" />)}
              </button>
              {unlocked && open && (
                <div className="mt-3">
                  <pre className="whitespace-pre-wrap font-body text-sm text-ink-700 bg-ink-100 rounded-xl p-3 leading-relaxed">
                    {tmpl.body}
                  </pre>
                  <button
                    onClick={() => handleCopy(tmpl.id, tmpl.body)}
                    className="mt-2 inline-flex items-center gap-1.5 text-ink-950 text-sm font-display font-semibold"
                  >
                    <Copy size={14} strokeWidth={2.25} />
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
