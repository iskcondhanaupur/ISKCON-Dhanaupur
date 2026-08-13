'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  CalendarDays, MapPin, Quote,
  Flower2, BookOpen, Users, Gift, MessageCircle, ClipboardList, ExternalLink,
} from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props {
  lang: Lang
  onBack: () => void
}

// TODO: replace with actual WhatsApp group invite link
const WHATSAPP_QUIZ_LINK = 'https://wa.me/918127443777'
const BIOGRAPHY_LINK = 'https://gbc.iskcon.org/srila-prabhupada/'

const features = {
  en: [
    { icon: Flower2, title: 'Remember & Honor', desc: "Remember Srila Prabhupada's life, teachings and his mission to spread Krishna Consciousness." },
    { icon: BookOpen, title: 'Inspired by His Teachings', desc: 'Be inspired by his books, lectures and his pure devotion to Sri Sri Radha Krishna.' },
    { icon: Users, title: 'Serve in Gratitude', desc: 'Let us serve together and continue his mission with love and dedication.' },
  ],
  hi: [
    { icon: Flower2, title: 'स्मरण व सम्मान', desc: 'श्रील प्रभुपाद के जीवन, शिक्षाओं और कृष्ण भावनामृत के प्रसार के मिशन को याद करें।' },
    { icon: BookOpen, title: 'उनकी शिक्षाओं से प्रेरणा', desc: 'उनकी पुस्तकों, प्रवचनों और श्री श्री राधा कृष्ण के प्रति उनकी शुद्ध भक्ति से प्रेरित हों।' },
    { icon: Users, title: 'कृतज्ञता में सेवा', desc: 'आइए मिलकर सेवा करें और प्रेम व समर्पण के साथ उनके मिशन को आगे बढ़ाएँ।' },
  ],
}

const copy = {
  en: {
    title: 'Srila Prabhupada Appearance Day',
    subtitle: 'Celebrating the Divine Appearance of our Founder-Acharya',
    description: 'Let us express our gratitude and love to His Divine Grace A. C. Bhaktivedanta Swami Prabhupada, who brought the message of Lord Krishna to the world.',
    eventName: 'Srila Prabhupada Appearance Day 2026',
    date: '05 September 2026, Saturday',
    venue: 'ISKCON Dhanaupur Temple',
    bioLabel: "Srila Prabhupada's Biography",
    bioDesc: 'Learn more about the life, mission and teachings of His Divine Grace A. C. Bhaktivedanta Swami Prabhupada.',
    bioBtn: 'Read His Biography',
    quizLabel: 'Special Quiz',
    quizTitle: 'Join Our Special Quiz',
    quizSubtitle: 'Test on the Occasion of',
    quizSubtitleHighlight: 'Srila Prabhupada Appearance Day',
    quizDesc: "Test your knowledge about Srila Prabhupada's life, teachings, books, and mission in a fun and engaging way.",
    quizDateLabel: 'Quiz Date',
    quizDate: '05 Sept 2026',
    whoLabel: 'Who Can Join?',
    who: 'All devotees',
    prizesLabel: 'Exciting Prizes',
    prizes: 'For Top Participants',
    whatsappBtn: 'Join the Quiz on WhatsApp',
    whatsappNote: 'Stay connected with our WhatsApp group for all updates & quiz link.',
    quote: 'My Divine Master wanted that I should preach this movement very nicely all over the world.',
    quoteAuthor: '— Srila Prabhupada',
    back: 'Back',
  },
  hi: {
    title: 'श्रील प्रभुपाद आविर्भाव दिवस',
    subtitle: 'हमारे संस्थापक-आचार्य के दिव्य आविर्भाव का उत्सव',
    description: 'आइए हम अपनी कृतज्ञता और प्रेम व्यक्त करें उनकी दिव्य कृपा ए. सी. भक्तिवेदांत स्वामी प्रभुपाद के प्रति, जिन्होंने भगवान कृष्ण का संदेश पूरे विश्व तक पहुँचाया।',
    eventName: 'श्रील प्रभुपाद आविर्भाव दिवस 2026',
    date: '05 सितंबर 2026, शनिवार',
    venue: 'इस्कॉन धनऊपुर मंदिर',
    bioLabel: 'श्रील प्रभुपाद की जीवनी',
    bioDesc: 'उनकी दिव्य कृपा ए. सी. भक्तिवेदांत स्वामी प्रभुपाद के जीवन, मिशन और शिक्षाओं के बारे में और जानें।',
    bioBtn: 'जीवनी पढ़ें',
    quizLabel: 'विशेष प्रश्नोत्तरी',
    quizTitle: 'हमारी विशेष क्विज़ में भाग लें',
    quizSubtitle: 'अवसर पर परीक्षण',
    quizSubtitleHighlight: 'श्रील प्रभुपाद आविर्भाव दिवस',
    quizDesc: 'श्रील प्रभुपाद के जीवन, शिक्षाओं, पुस्तकों और मिशन के बारे में अपने ज्ञान को एक मज़ेदार व रोचक तरीके से परखें।',
    quizDateLabel: 'क्विज़ तिथि',
    quizDate: '05 सितंबर 2026',
    whoLabel: 'कौन भाग ले सकता है?',
    who: 'सभी भक्तगण',
    prizesLabel: 'आकर्षक पुरस्कार',
    prizes: 'शीर्ष प्रतिभागियों के लिए',
    whatsappBtn: 'WhatsApp पर क्विज़ जॉइन करें',
    whatsappNote: 'सभी अपडेट व क्विज़ लिंक के लिए हमारे WhatsApp समूह से जुड़े रहें।',
    quote: 'मेरे दिव्य गुरु चाहते थे कि मैं इस आंदोलन का प्रचार पूरे विश्व में भली-भांति करूँ।',
    quoteAuthor: '— श्रील प्रभुपाद',
    back: 'पीछे जाएँ',
  },
}

