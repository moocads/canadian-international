import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactPage } from '@/components/contact-page'

export const metadata: Metadata = {
  title: 'Contact Us | Canadian International College',
  description:
    'Contact Canadian International College in Toronto for questions about English and French courses, test preparation, schedules, and enrollment.',
}

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactPage />
      <Footer />
    </main>
  )
}

