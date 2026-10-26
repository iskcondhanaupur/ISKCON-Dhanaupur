'use client'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Lang } from '@/data/content'

const KEY = 'iskcon-dhanaupur-lang'

export function useLangGate() {
  const router = useRouter()
  const pathname = usePathname()
  const [lang, setLang] = useState<Lang>('en')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let saved: string | null = null
    try { saved = localStorage.getItem(KEY) } catch {}

    if (saved === 'en' || saved === 'hi') {
      setLang(saved)
      setReady(true)
    } else {
      router.replace(`/?next=${encodeURIComponent(pathname)}`)
    }
  }, [])

  const changeLang = (l: Lang) => {
    setLang(l)
    try { localStorage.setItem(KEY, l) } catch {}
  }

  return { lang, changeLang, ready }
}