'use client'
import { motion } from 'framer-motion'
import { Lang } from '@/data/content'
import PageBackground from '@/components/PageBackground'
import { User, Code2, Sparkles, Heart, Users } from 'lucide-react'

interface Props { t: any; lang: Lang; onBack: () => void }

// Pick an icon based on the person's role — extend this map as new roles are added
const getRoleIcon = (role: string = '') => {
  const r = role.toLowerCase()
  if (r.includes('develop') || r.includes('tech') || r.includes('web')) return Code2
  if (r.includes('design') || r.includes('creative')) return Sparkles
  return User
}

export default function ContributorsView({ t, lang, onBack }: Props) {
  const c = t.contributors
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <PageBackground/>
      <div className="container" style={{ maxWidth: 480 }}>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="back-btn" onClick={onBack} style={{ marginBottom: 32 }}>{t.back}</motion.button>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 28 }}>
          <p className="t-label" style={{ marginBottom: 6 }}>{isHi ? 'मंदिर में आपका स्वागत है' : 'Welcome to the Temple'}</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', color: 'var(--maroon)', marginBottom: 4, fontFamily: ff, fontWeight: 600 }}>{c.title}</h1>
          <p style={{ fontSize: 17, color: 'var(--gold)', fontFamily: ff }}>{c.subtitle}</p>
          <div style={{ width: 60, height: 1.5, background: 'linear-gradient(to right, transparent, var(--gold), transparent)', marginTop: 14 }} />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* Named individual contributors (developers, designers etc.) */}
          {c.list.map((person: any, i: number) => {
            const RoleIcon = getRoleIcon(person.role)
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * i + 0.1 }}
                whileHover={{ y: -2 }}
                style={{ display: 'flex', gap: 14, background: 'var(--parchment)', border: '1.5px solid var(--border)', borderRadius: 10, padding: '16px', borderLeft: '3px solid var(--gold)', transition: 'box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '2px 2px 10px color-mix(in srgb, var(--maroon) 10%, transparent)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}>

                <div style={{
                  width: 42, height: 42, borderRadius: '50%', flexShrink: 0,
                  background: 'color-mix(in srgb, var(--gold) 15%, transparent)',
                  border: '1.5px solid var(--gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <RoleIcon size={20} color="var(--maroon)" strokeWidth={1.8} />
                </div>

                <div style={{ flex: 1 }}>
                  <p style={{ fontFamily: ff, fontSize: 17, fontWeight: 600, color: 'var(--maroon)', marginBottom: 4 }}>
                    {person.name || (isHi ? 'नाम शीघ्र जोड़ा जाएगा' : 'Name to be added')}
                  </p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--gold)', fontFamily: 'Crimson Text, serif', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>
                    {person.role}
                  </p>
                  <p style={{ fontSize: 14, color: 'var(--muted)', fontFamily: isHi ? ff : 'Crimson Text, serif', lineHeight: 1.6 }}>
                    {person.desc || c.descPlaceholder}
                  </p>
                </div>
              </motion.div>
            )
          })}

          {/* General "Contributors" card — devotees, volunteers, and well-wishers who supported the site/seva without an individual profile */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * c.list.length + 0.15 }}
            whileHover={{ y: -2 }}
            style={{ display: 'flex', gap: 14, background: 'var(--parchment)', border: '1.5px solid var(--border)', borderRadius: 10, padding: '16px', borderLeft: '3px solid var(--gold)', transition: 'box-shadow 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '2px 2px 10px color-mix(in srgb, var(--maroon) 10%, transparent)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none' }}>

            <div style={{
              width: 42, height: 42, borderRadius: '50%', flexShrink: 0,
              background: 'color-mix(in srgb, var(--gold) 15%, transparent)',
              border: '1.5px solid var(--gold)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Users size={20} color="var(--maroon)" strokeWidth={1.8} />
            </div>

            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: ff, fontSize: 17, fontWeight: 600, color: 'var(--maroon)', marginBottom: 4 }}>
                {isHi ? 'योगदानकर्ता' : 'Contributors'}
              </p>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--gold)', fontFamily: 'Crimson Text, serif', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>
                {isHi ? 'भक्त एवं स्वयंसेवक' : 'Devotees & Volunteers'}
              </p>
              <p style={{ fontSize: 14, color: 'var(--muted)', fontFamily: isHi ? ff : 'Crimson Text, serif', lineHeight: 1.6 }}>
                {isHi
                  ? 'अनेक भक्तों और स्वयंसेवकों ने कंटेंट, सुझाव, अनुवाद और सेवा भाव से इस वेबसाइट को समृद्ध बनाने में योगदान दिया है।'
                  : 'Many devotees and volunteers have contributed content, suggestions, translations, and their seva to help enrich this website.'}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Thank-you note */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * (c.list.length + 1) + 0.25 }}
          style={{
            position: 'relative',
            marginTop: 24,
            background: 'linear-gradient(135deg, color-mix(in srgb, var(--gold) 12%, var(--parchment)) 0%, color-mix(in srgb, var(--maroon) 6%, var(--parchment)) 100%)',
            border: '1.5px solid var(--gold)',
            borderRadius: 14,
            padding: '28px 22px',
            textAlign: 'center',
            overflow: 'hidden',
            boxShadow: '0 4px 16px color-mix(in srgb, var(--maroon) 12%, transparent)'
          }}>

          {/* corner flourishes */}
          <div style={{ position: 'absolute', top: 10, left: 10, width: 22, height: 22, borderTop: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)', borderRadius: '4px 0 0 0' }} />
          <div style={{ position: 'absolute', top: 10, right: 10, width: 22, height: 22, borderTop: '2px solid var(--gold)', borderRight: '2px solid var(--gold)', borderRadius: '0 4px 0 0' }} />
          <div style={{ position: 'absolute', bottom: 10, left: 10, width: 22, height: 22, borderBottom: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)', borderRadius: '0 0 0 4px' }} />
          <div style={{ position: 'absolute', bottom: 10, right: 10, width: 22, height: 22, borderBottom: '2px solid var(--gold)', borderRight: '2px solid var(--gold)', borderRadius: '0 0 4px 0' }} />

          <div style={{
            width: 52, height: 52, borderRadius: '50%', margin: '0 auto 14px',
            background: 'var(--maroon)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 3px 10px color-mix(in srgb, var(--maroon) 35%, transparent)'
          }}>
            <Heart size={24} color="var(--gold)" strokeWidth={1.8} fill="var(--gold)" />
          </div>

          <p style={{ fontFamily: ff, fontSize: 20, fontWeight: 600, color: 'var(--maroon)', marginBottom: 10, letterSpacing: '0.02em' }}>
            {isHi ? 'हार्दिक धन्यवाद' : 'A Heartfelt Thank You'}
          </p>

          <div className="gold-line" style={{ maxWidth: 60, margin: '0 auto 14px' }} />

          <p style={{ fontSize: 14.5, color: 'var(--muted)', fontFamily: isHi ? ff : 'Crimson Text, serif', lineHeight: 1.75, maxWidth: 380, margin: '0 auto' }}>
            {isHi
              ? 'इस वेबसाइट को बनाने और आगे बढ़ाने में जिन सभी भक्तों और सहयोगियों ने अपना समय व सेवा दी है, उनका हृदय से आभार। आपकी सेवा भगवान श्री श्री राधा श्यामसुंदर के चरणों में समर्पित है।'
              : 'Heartfelt gratitude to every devotee and volunteer who gave their time and effort toward building and improving this website. Your service is offered at the lotus feet of Sri Sri Radha ShyamSundar.'}
          </p>
        </motion.div>
      </div>
    </section>
  )
}