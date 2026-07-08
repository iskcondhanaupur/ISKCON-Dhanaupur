'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NavbarProps {
  lang?: 'en' | 'hi'
  onLangChange?: (lang: 'en' | 'hi') => void
  showLangSwitch?: boolean
  showHamburger?: boolean
  menu?: { id: string; label: string; sub: string }[]
  onMenuSelect?: (id: string) => void
}

export default function Navbar({ lang = 'en', onLangChange, showLangSwitch = true, showHamburger, menu, onMenuSelect }: NavbarProps) {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
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
      </div>
    </nav>
  )
}