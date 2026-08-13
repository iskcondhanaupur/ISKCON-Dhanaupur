'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarCheck, Trophy, BookOpenCheck, BookMarked, Medal, ChevronDown, MessageCircle } from 'lucide-react'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'

interface Props {
  lang: Lang
  onBack: () => void
}

const WHATSAPP_NUMBER = '918127443777'

const features = {
  en: [
    { icon: CalendarCheck, label: 'Daily Quiz', desc: 'Join our WhatsApp group and participate every day.' },
    { icon: Trophy, label: 'Monthly Results', desc: 'Results are declared at the end of every month.' },
    { icon: BookOpenCheck, label: 'Learn & Grow', desc: 'Keep learning, keep growing in devotion.' },
  ],
  hi: [
    { icon: CalendarCheck, label: 'दैनिक क्विज़', desc: 'हमारे व्हाट्सएप समूह से जुड़ें और प्रतिदिन भाग लें।' },
    { icon: Trophy, label: 'मासिक परिणाम', desc: 'हर महीने के अंत में परिणाम घोषित किए जाते हैं।' },
    { icon: BookOpenCheck, label: 'सीखें और बढ़ें', desc: 'सीखते रहें, भक्ति में बढ़ते रहें।' },
  ],
}

// Latest month first (July 2026), followed by past months back to January 2026.
// Fill in winner names below as they're announced each month.
const monthlyResults = {
  en: [
    {
      month: 'July 2026',
      categories: [
        {
          id: 'prabhuji', label: 'Prabhuji Category',
          winners: [
            { place: '1st Place', name: 'Udaybhan Upadhyay' },
            { place: '2nd Place', name: 'Abhimanyu Pandey' },
          ],
        },
        {
          id: 'mataji', label: 'Mataji Category',
          winners: [
            { place: '1st Place', name: 'Vaishnavi Singh' },
            { place: '2nd Place', name: 'Madhu Pandey' },
          ],
        },
      ],
    },
    {
      month: 'June 2026',
      categories: [
        { id: 'prabhuji', label: 'Prabhuji Category', winners: [{ place: '1st Place', name: 'Udaybhan Upadhyay' }, { place: '2nd Place', name: 'Abhimanyu Pandey' }, { place: '3rd Place', name: 'Sunil Pandey' }] },
        { id: 'mataji', label: 'Mataji Category', winners: [{ place: '1st Place', name: 'Madhu Pandey' }, { place: '2nd Place', name: 'Amritmayi Radhika Devi Dasi(Amita Singh' }] },
      ],
    },
    {
      month: 'May 2026',
      categories: [
        { id: 'prabhuji', label: 'Prabhuji Category', winners: [{ place: '1st Place', name: 'Udaybhan Upadhyay' }, { place: '2nd Place', name: 'Abhimanyu Pandey' }] },
        { id: 'mataji', label: 'Mataji Category', winners: [{ place: '1st Place', name: 'Madhu Pandey' }, { place: '2nd Place', name: 'Vaishnavi Singh' }] },
      ],
    },
    {
      month: 'April 2026',
      categories: [
        { id: 'prabhuji', label: 'Prabhuji Category', winners: [{ place: '1st Place', name: 'Udaybhan Upadhyay' }, { place: '2nd Place', name: 'Vishal Modanwal' }] },
        { id: 'mataji', label: 'Mataji Category', winners: [{ place: '1st Place', name: 'Madhu Pandey' }, { place: '2nd Place', name: 'Vaishnavi Singh' }, { place: '3rd Place', name: 'Amritmayi Radhika Devi Dasi(Amita Singh' }] },
      ],
    },
    {
      month: 'March 2026',
      categories: [
        { id: 'prabhuji', label: 'Prabhuji Category', winners: [{ place: '1st Place', name: 'Udaybhan Upadhyay' }, { place: '2nd Place', name: 'Vishal Modanwal' }] },
        { id: 'mataji', label: 'Mataji Category', winners: [{ place: '1st Place', name: 'Madhu Pandey' }, { place: '2nd Place', name: 'Vaishnavi Singh' }] },
      ],
    },
    {
      month: 'February 2026',
      categories: [
        { id: 'prabhuji', label: 'Prabhuji Category', winners: [{ place: '1st Place', name: 'Udaybhan Upadhyay' }, { place: '2nd Place', name: 'Vishal Modanwal' }] },
        { id: 'mataji', label: 'Mataji Category', winners: [{ place: '1st Place', name: 'Madhu Pandey' }, { place: '2nd Place', name: 'Vaishnavi Singh' }] },
      ],
    },
    {
      month: 'January 2026',
      categories: [
        { id: 'prabhuji', label: 'Prabhuji Category', winners: [{ place: '1st Place', name: 'Udaybhan Upadhyay' }, { place: '2nd Place', name: 'Abhimanyu Pandey' }] },
        { id: 'mataji', label: 'Mataji Category', winners: [{ place: '1st Place', name: 'Madhu Pandey' }, { place: '2nd Place', name: 'Vaishnavi Singh' }] },
      ],
    },
  ],
  hi: [
    {
      month: 'जुलाई 2026',
      categories: [
        { id: 'prabhuji', label: 'प्रभुजी वर्ग', winners: [{ place: 'प्रथम स्थान', name: 'उदयभान उपाध्याय' }, { place: 'द्वितीय स्थान', name: 'अभिमन्यु पांडे' }] },
        { id: 'mataji', label: 'माताजी वर्ग', winners: [{ place: 'प्रथम स्थान', name: 'वैष्णवी सिंह' }, { place: 'द्वितीय स्थान', name: 'मधु पांडे' }] },
      ],
    },
    {
      month: 'जून 2026',
      categories: [
        { id: 'prabhuji', label: 'प्रभुजी वर्ग', winners: [{ place: 'प्रथम स्थान', name: 'उदयभान उपाध्याय' }, { place: 'द्वितीय स्थान', name: 'अभिमन्यु पांडे' }, { place: 'तृतीय स्थान', name: 'सुनील पांडे' }] },
        { id: 'mataji', label: 'माताजी वर्ग', winners: [{ place: 'प्रथम स्थान', name: 'मधु पांडे' }, { place: 'द्वितीय स्थान', name: 'अमृतमयी राधिका देवी दासी (अमिता सिंह)' }] },
      ],
    },
    {
      month: 'मई 2026',
      categories: [
        { id: 'prabhuji', label: 'प्रभुजी वर्ग', winners: [{ place: 'प्रथम स्थान', name: 'उदयभान उपाध्याय' }, { place: 'द्वितीय स्थान', name: 'अभिमन्यु पांडे' }] },
        { id: 'mataji', label: 'माताजी वर्ग', winners: [{ place: 'प्रथम स्थान', name: 'मधु पांडे' }, { place: 'द्वितीय स्थान', name: 'वैष्णवी सिंह' }] },
      ],
    },
    {
      month: 'अप्रैल 2026',
      categories: [
        { id: 'prabhuji', label: 'प्रभुजी वर्ग', winners: [{ place: 'प्रथम स्थान', name: 'उदयभान उपाध्याय' }, { place: 'द्वितीय स्थान', name: 'विशाल मोदनवाल' }] },
        { id: 'mataji', label: 'माताजी वर्ग', winners: [{ place: 'प्रथम स्थान', name: 'मधु पांडे' }, { place: 'द्वितीय स्थान', name: 'वैष्णवी सिंह' }, { place: 'तृतीय स्थान', name: 'अमृतमयी राधिका देवी दासी (अमिता सिंह)' }] },
      ],
    },
    {
      month: 'मार्च 2026',
      categories: [
        { id: 'prabhuji', label: 'प्रभुजी वर्ग', winners: [{ place: 'प्रथम स्थान', name: 'उदयभान उपाध्याय' }, { place: 'द्वितीय स्थान', name: 'विशाल मोदनवाल' }] },
        { id: 'mataji', label: 'माताजी वर्ग', winners: [{ place: 'प्रथम स्थान', name: 'मधु पांडे' }, { place: 'द्वितीय स्थान', name: 'वैष्णवी सिंह' }] },
      ],
    },
    {
      month: 'फरवरी 2026',
      categories: [
        { id: 'prabhuji', label: 'प्रभुजी वर्ग', winners: [{ place: 'प्रथम स्थान', name: 'उदयभान उपाध्याय' }, { place: 'द्वितीय स्थान', name: 'विशाल मोदनवाल' }] },
        { id: 'mataji', label: 'माताजी वर्ग', winners: [{ place: 'प्रथम स्थान', name: 'मधु पांडे' }, { place: 'द्वितीय स्थान', name: 'वैष्णवी सिंह' }] },
      ],
    },
    {
      month: 'जनवरी 2026',
      categories: [
        { id: 'prabhuji', label: 'प्रभुजी वर्ग', winners: [{ place: 'प्रथम स्थान', name: 'उदयभान उपाध्याय' }, { place: 'द्वितीय स्थान', name: 'अभिमन्यु पांडे' }] },
        { id: 'mataji', label: 'माताजी वर्ग', winners: [{ place: 'प्रथम स्थान', name: 'मधु पांडे' }, { place: 'द्वितीय स्थान', name: 'वैष्णवी सिंह' }] },
      ],
    },
  ],
}

