'use client'
import { motion } from 'framer-motion'
import { Layers, Vote, Sparkles as SparkleIcon, MessageCircle } from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props {
  lang: Lang
  onBack: () => void
}

const WHATSAPP_NUMBER = '918127443777'

const features = {
  en: [
    { icon: Layers, label: 'Multiple Categories', desc: 'Different themes for all age groups' },
    { icon: Vote, label: 'Choose or Vote', desc: 'Showcase your talent and devotion' },
    { icon: SparkleIcon, label: 'Spiritual Growth', desc: 'Grow in devotion and creativity' },
  ],
  hi: [
    { icon: Layers, label: 'विविध श्रेणियाँ', desc: 'सभी आयु वर्ग के लिए अलग-अलग विषय' },
    { icon: Vote, label: 'चुनें और सहभागी बनें', desc: 'अपनी प्रतिभा और भक्ति दिखाएं' },
    { icon: SparkleIcon, label: 'आध्यात्मिक विकास', desc: 'भक्ति और रचनात्मकता में बढ़ें' },
  ],
}

const copy = {
  en: {
    label: 'Festival',
    title: 'Gokuldham Pratiyogita',
    subtitle: 'Express Your Devotion, Illuminate Your Vision',
    poster: '/gdp.jpeg',
    posterAlt: 'Gokuldham Pratiyogita — A Platform to Express Devotion & Creativity',
    intro: 'Participate in the Gokuldham Pratiyogita and pour your creativity, devotion and talent into various spiritual categories. Stay tuned for exciting themes and opportunities to glorify the Lord through your art.',
    featuresTitle: 'Why Participate',
    ctaTitle: 'How to Participate?',
    ctaDesc: 'Click the button below to connect with us on WhatsApp and get all the details.',
    ctaBtn: 'Contact on WhatsApp',
    waMessage: 'Hare Krishna! I would like to participate in the Gokuldham Pratiyogita.',
    back: 'Back',
  },
  hi: {
    label: 'उत्सव',
    title: 'गोकुलधाम प्रतियोगिता',
    subtitle: 'अपनी भक्ति व्यक्त करें, अपनी दृष्टि उजागर करें',
    poster: '/gdp.jpeg',
    posterAlt: 'गोकुलधाम प्रतियोगिता — भक्ति एवं रचनात्मकता व्यक्त करने का मंच',
    intro: 'गोकुलधाम प्रतियोगिता में भाग लें और विभिन्न आध्यात्मिक श्रेणियों में अपनी रचनात्मकता, भक्ति और प्रतिभा प्रस्तुत करें। भगवान की महिमा के लिए अपनी कला के माध्यम से रोमांचक विषयों और अवसरों की प्रतीक्षा करें।',
    featuresTitle: 'क्यों भाग लें',
    ctaTitle: 'कैसे भाग लें?',
    ctaDesc: 'सभी जानकारी और हमसे व्हाट्सएप पर जुड़ने के लिए नीचे दिए गए बटन पर क्लिक करें।',
    ctaBtn: 'व्हाट्सएप पर संपर्क करें',
    waMessage: 'हरे कृष्ण! मैं गोकुलधाम प्रतियोगिता में भाग लेना चाहता/चाहती हूँ।',
    back: 'पीछे जाएँ',
  },
}

export default function GokuldhamPratiyogitaView({ lang, onBack }: Props) {
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'
  const c = copy[lang]
  const fl = features[lang]
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(c.waMessage)}`

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
         
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', color: 'var(--maroon)', marginBottom: 4, fontFamily: ff, fontWeight: 600 }}>
            {c.title}
          </h1>
          <p style={{ fontSize: 17, color: 'var(--gold)', fontFamily: ff, marginBottom: 10 }}>
            {c.subtitle}
          </p>
          <div className="gold-line" style={{ maxWidth: 60, marginTop: 14 }} />
        </motion.div>

        {/* Poster */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '3 / 5',
            borderRadius: 16,
            overflow: 'hidden',
            border: '1.5px solid var(--gold)',
            marginBottom: 24,
            background: 'var(--border)',
          }}
        >
          <img
            src={c.poster}
            alt={c.posterAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          style={{ fontSize: 13.5, color: 'var(--maroon)', fontFamily: isHi ? ff : 'Crimson Text, serif', lineHeight: 1.75, marginBottom: 32, textAlign: 'center' }}
        >
          {c.intro}
        </motion.p>

        {/* Features */}
        <div style={{ marginBottom: 36 }}>
          <p className="t-label" style={{ marginBottom: 14, textAlign: 'center' }}>{c.featuresTitle}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {fl.map((f, i) => {
              const Icon = f.icon
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
                    gridColumn: fl.length === 3 && i === 2 ? '1 / span 2' : undefined,
                  }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: 'var(--maroon)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={20} color="var(--gold-lt)" strokeWidth={1.8} />
                  </div>
                  <p style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--maroon)', fontFamily: ff }}>{f.label}</p>
                  <p style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'Crimson Text, serif', lineHeight: 1.5 }}>{f.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* How to Participate — WhatsApp CTA */}
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
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              width: '100%',
              background: 'var(--gold)',
              color: 'var(--maroon)',
              border: 'none',
              borderRadius: 24,
              padding: '12px 0',
              fontSize: 14,
              fontWeight: 700,
              fontFamily: ff,
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            <MessageCircle size={17} strokeWidth={2} />
            {c.ctaBtn}
          </a>
        </motion.div>
      </div>
    </section>
  )
}