'use client'
import { Lang } from '@/data/content'

interface Props {
  t: any
  lang: Lang
  slug: string
  onBack: () => void
}

export default function EventDetailView({ t, lang, slug, onBack }: Props) {
  const ev = t.events
  const item = ev?.list?.find((entry: any) => entry.slug === slug)
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <div className="container" style={{ maxWidth: 480 }}>
        <button
          onClick={onBack}
          className="back-btn"
          style={{ marginBottom: 24 }}
        >
          {t.back}
        </button>

        <div style={{ marginBottom: 24 }}>
          <p className="t-label" style={{ marginBottom: 6 }}>{ev.label}</p>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 34px)', color: 'var(--maroon)', marginBottom: 4, fontFamily: ff, fontWeight: 600 }}>
            {item ? item.name : isHi ? 'कार्यक्रम नहीं मिला' : 'Event not found'}
          </h1>
          <p style={{ fontSize: 15, color: 'var(--gold)', fontFamily: ff, marginBottom: 14 }}>
            {item ? item.desc : ''}
          </p>
          <div className="gold-line" style={{ maxWidth: 80 }} />
        </div>

        {item ? (
          <div style={{ background: 'var(--parchment)', border: '1.5px solid var(--border)', borderRadius: 12, padding: 20 }}>
            <p style={{ fontSize: 15, color: 'var(--text)', lineHeight: 1.8, fontFamily: isHi ? ff : 'Crimson Text, serif', marginBottom: 14 }}>
              {isHi
                ? 'यह पेज चुने गए कार्यक्रम का संक्षिप्त विवरण दिखाता है।'
                : 'This page shows a brief description for the selected event.'}
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 13, color: 'var(--maroon)', fontWeight: 700, fontFamily: ff, background: 'var(--cream)', borderRadius: 999, padding: '8px 12px' }}>
                {item.date} {item.month}
              </span>
              {item.active && (
                <span style={{ fontSize: 13, color: 'var(--gold)', fontWeight: 700, fontFamily: ff, background: 'rgba(220, 184, 113, 0.18)', borderRadius: 999, padding: '8px 12px' }}>
                  {isHi ? 'सक्रिय कार्यक्रम' : 'Active event'}
                </span>
              )}
            </div>
          </div>
        ) : (
          <div style={{ background: 'var(--parchment)', border: '1.5px solid var(--border)', borderRadius: 12, padding: 20 }}>
            <p style={{ fontSize: 15, color: 'var(--text)', lineHeight: 1.8, fontFamily: isHi ? ff : 'Crimson Text, serif' }}>
              {isHi
                ? 'माफ़ कीजिए, इस कार्यक्रम का विवरण अभी उपलब्ध नहीं है।'
                : 'Sorry, details for this event are not available yet.'}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
