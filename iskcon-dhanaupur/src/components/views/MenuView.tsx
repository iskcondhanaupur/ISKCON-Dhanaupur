'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Play, CalendarDays, BookOpen, Users, MapPin, HeartHandshake, Info,
  ChevronDown, Hammer, Trophy, Flame, ArrowRight,
} from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props { t: any; lang: Lang; onSelect: (id: string) => void }

type SubItem = { id: string; label: string; labelHi: string; sub?: string; subHi?: string; comingSoon?: boolean; href?: string }
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
    id: 'competitions', label: 'Competitions', labelHi: 'प्रतियोगिताएं', icon: Trophy,
    items: [
      { id: 'gokuldham-pratiyogita', label: 'Gokuldham Pratiyogita', labelHi: 'गोकुलधाम प्रतियोगिता', href: '/gokuldham-pratiyogita' },
      { id: 'quiz-results', label: 'Quiz Results', labelHi: 'क्विज़ परिणाम', href: '/quiz-results' },
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

// ---------------------------------------------------------------------------
// Upcoming festivals — swap this array for your real content.ts data.
// Keep it sorted nearest-date-first: the first item gets the "Next Up" tag.
// ---------------------------------------------------------------------------
type FestivalHighlight = {
  id: string
  title: string
  titleHi: string
  dateLabel: string    // e.g. '15 Aug'
  dateLabelHi: string  // e.g. '15 अग'
  image: string
  imageFit?: 'cover' | 'contain'
  imagePosition?: string 
  description: string
  descriptionHi: string
  href: string
}

const FESTIVALS: FestivalHighlight[] = [
  {
    id: 'janmashtami',
    title: 'Sri Krishna Janmashtami', titleHi: 'श्री कृष्ण जन्माष्टमी',
    dateLabel: '04 Sept', dateLabelHi: '04 सित',
    image: '/j.png',
    imageFit: 'contain',
    description: 'Midnight abhishek, kirtan, radha-krishna dress-up and celebrations.',
    descriptionHi: 'मध्यरात्रि अभिषेक, कीर्तन, राधा-कृष्ण वेशभूषा एवं उत्सव।',
    href: '/janmashtami',
  },
  {
    id: 'srila-prabhupada-appearance',
    title: 'Srila Prabhupada Appearance Day', titleHi: 'श्रील प्रभुपाद आविर्भाव दिवस',
    dateLabel: '05 Sept', dateLabelHi: '05 सित',
    image: '/Sp.jpeg',
     imagePosition: 'center 20%',
    description: 'Guru puja, glorification and special bhoga offerings.',
    descriptionHi: 'गुरु पूजा, गुणगान, बुक वितरण एवं विशेष भोग अर्पण।',
    href: '/srila-prabhupada-appearance',
  },
  {
    id: 'gokuldham-pratiyogita',
    title: 'Gokuldham Pratiyogita', titleHi: 'गोकुलधाम प्रतियोगिता',
    dateLabel: '22 Aug', dateLabelHi: '22 अग',
    image: '/gdp.jpeg',
    imageFit: 'contain',
    description: 'Children, youth, and senior devotees, come all—showcase your talent and win exciting prizes.',
    descriptionHi: 'बच्चे, युवा और वरिष्ठ भक्तगण, सभी आइए और प्रस्तुत करिए अपनी कला, जीतिए आकर्षक उपहार',
    href: '/gokuldham-pratiyogita',
  },
  {
    id: 'Radhashtami',
    title: 'Sri Radhashtami', titleHi: 'श्री राधाष्टमी',
    dateLabel: '19 Sept', dateLabelHi: '19 सित',
    image: '/radharani.png',
    imageFit: 'contain',
    description: 'Srimati Radharani glorification, abhishek, kirtan and festive darshan.',
    descriptionHi: 'श्रीमती राधारानी का गुणगान, अभिषेक, कीर्तन और मनमोहक दर्शन',
    href: '/radhastami',
  },
]

const MONTHS_HI: Record<string, string> = {
  Jan: 'जन', Feb: 'फर', Mar: 'मार्च', Apr: 'अप्रैल', May: 'मई', Jun: 'जून',
  Jul: 'जुलाई', Aug: 'अग', Sep: 'सित', Oct: 'अक्टू', Nov: 'नव', Dec: 'दिस',
}

function splitDate(dateLabel: string) {
  const [day, month] = dateLabel.split(' ')
  return { day, month: month || '' }
}

const festivalCard = {
  initial: { opacity: 0, y: 18 },
  animate: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

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
  const prefersReducedMotion = useReducedMotion()

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

        /* Festival highlights */
        .fh-track {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(210px, 1fr);
          gap: 14px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 4px 4px 10px;
          scrollbar-width: none;
        }
        .fh-track::-webkit-scrollbar { display: none; }
        .fh-card { scroll-snap-align: start; }
        .fh-card:hover .fh-image { transform: scale(1.06); }
        .fh-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px color-mix(in srgb, var(--maroon) 18%, transparent);
        }
        @media (min-width: 640px) {
          .fh-track {
            grid-auto-flow: row;
            grid-template-columns: repeat(2, 1fr);
            overflow-x: visible;
          }
        }
        @media (min-width: 900px) {
          .fh-track {
            grid-template-columns: repeat(4, 1fr);
          }
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

      {/* ------------------------------------------------------------------ */}
      {/* Upcoming Sacred Festivals                                          */}
      {/* ------------------------------------------------------------------ */}
      {FESTIVALS.length > 0 && (
        <div style={{ width: '100%', maxWidth: 980, marginBottom: 32 }}>
          <div style={{ textAlign: 'center', marginBottom: 18 }}>
            {/* Blinking pill — this is the attention-grabbing element, placed above the cards */}
            <motion.button
              onClick={() => onSelect('events')}
              animate={prefersReducedMotion ? {} : {
                boxShadow: [
                  '0 0 0px 0px color-mix(in srgb, var(--gold) 55%, transparent)',
                  '0 0 0px 9px color-mix(in srgb, var(--gold) 0%, transparent)',
                ],
              }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '7px 16px', borderRadius: 999,
                border: '1.5px solid var(--gold)', background: 'var(--maroon)', color: 'var(--gold-lt)',
                fontFamily: fb, fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase',
                cursor: 'pointer', marginBottom: 12,
              }}
            >
              <motion.span
                animate={prefersReducedMotion ? {} : { opacity: [1, 0.45, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ display: 'inline-flex' }}
              >
                <Flame size={13} color="var(--gold)" fill="var(--gold)" strokeWidth={0} />
              </motion.span>
              {isHi ? 'आगामी उत्सव' : 'Upcoming Festivals'}
            </motion.button>

            
          </div>

          <div className="fh-track">
            {FESTIVALS.map((f, i) => {
              const { day, month } = splitDate(f.dateLabel)
              const isNext = i === 0
              return (
                <motion.div
                  key={f.id}
                  className="fh-card"
                  custom={i}
                  variants={festivalCard}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: '-40px' }}
                  style={{
                    position: 'relative', borderRadius: 18, overflow: 'hidden',
                    background: 'var(--parchment)', border: '1px solid var(--border)',
                    boxShadow: '0 4px 14px color-mix(in srgb, var(--maroon) 8%, transparent)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                >
                  <Link href={f.href} style={{ display: 'block', color: 'inherit' }}>
                    <div style={{
  position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden',
  background: f.imageFit === 'contain' ? 'var(--maroon)' : undefined,
}}>
  <Image
    src={f.image}
    alt={isHi ? f.titleHi : f.title}
    fill
    sizes="(max-width: 640px) 70vw, 230px"
    className="fh-image"
    style={{ objectFit: f.imageFit || 'cover',  objectPosition: f.imagePosition || 'center', transition: 'transform 0.5s ease' }}
  />
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, color-mix(in srgb, var(--maroon) 65%, transparent) 0%, transparent 45%)',
                      }} />

                      {/* Calendar-tag date badge */}
                      <div style={{
                        position: 'absolute', top: 10, left: 10, background: 'var(--gold)',
                        borderRadius: 8, padding: '5px 9px', textAlign: 'center', minWidth: 40,
                        boxShadow: '0 3px 8px rgba(0,0,0,0.25)',
                      }}>
                        <div style={{ fontFamily: ff, fontWeight: 700, fontSize: 16, lineHeight: 1, color: 'var(--maroon)' }}>{day}</div>
                        <div style={{ fontFamily: fb, fontSize: 9.5, letterSpacing: '0.06em', color: 'var(--maroon)', textTransform: 'uppercase' }}>
                          {isHi ? (MONTHS_HI[month] || month) : month}
                        </div>
                      </div>

                      {isNext && (
                        <div style={{
                          position: 'absolute', top: 10, right: 10, background: 'var(--maroon)', color: 'var(--gold-lt)',
                          fontFamily: fb, fontSize: 10.5, fontWeight: 600, letterSpacing: '0.05em',
                          padding: '4px 9px', borderRadius: 999, border: '1px solid var(--gold)',
                        }}>
                          {isHi ? 'अगला' : 'Next Up'}
                        </div>
                      )}
                    </div>

                    <div style={{ padding: '12px 14px 14px' }}>
                      <div style={{ fontFamily: ff, fontWeight: 700, fontSize: isHi ? 17.5 : 17, color: 'var(--maroon)', marginBottom: 4 }}>
                        {isHi ? f.titleHi : f.title}
                      </div>
                      <div style={{
                        fontFamily: fb, fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.5, marginBottom: 10,
                        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                      }}>
                        {isHi ? f.descriptionHi : f.description}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--gold)', fontFamily: fb, fontSize: 13, fontWeight: 600 }}>
                        {isHi ? 'उत्सव पेज देखें' : 'View Festival Page'}
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      )}

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
                        ) : sub.href ? (
                          <Link key={sub.id} href={sub.href}
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
                          </Link>
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