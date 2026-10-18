'use client'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, CalendarDays, Flame, Check, Phone, Image as ImageIcon, MessageCircle } from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'
import { KARTIK, Bi } from '@/data/kartikcontent'

interface Props { lang: Lang; onBack: () => void }

const waLink = (text: string) =>
  `https://wa.me/${KARTIK.contact.whatsapp}?text=${encodeURIComponent(text)}`

// Shows the real image if a path is set, otherwise a labelled placeholder.
function Slot({ src, alt, label, ratio, ff }: { src: string | null; alt: string; label: string; ratio: string; ff: string }) {
  return (
    <div
      style={{
        position: 'relative', width: '100%', aspectRatio: ratio, overflow: 'hidden',
        borderRadius: 16, border: '2px solid var(--gold)',
        background: src ? 'var(--maroon)' : 'var(--gold-pale)',
        boxShadow: '0 8px 24px color-mix(in srgb, var(--maroon) 15%, transparent)',
      }}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 640px" style={{ objectFit: 'cover' }} />
      ) : (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 8, padding: 16, textAlign: 'center',
          color: 'var(--muted)', fontFamily: ff,
        }}>
          <ImageIcon size={34} color="var(--gold)" strokeWidth={1.5} />
          <span style={{ fontSize: 15 }}>{label}</span>
        </div>
      )}
    </div>
  )
}

