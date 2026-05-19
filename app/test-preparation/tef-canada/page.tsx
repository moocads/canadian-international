import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ExamPrepDetail } from '@/components/pages/exam-prep-detail'
import { tefContent } from '@/lib/exam-prep-content'

export const metadata: Metadata = {
  title: 'TEF Canada Preparation | Canadian International Language School',
  description:
    'Prepare for French success in Canada with TEF Canada preparation at Canadian International Language School.',
}

export default function TefCanadaPreparationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ExamPrepDetail content={tefContent} />
      <Footer />
    </main>
  )
}
