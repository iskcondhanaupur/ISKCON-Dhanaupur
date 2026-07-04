'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Home,
  Eye,
  CalendarDays,
  Moon,
  Clock,
  BookOpen,
  Users,
  HandCoins,
  MapPin,
  Info,
  Share2,
  Phone,
  Sparkles,
} from 'lucide-react'

interface NavbarProps {
  lang?: 'en' | 'hi'
  onLangChange?: (lang: 'en' | 'hi') => void
  menu?: { id: string; label: string; sub?: string }[]
  onMenuSelect?: (id: string) => void
  showLangSwitch?: boolean
  showHamburger?: boolean
}

const scrollbarHideStyles = `
  .menu-drawer::-webkit-scrollbar {
    display: none;
  }
  .menu-drawer {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`

function getMenuIcon(label: string) {
  const l = label.toLowerCase()
  if (l.includes('darshan')) return Eye
  if (l.includes('festival')) return CalendarDays
  if (l.includes('ekadashi')) return Moon
  if (l.includes('weekly') || l.includes('program')) return Clock
  if (l.includes('course')) return BookOpen
  if (l.includes('youth') || l.includes('forum')) return Users
  if (l.includes('donat')) return HandCoins
  if (l.includes('dham') || l.includes('yatra')) return MapPin
  if (l.includes('about')) return Info
  if (l.includes('social')) return Share2
  if (l.includes('contact')) return Phone
  return Sparkles
}

export default function Navbar({ lang = 'en', onLangChange, menu = [], onMenuSelect, showLangSwitch = true, showHamburger = true }: NavbarProps) {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const styleTag = document.createElement('style')
    styleTag.textContent = scrollbarHideStyles
    document.head.appendChild(styleTag)
    return () => styleTag.remove()
  }, [])

  const ff = lang === 'hi' ? 'Tiro Devanagari Hindi, serif' : 'Cormorant Garamond, serif'
  const homeLabel = lang === 'hi' ? 'होम' : 'Home'

  return (
    <>
      <nav className={`site-nav${mounted && scrolled ? ' scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>

          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Image
              src="/ISKCON Logo.png"
              alt="ISKCON Dhanaupur"
              width={160}
              height={56}
              priority
              style={{
                objectFit: 'contain',
                width: 'auto',
                height: 'clamp(30px, 15vw, 40px)'
              }}
            />
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            {showLangSwitch && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 3,
                background: 'var(--parchment)', border: '1.5px solid var(--gold)',
                borderRadius: 20, padding: '3px 4px', flexShrink: 0,
              }}>
                <button type="button" onClick={() => onLangChange?.('en')}
                  style={{
                    background: lang === 'en' ? 'var(--maroon)' : 'transparent',
                    color: lang === 'en' ? 'var(--parchment)' : 'var(--gold)',
                    border: 'none', padding: '6px 12px', borderRadius: 16,
                    cursor: 'pointer', fontSize: 12, fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 700, letterSpacing: '0.05em', transition: 'background 0.2s, color 0.2s',
                  }}>
                  EN
                </button>
                <button type="button" onClick={() => onLangChange?.('hi')}
                  style={{
                    background: lang === 'hi' ? 'var(--maroon)' : 'transparent',
                    color: lang === 'hi' ? 'var(--parchment)' : 'var(--gold)',
                    border: 'none', padding: '6px 12px', borderRadius: 16,
                    cursor: 'pointer', fontSize: 13, fontFamily: 'Tiro Devanagari Hindi, serif',
                    transition: 'background 0.2s, color 0.2s',
                  }}>
                  हिन्दी
                </button>
              </div>
            )}

            {showHamburger && (
              <button onClick={() => setOpen(v => !v)} aria-label="Open menu"
                style={{
                  background: 'none', border: '1.5px solid var(--gold)', borderRadius: 8,
                  cursor: 'pointer', padding: '8px 9px', display: 'flex',
                  flexDirection: 'column', gap: 5, flexShrink: 0,
                }}>
                {[0, 1, 2].map(i => (
                  <span key={i} style={{
                    display: 'block', width: 20, height: 1.6, background: 'var(--maroon)', borderRadius: 2,
                    transition: 'transform 0.25s, opacity 0.25s',
                    transform: 'none',
                    opacity: 1,
                  }} />
                ))}
              </button>
            )}
          </div>
        </div>
      </nav>

      {open && showHamburger && (
        <div className="drawer-overlay" onClick={() => setOpen(false)}>
          <div
            className="menu-drawer"
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--parchment)', borderRadius: 16, width: 300,
              maxHeight: '80vh', overflowY: 'auto',
              padding: '14px 14px 18px',
              display: 'flex', flexDirection: 'column', gap: 0,
              boxShadow: '0 0 0 1px rgba(184,134,11,0.2), 0 12px 40px rgba(122,31,31,0.18)',
              border: '1.5px solid var(--gold)',
              position: 'relative',
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{
                position: 'absolute', top: 12, right: 12,
                background: 'none', border: 'none', cursor: 'pointer',
                width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--maroon)', fontSize: 20, lineHeight: 1,
                borderRadius: 6, transition: 'background 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-pale)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
            >
              ✕
            </button>

            <Link
              href="/"
              onClick={() => setOpen(false)}
              style={{
                width: '100%', textAlign: 'left', border: 'none', background: 'transparent',
                padding: '12px 14px', borderRadius: 8, cursor: 'pointer',
                fontFamily: ff, fontSize: 16, fontWeight: 600,
                color: 'var(--text)', transition: 'background 0.15s, padding-left 0.15s',
                textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: 12,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-pale)'; e.currentTarget.style.paddingLeft = '18px' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '14px' }}
            >
              <Home size={19} strokeWidth={1.75} color="var(--gold)" style={{ flexShrink: 0 }} />
              {homeLabel}
            </Link>
            <div style={{ height: '1px', background: 'var(--border)', margin: '0 14px' }} />

            {menu.map((item, idx) => {
              const Icon = getMenuIcon(item.label)
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    onClick={() => { setOpen(false); onMenuSelect?.(item.id) }}
                    style={{
                      width: '100%', textAlign: 'left', border: 'none', background: 'transparent',
                      padding: '12px 14px', borderRadius: 8, cursor: 'pointer',
                      fontFamily: ff, fontSize: 16, fontWeight: 600,
                      color: 'var(--text)', transition: 'background 0.15s, padding-left 0.15s',
                      display: 'flex', alignItems: 'center', gap: 12,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-pale)'; e.currentTarget.style.paddingLeft = '18px' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '14px' }}
                  >
                    <Icon size={19} strokeWidth={1.75} color="var(--gold)" style={{ flexShrink: 0 }} />
                    {item.label}
                  </button>
                  {idx < menu.length - 1 && (
                    <div style={{ height: '1px', background: 'var(--border)', margin: '0 14px' }} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}
