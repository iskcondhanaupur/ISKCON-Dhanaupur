'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Flower2 } from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props { t: any; lang: Lang; onBack: () => void }

const BREAKPOINT = 768

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= BREAKPOINT)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isDesktop
}

export default function OutreachView({ t, lang, onBack }: Props) {
  const o = t.outreach
  const isHi = lang === 'hi'
  const isDesktop = useIsDesktop()
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'
  const bodyFF = isHi ? ff : 'Crimson Text, serif'

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <PageBackground/>
      <div className="container" style={{ maxWidth: 900 }}>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="back-btn" onClick={onBack} style={{ marginBottom: 32 }}>{t.back}</motion.button>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 32, textAlign: 'center' }}>
          <p className="t-label" style={{ marginBottom: 6 }}>{isHi ? 'मंदिर में आपका स्वागत है' : 'Welcome to the Temple'}</p>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 44px)', color: 'var(--maroon)', marginBottom: 10, fontFamily: ff, fontWeight: 600 }}>{o.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
            <span style={{ width: 26, height: 1, background: 'var(--gold)', opacity: 0.6 }} />
            <Flower2 size={18} color="var(--gold)" />
            <span style={{ width: 26, height: 1, background: 'var(--gold)', opacity: 0.6 }} />
          </div>
          <p style={{ fontSize: 18, color: 'var(--gold)', fontFamily: ff, fontStyle: 'italic' }}>{o.subtitle}</p>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          style={{ fontSize: 15.5, color: 'var(--muted)', fontFamily: bodyFF, lineHeight: 1.75, marginBottom: 32, textAlign: 'center', maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
          {o.desc}
        </motion.p>

        <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--gold)', marginBottom: 18, fontFamily: bodyFF, letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: isDesktop ? 'left' : 'center' }}>
          {o.guestsLabel}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 32 }}>
          {o.guests.map((g: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.15, duration: 0.5 }}
              style={{
                display: 'flex',
                flexDirection: isDesktop ? 'row' : 'column',
                alignItems: 'center',
                textAlign: isDesktop ? 'left' : 'center',
                gap: isDesktop ? 32 : 18,
                padding: isDesktop ? '30px 36px' : '26px 20px',
                background: 'var(--parchment)',
                border: '1.5px solid var(--border)',
                borderRadius: 18,
                boxShadow: '0 6px 24px color-mix(in srgb, var(--maroon) 8%, transparent)',
              }}
            >
              <div style={{
                width: isDesktop ? 130 : 110,
                height: isDesktop ? 130 : 110,
                flexShrink: 0,
              }}>
                <div style={{
                  borderRadius: '50%',
                  padding: 4,
                  border: '2.5px solid var(--gold)',
                  background: 'var(--cream)',
                  width: '100%',
                  height: '100%',
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: 'var(--cream)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {g.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={g.image}
                        alt={g.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                      />
                    ) : (
                      <span style={{ fontSize: 32, color: 'var(--gold)', fontFamily: ff, fontWeight: 600 }}>{g.name?.[0]}</span>
                    )}
                  </div>
                </div>
              </div>

              <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: isDesktop ? 'flex-start' : 'center' }}>
                  <Flower2 size={18} color="var(--gold)" style={{ flexShrink: 0 }} />
                  <p style={{ fontFamily: ff, fontSize: 'clamp(18px, 2.6vw, 22px)', fontWeight: 600, color: 'var(--maroon)' }}>
                    {g.name}
                  </p>
                </div>
                <div style={{
                  width: 40, height: 2, background: 'var(--gold)', opacity: 0.7, marginTop: 8, marginBottom: g.desc ? 12 : 0,
                  marginLeft: isDesktop ? 0 : 'auto', marginRight: isDesktop ? 0 : 'auto',
                }} />
                {g.desc ? (
                  <p style={{ fontSize: 14.5, color: 'var(--muted)', fontFamily: bodyFF, lineHeight: 1.7 }}>{g.desc}</p>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          style={{ background: 'var(--gold-pale)', border: '1.5px dashed var(--gold)', borderRadius: 12, padding: '20px 16px', textAlign: 'center' }}>
          <p style={{ fontFamily: ff, fontSize: 18, fontWeight: 700, color: 'var(--maroon)', marginBottom: 8 }}>{o.wipTitle}</p>
          <p style={{ fontSize: 14, color: 'var(--muted)', fontFamily: bodyFF, lineHeight: 1.6, margin: 0 }}>{o.wipDesc}</p>
        </motion.div>
      </div>
    </section>
  )
}
