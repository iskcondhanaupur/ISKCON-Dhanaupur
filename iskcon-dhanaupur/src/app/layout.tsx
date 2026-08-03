import type { Metadata } from 'next'
import {
  Cormorant_Garamond,
  Crimson_Text,
  Tiro_Devanagari_Hindi,
} from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const crimson = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-crimson',
  display: 'swap',
})

const tiroDevanagari = Tiro_Devanagari_Hindi({
  subsets: ['devanagari'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-tiro-devanagari',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://iskcondhanaupur.com"),
  title: 'ISKCON Dhanaupur — Sri Sri Radha ShyamSundar Mandir',
  description: 'श्री श्री राधा श्यामसुंदर मंदिर धनऊपुर में श्रीकृष्ण जन्माष्टमी का दिव्य महोत्सव का दिव्य उत्सव। मनमोहक दर्शन, अखंड हरिनाम संकीर्तन, अभिषेक, झांकी, महाप्रसasad और भक्तों के संग श्रीकृष्ण जन्मोत्सव का आनंद लें।',
  icons: {
    icon: '/logo2.png',
    shortcut: '/logo2.png',
    apple: '/logo2.png',
  },
  alternates: {
    canonical: 'https://iskcondhanaupur.com',
  },
  openGraph: {
    title: 'ISKCON Dhanaupur — Sri Sri Radha ShyamSundar Mandir',
    description: 'श्री श्री राधा श्यामसुंदर मंदिर धनऊपुर में श्रीकृष्ण जन्माष्टमी का दिव्य महोत्सव। मनमोहक दर्शन, अखंड हरिनाम संकीर्तन, अभिषेक, झांकी, महाप्रसाद और भक्तों के संग श्रीकृष्ण जन्मोत्सव का आनंद लें।',
    url: "https://iskcondhanaupur.com",
    siteName: "ISKCON Dhanaupur",
    images: [
      {
        url: "https://iskcondhanaupur.com/thumbnaiil.png",
        width: 1200,
        height: 630,
        alt: "ISKCON Dhanaupur Sri Sri Radha ShyamSundar Mandir",
      },
    ],
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISKCON Dhanaupur — Sri Sri Radha ShyamSundar Mandir',
    description: 'श्री श्री राधा श्यामसुंदर मंदिर धनऊपुर में श्रीकृष्ण जन्माष्टमी का दिव्य महोत्सव। मनमोहक दर्शन, अखंड हरिनाम संकीर्तन, अभिषेक, झांकी, महाप्रसाद और भक्तों के संग श्रीकृष्ण जन्मोत्सव का आनंद लें।',
    images: ["https://iskcondhanaupur.com/thumbnaiil.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${crimson.variable} ${tiroDevanagari.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}