const copy = {
  en: {
    
    title: 'Quiz',
    subtitle: 'Daily Quiz • Monthly Results',
    intro: 'Participate in our daily quiz in the WhatsApp group and test your knowledge of Krishna Consciousness, Srila Prabhupada\'s teachings, scriptures and more.',
    basedOn: 'This quiz is based on Srimad Bhagavatam.',
    featuresTitle: 'How It Works',
    resultsTitle: 'Monthly Results',
    winnerPlaceholder: 'To be announced',
    ctaTitle: 'Want to Join the Quiz?',
    ctaDesc: 'Contact us to join the daily quiz.',
    viewAllBtn: 'View All Monthly Results',
    hideAllBtn: 'Hide Monthly Results',
    archiveTitle: 'Past Months',
    contact: '+91 8127443777',
    waMessage: 'Hare Krishna! I would like to join the daily quiz.',
    waBtn: 'Message on WhatsApp',
    back: 'Back',
  },
  hi: {
    
    title: 'क्विज़',
    subtitle: 'दैनिक क्विज़ • मासिक परिणाम',
    intro: 'हमारे व्हाट्सएप समूह में प्रतिदिन होने वाले क्विज़ में भाग लें और कृष्ण भावनामृत, श्रील प्रभुपाद की शिक्षाओं, शास्त्रों आदि के बारे में अपने ज्ञान को परखें।',
    basedOn: 'यह क्विज़ श्रीमद् भागवतम् पर आधारित है।',
    featuresTitle: 'यह कैसे काम करता है',
    resultsTitle: 'मासिक परिणाम',
    winnerPlaceholder: 'शीघ्र घोषित होगा',
    ctaTitle: 'क्विज़ में जुड़ना चाहते हैं?',
    ctaDesc: 'दैनिक क्विज़ से जुड़ने के लिए हमसे संपर्क करें।',
    viewAllBtn: 'सभी मासिक परिणाम देखें',
    hideAllBtn: 'मासिक परिणाम छुपाएं',
    archiveTitle: 'पिछले महीने',
    contact: '+91 8127443777',
    waMessage: 'हरे कृष्ण! मैं दैनिक क्विज़ से जुड़ना चाहता/चाहती हूँ।',
    waBtn: 'व्हाट्सएप पर संदेश करें',
    back: 'पीछे जाएँ',
  },
}

