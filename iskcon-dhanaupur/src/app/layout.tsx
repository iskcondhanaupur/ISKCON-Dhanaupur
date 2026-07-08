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
  description: 'दुनिया की भाग-दौड़ और चकाचौंध से दूर आइये श्रीजगन्नाथ जी के आश्रय में, मनमोहक दर्शन, पतित पावन हरिनाम संकीर्तन, मुक्ति प्रदान करनेवाला भक्तों का संग और जीवन बदल देने वाला महाप्रसाद - आपके बहुत पास - आपके अपने इस्कॉन धनऊपुर में',
  icons: {
    icon: '/logo2.png',
    shortcut: '/logo2.png',
    apple: '/logo2.png',
  },
  openGraph: {
    title: 'ISKCON Dhanaupur — Sri Sri Radha ShyamSundar Mandir',
    description: 'दुनिया की भाग-दौड़ और चकाचौंध से दूर आइये श्रीजगन्नाथ जी के आश्रय में, मनमोहक दर्शन, पतित पावन हरिनाम संकीर्तन, मुक्ति प्रदान करनेवाला भक्तों का संग और जीवन बदल देने वाला महाप्रसाद - आपके बहुत पास - आपके अपने इस्कॉन धनऊपुर में',
    url: "https://iskcondhanaupur.com",
    siteName: "ISKCON Dhanaupur",
    images: [
      {
        url: "/Thumbnail.png",
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
    description: 'दुनिया की भाग-दौड़ और चकाचौंध से दूर आइये श्रीजगन्नाथ जी के आश्रय में, मनमोहक दर्शन, पतित पावन हरिनाम संकीर्तन, मुक्ति प्रदान करनेवाला भक्तों का संग और जीवन बदल देने वाला महाप्रसाद - आपके बहुत पास - आपके अपने इस्कॉन धनऊपुर में',
    images: ["/Thumbnail.png"],
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