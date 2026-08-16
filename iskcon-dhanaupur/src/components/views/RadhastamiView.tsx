'use client'
import { motion } from 'framer-motion'
import { Hammer } from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

const copy = {
  en: {
    label: 'Festival, 2026',
    title: 'Radhastami',
    subtitle: 'Appearance Day of Srimati Radharani',
    
    wipDesc: 'Details for this festival will be featured here soon.',
    back: 'Back',
  },
  hi: {
    label: 'महोत्सव, 2026',
    title: 'राधाष्टमी',
    subtitle: 'श्रीमती राधारानी का प्रकट उत्सव',
    
    wipDesc: 'इस उत्सव का विवरण शीघ्र यहाँ प्रस्तुत किया जाएगा।',
    back: 'पीछे जाएँ',
  },
}

interface Props {
  lang: Lang
  onBack: () => void
}

export default function RadhastamiView({ lang, onBack }: Props) {
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'
  const c = copy[lang]

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <PageBackground />
      <div className="container" style={{ maxWidth: 480 }}>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="back-btn"
          onClick={onBack}
          style={{ marginBottom: 32 }}
        >
          {c.back}
        </motion.button>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 28 }}>
          <p className="t-label" style={{ marginBottom: 6 }}>{c.label}</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', color: 'var(--maroon)', marginBottom: 4, fontFamily: ff, fontWeight: 600 }}>
            {c.title}
          </h1>
          <p style={{ fontSize: 17, color: 'var(--gold)', fontFamily: ff, marginBottom: 10 }}>
            {c.subtitle}
          </p>
          <div className="gold-line" style={{ maxWidth: 60, marginTop: 14 }} />
        </motion.div>

        {/* Default work-in-progress message */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: 'var(--gold-pale)',
            border: '1px solid var(--gold)',
            borderRadius: 16,
            padding: '20px 18px',
          }}
        >
          <Hammer size={22} color="var(--gold)" strokeWidth={1.8} style={{ flexShrink: 0 }} />
          <div>
            
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}>
              {c.wipDesc}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}