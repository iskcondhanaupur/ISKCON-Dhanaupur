'use client'
import { motion } from 'framer-motion'
import { Lang } from '@/data/content'

interface Props { t: any; lang: Lang; onBack: () => void }

export default function ConnectView({ t, lang, onBack }: Props) {
  const c = t.connect
  const isHi = lang === 'hi'
  const ff = isHi ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'

  return (
    <section className="section" style={{ background: 'transparent' }}>
      <div className="container" style={{ maxWidth: 600 }}>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="back-btn" onClick={onBack} style={{ marginBottom: 32 }}>{t.back}</motion.button>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: 48, textAlign: 'center' }}>
          <p className="t-label" style={{ marginBottom: 6 }}>{isHi ? 'संपर्क' : 'Get in Touch'}</p>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 40px)', color: '#7a1f1f', marginBottom: 12, fontFamily: ff, fontWeight: 600 }}>{c.title}</h1>
          <p style={{ fontSize: 17, color: '#b8860b', fontFamily: ff, marginBottom: 20 }}>{c.subtitle}</p>
          <div className="gold-line" style={{ maxWidth: 80, margin: '0 auto' }} />
        </motion.div>

        {/* Info Cards */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            
            {/* Address Card */}
            <div style={{ 
              background: '#fef9f0', 
              border: '1px solid #d4af8f',
              borderRadius: 12,
              padding: '24px 20px',
              textAlign: 'center'
            }}>
              <span className="t-label" style={{ display: 'block', marginBottom: 12, color: '#b8860b', fontSize: 14 }}>
                {isHi ? 'पता' : 'Address'}
              </span>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7a1f1f" strokeWidth="1.5" style={{ margin: '0 auto 12px' }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <p style={{ fontSize: 14, color: '#4a3c2b', fontFamily: ff, lineHeight: 1.7 }}>
                {isHi ? 'धनौपुर, दोस्तपुर, कादीपुर, सुलतानपुर,\nउत्तर प्रदेश – 228131' : 'Dhanaupur, Dostpur, Kadipur, Sultanpur,\nUttar Pradesh – 228131'}
              </p>
            </div>

            {/* Phone Card */}
            <div style={{ 
              background: '#fef9f0', 
              border: '1px solid #d4af8f',
              borderRadius: 12,
              padding: '24px 20px',
              textAlign: 'center'
            }}>
              <span className="t-label" style={{ display: 'block', marginBottom: 12, color: '#b8860b', fontSize: 14 }}>
                {isHi ? 'फोन' : 'Phone'}
              </span>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7a1f1f" strokeWidth="1.5" style={{ margin: '0 auto 12px' }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a 
                href="tel:+918127443777"
                style={{ 
                  display: 'block',
                  background: 'linear-gradient(135deg, #b8860b 0%, #c99a3c 100%)',
                  color: '#2d1a0e',
                  borderRadius: 6,
                  padding: '12px 16px',
                  textDecoration: 'none',
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: ff,
                  marginBottom: 8,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(184, 134, 11, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                 +91 8127443777
              </a>
              <p style={{ fontSize: 12, color: '#7a6b5d' }}>{isHi ? 'कॉल करें' : 'Click to Call'}</p>
            </div>

            {/* Email Card */}
            <div style={{ 
              background: '#fef9f0', 
              border: '1px solid #d4af8f',
              borderRadius: 12,
              padding: '24px 20px',
              textAlign: 'center'
            }}>
              <span className="t-label" style={{ display: 'block', marginBottom: 12, color: '#b8860b', fontSize: 14 }}>
                {isHi ? 'ईमेल' : 'Email'}
              </span>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#7a1f1f" strokeWidth="1.5" style={{ margin: '0 auto 12px' }}>
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <a 
                href="mailto:iskcondhanaaupur@gmail.com"
                style={{ 
                  display: 'block',
                  background: 'linear-gradient(135deg, #b8860b 0%, #c99a3c 100%)',
                  color: '#2d1a0e',
                  borderRadius: 6,
                  padding: '12px 16px',
                  textDecoration: 'none',
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: ff,
                  marginBottom: 8,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  wordBreak: 'break-all'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(184, 134, 11, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                ✉ iskcondhanaaupur@gmail.com
              </a>
              <p style={{ fontSize: 12, color: '#7a6b5d' }}>{isHi ? 'ईमेल भेजें' : 'Send an Email'}</p>
            </div>

          </div>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.2 }}
          style={{ textAlign: 'center' }}>
          <a 
            href="https://wa.me/918127443777" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 12,
              background: 'linear-gradient(135deg, #7a1f1f 0%, #9a2f2f 100%)',
              color: '#fff',
              borderRadius: 8,
              padding: '18px 40px',
              textDecoration: 'none',
              fontSize: 18,
              fontWeight: 600,
              fontFamily: ff,
              letterSpacing: '0.02em',
              boxShadow: '0 4px 15px rgba(122, 31, 31, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(122, 31, 31, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(122, 31, 31, 0.2)'
            }}
          >
            {/* Real Green & White WhatsApp SVG Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#25D366" d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.848.502 3.573 1.377 5.057L2 22l5.088-1.336c1.436.786 3.082 1.233 4.833 1.233 5.525 0 10.083-4.479 10.083-10.005C22.004 6.48 17.524 2 12.004 2z"/>
              <path fill="#FFF" d="M16.924 14.17c-.27-.135-1.593-.787-1.84-.877-.246-.09-.426-.135-.606.135-.18.27-.696.877-.854 1.057-.157.18-.314.202-.584.067-.27-.135-1.14-.42-2.172-1.34-.803-.717-1.346-1.603-1.503-1.873-.157-.27-.017-.416.118-.55.122-.122.27-.315.405-.472.135-.157.18-.27.27-.45.09-.18.045-.337-.022-.472-.068-.135-.607-1.463-.832-2.003-.22-.528-.44-.455-.606-.464-.157-.008-.337-.008-.517-.008-.18 0-.472.067-.72.337-.246.27-.943.922-.943 2.25 0 1.327.966 2.61 1.1 2.79.135.18 1.9 2.901 4.604 4.07 1.135.49 1.83.655 2.472.76.65.104 1.242.043 1.71-.027.52-.078 1.594-.652 1.82-1.282.224-.63.224-1.17.156-1.282-.067-.113-.247-.18-.517-.315z"/>
            </svg>
            
            {isHi ? 'WhatsApp पर संपर्क करें' : 'Chat on WhatsApp'}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
