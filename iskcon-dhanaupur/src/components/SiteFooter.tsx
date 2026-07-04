'use client'

interface Props { lang?: 'en' | 'hi' }

// Replace this with an actual wide, low-contrast photo of the temple.
// A shot with open sky above the shikhara works best with the fade mask below.
const TEMPLE_PHOTO_URL = '/temple-silhouette.jpg'

export default function SiteFooter({ lang = 'en' }: Props) {
  const ff = lang === 'hi' ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'

  return (
    <footer style={{ position: 'relative', marginTop: 20 }}>
      <div style={{ display: 'block', width: '100%', lineHeight: 0, transform: 'translateY(1px)' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: 48, display: 'block' }}>
          <path d="M0,30 C240,60 480,0 720,20 C960,40 1200,10 1440,30 L1440,60 L0,60 Z" fill="var(--maroon)" />
        </svg>
      </div>

      <div style={{ background: 'linear-gradient(180deg, var(--maroon) 0%, var(--maroon-lt) 100%)', padding: '0 20px 30px', textAlign: 'center' }}>

        <div
          style={{
            height: 110, margin: '-36px auto 8px', maxWidth: 780,
            backgroundImage: `url(${TEMPLE_PHOTO_URL})`,
            backgroundSize: 'cover', backgroundPosition: 'center top',
            WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 55%, rgba(0,0,0,1) 100%)',
            maskImage: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 55%, rgba(0,0,0,1) 100%)',
            opacity: 0.85,
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, margin: '16px 0' }}>
          <span style={{ width: 50, height: 1, background: 'color-mix(in srgb, var(--gold) 50%, transparent)' }} />
          <svg width="24" height="20" viewBox="0 0 100 90">
            <g fill="var(--gold)">
              <path d="M50 10 C50 10 44 30 44 45 C44 55 50 60 50 60 C50 60 56 55 56 45 C56 30 50 10 50 10 Z" />
              <path d="M50 30 C50 30 30 32 15 45 C25 50 40 50 50 45Z" />
              <path d="M50 30 C50 30 70 32 85 45 C75 50 60 50 50 45Z" />
            </g>
          </svg>
          <span style={{ width: 50, height: 1, background: 'color-mix(in srgb, var(--gold) 50%, transparent)' }} />
        </div>

        <p style={{ fontFamily: ff, fontSize: 13, letterSpacing: '0.06em', color: 'var(--gold-lt)', lineHeight: 1.8, marginBottom: 14 }}>
          {lang === 'hi'
            ? <>हरे कृष्ण हरे कृष्ण<br />कृष्ण कृष्ण हरे हरे<br />हरे राम हरे राम<br />राम राम हरे हरे</>
            : <>Hare Krishna Hare Krishna<br />Krishna Krishna Hare Hare<br />Hare Rama Hare Rama<br />Rama Rama Hare Hare</>}
        </p>

        <span style={{ fontSize: 12.5, color: 'color-mix(in srgb, var(--parchment) 60%, transparent)', fontFamily: 'Crimson Text, serif', letterSpacing: '0.05em', display: 'block' }}>
          © 2026 ISKCON Dhanaupur — All rights reserved
        </span>
      </div>
    </footer>
  )
}
