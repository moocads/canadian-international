import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ExamPrepDetail } from '@/components/pages/exam-prep-detail'
import { tcfContent } from '@/lib/exam-prep-content'

export const metadata: Metadata = {
  title: 'TCF Canada Preparation | Canadian International Language School',
  description:
    'Build confidence in French communication with TCF Canada preparation at Canadian International Language School.',
}

export default function TcfCanadaPreparationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ExamPrepDetail content={tcfContent} />
      <Footer />
    </main>
  )
}