export default function AppearanceDayView({ lang, onBack }: Props) {
  const router = useRouter()
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'
  const c = copy[lang]
  const ft = features[lang]

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
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 20 }}>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', color: 'var(--maroon)', marginBottom: 4, fontFamily: ff, fontWeight: 600 }}>
            {c.title}
          </h1>
          <p style={{ fontSize: 17, color: 'var(--gold)', fontFamily: ff, marginBottom: 10 }}>
            {c.subtitle}
          </p>
          <div className="gold-line" style={{ maxWidth: 60, marginTop: 14 }} />
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '4 / 5',
            borderRadius: 20,
            overflow: 'hidden',
            border: '1.5px solid var(--gold)',
            marginBottom: 20,
          }}
        >
          <img
            src="/Sp.jpeg"
            alt={c.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          style={{
            fontSize: 14,
            color: 'var(--text)',
            fontFamily: isHi ? ff : 'Crimson Text, serif',
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          {c.description}
        </motion.p>

        {/* Event info card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            background: 'var(--parchment)',
            border: '1.5px solid var(--gold)',
            borderRadius: 16,
            padding: '16px 18px',
            marginBottom: 24,
          }}
        >
          <p style={{ fontFamily: ff, fontWeight: 600, fontSize: 16, color: 'var(--maroon)', marginBottom: 6 }}>
            {c.eventName}
          </p>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--gold)', fontFamily: 'Crimson Text, serif', marginBottom: 8, paddingBottom: 8, borderBottom: '1px dashed var(--border)' }}>
            <CalendarDays size={13} /> {c.date}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--muted)', fontFamily: 'Crimson Text, serif' }}>
            <MapPin size={13} /> {c.venue}
          </span>
        </motion.div>

        {/* Biography card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          style={{
            background: 'var(--parchment)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: '18px 20px',
            marginBottom: 32,
          }}
        >
          <p style={{ fontFamily: ff, fontWeight: 600, fontSize: 15, color: 'var(--maroon)', marginBottom: 6 }}>
            {c.bioLabel}
          </p>
          <p style={{ fontSize: 13, color: 'var(--muted)', fontFamily: isHi ? ff : 'Crimson Text, serif', lineHeight: 1.6, marginBottom: 14 }}>
            {c.bioDesc}
          </p>
          <a
            href={BIOGRAPHY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 13.5,
              fontWeight: 600,
              color: 'var(--maroon)',
              fontFamily: ff,
              textDecoration: 'none',
              borderBottom: '1.5px solid var(--gold)',
              paddingBottom: 2,
            }}
          >
            {c.bioBtn} <ExternalLink size={13} />
          </a>
        </motion.div>

        {/* Features grid */}
        <div
          style={{
            background: 'var(--parchment)',
            border: '1px solid var(--border)',
            borderRadius: 16,
            padding: 20,
            marginBottom: 32,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 12,
          }}
        >
          {ft.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i }}
                style={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  border: '1.5px solid var(--gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} color="var(--maroon)" strokeWidth={1.8} />
                </div>
                <p style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--maroon)', fontFamily: ff, lineHeight: 1.3 }}>{f.title}</p>
                <p style={{ fontSize: 11, color: 'var(--muted)', fontFamily: 'Crimson Text, serif', lineHeight: 1.5 }}>{f.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Quiz section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'var(--parchment)',
            border: '1.5px solid var(--border)',
            borderRadius: 20,
            padding: '24px 20px',
            marginBottom: 32,
            textAlign: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 12 }}>
            <span style={{ width: 20, height: 1, background: 'var(--gold)' }} />
            <p className="t-label" style={{ margin: 0 }}>{c.quizLabel}</p>
            <span style={{ width: 20, height: 1, background: 'var(--gold)' }} />
          </div>

          <ClipboardList size={30} color="var(--maroon)" strokeWidth={1.6} style={{ marginBottom: 12 }} />

          <p style={{ fontSize: 19, fontWeight: 600, color: 'var(--maroon)', fontFamily: ff, marginBottom: 2 }}>
            {c.quizTitle}
          </p>
          <p style={{ fontSize: 14, color: 'var(--muted)', fontFamily: ff, marginBottom: 2 }}>
            {c.quizSubtitle}
          </p>
          <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--gold)', fontFamily: ff, marginBottom: 12 }}>
            {c.quizSubtitleHighlight}
          </p>
          <p style={{ fontSize: 13, color: 'var(--text)', fontFamily: 'Crimson Text, serif', lineHeight: 1.6, marginBottom: 20 }}>
            {c.quizDesc}
          </p>

          {/* Quiz meta row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 8,
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: '14px 10px',
              marginBottom: 20,
              textAlign: 'left',
            }}
          >
            {[
              { icon: CalendarDays, label: c.quizDateLabel, value: c.quizDate },
              { icon: Users, label: c.whoLabel, value: c.who },
              { icon: Gift, label: c.prizesLabel, value: c.prizes },
            ].map((m, i) => {
              const Icon = m.icon
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 1 }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                    border: '1px solid var(--gold)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={13} color="var(--maroon)" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p style={{ fontSize: 10, color: 'var(--muted)', fontFamily: ff, lineHeight: 1.2 }}>{m.label}</p>
                    <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--maroon)', fontFamily: ff, lineHeight: 1.3 }}>{m.value}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <a
            href={WHATSAPP_QUIZ_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              width: '100%',
              background: 'var(--maroon)',
              color: 'var(--gold)',
              border: 'none',
              borderRadius: 24,
              padding: '13px 0',
              fontSize: 14,
              fontWeight: 600,
              fontFamily: ff,
              cursor: 'pointer',
              textDecoration: 'none',
              marginBottom: 10,
            }}
          >
            {c.whatsappBtn} <MessageCircle size={16} />
          </a>
          <p style={{ fontSize: 11.5, color: 'var(--muted)', fontFamily: isHi ? ff : 'Crimson Text, serif', fontStyle: 'italic' }}>
            {c.whatsappNote}
          </p>
        </motion.div>

        
      </div>
    </section>
  )
}