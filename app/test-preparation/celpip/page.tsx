import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ExamPrepDetail } from '@/components/pages/exam-prep-detail'
import { celpipContent } from '@/lib/exam-prep-content'

export const metadata: Metadata = {
  title: 'CELPIP Preparation | Canadian International Language School',
  description:
    'Prepare for the Canadian English testing environment with CELPIP preparation at Canadian International Language School.',
}

export default function CelpipPreparationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ExamPrepDetail content={celpipContent} />
      <Footer />
    </main>
  )
}
