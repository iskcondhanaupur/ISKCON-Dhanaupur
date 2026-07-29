'use client'
import { motion } from 'framer-motion'
import {
  CalendarDays, MapPin, ChevronRight, Quote,
  Sparkles, Music4, UtensilsCrossed, Moon,
} from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props {
  lang: Lang
  onBack: () => void
}

const devoteeExperiences = {
  en: [
    {
      quote: '',
      name: '',
      role: '',
    },
    {
      quote: '',
      name: '',
      role: '',
    },
    {
      quote: '',
      name: '',
      role: '',
    },
  ],
  hi: [
    {
      quote: '',
      name: '',
      role: '',
    },
    {
      quote: '',
      name: '',
      role: '',
    },
    {
      quote: '',
      name: '',
      role: '',
    },
  ],
}

const highlights = {
  en: [
    { icon: Sparkles, label: 'Special Abhishek', desc: 'Divine bathing of Sri Sri Radha ShyamSundar' },
    { icon: Music4, label: 'Kirtan & Bhajans', desc: 'Soulful kirtans throughout the day & night' },
    { icon: UtensilsCrossed, label: 'Bhog Offering', desc: '56 Bhog & special offerings to Sri Krishna' },
    { icon: Moon, label: 'Midnight Celebration', desc: 'Grand aarati, kirtan & dressing of Laddu Gopal at midnight' },
  ],
  hi: [
    { icon: Sparkles, label: 'विशेष अभिषेक', desc: 'श्री श्री राधा श्यामसुंदर का दिव्य स्नान' },
    { icon: Music4, label: 'कीर्तन व भजन', desc: 'दिन-रात मधुर कीर्तन' },
    { icon: UtensilsCrossed, label: 'भोग अर्पण', desc: '56 भोग व विशेष अर्पण श्री कृष्ण को' },
    { icon: Moon, label: 'मध्यरात्रि उत्सव', desc: 'भव्य आरती, कीर्तन व मध्यरात्रि लड्डू गोपाल श्रृंगार' },
  ],
}

const scheduleItems = {
  en: [
    { time: '', event: 'Mangala Aarti & Darshan' },
    { time: ' PM', event: 'Special Abhishek & Alankar' },
    { time: ' PM', event: 'Kirtan, Bhagwad Katha' },
    { time: '08:00 AM', event: 'Janma Aarti & Maha Abhishek' },
  ],
  hi: [
    { time: '', event: 'मंगला आरती व दर्शन' },
    { time: '', event: 'विशेष अभिषेक व अलंकार' },
    { time: '', event: 'कीर्तन, भागवत कथा' },
    { time: '08:00 AM', event: 'जन्म आरती व महाभिषेक' },
  ],
}

const copy = {
  en: {
    label: 'Festival, 2026',
    title: 'Janmashtami',
    subtitle: 'Celebrate the Appearance of Lord Sri Krishna',
    quote: '',
    eventName: 'Janmashtami 2026',
    date: '14 Aug 2026, Friday',
    venue: 'ISKCON Dhanaupur Temple',
    experiencesTitle: 'Devotee Experiences',
    highlightsTitle: 'Festival Highlights',
    scheduleTitle: 'Festival Schedule',
    ctaTitle: 'Be a Part of the Celebration',
    ctaDesc: 'Come with your family & friends and take blessings of Lord Krishna on this auspicious day.',
    
    
    back: 'Back',
  },
  hi: {
    label: 'महोत्सव, 2026',
    title: 'जन्माष्टमी',
    subtitle: 'भगवान श्री कृष्ण के प्रकट उत्सव का उल्लास',
    quote: '',
    eventName: 'जन्माष्टमी 2026',
    date: '14 अगस्त 2026, शुक्रवार',
    venue: 'इस्कॉन धनऊपुर मंदिर',
    experiencesTitle: 'भक्तों के अनुभव',
    highlightsTitle: 'उत्सव की झलकियाँ',
    scheduleTitle: 'उत्सव कार्यक्रम',
    ctaTitle: 'उत्सव का हिस्सा बनें',
    ctaDesc: 'अपने परिवार व मित्रों के साथ आइये और इस शुभ अवसर पर भगवान कृष्ण का आशीर्वाद प्राप्त करें।',
    ctaBtn: 'अपनी यात्रा तय करें',
    
    back: 'पीछे जाएँ',
  },
}

