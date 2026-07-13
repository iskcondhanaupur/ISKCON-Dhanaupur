'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play, CalendarDays, BookOpen, Users, MapPin, HeartHandshake, Info,
  ChevronDown, Hammer,
} from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props { t: any; lang: Lang; onSelect: (id: string) => void }

type SubItem = { id: string; label: string; labelHi: string; sub?: string; subHi?: string; comingSoon?: boolean }
type Category = { id: string; label: string; labelHi: string; icon: any; items: SubItem[] }

const ROUTE_ID_MAP: Record<string, string> = {
  'gift-shop': 'giftshop',
  'centers': 'centres',
  'weekly-programs': 'weeklyprograms',
  'house-programs': 'houseprograms',
  'youth-forum': 'youthforum',
  'outreach-visits': 'outreach',
  'dham-yatras': 'yatra',
  donate: 'donation',
  'helping-hand': 'helpinghands',
  'about-iskcon': 'iskcon',
  'about-dhanaupur': 'about',
  'contact-us': 'connect',
}

const CATEGORIES: Category[] = [
  {
    id: 'media', label: 'Media', labelHi: 'मीडिया', icon: Play,
    items: [
      { id: 'darshan', label: 'Shubh Darshan', labelHi: 'शुभ दर्शन' },
      { id: 'giftshop', label: 'Gift Shop', labelHi: 'गिफ्ट शॉप' },
    ],
  },
  {
    id: 'celebrations', label: 'Celebrations', labelHi: 'उत्सव', icon: CalendarDays,
    items: [
      { id: 'events', label: 'Upcoming Festivals', labelHi: 'आगामी उत्सव' },
      { id: 'ekadashi', label: 'Upcoming Ekadashi', labelHi: 'आगामी एकादशी' },
    ],
  },
  {
    id: 'preaching', label: 'Preaching & Education', labelHi: 'प्रचार एवं शिक्षा', icon: BookOpen,
    items: [
      { id: 'preachers', label: 'Our Preachers', labelHi: 'हमारे प्रचारक' },
      { id: 'centres', label: 'Centres', labelHi: 'केंद्र' },
      { id: 'weeklyprograms', label: 'Weekly Programs', labelHi: 'साप्ताहिक कार्यक्रम' },
      { id: 'houseprograms', label: 'House Programs', labelHi: 'गृह कार्यक्रम' },
      { id: 'iyf', label: 'ISKCON Youth Forum', labelHi: 'इस्कॉन युवा मंच' },
      { id: 'course', label: 'Courses', labelHi: 'पाठ्यक्रम' },
    ],
  },
  {
    id: 'outreach', label: 'Outreach', labelHi: 'आउटरीच', icon: Users,
    items: [
      {
        id: 'outreach-visits', label: 'Visits', labelHi: 'यात्राएं',
       
      },
      { id: 'outreach-programs', label: 'Jail & School Programs', labelHi: 'जेल एवं विद्यालय कार्यक्रम', comingSoon: true },
    ],
  },
  {
    id: 'tours', label: 'Tours & Explorations', labelHi: 'यात्रा एवं भ्रमण', icon: MapPin,
    items: [
      { id: 'yatra', label: 'Dham Yatras', labelHi: 'धाम यात्राएं' },
    ],
  },
  {
    id: 'contribute', label: 'Contribute', labelHi: 'योगदान करें', icon: HeartHandshake,
    items: [
      { id: 'donation', label: 'Donate', labelHi: 'दान करें' },
      { id: 'helpinghands', label: 'Helping Hand', labelHi: 'मददगार हाथ' },
    ],
  },
  {
    id: 'about', label: 'Getting to Know Us', labelHi: 'हमें जानिए', icon: Info,
    items: [
      { id: 'iskcon', label: 'About ISKCON', labelHi: 'इस्कॉन के बारे में' },
      { id: 'about', label: 'About ISKCON Dhanaupur', labelHi: 'इस्कॉन धनौपुर के बारे में' },
      { id: 'social', label: 'Social Media', labelHi: 'सोशल मीडिया' },
      { id: 'connect', label: 'Contact Us', labelHi: 'संपर्क करें' },
      { id: 'contributors', label: 'Contributors', labelHi: 'योगदानकर्ता' },
    ],
  },
]

const stagger = { animate: { transition: { staggerChildren: 0.06 } } }
const item = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } } }

const carouselImages = [
  { src: '/deity1.jpg', alt: 'Sri Sri Radha ShyamSundar' },
  { src: '/Jagannath Darshan.jpeg', alt: 'Jagannath Darshan' },
  { src: '/Gaur Nitai.jpeg', alt: 'Gaur Nitai' },
  { src: '/alter.jpg', alt: 'Temple Altar' },
]

