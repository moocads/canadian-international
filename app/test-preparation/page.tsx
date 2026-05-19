import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TestPrepOverviewPage } from '@/components/pages/test-prep-overview-page'

export const metadata: Metadata = {
  title: 'Test Preparation Programs | Canadian International Language School',
  description:
    'Prepare for IELTS, CELPIP, TEF Canada, and TCF Canada with professional test preparation programs at CILS.',
}

export default function TestPreparationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <TestPrepOverviewPage />
      <Footer />
    </main>
  )
}
