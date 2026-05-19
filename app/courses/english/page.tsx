import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { EnglishCoursesPage } from '@/components/pages/english-courses-page'

export const metadata: Metadata = {
  title: 'English Courses | Canadian International Language School',
  description:
    'Improve your English skills with confidence. Explore General English, Intensive English, Academic English, and more at CILS.',
}

export default function EnglishCourses() {
  return (
    <main className="min-h-screen">
      <Header />
      <EnglishCoursesPage />
      <Footer />
    </main>
  )
}