export default function MenuView({ t, lang, onSelect }: Props) {
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'
  const fb = isHi ? 'Tiro Devanagari Hindi, serif' : 'Crimson Text, serif'

  const [openIds, setOpenIds] = useState<string[]>([])
  const toggle = (id: string) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  const realCount = carouselImages.length
  // Append a clone of the first slide at the end so the loop can continue
  // seamlessly forward instead of snapping back to slide 1.
  const trackImages = [...carouselImages, carouselImages[0]]
  const trackCount = trackImages.length

  const [activeIndex, setActiveIndex] = useState(0)
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  // Auto-advance every 4s.
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => prev + 1)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  // When we land on the trailing clone, wait for the slide transition to
  // finish, then silently (no transition) jump back to the real first slide.
  useEffect(() => {
    if (activeIndex === trackCount - 1) {
      const t = setTimeout(() => {
        setTransitionEnabled(false)
        setActiveIndex(0)
      }, 620)
      return () => clearTimeout(t)
    }
  }, [activeIndex, trackCount])

  // Re-enable the transition right after the silent jump so future slides
  // (auto or dot-click) animate normally again.
  useEffect(() => {
    if (!transitionEnabled) {
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => setTransitionEnabled(true))
        return () => cancelAnimationFrame(raf2)
      })
      return () => cancelAnimationFrame(raf1)
    }
  }, [transitionEnabled])

  const activeDot = activeIndex % realCount
  const goToSlide = (i: number) => {
    setTransitionEnabled(true)
    setActiveIndex(i)
  }

  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px 40px', background: 'transparent' }}>
      <PageBackground />
      <style jsx global>{`
        .rect-frame-container {
          position: relative;
          width: 100%;
          margin: 0 auto 16px;
          aspect-ratio: 16/9;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid var(--gold);
          box-shadow: 0 8px 24px color-mix(in srgb, var(--maroon) 15%, transparent);
        }
        .sliding-track {
          display: flex;
          height: 100%;
        }
        .slide-item {
          flex-shrink: 0;
          height: 100%;
          position: relative;
        }
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 24px;
        }
        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1.5px solid var(--gold);
          background: transparent;
          cursor: pointer;
          padding: 0;
          transition: all 0.25s ease;
        }
        .carousel-dot.active {
          background: var(--gold);
          width: 22px;
          border-radius: 5px;
        }
      `}</style>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        style={{ textAlign: 'center', marginBottom: 28, width: '100%', maxWidth: 560 }}>

        {/* Rectangular single-image carousel */}
        <div className="rect-frame-container">
          <div
            className="sliding-track"
            style={{
              width: `${trackCount * 100}%`,
              transform: `translateX(-${(100 / trackCount) * activeIndex}%)`,
              transition: transitionEnabled ? 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
            }}
          >
            {trackImages.map((img, index) => (
              <div key={index} className="slide-item" style={{ width: `${100 / trackCount}%` }}>
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 600px) 100vw, 480px"
                  loading={index === 0 ? 'eager' : 'lazy'} style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Selectable dots (always reflect the 4 real slides) */}
        <div className="carousel-dots">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={`carousel-dot${activeDot === index ? ' active' : ''}`}
            />
          ))}
        </div>

        {/* 60th anniversary button */}
        <button
          onClick={() => onSelect('anniversary60')}
          style={{
            display: 'inline-block',
            margin: '0 auto 22px',
            padding: '10px 22px',
            borderRadius: 999,
            border: '1.5px solid var(--gold)',
            background: 'var(--maroon)',
            color: 'var(--gold-lt)',
            fontFamily: ff,
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: '0.02em',
            cursor: 'pointer',
          }}
        >
          {isHi ? 'इस्कॉन के 60 वर्षों का उत्सव' : 'Celebrating 60 Years of ISKCON'}
        </button>

        {/* New hero text block */}
        <div style={{ marginBottom: 22 }}>
          <h2 style={{
            fontSize: 'clamp(18px, 3vw, 23px)', fontWeight: 700, color: 'var(--maroon)',
            marginBottom: 10, fontFamily: ff, letterSpacing: '0.01em',
          }}>
            {t.hero.templeName}
          </h2>
          <p style={{ fontSize: 15, color: 'var(--maroon-lt)', fontFamily: fb, lineHeight: 1.75, marginBottom: 14 }}>
            {t.hero.description}
          </p>
          <p style={{ fontSize: 15.5, fontWeight: 600, color: 'var(--gold)', fontFamily: fb }}>
            {t.hero.cta}
          </p>
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
                  {isHi ? cat.labelHi : cat.label}
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
                              <div style={{ fontFamily: fb, fontSize: 15.5, color: 'var(--maroon)', fontWeight: 600 }}>
                                {isHi ? 'रुकिए, कार्य प्रगति पर है' : 'Hold on, work in progress'}
                              </div>
                              <div style={{ fontFamily: fb, fontSize: 13.5, color: 'var(--muted)' }}>{isHi ? sub.labelHi : sub.label}</div>
                            </div>
                          </div>
                        ) : (
                          <button key={sub.id} onClick={() => onSelect(ROUTE_ID_MAP[sub.id] || sub.id)}
                            style={{
                              display: 'block', width: '100%', textAlign: 'left', background: 'transparent',
                              border: 'none', cursor: 'pointer', padding: '8px 10px', borderRadius: 8,
                            }}>
                            <div style={{ fontFamily: fb, fontSize: 15.5, color: 'var(--maroon-lt)', fontWeight: 600 }}>
                              {isHi ? sub.labelHi : sub.label}
                            </div>
                            {sub.sub && (
                              <div style={{ fontFamily: fb, fontSize: 13.5, color: 'var(--muted)', marginTop: 2 }}>
                                {isHi ? sub.subHi : sub.sub}
                              </div>
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