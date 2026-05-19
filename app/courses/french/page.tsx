import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FrenchCoursesPage } from '@/components/pages/french-courses-page'

export const metadata: Metadata = {
  title: 'French Courses | Canadian International Language School',
  description:
    'Learn French for life, education, and work in Canada. Explore General French, Intensive French, and more at CILS.',
}

export default function FrenchCourses() {
  return (
    <main className="min-h-screen">
      <Header />
      <FrenchCoursesPage />
      <Footer />
    </main>
  )
}
