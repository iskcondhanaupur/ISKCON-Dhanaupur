'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { CalendarDays, Flame, Check, Phone, Image as ImageIcon, MessageCircle } from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'
import { KARTIK, Bi } from '@/data/kartikcontent'

interface Props { lang: Lang; onBack: () => void }

const CARD_BG = 'var(--parchment)'

// Hero ke "Damodar Maas" subtitle ke neeche wali line (heading + text), Hindi & English
const HERO_LINE = {
  title: { hi: 'मास एक लाभ अनेक', en: 'One Month, Many Blessings' } as Bi,
  text: {
    hi: 'इस अतिपावन कार्तिक मास में अधिकाधिक नाम जप करें, तपस्या करें, धाम वास करें, दान करें, शुद्ध भक्तों का संग करें और करोड़ों गुना अधिक फल प्राप्त करें',
    en: 'In this most sacred month of Kartik, chant the holy names as much as possible, perform austerities, reside in the holy dham, give in charity, associate with pure devotees, and gain results millions of times greater.',
  } as Bi,
}

const waLink = (text: string) =>
  `https://wa.me/${KARTIK.contact.whatsapp}?text=${encodeURIComponent(text)}`

// Shows the real image if a path is set, otherwise a labelled placeholder.
// fit="contain": poori image dikhti hai (crop nahi), aur frame ke khali kone
// usi image ke blur se bhar jaate hain, isliye frame hamesha filled dikhta hai.
function Slot({ src, alt, label, ratio, ff, fit = 'cover' }: { src: string | null; alt: string; label: string; ratio: string; ff: string; fit?: 'cover' | 'contain' }) {
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
        <>
          {fit === 'contain' && (
            <Image
              src={src} alt="" aria-hidden fill sizes="(max-width: 700px) 100vw, 640px"
              style={{ objectFit: 'cover', filter: 'blur(22px) brightness(0.9)', transform: 'scale(1.15)' }}
            />
          )}
          <Image
            src={src} alt={alt} fill sizes="(max-width: 700px) 100vw, 860px"
            priority={fit === 'contain'}
            style={{ objectFit: fit }}
          />
        </>
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

  // Pehla tab hamesha default open/pressed rehta hai
  const [active, setActive] = useState<string>(KARTIK.nav[0].id)

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
        .kt-wrap { max-width: 860px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 1; }

        /* Tabs: PC pe wrap, mobile pe horizontal scroll */
        .kt-chips { display: flex; flex-wrap: wrap; gap: 10px; padding: 4px 2px 10px; }
        @media (max-width: 719px) {
          .kt-chips { flex-wrap: nowrap; overflow-x: auto; scrollbar-width: none; }
          .kt-chips::-webkit-scrollbar { display: none; }
        }
        .kt-chip {
          flex-shrink: 0; padding: 9px 20px; border-radius: 999px;
          border: 1.5px solid color-mix(in srgb, var(--gold) 55%, transparent);
          color: var(--maroon); background: var(--parchment);
          font-size: 15px; font-weight: 600; cursor: pointer;
          box-shadow: 0 2px 0 color-mix(in srgb, var(--gold) 50%, transparent), 0 4px 8px color-mix(in srgb, var(--maroon) 7%, transparent);
          transition: transform .15s, box-shadow .15s, background .2s, color .2s;
        }
        .kt-chip:hover {
          background: var(--gold-pale); transform: translateY(-1px);
          box-shadow: 0 3px 0 color-mix(in srgb, var(--gold) 50%, transparent), 0 6px 10px color-mix(in srgb, var(--maroon) 10%, transparent);
        }
        .kt-chip:active { transform: translateY(1px); box-shadow: 0 1px 0 color-mix(in srgb, var(--gold) 50%, transparent); }
        .kt-chip:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }
        .kt-chip[aria-selected="true"] {
          background: color-mix(in srgb, var(--maroon) 82%, var(--parchment)); color: var(--gold-lt);
          border-color: color-mix(in srgb, var(--gold) 70%, transparent);
          transform: translateY(1px); box-shadow: 0 1px 0 color-mix(in srgb, var(--gold) 50%, transparent);
        }

        .kt-yatra { display: grid; grid-template-columns: 1fr; gap: 20px; }
        .kt-vrat { display: grid; grid-template-columns: 1fr; gap: 18px 36px; }
        @media (min-width: 720px) {
          .kt-yatra { grid-template-columns: 1.3fr 1fr; align-items: center; }
          .kt-vrat { grid-template-columns: 1fr 1fr; }
        }
        .kt-circles { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
        @media (min-width: 560px) { .kt-circles { grid-template-columns: repeat(4, 1fr); } }
        .kt-link:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }
      `}</style>

      <div className="kt-wrap">
        <button className="back-btn" onClick={onBack}>
          {isHi ? 'वापस' : 'Back'}
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
            fit="contain"
          />

          <div style={{ fontFamily: ff, fontSize: 'clamp(20px, 3.5vw, 26px)', color: 'var(--gold)', marginTop: 18, marginBottom: 14 }}>
            {L(KARTIK.hero.subtitle)}
          </div>

          {/* New line: "मास एक लाभ अनेक" + text */}
          <div style={{ maxWidth: 600 }}>
            <div style={{ fontFamily: ff, fontWeight: 700, fontSize: 'clamp(19px, 3vw, 23px)', color: 'var(--maroon)', marginBottom: 6 }}>
              {L(HERO_LINE.title)}
            </div>
            <p style={body}>{L(HERO_LINE.text)}</p>
          </div>
          <div className="gold-line" />
        </motion.div>

        {/* Tabs */}
        <nav
          className="kt-chips"
          role="tablist"
          aria-label={isHi ? 'इस पेज पर' : 'On this page'}
          style={{ marginTop: 18 }}
        >
          {KARTIK.nav.map((n) => (
            <button
              key={n.id}
              role="tab"
              aria-selected={active === n.id}
              aria-controls={`panel-${n.id}`}
              onClick={() => setActive(n.id)}
              className="kt-chip"
              style={{ fontFamily: fb }}
            >
              {L(n.label)}
            </button>
          ))}
        </nav>

        {/* Panel */}
        <div style={{ marginTop: 28 }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              id={`panel-${active}`}
              role="tabpanel"
              initial={reduce ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={reduce ? undefined : { opacity: 0, height: 0 }}
              transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ paddingBottom: 8 }}>

                {/* Yatra */}
                {active === 'yatra' && (
                  <div style={{
                    border: '1.5px solid var(--gold)', borderRadius: 20, padding: 'clamp(18px, 3vw, 28px)',
                    background: CARD_BG,
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
                        ratio="4/6"
                        ff={fb}
                      />
                    </div>
                  </div>
                )}

                {/* Katha */}
                {active === 'katha' && (
                  <>
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
                  </>
                )}

                {/* Vrat niyam: boxes hata diye, sirf tick + text (invisible table) */}
                {active === 'vrat' && (
                  <>
                    <h2 style={h2}>{L(KARTIK.vrat.title)}</h2>
                    <p style={intro}>{L(KARTIK.vrat.intro)}</p>
                    <ul className="kt-vrat" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {KARTIK.vrat.items.map((it, i) => (
                        <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                          <span style={{
                            flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: 'var(--maroon)',
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: 3,
                          }}>
                            <Check size={13} color="var(--gold-lt)" strokeWidth={3} />
                          </span>
                          <span style={{ ...body, fontSize: 16, lineHeight: 1.7 }}>{L(it)}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Damodarashtakam */}
                {active === 'damodarashtakam' && (
                  <>
                    <h2 style={h2}>{L(KARTIK.damodarashtakam.title)}</h2>
                    <p style={intro}>{L(KARTIK.damodarashtakam.intro)}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {KARTIK.damodarashtakam.verses.map((v, i) => (
                        <article key={i} style={{
                          border: '1px solid var(--gold)', borderRadius: 16, padding: '18px 20px',
                          background: CARD_BG,
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
                  </>
                )}

                {/* Deepdan */}
                {active === 'deepdan' && (
                  <>
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
                    <div style={{ marginTop: 24, padding: '18px 18px 16px', border: '1px solid var(--gold)', borderRadius: 16, background: CARD_BG }}>
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
                  </>
                )}

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}