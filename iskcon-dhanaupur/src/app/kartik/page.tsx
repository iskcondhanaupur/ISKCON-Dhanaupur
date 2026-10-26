'use client'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import KartikView from '@/components/views/KartikView'
import { content, Lang } from '@/data/content'

export default function KartikPage() {
  const router = useRouter()
  const pathname = usePathname()
  const [lang, setLang] = useState<Lang>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('iskcon-dhanaupur-lang') as Lang | null
    if (saved === 'en' || saved === 'hi') {
      setLang(saved)
      setMounted(true)
    } else {
      // language chuni nahi hai -> pehle language page, phir wapas yahin
      router.replace(`/?next=${encodeURIComponent(pathname)}`)
    }
  }, [])

  const handleLangChange = (l: Lang) => {
    localStorage.setItem('iskcon-dhanaupur-lang', l)
    setLang(l)
  }

  if (!mounted) return null

  const t = content[lang]

  return (
    <div className="page-root">
      <Navbar
        lang={lang}
        onLangChange={handleLangChange}
        showLangSwitch
        showHamburger
        menu={t.menu}
        onMenuSelect={(id) => router.push(`/${id}`)}
      />
      <main style={{ flex: 1, paddingTop: 68 }}>
        <KartikView lang={lang} onBack={() => router.back()} />
      </main>
      <div className="floating-footer" style={{ borderTop: '1.5px solid #d4c2a5', padding: '32px 24px', textAlign: 'center', background: 'rgba(253,245,230,0.8)' }}>
        <span style={{ fontSize: 13, color: '#a0846c', fontFamily: 'Crimson Text, serif', letterSpacing: '0.06em', display: 'block', lineHeight: '1.6' }}>
          © 2026 ISKCON Dhanaupur
        </span>
        <span style={{ fontSize: 13, color: '#a0846c', fontFamily: 'Crimson Text, serif', letterSpacing: '0.06em', display: 'block' }}>
          All rights reserved
        </span>
      </div>
      <WhatsAppButton lang={lang} />
    </div>
  )
}