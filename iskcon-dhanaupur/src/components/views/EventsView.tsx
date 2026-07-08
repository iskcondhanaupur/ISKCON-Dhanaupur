'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { CalendarDays, ChevronRight, Flag, PartyPopper, Footprints, Flower2, Droplets, Sparkles, Moon } from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props { t: any; lang: Lang; onBack: () => void }

const ICONS: Record<string, any> = {
  rathyatra: Flag,
  janmashtami: PartyPopper,
  'srila-prabhupada-appearance': Footprints,
  radhastami: Flower2,
  'radha-kund-appearance': Droplets,
  diwali: Sparkles,
  'vaikuntha-ekadashi': Moon,
}

export default function EventsView({ t, lang, onBack }: Props) {
  const ev = t.events
  const router = useRouter()
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <PageBackground/>
      <div className="container" style={{ maxWidth: 480 }}>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="back-btn" onClick={onBack} style={{ marginBottom: 32 }}>{t.back}</motion.button>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 28 }}>
          <p className="t-label" style={{ marginBottom: 6 }}>{isHi ? 'कैलेंडर २०२६' : 'Calendar 2026'}</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', color: 'var(--maroon)', marginBottom: 4, fontFamily: ff, fontWeight: 600 }}>{ev.title}</h1>
          <p style={{ fontSize: 17, color: 'var(--gold)', fontFamily: ff }}>{ev.subtitle}</p>
          <div style={{ width: 60, height: 1.5, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', marginTop: 14 }} />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {ev.list.map((item: any, i: number) => {
            const Icon = ICONS[item.slug] || Flag
            const isActive = !!item.active

            return (
              <motion.div
                key={item.slug || i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.07 * i }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 14, width: '100%', textAlign: 'left',
                  background: isActive ? 'var(--parchment)' : 'transparent',
                  border: isActive ? '1.5px solid var(--gold)' : '1px dashed var(--border)',
                  borderRadius: 16, padding: '14px 16px',
                  opacity: isActive ? 1 : 0.55,
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                  background: isActive ? 'var(--maroon)' : 'var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={22} color={isActive ? 'var(--gold-lt)' : 'var(--muted)'} strokeWidth={1.9} />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: ff, fontSize: isHi ? 16 : 17, fontWeight: 600, color: isActive ? 'var(--maroon)' : 'var(--muted)', marginBottom: 3 }}>{item.name}</p>
                  <p style={{ fontSize: 13, color: 'var(--muted)', fontFamily: isHi ? ff : 'Crimson Text, serif', lineHeight: 1.5 }}>{item.desc}</p>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12.5,
                    color: isActive ? 'var(--gold)' : 'var(--muted)', fontFamily: 'Crimson Text, serif', marginTop: 6,
                  }}>
                    <CalendarDays size={13} />
                    {item.date} {item.month}
                  </span>
                </div>

                {isActive && (
                  <button
                    onClick={() => router.push(`/events/${item.slug}`)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0,
                      background: 'var(--maroon)', color: '#fff', border: 'none', borderRadius: 20,
                      padding: '8px 14px', fontSize: 13, fontWeight: 600, fontFamily: ff, cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {ev.viewMore}
                    <ChevronRight size={14} />
                  </button>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
