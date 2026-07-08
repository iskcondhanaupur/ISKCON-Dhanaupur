'use client'
import { motion } from 'framer-motion'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props { t: any; lang: Lang; onBack: () => void }

export default function CentresView({ t, lang, onBack }: Props) {
  const c = t.centres
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <PageBackground />
      <div className="container" style={{ maxWidth: 480 }}>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="back-btn" onClick={onBack} style={{ marginBottom: 32 }}>{t.back}</motion.button>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 28 }}>
          <p className="t-label" style={{ marginBottom: 6 }}>{isHi ? 'मंदिर में आपका स्वागत है' : 'Welcome to the Temple'}</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', color: 'var(--maroon)', marginBottom: 4, fontFamily: ff, fontWeight: 600 }}>{c.title}</h1>
          <p style={{ fontSize: 17, color: 'var(--gold)', fontFamily: ff }}>{c.subtitle}</p>
          <div style={{ width: 60, height: 1.5, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', marginTop: 14 }} />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {c.list.map((centre: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * i + 0.1 }}
              style={{ background: 'var(--parchment)', border: '1.5px solid var(--border)', borderRadius: 10, padding: '16px', borderLeft: '3px solid var(--gold)' }}>
              <p style={{ fontFamily: ff, fontSize: 18, fontWeight: 600, color: 'var(--maroon)', marginBottom: 6 }}>{centre.name}</p>
              <p style={{ fontSize: 14, color: 'var(--muted)', fontFamily: isHi ? ff : 'Crimson Text, serif', lineHeight: 1.6 }}>
                {centre.address || c.addressPlaceholder}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