export default function JanmashtamiView({ lang, onBack }: Props) {
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'
  const c = copy[lang]
  const experiences = devoteeExperiences[lang]
  const hl = highlights[lang]
  const schedule = scheduleItems[lang]
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
          <p style={{ fontSize: 14, color: 'var(--maroon)', opacity: 0.7, fontStyle: 'italic', fontFamily: isHi ? ff : 'Crimson Text, serif' }}>
            {c.quote}
          </p>
          <div className="gold-line" style={{ maxWidth: 60, marginTop: 14 }} />
        </motion.div>

        {/* Event info card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
            background: 'var(--parchment)',
            border: '1.5px solid var(--gold)',
            borderRadius: 16,
            padding: '16px 18px',
            marginBottom: 32,
          }}
        >
          <div>
            <p style={{ fontFamily: ff, fontWeight: 600, fontSize: 16, color: 'var(--maroon)', marginBottom: 6 }}>
              {c.eventName}
            </p>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--gold)', fontFamily: 'Crimson Text, serif', marginBottom: 3 }}>
              <CalendarDays size={13} /> {c.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--muted)', fontFamily: 'Crimson Text, serif' }}>
              <MapPin size={13} /> {c.venue}
            </span>
          </div>
        </motion.div>

        {/* Devotee Experiences — horizontal scroll */}
       <div style={{ marginBottom: 36 }}>
          <p className="t-label" style={{ marginBottom: 14, textAlign: 'center' }}>{c.experiencesTitle}</p>
          <div
            style={{
              display: 'flex',
              gap: 14,
              overflowX: 'auto',
              paddingBottom: 8,
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              justifyContent: experiences.length <= 1 ? 'center' : 'flex-start',
            }}
          >
            {experiences.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.07 * i }}
                style={{
                  width: 220,
                  height: 220,
                  flex: '0 0 auto',
                  scrollSnapAlign: 'center',
                  background: 'var(--parchment)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  overflow: 'hidden',
                }}
              >
                <Quote size={18} color="var(--gold)" strokeWidth={1.8} />
                <p
                  style={{
                    fontSize: 12.5,
                    color: 'var(--text)',
                    fontFamily: isHi ? ff : 'Crimson Text, serif',
                    lineHeight: 1.5,
                    flex: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {d.quote}
                </p>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--maroon)', fontFamily: ff }}>{d.name}</p>
                  <p style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'Crimson Text, serif' }}>{d.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Festival Highlights */}
        <div style={{ marginBottom: 36 }}>
          <p className="t-label" style={{ marginBottom: 14, textAlign: 'center' }}>{c.highlightsTitle}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {hl.map((h, i) => {
              const Icon = h.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i }}
                  style={{
                    background: 'var(--parchment)',
                    border: '1px solid var(--border)',
                    borderRadius: 16,
                    padding: 16,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'var(--maroon)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} color="var(--gold-lt)" strokeWidth={1.8} />
                  </div>
                  <p style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--maroon)', fontFamily: ff }}>{h.label}</p>
                  <p style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'Crimson Text, serif', lineHeight: 1.5 }}>{h.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Festival Schedule */}
        <div
          style={{
            background: 'var(--parchment)',
            border: '1.5px solid var(--border)',
            borderRadius: 16,
            padding: 20,
            marginBottom: 32,
          }}
        >
          <p className="t-label" style={{ marginBottom: 14 }}>{c.scheduleTitle}</p>
          {schedule.map((s, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 0',
                borderTop: i === 0 ? 'none' : '1px dashed var(--border)',
              }}
            >
              <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--maroon)', fontFamily: ff }}>{s.time}</span>
              <span style={{ fontSize: 13.5, color: 'var(--muted)', fontFamily: 'Crimson Text, serif' }}>{s.event}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'var(--maroon)',
            borderRadius: 20,
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
            marginBottom: 28,
          }}
        >
          <div>
            <p style={{ color: 'var(--gold)', fontWeight: 600, fontSize: 16, fontFamily: ff, marginBottom: 4 }}>{c.ctaTitle}</p>
            <p style={{ color: '#fff', opacity: 0.85, fontSize: 13, fontFamily: 'Crimson Text, serif', lineHeight: 1.6 }}>{c.ctaDesc}</p>
          </div>
          <button
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 4,
              background: 'var(--gold)', color: 'var(--maroon)', border: 'none', borderRadius: 20,
              padding: '10px 18px', fontSize: 14, fontWeight: 600, fontFamily: ff, cursor: 'pointer',
              alignSelf: 'flex-start',
            }}
          >
            
          </button>
        </motion.div>

        {/* Closing shloka */}
       
      </div>
    </section>
  )
}