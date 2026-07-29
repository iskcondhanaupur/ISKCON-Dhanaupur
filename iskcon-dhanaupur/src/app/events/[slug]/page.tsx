import { content } from '@/data/content'
import EventDetailClient from './EventDetailClient'

export function generateStaticParams() {
  return content.en.events.list.map((event) => ({
    slug: event.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params
  return <EventDetailClient slug={slug} />
}