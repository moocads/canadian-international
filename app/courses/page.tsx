import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CoursesOverviewPage } from '@/components/pages/courses-overview-page'

export const metadata: Metadata = {
  title: 'Our Language Programs | Canadian International Language School',
  description:
    'Explore English and French language programs at Canadian International Language School—designed for international students in Canada.',
}

export default function CoursesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CoursesOverviewPage />
      <Footer />
    </main>
  )
}
