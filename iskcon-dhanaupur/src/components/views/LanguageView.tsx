'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Globe, ChevronRight } from 'lucide-react'
import { Lang } from '@/data/content'

interface Props { onSelect: (l: Lang) => void }

export default function LanguageView({ onSelect }: Props) {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', background: '#fbf7f0', overflow: 'hidden' }}>

      {/* Scoped styles — unique class names to ensure isolated rendering */}
      <style>{`
        .idw-corner-wave-tl {
          position: absolute;
          top: 0;
          left: 0;
          width: clamp(200px, 35vw, 420px);
          height: auto;
          z-index: 0;
          pointer-events: none;
        }
        .idw-corner-wave-br {
          position: absolute;
          bottom: 0;
          right: 0;
          width: clamp(220px, 38vw, 450px);
          height: auto;
          z-index: 0;
          pointer-events: none;
        }
        .idw-leaf-tl {
          position: absolute;
          top: 4%;
          right: 4%;
          width: clamp(100px, 15vw, 220px);
          height: auto;
          z-index: 0;
          pointer-events: none;
          opacity: 0.25;
        }
        .idw-leaf-bl {
          position: absolute;
          bottom: 4%;
          left: 4%;
          width: clamp(100px, 15vw, 220px);
          height: auto;
          z-index: 0;
          pointer-events: none;
          opacity: 0.25;
        }
        .idw-stack {
          display: flex !important;
          flex-direction: column !important;
          gap: 18px;
          width: 100%;
        }
        .idw-card {
          all: unset;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          cursor: pointer;
          border: 1px solid rgba(160, 130, 90, 0.2);
          background: #ffffff;
          border-radius: 24px;
          padding: 16px 24px;
          box-shadow: 0 4px 20px rgba(74, 29, 74, 0.04);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .idw-card:hover {
          border-color: rgba(74, 29, 74, 0.3);
          box-shadow: 0 10px 25px rgba(74, 29, 74, 0.08);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Top-Left Wave Design (Exactly as per image_c25a1f.png) */}
      <svg className="idw-corner-wave-tl" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer Soft Lavender Fluid Shape */}
        <path d="M0 0H280C240 45 210 55 160 85C110 115 95 150 65 210C40 260 25 275 0 300V0Z" fill="#e3d5eb" opacity="0.85" />
        {/* Inner Elegant Wave Accent Line */}
        <path d="M0 240C35 215 50 190 75 145C105 90 130 75 190 45C225 28 245 20 265 0" stroke="#a68eb5" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        {/* Deep Purple Touch */}
        <path d="M0 0H180C145 30 120 45 85 75C50 105 35 130 0 175V0Z" fill="#cbbae0" opacity="0.5" />
      </svg>

      {/* Bottom-Right Wave Design (Exactly as per image_c25a1f.png) */}
      <svg className="idw-corner-wave-br" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main Fluid Purple Corner Shape */}
        <path d="M300 300V20C260 65 235 75 185 105C135 135 120 170 90 230C65 280 45 288 0 300H300Z" fill="#bfaecf" opacity="0.75" />
        {/* Inner Accent Path/Shadow Border */}
        <path d="M300 60C265 100 245 110 200 135C155 160 140 190 115 240C95 280 85 290 50 300" stroke="#9073aa" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M300 300V110C275 135 255 150 220 175C185 200 170 225 150 260C135 285 125 292 100 300H300Z" fill="#a591bd" opacity="0.4" />
      </svg>

      <svg
        width="220" height="220" viewBox="0 0 200 200"
        style={{ position: 'absolute', top: 25, right: -5, opacity: 0.5, pointerEvents: 'none' }}
      >
        <g fill="none" stroke="var(--gold)" strokeWidth="1">
          <path d="M100 170 C60 140 60 100 100 60 C140 100 140 140 100 170Z" />
          <path d="M100 170 C40 150 30 100 55 55 C90 90 100 130 100 170Z" />
          <path d="M100 170 C160 150 170 100 145 55 C110 90 100 130 100 170Z" />
          <path d="M100 170 C50 165 20 130 25 90 C70 100 95 130 100 170Z" />
          <path d="M100 170 C150 165 180 130 175 90 C130 100 105 130 100 170Z" />
        </g>
      </svg>
      

      {/* Scattered Gold Aesthetic Dots */}
      {[
        { top: '12%', left: '22%' }, { top: '18%', right: '32%' },
        { top: '35%', left: '12%' }, { bottom: '22%', right: '16%' },
        { bottom: '12%', left: '35%' }, { top: '56%', right: '9%' },
      ].map((pos, i) => (
        <span key={i} style={{ position: 'absolute', width: 4, height: 4, borderRadius: '50%', background: '#cca462', opacity: 0.4, zIndex: 0, ...pos }} />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 360, width: '100%' }}
      >
        {/* Main Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{ marginBottom: 24 }}
        >
          <Image
            src="/welcomenote.png"
            alt="ISKCON Dhanaupur"
            width={380}
            height={280}
            loading="eager"
            style={{ color: 'transparent', objectFit: 'contain', width: 'auto', height: 'auto', maxHeight: 260 }}
          />
        </motion.div>

        {/* Language Selection Stack */}
        <motion.div
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="idw-stack"
        >
          {/* English Option */}
          <button className="idw-card" onClick={() => onSelect('en')}>
            <span style={{
              width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg, #513363, #351a44)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(81, 51, 99, 0.25)'
            }}>
              <Globe size={20} color="#fbf7f0" strokeWidth={1.5} />
            </span>
            <span style={{ flex: 1, textAlign: 'left' }}>
              <span style={{ display: 'block', fontSize: 19, fontWeight: 600, color: '#351a44', fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.01em' }}>English</span>
              <span style={{ display: 'block', fontSize: 12, color: '#8a7460', fontFamily: 'Crimson Text, serif', marginTop: 1 }}>Continue in English</span>
            </span>
            <ChevronRight size={18} color="#351a44" strokeWidth={2} />
          </button>

          {/* Hindi Option */}
          <button className="idw-card" onClick={() => onSelect('hi')}>
            <span style={{
              width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg, #513363, #351a44)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(81, 51, 99, 0.25)'
            }}>
              <span style={{ color: '#fbf7f0', fontSize: 18, fontFamily: 'Tiro Devanagari Hindi, serif', fontWeight: 500 }}>अ</span>
            </span>
            <span style={{ flex: 1, textAlign: 'left' }}>
              <span style={{ display: 'block', fontSize: 19, fontWeight: 600, color: '#351a44', fontFamily: 'Tiro Devanagari Hindi, serif' }}>हिन्दी</span>
              <span style={{ display: 'block', fontSize: 12, color: '#8a7460', fontFamily: 'Tiro Devanagari Hindi, serif', marginTop: 1 }}>हिंदी में जारी रखें</span>
            </span>
            <ChevronRight size={18} color="#351a44" strokeWidth={2} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
