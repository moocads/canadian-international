import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AboutPage } from '@/components/about-page'

export const metadata: Metadata = {
  title: 'About Us | Canadian International College',
  description:
    'Learn about Canadian International College—a Toronto language school offering practical English and French courses, intensive programs, and test preparation for students and professionals.',
}

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutPage />
      <Footer />
    </main>
  )
}
