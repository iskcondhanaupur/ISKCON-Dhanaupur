'use client';

import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Sparkles, Music4, Moon, UtensilsCrossed } from 'lucide-react';

const MAP_LINK = 'https://maps.app.goo.gl/faUuMqCapKZ1wrFR8';

interface RadhashtamiViewProps {
  lang: 'en' | 'hi';
  onBack: () => void;
}

const content = {
  en: {
    label: 'Festival, 2026',
    title: 'Shri Radhashtami Mahotsav',
    subtitle: 'Heartfelt wishes to you all on the occasion of',
    eventDate: '19 Sep 2026, Saturday',
    dateLabel: '19th September, Saturday',
    dateDesc: 'The program will run from 5:00 PM to 7:30 PM.',
    invite: 'You are all heartily invited',
    fastLabel: 'Fasting until 12 Noon',
    fastDesc:
      'A fast will be observed until noon, after which preparations for the program will continue with Anna Prasad.',
    venue: 'Sri Sri Radha ShyamSundar Mandir, ISKCON Dhanaupur',
    mapCta: 'View on Map',
    highlightsTitle: 'Festival Highlights',
    scheduleTitle: 'Festival Schedule',
    highlights: [
      { icon: Sparkles, label: 'Special Darshan', desc: 'Beautifully decorated darshan of Sri Sri Radha ShyamSundar' },
      { icon: Music4, label: 'Kirtan & Bhajans', desc: 'Soulful kirtan through the evening' },
      { icon: UtensilsCrossed, label: 'Anna Prasad', desc: 'Prasad distribution after the fast is broken' },
      { icon: Moon, label: 'Fasting', desc: 'Devotees observe a fast until noon on the day of the festival' },
    ],
    schedule: [
      { time: 'Until 12:00 PM', event: 'Fasting observed by all devotees' },
      { time: '5:00 PM', event: 'kirtan' },
      { time: '5:30 PM', event: 'Abhishek' },
      { time: '6:30 PM', event: 'Katha' },
      { time: '7:15 PM', event: 'Prasad Distribution' },
      { time: '7:30 PM', event: 'Program concludes' },
    ],
  },
  hi: {
    label: 'महोत्सव, 2026',
    title: 'श्री राधाष्टमी महोत्सव',
    subtitle: 'आप सभी को हार्दिक शुभकामनाएं',
    eventDate: '19 सितंबर 2026, शनिवार',
    dateLabel: '19 सितंबर, शनिवार',
    dateDesc: 'को कार्यक्रम सायं 5 बजे से 7:30 बजे तक चलेगा।',
    invite: 'आप सभी सह्रदय आमंत्रित हैं',
    fastLabel: 'दोपहर 12 बजे तक',
    fastDesc:
      'उपवास रखा जाएगा, जिसके पश्चात अन्न प्रसाद के साथ कार्यक्रम की तैयारियां आगे बढ़ाई जाएंगी।',
    venue: 'श्री श्री राधा श्यामसुंदर मंदिर, इस्कॉन धनऊपुर',
    mapCta: 'मानचित्र पर देखें',
    highlightsTitle: 'उत्सव की झलकियाँ',
    scheduleTitle: 'उत्सव कार्यक्रम',
    highlights: [
      { icon: Sparkles, label: 'विशेष दर्शन', desc: 'श्री श्री राधा श्यामसुंदर के सुंदर सजे हुए दर्शन' },
      { icon: Music4, label: 'कीर्तन व भजन', desc: 'सायं भर मधुर कीर्तन' },
      { icon: UtensilsCrossed, label: 'अन्न प्रसाद', desc: 'उपवास खोलने के बाद प्रसाद वितरण' },
      { icon: Moon, label: 'उपवास', desc: 'उत्सव के दिन दोपहर 12 बजे तक भक्त उपवास रखेंगे' },
    ],
    schedule: [
      { time: 'दोपहर 12 बजे तक', event: 'सभी भक्तों द्वारा उपवास' },
      { time: 'सायं 5:00 बजे', event: 'कीर्तन' },
      { time: 'सायं 5:30 बजे', event: 'अभिषेक' },
      { time: 'सायं 6:30 बजे', event: 'कथा' },
      { time: 'सायं 7:15 बजे', event: 'प्रसाद वितरण' },
      { time: 'सायं 7:30 बजे', event: 'कार्यक्रम समाप्त' },
    ],
  },
};

