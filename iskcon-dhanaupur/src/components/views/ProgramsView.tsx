'use client'
import { motion } from 'framer-motion'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props { t: any; lang: Lang; onBack: () => void }

export default function ProgramsView({ t, lang, onBack }: Props) {
  const p = t.programs
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <PageBackground/>
      <div className="container" style={{ maxWidth: 480 }}>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="back-btn" onClick={onBack} style={{ marginBottom: 32 }}>{t.back}</motion.button>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 28 }}>
          <p className="t-label" style={{ marginBottom: 6 }}>{isHi ? 'मंदिर में आपका स्वागत है' : 'Welcome to the Temple'}</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', color: 'var(--maroon)', marginBottom: 4, fontFamily: ff, fontWeight: 600 }}>{p.title}</h1>
          <p style={{ fontSize: 17, color: 'var(--gold)', fontFamily: ff }}>{p.subtitle}</p>
          <div style={{ width: 60, height: 1.5, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', marginTop: 14 }} />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} style={{ marginBottom: 32 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--gold)', marginBottom: 14, fontFamily: 'Crimson Text, serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.weekday}</p>
          <div style={{ background: 'var(--parchment)', border: '1.5px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
            {p.schedule.map((row: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.04 * i + 0.1 }}
                style={{ display: 'flex', gap: 16, padding: '14px 16px', borderBottom: i < p.schedule.length - 1 ? '1px solid var(--border)' : 'none', background: i % 2 === 0 ? 'var(--parchment)' : 'var(--cream)', alignItems: 'flex-start' }}>
                <div style={{ minWidth: 90 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--gold)', fontFamily: 'Crimson Text, serif', letterSpacing: '0.06em' }}>{row.time}</span>
                </div>
                <div>
                  <p style={{ fontFamily: ff, fontSize: 16, fontWeight: 600, color: 'var(--maroon)', marginBottom: 2 }}>{row.prog}</p>
                  <p style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'Crimson Text, serif' }}>{row.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--gold)', marginBottom: 14, fontFamily: 'Crimson Text, serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.weekend}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {p.special.map((sp: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 + i * 0.08 }}
                style={{ background: 'var(--parchment)', border: '1.5px solid var(--border)', borderRadius: 10, padding: '16px', borderLeft: '3px solid var(--gold)' }}>
                <p style={{ fontFamily: ff, fontSize: 17, fontWeight: 600, color: 'var(--maroon)', marginBottom: 6 }}>{sp.name}</p>
                <p style={{ fontSize: 14, color: 'var(--muted)', fontFamily: isHi ? ff : 'Crimson Text, serif', lineHeight: 1.6 }}>{sp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
