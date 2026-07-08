'use client'
import { motion } from 'framer-motion'
import { Landmark, Flag, Bell, Users, ArrowRight } from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props { t: any; lang: Lang; onBack: () => void }

// Hardcoded images — bypass content.ts image paths (same pattern as PreachersView)
const YATRA_IMAGES = [
  '/images/yatras/vrindavan.jpg',
  '/images/yatras/mayapur.jpg',
  '/images/yatras/jagannath.jpg',
]

const YATRA_ICONS = [Landmark, Flag, Bell]

export default function YatraView({ t, lang, onBack }: Props) {
  const y = t.yatra
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'
  const bodyFf = isHi ? ff : 'Crimson Text, serif'

  return (
    <section className="section" style={{ background: 'transparent', position: 'relative', overflow: 'hidden' }}>
      <PageBackground/>
      

      <div className="container" style={{ maxWidth: 620, position: 'relative' }}>
        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="back-btn" onClick={onBack}
          style={{ marginBottom: 32, display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--maroon)', fontFamily: bodyFf, fontSize: 15 }}
        >
          {t.back}
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 24 }}>
          <p className="t-label" style={{ marginBottom: 6, letterSpacing: 2, fontSize: 12, color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase' }}>
            {isHi ? 'तीर्थ यात्राएं' : 'Pilgrimages'}
          </p>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 42px)', color: 'var(--maroon)', marginBottom: 14, fontFamily: ff, fontWeight: 600 }}>
            {y.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, maxWidth: 220 }}>
            <div style={{ flex: 1, height: 1, background: 'var(--gold)' }} />
            <span style={{ fontSize: 14, color: 'var(--gold)' }}>❁</span>
            <div style={{ flex: 1, height: 1, background: 'var(--gold)' }} />
          </div>

          <p style={{ fontSize: 15, color: 'var(--muted)', fontFamily: bodyFf, lineHeight: 1.7, maxWidth: 460 }}>
            {y.desc}
          </p>
        </motion.div>

        {/* full-width divider with diamond */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, margin: '22px 0 28px' }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <span style={{ fontSize: 10, color: 'var(--gold)', transform: 'rotate(45deg)', width: 6, height: 6, border: '1px solid var(--gold)', display: 'inline-block' }} />
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {y.list.map((item: any, i: number) => {
            const Icon = YATRA_ICONS[i % YATRA_ICONS.length]
            const img = YATRA_IMAGES[i % YATRA_IMAGES.length]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 18,
                  background: 'color-mix(in srgb, var(--parchment) 90%, transparent)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: 14,
                }}
              >
                <div style={{
                  width: 110, height: 90, borderRadius: 10, overflow: 'hidden', flexShrink: 0,
                  backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center',
                }} />

                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 19, fontWeight: 600, color: 'var(--maroon)', marginBottom: 6, fontFamily: ff }}>
                    {item.name}
                  </p>
                  <p style={{ fontSize: 14, color: 'var(--muted)', fontFamily: bodyFf, lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>

                <div style={{
                  width: 52, height: 52, borderRadius: '50%', flexShrink: 0,
                  background: 'color-mix(in srgb, var(--gold) 12%, transparent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={22} color="var(--gold)" strokeWidth={1.75} />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          style={{
            marginTop: 26,
            padding: '18px 20px',
            background: 'color-mix(in srgb, var(--maroon) 6%, var(--parchment))',
            border: '1px solid var(--border)',
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
              background: 'color-mix(in srgb, var(--gold) 20%, transparent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Users size={20} color="var(--gold)" strokeWidth={1.75} />
            </div>
            <div>
              <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--maroon)', fontFamily: ff, marginBottom: 2 }}>
                {isHi ? 'एक आध्यात्मिक यात्रा शुरू करें' : 'Embark on a spiritual journey'}
              </p>
              <p style={{ fontSize: 13, color: 'var(--muted)', fontFamily: bodyFf, lineHeight: 1.5 }}>
                {isHi
                  ? 'भक्ति को मजबूत करें और जीवन भर की यादें बनाएं।'
                  : 'Strengthen your devotion and create memories for a lifetime.'}
              </p>
            </div>
          </div>

          <button
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: 'var(--maroon)', color: '#fff',
              border: 'none', borderRadius: 8,
              padding: '10px 18px', fontSize: 14, fontWeight: 600,
              fontFamily: bodyFf, cursor: 'pointer', whiteSpace: 'nowrap',
            }}
            onClick={() => {
              if (y.contact) window.location.href = y.contact
            }}
          >
            {isHi ? 'आगामी यात्राएं देखें' : 'Explore Upcoming Yatras'} <ArrowRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
