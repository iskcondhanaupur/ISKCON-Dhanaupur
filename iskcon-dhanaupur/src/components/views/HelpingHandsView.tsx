'use client'
import { motion } from 'framer-motion'
import { Users, Share2, Flower2 } from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props { t: any; lang: Lang; onBack: () => void; onNavigate?: (view: string) => void }

const ICONS = [Users, Share2, Flower2]

export default function HelpingHandsView({ t, lang, onBack, onNavigate }: Props) {
  const h = t.helpingHands
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'
  const fb = isHi ? 'Tiro Devanagari Hindi, serif' : 'Crimson Text, serif'

  const handleDonate = () => {
    if (onNavigate) onNavigate('donation')
  }

  const handleConnect = () => {
    const message = isHi ? 'हरे कृष्ण! मैं मंदिर के नेटवर्क विस्तार में सहयोग करना चाहता/चाहती हूं।' : 'Hare Krishna! I would like to help extend the temple\'s network.'
    window.open(`https://wa.me/918127443777?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <PageBackground />
      <div className="container" style={{ maxWidth: 480 }}>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="back-btn" onClick={onBack} style={{ marginBottom: 32 }}>{t.back}</motion.button>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: 24, textAlign: 'center' }}>
          <p className="t-label" style={{ marginBottom: 6 }}>
            {isHi ? 'मंदिर में आपका स्वागत है' : 'Welcome to the Temple'}
          </p>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 36px)', color: 'var(--maroon)', marginBottom: 4, fontFamily: ff, fontWeight: 600 }}>
            {h.title}
          </h1>
          <p style={{ fontSize: 17, color: 'var(--gold)', fontFamily: ff }}>
            {h.subtitle}
          </p>
          <div style={{
            width: 60, height: 1.5,
            background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
            margin: '14px auto 0',
          }} />
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          style={{ fontSize: 15, color: 'var(--muted)', fontFamily: fb, lineHeight: 1.7, textAlign: 'center', marginBottom: 32 }}>
          {h.desc}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{
            display: 'flex', border: '1px solid var(--border)', borderRadius: 14,
            background: 'var(--parchment)', padding: '22px 12px', marginBottom: 28,
          }}>
          {h.features?.map((f: any, i: number) => {
            const Icon = ICONS[i] || Users
            return (
              <div key={i} style={{
                flex: 1, textAlign: 'center', padding: '0 6px',
                borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{
                  width: 46, height: 46, borderRadius: '50%', margin: '0 auto 10px',
                  background: i === 1 ? 'var(--gold)' : 'var(--maroon)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={21} color={i === 1 ? 'var(--maroon)' : 'var(--gold-lt)'} strokeWidth={1.7} />
                </div>
                <p style={{ fontFamily: ff, fontSize: 14, fontWeight: 700, color: 'var(--maroon)', marginBottom: 4, lineHeight: 1.3 }}>
                  {f.title}
                </p>
                <p style={{ fontSize: 11.5, color: 'var(--muted)', fontFamily: fb, lineHeight: 1.4 }}>
                  {f.desc}
                </p>
              </div>
            )
          })}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <button onClick={handleDonate}
            style={{ width: '100%', padding: '14px', background: 'var(--maroon)', color: '#fff', border: 'none', borderRadius: 8, fontFamily: ff, fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
            {h.donateCta}
          </button>
          <button onClick={handleConnect}
            style={{ width: '100%', padding: '14px', background: '#25D366', color: '#fff', border: 'none', borderRadius: 8, fontFamily: ff, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <span>💬</span> {h.connectCta}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
