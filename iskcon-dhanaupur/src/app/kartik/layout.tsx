import type { Metadata } from 'next'

const title = 'कार्तिक मास — श्री दामोदर मास | ISKCON Dhanaupur'
const description =
  ''

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://iskcondhanaupur.com/kartik' },
  openGraph: {
    title,
    description,
    url: 'https://iskcondhanaupur.com/kartik',
    siteName: 'ISKCON Dhanaupur',
    type: 'website',
    images: [
      {
        url: '/yk.png',
        width: 1200,
        height: 630,
        alt: 'Kartik Maas — Sri Damodara Month, ISKCON Dhanaupur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/yk.png'],
  },
}

export default function KartikLayout({ children }: { children: React.ReactNode }) {
  return children
}