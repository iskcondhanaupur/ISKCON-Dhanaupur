import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://iskcondhanaupur.com"),
  title: 'ISKCON Dhanaupur — Sri Sri Radha ShyamSundar Mandir',
  description: 'दुनिया की भाग-दौड़ और चकाचौंध से दूर आइये श्रीजगन्नाथ जी के आश्रय में, मनमोहक दर्शन, पतित पावन हरिनाम संकीर्तन, मुक्ति प्रदान करनेवाला भक्तों का संग और जीवन बदल देने वाला महाप्रसाद - आपके बहुत पास - आपके अपने इस्कॉन धनऊपुर में',
  icons: { icon: '/favicon.ico' },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
