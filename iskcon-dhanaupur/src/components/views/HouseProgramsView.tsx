'use client'
import { motion } from 'framer-motion'
import { Landmark, Flame, Phone, ChevronRight } from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props { t: any; lang: Lang; onBack: () => void }

const ICONS = [Landmark, Flame]

export default function HouseProgramsView({ t, lang, onBack }: Props) {
  const hp = t.housePrograms
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'
  const fb = isHi ? 'Tiro Devanagari Hindi, serif' : 'Crimson Text, serif'

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <PageBackground />
      <div className="container" style={{ maxWidth: 480 }}>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="back-btn" onClick={onBack} style={{ marginBottom: 32 }}>{t.back}</motion.button>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          style={{ marginBottom: 28, textAlign: 'center' }}>
          <p className="t-label" style={{ marginBottom: 8 }}>
            {isHi ? 'मंदिर में आपका स्वागत है' : 'Welcome to the Temple'}
          </p>
          <div style={{
            width: 44, height: 1.5,
            background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
            margin: '0 auto 16px',
          }} />
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 36px)', color: 'var(--maroon)', marginBottom: 6, fontFamily: ff, fontWeight: 600 }}>
            {hp.title}
          </h1>
          <p style={{ fontSize: 17, color: 'var(--gold)', fontFamily: ff, marginBottom: 16 }}>
            {hp.subtitle}
          </p>
          <div style={{
            width: 60, height: 1.5,
            background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
            margin: '0 auto 20px',
          }} />
          <p style={{ fontSize: 15, color: 'var(--muted)', fontFamily: fb, lineHeight: 1.7, maxWidth: 380, margin: '0 auto' }}>
            {hp.desc}
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
          {hp.list.map((item: any, i: number) => {
            const Icon = ICONS[i] || Flame
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.08 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  background: 'var(--parchment)', border: '1px solid var(--border)',
                  borderLeft: '3px solid var(--gold)', borderRadius: 14, padding: '16px 18px',
                }}>
                <div style={{
                  width: 50, height: 50, borderRadius: '50%', flexShrink: 0,
                  background: 'var(--gold-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={24} color="var(--gold)" strokeWidth={1.6} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: ff, fontSize: 18, fontWeight: 600, color: 'var(--maroon)', marginBottom: 4 }}>
                    {item.name}
                  </p>
                  {item.desc ? (
                    <p style={{ fontSize: 13.5, color: 'var(--muted)', fontFamily: fb, lineHeight: 1.55 }}>
                      {item.desc}
                    </p>
                  ) : null}
                </div>
                <div style={{
                  width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                  background: 'var(--gold-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <ChevronRight size={17} color="var(--gold)" strokeWidth={2} />
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{
            display: 'flex', alignItems: 'center', gap: 16,
            background: 'var(--gold-pale)', border: '1px solid var(--border)',
            borderRadius: 14, padding: '18px 20px',
          }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
            background: 'var(--maroon)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Phone size={21} color="var(--gold-lt)" strokeWidth={1.8} />
          </div>
          <p style={{ fontSize: 14.5, color: 'var(--maroon)', fontFamily: ff, fontWeight: 700, lineHeight: 1.6 }}>
            {hp.contact}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
