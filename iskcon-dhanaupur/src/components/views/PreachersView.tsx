'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Flower2, Megaphone, User } from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'
import BirthdayOverlay from '@/components/BirthdayOverlay' // NEW

interface Props { t: any; lang: Lang; onBack: () => void }

// ───────── NEW: Birthday settings (yahan apni details badlo) ─────────
// 24 ghante ka window. IST (+05:30). Ye time khatam hote hi purana content wapas aa jayega.
const BIRTHDAY_START = new Date('2026-10-03T09:00:00+05:30').getTime()
const BIRTHDAY_END = new Date('2026-10-04T09:00:00+05:30').getTime()
const BIRTHDAY_PHOTO = '/mataji.png' // public/ me photo rakh ke path likho, jaise '/mataji.png'. Khali = photo nahi dikhegi
const BIRTHDAY_HI = {
  name: 'श्रीमती माधुरी मोहिनी माताजी',
  subtitle: '55 वाँ जन्मदिन',
  blessing: 'हरे कृष्ण ',
  intro: 'प्रिय भक्तों, आज हम हमारी प्रिय वरिष्ठ भक्तसेविका श्रीमती माधुरी मोहिनी माताजी का 55 वाँ जन्मदिन मना रहे हैं।',
  sections: [
    {
      title: 'माताजी के बारे में',
      items: [
        'माताजी श्रीमान भास्कर दूबे प्रभुजी की धर्म पत्नी हैं, और सहपरिवार पिछले 20+ वर्षों से तन, मन और धन से इस्कॉन के आंदोलन में सहयोग प्रदान कर रही हैं। माताजी से हमे गुरु एवं भगवान की सेवा के प्रति समर्पण तथा सेवा करने के उत्साह से प्रेरणा लेनी चाहिए।',
        'आपके द्वारा की गईं अनन्य सेवाएं जिनमे कुछ हैं विग्रह, उत्सव, किचन, प्रचार, किड्स फोरम, हाउस प्रोग्राम, एवं नगर संकीर्तन आदि अति प्रशंसनीय हैं, हम सब भक्तवृंद सराहना एवं आपका उत्साहवर्धन करते हैं।',
        'आप जैसे वरिष्ठ, अनुभवी और शुद्ध भक्त का संग पाकर इस्कॉन धनऊपुर भक्तवृंद अत्यंत धन्य एवं सौभाग्यशाली अनुभव करता है, आपके द्वारा की गई विविध सेवाएं, अमूल्य शिक्षाएं एवं प्रेरणादायक आचरण हम सबके लिए मार्गदर्शक हैं।',
      ],
    },
    {
      title: 'प्रार्थनाएं',
      items: [
        'हम सभी श्री श्री राधा श्यामसुंदर भगवान जी के चरणों में प्रार्थना करते हैं की आपका इसी प्रकार श्रीभगवान के चरणों में आनंद प्राप्त करते रहें एवं हम सबका मार्गदर्शन एवं कल्याण करें।',
      ],
    },
  ],
}

const BIRTHDAY_EN = {
  name: 'श्रीमती माधुरी मोहिनी माताजी',
  subtitle: '55 वाँ जन्मदिन',
  blessing: 'हरे कृष्ण ',
  intro: 'प्रिय भक्तों, आज हम हमारी प्रिय वरिष्ठ भक्तसेविका श्रीमती माधुरी मोहिनी माताजी का 55 वाँ जन्मदिन मना रहे हैं।',
  sections: [
    {
      title: 'माताजी के बारे में',
      items: [
        'माताजी श्रीमान भास्कर दूबे प्रभुजी की धर्म पत्नी हैं, और सहपरिवार पिछले 20+ वर्षों से तन, मन और धन से इस्कॉन के आंदोलन में सहयोग प्रदान कर रही हैं। माताजी से हमे गुरु एवं भगवान की सेवा के प्रति समर्पण तथा सेवा करने के उत्साह से प्रेरणा लेनी चाहिए।',
        'आपके द्वारा की गईं अनन्य सेवाएं जिनमे कुछ हैं विग्रह, उत्सव, किचन, प्रचार, किड्स फोरम, हाउस प्रोग्राम, एवं नगर संकीर्तन आदि अति प्रशंसनीय हैं, हम सब भक्तवृंद सराहना एवं आपका उत्साहवर्धन करते हैं।',
        'आप जैसे वरिष्ठ, अनुभवी और शुद्ध भक्त का संग पाकर इस्कॉन धनऊपुर भक्तवृंद अत्यंत धन्य एवं सौभाग्यशाली अनुभव करता है, आपके द्वारा की गई विविध सेवाएं, अमूल्य शिक्षाएं एवं प्रेरणादायक आचरण हम सबके लिए मार्गदर्शक हैं।',
      ],
    },
    {
      title: 'प्रार्थनाएं',
      items: [
        'हम सभी श्री श्री राधा श्यामसुंदर भगवान जी के चरणों में प्रार्थना करते हैं की आपका इसी प्रकार श्रीभगवान के चरणों में आनंद प्राप्त करते रहें एवं हम सबका मार्गदर्शन एवं कल्याण करें।',
      ],
    },
  ],
}
// ─────────────────────────────────────────────────────────────────────

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

  // NEW: birthday window check (hooks hamesha early return se pehle)
  const [showBirthday, setShowBirthday] = useState(false)
  useEffect(() => {
    const now = Date.now()
    if (now >= BIRTHDAY_START && now < BIRTHDAY_END) {
      setShowBirthday(true)
      // page khula ho aur time khatam ho jaye to apne aap purana content aa jaye
      const timer = setTimeout(() => setShowBirthday(false), BIRTHDAY_END - now)
      return () => clearTimeout(timer)
    }
  }, [])

  // NEW: 24 ghante ke liye sirf birthday content (full screen, header/footer/back button nahi)
  if (showBirthday) {
    return (
      <BirthdayOverlay
        id="birthday"
        photo={BIRTHDAY_PHOTO || undefined}
        lang={isHi ? 'hi' : 'en'}
        headFont={ff}
        bodyFont={bodyFF}
        {...(isHi ? BIRTHDAY_HI : BIRTHDAY_EN)}
      />
    )
  }

  // ───────── Neeche ka sab kuch aapka purana code, bilkul same ─────────
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