'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Flower2, Megaphone, User } from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props { t: any; lang: Lang; onBack: () => void }

// If `person.image` is not provided, use images placed in `public/` root
const PUBLIC_PREACHER_IMAGES = [
  '/srishyamprabhuji.png',
  '/mataji.png',
  '/kushalprabhuji.png',
  '/vivekanandprabhuji.png',
]

const TAG_ICONS: Record<string, any> = {
  guide: Flower2,
  speaker: Megaphone,
  mentor: User,
}

const DEFAULT_TAGS_EN = [
  { icon: 'guide', label: 'Spiritual Guide' },
  { icon: 'speaker', label: 'Speaker' },
  { icon: 'mentor', label: 'Mentor' },
]

const DEFAULT_TAGS_HI = [
  { icon: 'guide', label: 'आध्यात्मिक मार्गदर्शक' },
  { icon: 'speaker', label: 'वक्ता' },
  { icon: 'mentor', label: 'मार्गदर्शक' },
]

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

// Parses a multi-line "Label: Value" string into rows, skipping rows
// where the value is empty (so incomplete profiles don't show blank lines).
function parseDescRows(desc: string): { label: string; value: string }[] {
  return desc
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const idx = line.indexOf(':')
      if (idx === -1) return { label: '', value: line }
      return {
        label: line.slice(0, idx).trim(),
        value: line.slice(idx + 1).trim(),
      }
    })
    .filter((row) => row.value !== '')
}

export default function PreachersView({ t, lang, onBack }: Props) {
  const pr = t.preachers
  const isHi = lang === 'hi'
  const isDesktop = useIsDesktop()
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'
  const bodyFF = isHi ? ff : 'Crimson Text, serif'

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <PageBackground/>
      <div className="container" style={{ maxWidth: 900 }}>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="back-btn" onClick={onBack} style={{ marginBottom: 32 }}>{t.back}</motion.button>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 40, textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(30px, 5vw, 44px)', color: 'var(--maroon)', marginBottom: 10, fontFamily: ff, fontWeight: 600 }}>{pr.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginBottom: 14 }}>
            <span style={{ width: 26, height: 1, background: 'var(--gold)', opacity: 0.6 }} />
            <Flower2 size={18} color="var(--gold)" />
            <span style={{ width: 26, height: 1, background: 'var(--gold)', opacity: 0.6 }} />
          </div>
          <p style={{ fontSize: 18, color: 'var(--gold)', fontFamily: ff, fontStyle: 'italic' }}>{pr.subtitle}</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {pr.list.map((person: any, i: number) => {
            const imgSrc = PUBLIC_PREACHER_IMAGES[i]
            const tags: { icon: string; label: string }[] = person.tags || (isHi ? DEFAULT_TAGS_HI : DEFAULT_TAGS_EN)
            const rawDesc: string = person.desc || pr.descPlaceholder || ''
            const rows = parseDescRows(rawDesc)

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.1, duration: 0.5 }}
                style={{
                  display: 'flex',
                  flexDirection: isDesktop ? 'row' : 'column',
                  alignItems: isDesktop ? 'flex-start' : 'center',
                  textAlign: isDesktop ? 'left' : 'center',
                  gap: isDesktop ? 36 : 22,
                  padding: isDesktop ? '36px 40px' : '30px 22px',
                  background: 'var(--parchment)',
                  border: '1.5px solid var(--border)',
                  borderRadius: 20,
                  boxShadow: '0 6px 24px color-mix(in srgb, var(--maroon) 8%, transparent)',
                }}
              >
                <div style={{
                  width: isDesktop ? 180 : 150,
                  height: isDesktop ? 180 : 150,
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
                      {imgSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={imgSrc}
                          alt={person.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center top',
                            display: 'block',
                          }}
                        />
                      ) : (
                        <span style={{ fontSize: 40, color: 'var(--gold)' }}>{person.name?.[0]}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div style={{ width: '100%' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    justifyContent: isDesktop ? 'flex-start' : 'center',
                  }}>
                    <Flower2 size={20} color="var(--gold)" style={{ flexShrink: 0 }} />
                    <p style={{ fontFamily: ff, fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 600, color: 'var(--maroon)' }}>
                      {person.name}
                    </p>
                  </div>
                  <div style={{
                    width: 44,
                    height: 2,
                    background: 'var(--gold)',
                    opacity: 0.7,
                    marginTop: 8,
                    marginBottom: 14,
                    marginLeft: isDesktop ? 0 : 'auto',
                    marginRight: isDesktop ? 0 : 'auto',
                  }} />

                  {rows.length > 0 ? (
                    <div style={{ overflowX: 'auto', marginBottom: 18 }}>
                      <table
                        style={{
                          width: '100%',
                          borderCollapse: 'collapse',
                          fontFamily: bodyFF,
                        }}
                      >
                        <tbody>
                          {rows.map((row, ri) => (
                            <tr
                              key={ri}
                              style={{
                                borderBottom: ri !== rows.length - 1 ? '1px solid var(--border)' : 'none',
                              }}
                            >
                              <td
                                style={{
                                  padding: '8px 14px 8px 0',
                                  fontSize: 14.5,
                                  fontWeight: 600,
                                  color: 'var(--maroon)',
                                  verticalAlign: 'top',
                                  whiteSpace: 'nowrap',
                                }}
                              >
                                {row.label}
                              </td>
                              <td
                                style={{
                                  padding: '8px 0',
                                  fontSize: 14.5,
                                  color: 'var(--muted)',
                                  lineHeight: 1.6,
                                  textAlign: 'left',
                                }}
                              >
                                {row.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p style={{
                      fontSize: 15.5,
                      color: 'var(--muted)',
                      fontFamily: bodyFF,
                      lineHeight: 1.75,
                      marginBottom: 18,
                    }}>
                      {pr.descPlaceholder}
                    </p>
                  )}

                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: 14 }}>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: isDesktop ? 'flex-start' : 'center',
                      gap: 18,
                    }}>
                      {tags.map((tag, ti) => {
                        const Icon = TAG_ICONS[tag.icon] || Flower2
                        return (
                          <div key={ti} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <span style={{
                              width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
                              background: 'color-mix(in srgb, var(--gold) 16%, transparent)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                              <Icon size={15} color="var(--gold)" />
                            </span>
                            <span style={{ fontSize: 14, color: 'var(--muted)', fontFamily: bodyFF, whiteSpace: 'nowrap' }}>{tag.label}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}