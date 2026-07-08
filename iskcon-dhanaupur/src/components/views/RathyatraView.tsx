'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, CalendarDays, Route as RouteIcon, Landmark, MessageCircle } from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props { t: any; lang: Lang; onBack: () => void }

export default function RathyatraView({ t, lang, onBack }: Props) {
  const r = t.rathyatra
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'
  const fb = isHi ? 'Tiro Devanagari Hindi, serif' : 'Crimson Text, serif'
  const [activeLoc, setActiveLoc] = useState(r.locations[0]?.id)

  const active = r.locations.find((l: any) => l.id === activeLoc) || r.locations[0]

  const donateMessage = isHi
    ? `हरे कृष्ण! मैं ${active.label} रथयात्रा में सहयोग करना चाहता/चाहती हूँ।`
    : `Hare Krishna! I would like to contribute to the ${active.label} Rathyatra.`
  const donateLink = `https://wa.me/918127443777?text=${encodeURIComponent(donateMessage)}`

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <PageBackground/>
      <div className="container" style={{ maxWidth: 480 }}>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="back-btn" onClick={onBack} style={{ marginBottom: 24 }}>{t.back}</motion.button>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 24 }}>
          <p className="t-label" style={{ marginBottom: 6 }}>{r.label}</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', color: 'var(--maroon)', marginBottom: 4, fontFamily: ff, fontWeight: 600 }}>{r.title}</h1>
          <p style={{ fontSize: 15, color: 'var(--gold)', fontFamily: ff, marginBottom: 14 }}>{r.subtitle}</p>
          <div className="gold-line" style={{ maxWidth: 80 }} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{ background: 'color-mix(in srgb, var(--parchment) 90%, transparent)', border: '1.5px solid var(--border)', borderRadius: 12, padding: '18px 20px', marginBottom: 24 }}>
          <p style={{ fontSize: 15, color: 'var(--text)', lineHeight: 1.8, fontFamily: isHi ? ff : 'Crimson Text, serif', marginBottom: 12 }}>{r.intro}</p>
          <p style={{ fontSize: 15, color: 'var(--text)', lineHeight: 1.8, fontFamily: isHi ? ff : 'Crimson Text, serif', margin: 0 }}>{r.local}</p>
        </motion.div>

        {/* District tabs — icon in a circular badge for a more distinctive look */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--gold)', marginBottom: 10, fontFamily: 'Crimson Text, serif', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{r.tabsLabel}</p>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${r.locations.length}, 1fr)`, gap: 10 }}>
            {r.locations.map((loc: any) => {
              const isActive = loc.id === activeLoc
              return (
                <button key={loc.id} onClick={() => setActiveLoc(loc.id)}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '16px 10px', borderRadius: 14, cursor: 'pointer',
                    border: `1.5px solid ${isActive ? 'var(--maroon)' : 'var(--border)'}`,
                    background: isActive ? 'var(--parchment)' : 'var(--cream)',
                    boxShadow: isActive ? '0 3px 10px color-mix(in srgb, var(--maroon) 18%, transparent)' : 'none',
                    transition: 'all 0.2s',
                  }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: isActive ? 'var(--maroon)' : 'var(--border)', transition: 'background 0.2s',
                  }}>
                    <MapPin size={22} strokeWidth={1.9} color={isActive ? 'var(--gold-lt)' : 'var(--muted)'} />
                  </div>
                  <span style={{ fontFamily: ff, fontSize: 15.5, fontWeight: 700, color: isActive ? 'var(--maroon)' : 'var(--muted)' }}>
                    {loc.label}
                  </span>
                </button>
              )
            })}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={activeLoc} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}
            style={{ background: 'var(--parchment)', border: '1.5px solid var(--border)', borderRadius: 12, padding: '20px', marginBottom: 20 }}>

            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 18 }}>
              <CalendarDays size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <p className="t-label" style={{ marginBottom: 4 }}>{r.dateLabel}</p>
                <p style={{ fontSize: 16, color: 'var(--maroon)', fontFamily: ff, fontWeight: 700 }}>{active.date}</p>
              </div>
            </div>

            {/* Route — plain list of stops, icon + text, no boxed rows */}
            <div style={{ marginBottom: 18 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                <RouteIcon size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }} />
                <p className="t-label" style={{ margin: 0 }}>{r.routeLabel}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginLeft: 4 }}>
                {active.routeStops.map((stop: string, i: number) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0', borderBottom: i < active.routeStops.length - 1 ? '1px dashed var(--border)' : 'none' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--maroon)', flexShrink: 0, marginTop: 6 }} />
                    <p style={{ fontSize: 15, color: 'var(--text)', fontFamily: isHi ? ff : 'Crimson Text, serif', lineHeight: 1.5, margin: 0 }}>{stop}</p>
                  </div>
                ))}
              </div>
            </div>

            {active.venue && (
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 18 }}>
                <Landmark size={18} color="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p className="t-label" style={{ marginBottom: 4 }}>{r.venueLabel}</p>
                  <p style={{ fontSize: 14, color: 'var(--muted)', fontFamily: isHi ? ff : 'Crimson Text, serif', lineHeight: 1.6 }}>{active.venue}</p>
                </div>
              </div>
            )}

            <div>
              <p className="t-label" style={{ marginBottom: 8 }}>{r.slipLabel}</p>
              <div style={{ position: 'relative', width: '100%', maxWidth: 420, borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--cream)', margin: '0 auto' }}>
                <img src={active.slipImage} alt={`${active.label} collection slip`}
                  style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'contain' }}
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* WhatsApp donate CTA — fuller icon, softer card feel, hover lift */}
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} style={{ textAlign: 'center' }}>
          <a href={donateLink} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12,
              background: 'linear-gradient(135deg, #25D366 0%, #1fb959 100%)', color: '#fff',
              borderRadius: 28, padding: '15px 34px', textDecoration: 'none',
              fontSize: 16, fontWeight: 700, fontFamily: ff, letterSpacing: '0.01em',
              boxShadow: '0 6px 18px rgba(37,211,102,0.35)', transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 22px rgba(37,211,102,0.45)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(37,211,102,0.35)' }}
          >
            <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <MessageCircle size={17} color="#fff" strokeWidth={2} fill="#fff" fillOpacity={0.15} />
            </span>
            {r.donateCta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
