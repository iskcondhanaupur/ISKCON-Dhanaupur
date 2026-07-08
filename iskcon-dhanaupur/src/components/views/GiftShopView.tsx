'use client'
import { motion } from 'framer-motion'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props { t: any; lang: Lang; onBack: () => void }

export default function GiftShopView({ t, lang, onBack }: Props) {
  const g = t.giftShop
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <PageBackground/>
      <div className="container" style={{ maxWidth: 480 }}>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="back-btn" onClick={onBack} style={{ marginBottom: 32 }}>{t.back}</motion.button>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 28 }}>
          <p className="t-label" style={{ marginBottom: 6 }}>{isHi ? 'मंदिर में आपका स्वागत है' : 'Welcome to the Temple'}</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', color: 'var(--maroon)', marginBottom: 4, fontFamily: ff, fontWeight: 600 }}>{g.title}</h1>
          <p style={{ fontSize: 17, color: 'var(--gold)', fontFamily: ff }}>{g.subtitle}</p>
          <div style={{ width: 60, height: 1.5, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', marginTop: 14 }} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          style={{ background: 'var(--gold-pale)', border: '1.5px dashed var(--gold)', borderRadius: 12, padding: '40px 20px', textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🛍️</div>
          <p style={{ fontFamily: ff, fontSize: 20, fontWeight: 700, color: 'var(--maroon)', marginBottom: 10 }}>{g.comingSoonLabel}</p>
          <p style={{ fontSize: 14, color: 'var(--muted)', fontFamily: isHi ? ff : 'Crimson Text, serif', lineHeight: 1.6, margin: 0 }}>{g.message}</p>
        </motion.div>
      </div>
    </section>
  )
}