export default function KartikView({ lang, onBack }: Props) {
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'
  const fb = isHi ? 'Tiro Devanagari Hindi, serif' : 'Crimson Text, serif'
  const reduce = useReducedMotion()
  const L = (b: Bi) => (isHi ? b.hi : b.en)

  const h2: React.CSSProperties = {
    fontFamily: ff, fontWeight: 700, color: 'var(--maroon)',
    fontSize: 'clamp(24px, 4vw, 32px)', margin: '0 0 6px',
  }
  const intro: React.CSSProperties = {
    fontFamily: fb, fontSize: 16, lineHeight: 1.75, color: 'var(--maroon-lt)', margin: '0 0 22px', maxWidth: 640,
  }
  const body: React.CSSProperties = {
    fontFamily: fb, fontSize: 16, lineHeight: 1.8, color: 'var(--maroon-lt)', margin: 0,
  }
  const cta: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 20px', borderRadius: 999,
    background: 'var(--maroon)', color: 'var(--gold-lt)', border: '1.5px solid var(--gold)',
    fontFamily: fb, fontWeight: 600, fontSize: 15, textDecoration: 'none', cursor: 'pointer',
  }

  return (
    <section className="section" style={{ position: 'relative' }}>
      <PageBackground />
      <style jsx global>{`
        .kt-wrap { max-width: 860px; margin: 0 auto; padding: 0 20px; }
        .kt-block { margin-top: 56px; scroll-margin-top: 84px; }
        .kt-chips { display: flex; gap: 8px; overflow-x: auto; padding: 4px 2px 8px; scrollbar-width: none; }
        .kt-chips::-webkit-scrollbar { display: none; }
        .kt-chip {
          flex-shrink: 0; padding: 7px 14px; border-radius: 999px; border: 1px solid var(--gold);
          color: var(--maroon); background: var(--parchment); text-decoration: none; font-size: 14px; font-weight: 600;
        }
        .kt-chip:hover, .kt-chip:focus-visible { background: var(--maroon); color: var(--gold-lt); outline: none; }
        .kt-yatra { display: grid; grid-template-columns: 1fr; gap: 20px; }
        .kt-vrat { display: grid; grid-template-columns: 1fr; gap: 10px; }
        @media (min-width: 720px) {
          .kt-yatra { grid-template-columns: 1.3fr 1fr; align-items: center; }
          .kt-vrat { grid-template-columns: 1fr 1fr; }
        }
        .kt-circles { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
        @media (min-width: 560px) { .kt-circles { grid-template-columns: repeat(4, 1fr); } }
        .kt-link:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }
      `}</style>

      <div className="kt-wrap">
        <button className="back-btn" onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <ArrowLeft size={16} /> {isHi ? 'वापस' : 'Back'}
        </button>

        {/* Hero */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginTop: 18 }}
        >
          <Slot
            src={KARTIK.heroImage}
            alt={L(KARTIK.hero.title)}
            label={L(KARTIK.hero.imagePlaceholder)}
            ratio="16/9"
            ff={fb}
          />
          <div className="t-label" style={{ marginTop: 22 }}>{L(KARTIK.hero.label)}</div>
          <h1 style={{ fontFamily: ff, fontWeight: 700, color: 'var(--maroon)', fontSize: 'clamp(36px, 7vw, 56px)', lineHeight: 1.1, margin: '6px 0 4px' }}>
            {L(KARTIK.hero.title)}
          </h1>
          <div style={{ fontFamily: ff, fontSize: 'clamp(20px, 3.5vw, 26px)', color: 'var(--gold)', marginBottom: 14 }}>
            {L(KARTIK.hero.subtitle)}
          </div>
          <p style={{ ...body, maxWidth: 600 }}>{L(KARTIK.hero.description)}</p>
          <div className="gold-line" />
        </motion.div>

        {/* In-page links */}
        <nav className="kt-chips" aria-label={isHi ? 'इस पेज पर' : 'On this page'} style={{ marginTop: 18 }}>
          {KARTIK.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="kt-chip" style={{ fontFamily: fb }}>{L(n.label)}</a>
          ))}
        </nav>

        {/* Yatra */}
        <div id="yatra" className="kt-block">
          <div style={{
            border: '1.5px solid var(--gold)', borderRadius: 20, padding: 'clamp(18px, 3vw, 28px)',
            background: 'var(--parchment)',
          }}>
            <div className="kt-yatra">
              <div>
                <h2 style={h2}>{L(KARTIK.yatra.title)}</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: fb, fontSize: 17, fontWeight: 600, color: 'var(--gold)', marginBottom: 12 }}>
                  <CalendarDays size={18} /> {L(KARTIK.yatra.dates)}
                </div>
                <p style={{ ...body, marginBottom: 20 }}>{L(KARTIK.yatra.description)}</p>
                <a className="kt-link" href={waLink(KARTIK.yatra.waText)} target="_blank" rel="noopener noreferrer" style={cta}>
                  <MessageCircle size={17} /> {L(KARTIK.yatra.cta)}
                </a>
              </div>
              <Slot
                src={KARTIK.yatraPoster}
                alt={L(KARTIK.yatra.title)}
                label={L(KARTIK.yatra.posterPlaceholder)}
                ratio="4/5"
                ff={fb}
              />
            </div>
          </div>
        </div>

        {/* Katha */}
        <div id="katha" className="kt-block">
          <h2 style={h2}>{L(KARTIK.katha.title)}</h2>
          <div className="gold-line" style={{ marginBottom: 22 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
            {KARTIK.katha.paras.map((p, i) => (
              <div key={i} style={{ borderLeft: '3px solid var(--gold)', paddingLeft: 18 }}>
                <h3 style={{ fontFamily: ff, fontSize: 21, fontWeight: 700, color: 'var(--maroon)', margin: '0 0 8px' }}>{L(p.head)}</h3>
                <p style={body}>{L(p.body)}</p>
              </div>
            ))}
          </div>
          <p style={{ ...body, fontSize: 14, color: 'var(--muted)', marginTop: 18 }}>{L(KARTIK.katha.source)}</p>
        </div>

        {/* Vrat niyam */}
        <div id="vrat" className="kt-block">
          <h2 style={h2}>{L(KARTIK.vrat.title)}</h2>
          <p style={intro}>{L(KARTIK.vrat.intro)}</p>
          <ul className="kt-vrat" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {KARTIK.vrat.items.map((it, i) => (
              <li key={i} style={{
                display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 14px',
                background: 'var(--parchment)', border: '1px solid var(--border)', borderRadius: 12,
              }}>
                <span style={{
                  flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: 'var(--maroon)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: 2,
                }}>
                  <Check size={13} color="var(--gold-lt)" strokeWidth={3} />
                </span>
                <span style={{ ...body, fontSize: 15.5, lineHeight: 1.65 }}>{L(it)}</span>
              </li>
            ))}
          </ul>
          <p style={{ ...body, fontSize: 14.5, color: 'var(--muted)', marginTop: 14 }}>{L(KARTIK.vrat.note)}</p>
        </div>

        {/* Damodarashtakam */}
        <div id="damodarashtakam" className="kt-block">
          <h2 style={h2}>{L(KARTIK.damodarashtakam.title)}</h2>
          <p style={intro}>{L(KARTIK.damodarashtakam.intro)}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {KARTIK.damodarashtakam.verses.map((v, i) => (
              <article key={i} style={{
                border: '1px solid var(--gold)', borderRadius: 16, padding: '18px 20px',
                background: 'var(--parchment)',
              }}>
                <div style={{ fontFamily: fb, fontSize: 14, fontWeight: 600, color: 'var(--gold)', marginBottom: 10 }}>
                  {isHi ? `श्लोक ${i + 1}` : `Verse ${i + 1}`}
                </div>
                <p style={{
                  fontFamily: 'Tiro Devanagari Hindi, serif', fontSize: 'clamp(18px, 3vw, 22px)', lineHeight: 1.9,
                  color: 'var(--maroon)', margin: '0 0 12px', whiteSpace: 'pre-line',
                }}>{v.sa}</p>
                <p style={{
                  fontFamily: 'Crimson Text, serif', fontStyle: 'italic', fontSize: 15.5, lineHeight: 1.7,
                  color: 'var(--maroon-lt)', margin: '0 0 12px', whiteSpace: 'pre-line',
                }}>{v.tr}</p>
                <p style={{ ...body, fontSize: 15.5, borderTop: '1px solid var(--border)', paddingTop: 12 }}>{L(v.mean)}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Deepdan */}
        <div id="deepdan" className="kt-block">
          <h2 style={h2}>{L(KARTIK.deepdan.title)}</h2>
          <p style={intro}>{L(KARTIK.deepdan.intro)}</p>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {KARTIK.deepdan.steps.map((s, i) => (
              <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{
                  flexShrink: 0, width: 34, height: 34, borderRadius: '50%', background: 'var(--maroon)',
                  color: 'var(--gold-lt)', fontFamily: ff, fontWeight: 700, fontSize: 17,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                }}>{i + 1}</span>
                <div>
                  <div style={{ fontFamily: ff, fontWeight: 700, fontSize: 19, color: 'var(--maroon)' }}>{L(s.title)}</div>
                  <div style={{ ...body, fontSize: 15.5 }}>{L(s.body)}</div>
                </div>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: 24, padding: '18px 18px 16px', border: '1px solid var(--gold)', borderRadius: 16, background: 'var(--parchment)' }}>
            <div className="kt-circles">
              {KARTIK.deepdan.circles.map((c, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '12px 6px', borderRadius: 12, background: 'var(--gold-pale)' }}>
                  <div style={{ fontFamily: ff, fontWeight: 700, fontSize: 30, lineHeight: 1, color: 'var(--maroon)' }}>{c.count}</div>
                  <div style={{ fontFamily: fb, fontSize: 12.5, color: 'var(--muted)', marginTop: 2 }}>{L(KARTIK.deepdan.circlesUnit)}</div>
                  <div style={{ fontFamily: fb, fontSize: 14.5, fontWeight: 600, color: 'var(--maroon)', marginTop: 6 }}>{L(c.part)}</div>
                </div>
              ))}
            </div>
            <p style={{ ...body, fontSize: 14.5, color: 'var(--muted)', margin: '12px 0 0' }}>{L(KARTIK.deepdan.circlesNote)}</p>
          </div>
          <div style={{ marginTop: 26, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a className="kt-link" href={waLink(KARTIK.deepdan.waText)} target="_blank" rel="noopener noreferrer" style={cta}>
              <Flame size={17} color="var(--gold)" fill="var(--gold)" strokeWidth={0} /> {L(KARTIK.deepdan.cta)}
            </a>
            <a className="kt-link" href={`tel:+91${KARTIK.contact.phone}`} style={{ ...cta, background: 'transparent', color: 'var(--maroon)' }}>
              <Phone size={16} /> {KARTIK.contact.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}