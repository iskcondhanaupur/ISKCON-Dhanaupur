'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Lang } from '@/data/content'
import LanguageView from '@/components/views/LanguageView'

export default function Home() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('iskcon-dhanaupur-lang') as Lang | null
    if (saved === 'en' || saved === 'hi') {
      router.replace('/menu')
    } else {
      setMounted(true)
    }
  }, [])

  const chooseLang = (l: Lang) => {
    localStorage.setItem('iskcon-dhanaupur-lang', l)
    router.push('/menu')
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