export default function RadhashtamiView({ lang, onBack }: RadhashtamiViewProps) {
  const t = content[lang];
  const isHi = lang === 'hi';
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif';

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: 480 }}>
        <button className="back-btn" onClick={onBack} style={{ marginBottom: 32 }}>
          
        </button>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero */}
          <p className="t-label" style={{ marginBottom: 6 }}>{t.label}</p>
          <p style={{ margin: 0, color: 'var(--muted)', fontFamily: 'Crimson Text, serif' }}>
            {t.subtitle}
          </p>
          <h1
            style={{
              fontFamily: ff,
              color: 'var(--maroon)',
              fontSize: 'clamp(22px, 4vw, 32px)',
              margin: '6px 0 0',
              fontWeight: 600,
            }}
          >
            {t.title}
          </h1>
          <div className="gold-line" style={{ maxWidth: 60, marginTop: 14 }} />

          {/* Hero image */}
          <div
            style={{
              width: '100%',
              aspectRatio: '4 / 3',
              borderRadius: 16,
              overflow: 'hidden',
              border: '1.5px solid var(--gold)',
              margin: '20px 0',
              background: 'var(--parchment)',
            }}
          >
            <img
              src="/radharani.jpeg"
              alt={t.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Event info card */}
          <div
            style={{
              background: 'var(--parchment)',
              border: '1.5px solid var(--gold)',
              borderRadius: 16,
              padding: '18px 20px',
              margin: '24px 0',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, color: 'var(--maroon)', fontFamily: ff }}>
              <CalendarDays size={16} /> {t.dateLabel}
            </span>

            <p
              style={{
                marginTop: 12,
                fontWeight: 700,
                color: 'var(--maroon)',
                fontFamily: ff,
              }}
            >
              {t.invite}
            </p>
          </div>

          {/* Fasting card */}
          <div
            style={{
              background: '#f0f6fb',
              border: '1px solid var(--gold)',
              borderRadius: 16,
              padding: '18px 20px',
              margin: '24px 0',
            }}
          >
            <p style={{ fontWeight: 700, color: 'var(--maroon)', fontFamily: ff }}>
              {t.fastLabel}
            </p>
            <p style={{ margin: '6px 0 0', color: 'var(--muted)', fontFamily: 'Crimson Text, serif' }}>{t.fastDesc}</p>
          </div>

          {/* Highlights */}
          <div style={{ margin: '32px 0' }}>
            <p className="t-label" style={{ marginBottom: 14, textAlign: 'center' }}>{t.highlightsTitle}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {t.highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={i}
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
                    }}
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: 'var(--maroon)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={20} color="var(--gold-lt)" strokeWidth={1.8} />
                    </div>
                    <p style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--maroon)', fontFamily: ff }}>{h.label}</p>
                    <p style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'Crimson Text, serif', lineHeight: 1.5 }}>{h.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Schedule */}
          <div
            style={{
              background: 'var(--parchment)',
              border: '1.5px solid var(--border)',
              borderRadius: 16,
              padding: 20,
              marginBottom: 32,
            }}
          >
            <p className="t-label" style={{ marginBottom: 14 }}>{t.scheduleTitle}</p>
            {t.schedule.map((s, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px dashed var(--border)' }}>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--maroon)', fontFamily: ff }}>{s.time}</span>
                <span style={{ fontSize: 13.5, color: 'var(--muted)', fontFamily: 'Crimson Text, serif', textAlign: 'right', maxWidth: '60%' }}>{s.event}</span>
              </div>
            ))}
          </div>

          {/* Venue */}
          <div
            style={{
              display: 'grid',
              gap: 6,
              marginBottom: 16,
              paddingTop: 18,
              borderTop: '1.5px solid var(--gold)',
              textAlign: 'center',
            }}
          >
            <p style={{ fontWeight: 700, color: 'var(--maroon)', fontFamily: ff }}>
              {t.venue}
            </p>
          </div>

          {/* Map card — link stays hidden, only the card is shown */}
          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              background: 'var(--parchment)',
              border: '1.5px solid var(--gold)',
              borderRadius: 14,
              padding: '14px 20px',
              margin: '0 0 24px',
              textDecoration: 'none',
              color: 'var(--maroon)',
              fontFamily: ff,
              fontWeight: 600,
            }}
          >
            <MapPin size={18} /> {t.mapCta}
          </a>

          <div className="gold-line" />
        </motion.div>
      </div>
    </section>
  );
}