export default function QuizResultsView({ lang, onBack }: Props) {
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'
  const c = copy[lang]
  const fl = features[lang]
  const months = monthlyResults[lang]
  const latest = months[0]
  const pastMonths = months.slice(1)
  const [showArchive, setShowArchive] = useState(false)
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

        {/* Intro + based-on note card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          style={{
            background: 'var(--parchment)',
            border: '1.5px solid var(--gold)',
            borderRadius: 16,
            padding: '16px 18px',
            marginBottom: 32,
          }}
        >
          <p style={{ fontSize: 13.5, color: 'var(--maroon)', fontFamily: isHi ? ff : 'Crimson Text, serif', lineHeight: 1.7, marginBottom: 12 }}>
            {c.intro}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <BookMarked size={16} color="var(--gold)" strokeWidth={1.8} style={{ flexShrink: 0 }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--gold)', fontFamily: isHi ? ff : 'Crimson Text, serif' }}>
              {c.basedOn}
            </span>
          </div>
        </motion.div>

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

        {/* Monthly Results — latest month */}
        <div
          style={{
            background: 'var(--parchment)',
            border: '1.5px solid var(--border)',
            borderRadius: 16,
            padding: 20,
            marginBottom: 32,
          }}
        >
          <p className="t-label" style={{ marginBottom: 4 }}>{c.resultsTitle}</p>
          <p style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--gold)', fontFamily: ff, marginBottom: 14 }}>
            {latest.month}
          </p>
          {latest.categories.map((cat, ci) => (
            <div key={cat.id} style={{ marginTop: ci === 0 ? 0 : 18 }}>
              <p style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--maroon)', fontFamily: ff, marginBottom: 8 }}>
                {cat.label}
              </p>
              {cat.winners.map((w, i) => (
                <div key={w.place} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderTop: i === 0 ? 'none' : '1px dashed var(--border)' }}>
                  <Medal size={16} color={i === 0 ? 'var(--gold)' : 'var(--muted)'} strokeWidth={1.8} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--maroon)', fontFamily: ff, flexShrink: 0 }}>{w.place}</span>
                  <span style={{ fontSize: 13.5, color: 'var(--muted)', fontFamily: 'Crimson Text, serif', marginLeft: 'auto' }}>
                    {w.name || c.winnerPlaceholder}
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* View All / Hide toggle — expands in place, no navigation */}
          <button
            onClick={() => setShowArchive((v) => !v)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              width: '100%',
              marginTop: 18,
              background: 'transparent',
              color: 'var(--gold)',
              border: '1.5px solid var(--gold)',
              borderRadius: 24,
              padding: '11px 0',
              fontSize: 13.5,
              fontWeight: 700,
              fontFamily: ff,
              cursor: 'pointer',
            }}
          >
            {showArchive ? c.hideAllBtn : c.viewAllBtn}
            <motion.span animate={{ rotate: showArchive ? 180 : 0 }} transition={{ duration: 0.25 }} style={{ display: 'flex' }}>
              <ChevronDown size={16} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {showArchive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px dashed var(--border)' }}>
                  <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--maroon)', fontFamily: ff, marginBottom: 14 }}>
                    {c.archiveTitle}
                  </p>
                  {pastMonths.map((m, mi) => (
                    <div key={m.month} style={{ marginTop: mi === 0 ? 0 : 18, paddingTop: mi === 0 ? 0 : 16, borderTop: mi === 0 ? 'none' : '1px dashed var(--border)' }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--gold)', fontFamily: ff, marginBottom: 10 }}>
                        {m.month}
                      </p>
                      {m.categories.map((cat, ci) => (
                        <div key={cat.id} style={{ marginTop: ci === 0 ? 0 : 12 }}>
                          <p style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--maroon)', fontFamily: ff, marginBottom: 6 }}>
                            {cat.label}
                          </p>
                          {cat.winners.map((w, i) => (
                            <div key={w.place} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0' }}>
                              <Medal size={14} color={i === 0 ? 'var(--gold)' : 'var(--muted)'} strokeWidth={1.8} />
                              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--maroon)', fontFamily: ff, flexShrink: 0 }}>{w.place}</span>
                              <span style={{ fontSize: 12.5, color: 'var(--muted)', fontFamily: 'Crimson Text, serif', marginLeft: 'auto' }}>
                                {w.name || c.winnerPlaceholder}
                              </span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'var(--maroon)',
            borderRadius: 20,
            padding: '24px 20px',
            marginBottom: 28,
          }}
        >
          <p style={{ color: 'var(--gold)', fontWeight: 600, fontSize: 16, fontFamily: ff, marginBottom: 4 }}>{c.ctaTitle}</p>
          <p style={{ color: '#fff', opacity: 0.85, fontSize: 13, fontFamily: 'Crimson Text, serif', lineHeight: 1.6, marginBottom: 4 }}>{c.ctaDesc}</p>
          <p style={{ color: 'var(--gold-lt)', fontSize: 13, fontFamily: ff, fontWeight: 600, marginBottom: 16 }}>{c.contact}</p>
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
              background: '#25D366',
              color: '#ffffff',
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
            {c.waBtn}
          </a>
        </motion.div>
      </div>
    </section>
  )
}