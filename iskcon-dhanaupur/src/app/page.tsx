'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lang } from '@/data/content'
import LanguageView from '@/components/views/LanguageView'

// ?next= se aaya path sirf internal ho tabhi use karo
function getNextPath(): string {
  const next = new URLSearchParams(window.location.search).get('next')
  if (next && next.startsWith('/') && !next.startsWith('//')) return next
  return '/menu'
}

export default function Home() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('iskcon-dhanaupur-lang') as Lang | null
    if (saved === 'en' || saved === 'hi') {
      router.replace(getNextPath())
    } else {
      setMounted(true)
    }
  }, [])

  const chooseLang = (l: Lang) => {
    localStorage.setItem('iskcon-dhanaupur-lang', l)
    router.replace(getNextPath())
  }

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
    >
      <LanguageView onSelect={chooseLang} />
    </motion.div>
  )
}