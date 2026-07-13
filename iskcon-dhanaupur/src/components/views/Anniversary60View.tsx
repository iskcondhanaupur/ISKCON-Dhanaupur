'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { HeartHandshake, MessageCircle } from 'lucide-react'
import PageBackground from '@/components/PageBackground'
import { Lang } from '@/data/content'

interface Props {
  t: any
  lang: Lang
  onSelect: (id: string) => void
  onBack: () => void
}

export default function Anniversary60View({ t, lang, onSelect, onBack }: Props) {
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'

  useEffect(() => {
    document.title = '60 Years of ISKCON'
  }, [])

  const donateLabel = isHi ? 'दान करें' : 'Donate'
  const whatsappLabel = isHi ? 'व्हाट्सएप पर जुड़ें' : 'Connect on WhatsApp'

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <PageBackground />
      <div className="container" style={{ maxWidth: 720 }}>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="back-btn"
          onClick={onBack}
          style={{ marginBottom: 24 }}
        >
          {t.back}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            width: '100%',
            borderRadius: 16,
            overflow: 'hidden',
            border: '2px solid var(--gold)',
            boxShadow: '0 8px 24px color-mix(in srgb, var(--maroon) 15%, transparent)',
            marginBottom: 22,
          }}
        >
          <Image
            src="/iskcon-60-years.jpeg"
            alt="60 Years of ISKCON"
            width={1080}
            height={1350}
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            priority
          />
        </motion.div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 20 }}>
          <button
            onClick={() => onSelect('donation')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '11px 24px',
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
            <HeartHandshake size={17} strokeWidth={2} />
            {donateLabel}
          </button>

          <a
            href="https://wa.me/918127443777"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '11px 24px',
              borderRadius: 999,
              border: '1.5px solid var(--gold)',
              background: 'transparent',
              color: 'var(--maroon)',
              fontFamily: ff,
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: '0.02em',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            <MessageCircle size={17} strokeWidth={2} />
            {whatsappLabel}
          </a>
        </div>
      </div>
    </section>
  )
}