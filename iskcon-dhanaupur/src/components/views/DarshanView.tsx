'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Flame, Sprout, Shell, UtensilsCrossed, Building2, Sunrise, Flower2, MoonStar,
  Calendar, Images, ExternalLink,
} from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props { t: any; lang: Lang; onBack: () => void }

// TODO: replace with the temple's actual public Google Photos album share link
const GOOGLE_PHOTOS_LINK = 'https://photos.google.com/share/YOUR_ALBUM_LINK_HERE'

// Icon assigned to each schedule row, in order
const SCHEDULE_ICONS = [Flame, Sprout, Shell, UtensilsCrossed, Building2, Sunrise, Flower2, MoonStar]

// Gallery is organised as date-only sections (no title/desc) —
// each box just shows a Calendar icon and its date. Edit dates as needed.
const GALLERY_SECTIONS = [
  { en: { date: 'Every day' },                hi: { date: 'प्रतिदिन' } },
  { en: { date: 'Every evening, 6:45 PM' },   hi: { date: 'प्रतिदिन शाम 6:45 बजे' } },
  { en: { date: 'Festival occasions' },       hi: { date: 'उत्सव अवसरों पर' } },
  { en: { date: 'Round the year' },           hi: { date: 'वर्ष भर' } },
]

export default function DarshanView({ t, lang, onBack }: Props) {
  const d = t.darshan
  const isHi = lang === 'hi'
  const [activeTab, setActiveTab] = useState<'story' | 'media'>('story')
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <PageBackground/>
      <div className="container" style={{ maxWidth: 480 }}>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="back-btn" onClick={onBack} style={{ marginBottom: 24 }}>{t.back}</motion.button>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 20, textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(35px, 4vw, 34px)', color: 'var(--maroon)', marginBottom: 8, fontFamily: ff, fontWeight: 600 }}>{d.title}</h1>
          <div style={{ width: 90, height: 1.5, background: 'var(--border)', margin: '0 auto 16px' }} />
          <p style={{ fontSize: 17, color: 'var(--gold)', fontFamily: ff, maxWidth: 420, margin: '0 auto' }}>
            {isHi
              ? 'भगवान श्री श्री राधा श्यामसुंदर जी, श्री श्री जगन्नाथ बलदेव सुभद्रा जी, श्री श्री गौर निताई सुंदर जी के दिव्य दर्शन।'
              : 'Relish beautiful, enchanting and divine darshans of Lord Shri Shri Radha Shyamsundar ji, Shri Shri Jagannath Baldev Subhadra ji, Shri Shri Gaur Nitai Sundar ji.'}
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 24, background: 'var(--parchment)', border: '1.5px solid var(--border)', borderRadius: 999, padding: 6 }}>
          {[
            { key: 'story', en: 'Daily Schedule', hi: 'दैनिक कार्यक्रम', Icon: Calendar },
            { key: 'media', en: 'Gallery', hi: 'गैलरी', Icon: Images },
          ].map(tab => {
            const isActive = activeTab === tab.key
            const { Icon } = tab
            return (
              <button key={tab.key} onClick={() => setActiveTab(tab.key as any)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '10px 20px', border: 'none', borderRadius: 999, cursor: 'pointer',
                  background: isActive ? 'var(--maroon)' : 'transparent',
                  transition: 'all 0.2s', flex: 1,
                }}>
                <Icon size={16} color={isActive ? '#fff' : 'var(--muted)'} />
                <span style={{ fontSize: 15, fontWeight: 600, color: isActive ? '#fff' : 'var(--muted)', fontFamily: ff, whiteSpace: 'nowrap' }}>
                  {isHi ? tab.hi : tab.en}
                </span>
              </button>
            )
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'story' && (
            <motion.div key="story" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
              <div style={{ background: 'var(--parchment)', border: '1.5px solid var(--border)', borderRadius: 14, overflow: 'hidden', marginBottom: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '58px 1fr', background: 'var(--maroon)', padding: '10px 16px', alignItems: 'center' }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.8)', fontFamily: 'Crimson Text, serif', letterSpacing: '0.1em', textTransform: 'uppercase' }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.8)', fontFamily: 'Crimson Text, serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{isHi ? 'दैनिक कार्यक्रम' : 'Daily Program'}</span>
                </div>
                {d.schedule.map((row: any, i: number) => {
                  const Icon = SCHEDULE_ICONS[i % SCHEDULE_ICONS.length]
                  return (
                    <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.04 * i }}
                      style={{ display: 'grid', gridTemplateColumns: '58px 1fr', padding: '14px 16px', borderBottom: i < d.schedule.length - 1 ? '1px solid var(--border)' : 'none', background: i % 2 === 0 ? 'var(--parchment)' : 'var(--cream)', gap: 8, alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{
                          width: 44, height: 44, borderRadius: '50%',
                          background: 'color-mix(in srgb, var(--gold) 16%, transparent)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        }}>
                          <Icon size={20} color="var(--gold)" strokeWidth={1.75} />
                        </div>
                      </div>
                      <div>
                        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--gold)', fontFamily: 'Crimson Text, serif', letterSpacing: '0.06em' }}>{row.time}</span>
                        <p style={{ fontFamily: ff, fontSize: 16, fontWeight: 600, color: 'var(--maroon)', marginTop: 2, marginBottom: 2 }}>{row.name}</p>
                        <p style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'Crimson Text, serif', lineHeight: 1.5 }}>{row.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
              {d.note && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', background: 'var(--parchment)', border: '1px solid var(--border)', borderRadius: 8 }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: '50%', background: 'var(--maroon)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Flower2 size={16} color="#fff" />
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--muted)', fontFamily: isHi ? ff : 'Crimson Text, serif' }}>{d.note}</p>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'media' && (
            <motion.div key="media" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
                {GALLERY_SECTIONS.map((sec, i) => {
                  const c = isHi ? sec.hi : sec.en
                  return (
                    <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px',
                        background: 'var(--parchment)', border: '1.5px solid var(--border)', borderRadius: 12,
                      }}>
                      <div style={{
                        width: 46, height: 46, borderRadius: '50%',
                        background: 'color-mix(in srgb, var(--gold) 16%, transparent)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        <Calendar size={21} color="var(--gold)" strokeWidth={1.75} />
                      </div>
                      <p style={{ fontFamily: ff, fontSize: 17, fontWeight: 600, color: 'var(--maroon)' }}>{c.date}</p>
                    </motion.div>
                  )
                })}
              </div>

              <div style={{ textAlign: 'center' }}>
                <a href={GOOGLE_PHOTOS_LINK} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--maroon)', color: '#fff', borderRadius: 999, padding: '12px 28px', textDecoration: 'none', fontSize: 15, fontWeight: 600, fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.04em' }}>
                  <Images size={17} />
                  {isHi ? 'सभी दर्शन फोटो देखें' : 'View All Darshan Photos'}
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
