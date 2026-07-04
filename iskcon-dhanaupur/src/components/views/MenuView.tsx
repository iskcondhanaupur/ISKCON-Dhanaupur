'use client'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play, CalendarDays, BookOpen, Users, MapPin, HeartHandshake, Info,
  ChevronDown, Hammer,
} from 'lucide-react'
import { Lang } from '@/data/content'

interface Props { t: any; lang: Lang; onSelect: (id: string) => void }

type SubItem = { id: string; label: string; sub?: string; comingSoon?: boolean }
type Category = { id: string; label: string; icon: any; items: SubItem[] }

// TODO: move labels into content.ts (t.categories) once Hindi copy is ready.
// ids below are placeholders — map them to your actual view ids in onSelect handling.
const CATEGORIES: Category[] = [
  {
    id: 'media', label: 'Media', icon: Play,
    items: [
      { id: 'darshan', label: 'Auspicious Darshan' },
      { id: 'gift-shop', label: 'Gift Shop' },
    ],
  },
  {
    id: 'celebrations', label: 'Celebrations', icon: CalendarDays,
    items: [
      { id: 'events', label: 'Upcoming Festivals' },
      { id: 'ekadashi', label: 'Upcoming Ekadashi' },
    ],
  },
  {
    id: 'preaching', label: 'Preaching & Education', icon: BookOpen,
    items: [
      { id: 'preachers', label: 'Our Preachers' },
      { id: 'centers', label: 'Centres' },
      { id: 'weekly-programs', label: 'Weekly Programs' },
      { id: 'house-programs', label: 'House Programs' },
      { id: 'youth-forum', label: 'ISKCON Youth Forum' },
    ],
  },
  {
    id: 'outreach', label: 'Outreach', icon: Users,
    items: [
      { id: 'outreach-visits', label: 'Visits', sub: 'HG Gaurang Das Prabhuji, Devkinandan Das Prabhuji' },
      { id: 'outreach-programs', label: 'Jail & School Programs', comingSoon: true },
    ],
  },
  {
    id: 'tours', label: 'Tours & Explorations', icon: MapPin,
    items: [
      { id: 'dham-yatras', label: 'Dham Yatras' },
    ],
  },
  {
    id: 'contribute', label: 'Contribute', icon: HeartHandshake,
    items: [
      { id: 'donate', label: 'Donate' },
      { id: 'helping-hand', label: 'Helping Hand' },
    ],
  },
  {
    id: 'about', label: 'Getting to Know Us', icon: Info,
    items: [
      { id: 'about-iskcon', label: 'About ISKCON' },
      { id: 'about-dhanaupur', label: 'About ISKCON Dhanaupur' },
      { id: 'contact-us', label: 'Contact Us' },
    ],
  },
]

const stagger = { animate: { transition: { staggerChildren: 0.06 } } }
const item = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } } }

export default function MenuView({ t, lang, onSelect }: Props) {
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'
  const fb = isHi ? 'Tiro Devanagari Hindi, serif' : 'Crimson Text, serif'

  // multiple categories can stay open at once — plain array of open ids
  const [openIds, setOpenIds] = useState<string[]>([])
  const toggle = (id: string) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  const carouselImages = [
    { src: '/deity1.jpg', alt: 'Sri Sri Radha ShyamSundar 1' },
    { src: '/Jagannath Darshan.jpeg', alt: 'Sri Sri Radha ShyamSundar 2' },
    { src: '/Gaur Nitai.jpeg', alt: 'Sri Sri Radha ShyamSundar 3' },
    { src: '/deity.jpg', alt: 'Sri Sri Radha ShyamSundar 1 Clone' },
  ]

  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px 40px', background: 'transparent' }}>

      <style jsx global>{`
        @keyframes continuousCarousel {
          0%, 28% { transform: translateX(0); }
          33%, 61% { transform: translateX(-25%); }
          66%, 94% { transform: translateX(-50%); }
          100% { transform: translateX(-75%); }
        }
        .sliding-track { display: flex; width: 400%; height: 100%; animation: continuousCarousel 12s infinite linear; }
      `}</style>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: 28, width: '100%', maxWidth: 480 }}>

        <div style={{
          width: '100%', margin: '0 auto 20px', borderRadius: 20, overflow: 'hidden',
          background: 'var(--cream)', position: 'relative', aspectRatio: '16/9',
          boxShadow: '0 0 18px 6px color-mix(in srgb, var(--gold) 25%, transparent), 0 0 40px 14px color-mix(in srgb, var(--maroon) 15%, transparent)',
        }}>
          <div className="sliding-track">
            {carouselImages.map((img, index) => (
              <div key={index} style={{ width: '25%', height: '100%', position: 'relative' }}>
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 600px) 100vw, 480px"
                  loading={index === 0 ? 'eager' : 'lazy'} style={{ objectFit: 'cover', zIndex: 1 }} />
              </div>
            ))}
          </div>
        </div>

        <h1 style={{ fontSize: 'clamp(20px, 3.5vw, 30px)', fontWeight: 700, color: 'var(--maroon)', marginBottom: 6, fontFamily: ff, letterSpacing: '0.02em' }}>
          {t.menuTitle}
        </h1>
        <p style={{ fontSize: 15, color: 'var(--gold)', fontFamily: fb, letterSpacing: '0.04em' }}>{t.menuSubtitle}</p>
        <div style={{ width: 60, height: 1.5, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', margin: '14px auto 0' }} />
      </motion.div>

      <motion.div variants={stagger} initial="initial" animate="animate"
        style={{ width: '100%', maxWidth: 480, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {CATEGORIES.map((cat) => {
          const isOpen = openIds.includes(cat.id)
          const Icon = cat.icon
          return (
            <motion.div key={cat.id} variants={item}
              style={{ background: 'var(--parchment)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>

              <button onClick={() => toggle(cat.id)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: 14,
                  padding: '14px 16px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left',
                }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                  background: 'var(--maroon)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={21} color="var(--gold-lt)" strokeWidth={1.9} />
                </div>
                <span style={{ flex: 1, fontFamily: ff, fontWeight: 700, fontSize: isHi ? 19 : 18.5, color: 'var(--maroon)' }}>
                  {cat.label}
                </span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown size={18} color="var(--gold)" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}>
                    <div style={{ padding: '0 16px 14px 66px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {cat.items.map((sub) =>
                        sub.comingSoon ? (
                          <div key={sub.id} style={{
                            display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                            background: 'var(--gold-pale)', borderRadius: 10, margin: '4px 0',
                          }}>
                            <Hammer size={16} color="var(--gold)" strokeWidth={1.8} />
                            <div>
                              <div style={{ fontFamily: fb, fontSize: 15.5, color: 'var(--maroon)', fontWeight: 600 }}>Hold on, work in progress</div>
                              <div style={{ fontFamily: fb, fontSize: 13.5, color: 'var(--muted)' }}>{sub.label}</div>
                            </div>
                          </div>
                        ) : (
                          <button key={sub.id} onClick={() => onSelect(sub.id)}
                            style={{
                              display: 'block', width: '100%', textAlign: 'left', background: 'transparent',
                              border: 'none', cursor: 'pointer', padding: '8px 10px', borderRadius: 8,
                            }}>
                            <div style={{ fontFamily: fb, fontSize: 15.5, color: 'var(--maroon-lt)', fontWeight: 600 }}>{sub.label}</div>
                            {sub.sub && (
                              <div style={{ fontFamily: fb, fontSize: 13.5, color: 'var(--muted)', marginTop: 2 }}>{sub.sub}</div>
                            )}
                          </button>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
