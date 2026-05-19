import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ExamPrepDetail } from '@/components/pages/exam-prep-detail'
import { ieltsContent } from '@/lib/exam-prep-content'

export const metadata: Metadata = {
  title: 'IELTS Preparation | Canadian International Language School',
  description:
    'Prepare for IELTS with confidence. Strengthen speaking, listening, reading, and writing at Canadian International Language School.',
}

export default function IeltsPreparationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ExamPrepDetail content={ieltsContent} />
      <Footer />
    </main>
  )
}
