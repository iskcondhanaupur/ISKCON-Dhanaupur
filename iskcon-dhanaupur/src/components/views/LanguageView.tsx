'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Lang } from '@/data/content'

interface Props { onSelect: (l: Lang) => void }

export default function LanguageView({ onSelect }: Props) {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', background: 'transparent' }}>
      <style>{`
        .lang-card {
          border-radius: 30px;
          min-width: 250px;
          padding: 24px;
          border: 2px solid var(--gold);
          background: var(--parchment);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .lang-card:hover {
          border-color: var(--gold-lt);
          box-shadow: 0 4px 12px color-mix(in srgb, var(--maroon) 15%, transparent);
        }
      `}</style>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.5 }} style={{ marginBottom: 20 }}>
          <Image src="/welcomenote.png" alt="ISKCON Dhanaupur" width={400} height={300} loading="eager" style={{ color: 'transparent', objectFit: 'contain', width: 'auto', height: 300 }} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="lang-card" onClick={() => onSelect('en')}>
            <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--maroon)', fontFamily: 'Cormorant Garamond, serif', marginBottom: 6, letterSpacing: '0.04em' }}>English</div>
            <div style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'Crimson Text, serif' }}>Continue in English</div>
          </button>
          <button className="lang-card" onClick={() => onSelect('hi')}>
            <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--maroon)', fontFamily: 'Tiro Devanagari Hindi, serif', marginBottom: 6 }}>हिन्दी</div>
            <div style={{ fontSize: 13, color: 'var(--muted)', fontFamily: 'Tiro Devanagari Hindi, serif' }}>हिंदी में जारी रखें</div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
