import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { WhyChooseUs } from '@/components/why-choose-us'
import { CoursesSection } from '@/components/courses-section'
import { TestsSection } from '@/components/tests-section'
import { OnlineLearning } from '@/components/online-learning'
import { WhoWeHelp } from '@/components/who-we-help'
import { LearningLevels } from '@/components/learning-levels'
import { StudyInToronto } from '@/components/study-in-toronto'
import { HowItWorks } from '@/components/how-it-works'
import { CTASection } from '@/components/cta-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <CoursesSection />
      <TestsSection />
      <OnlineLearning />
      <WhoWeHelp />
      <LearningLevels />
      <StudyInToronto />
            <CTASection />
      <HowItWorks />


      <Footer />
    </main>
  )
}
