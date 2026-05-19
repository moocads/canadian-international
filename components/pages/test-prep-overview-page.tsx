'use client'

import { PageBanner } from '@/components/page/page-banner'
import { PageIntro } from '@/components/page/page-intro'
import { ContentBlock } from '@/components/page/content-block'
import { ExamCardGrid } from '@/components/page/exam-card-grid'

const englishExams = [
  {
    name: 'IELTS Preparation',
    description:
      "Prepare for one of the world's most recognized English proficiency exams for education and immigration purposes.",
    href: '/test-preparation/ielts',
  },
  {
    name: 'CELPIP Preparation',
    description:
      'Develop practical English communication skills and familiarize yourself with the Canadian English testing environment.',
    href: '/test-preparation/celpip',
  },
]

const frenchExams = [
  {
    name: 'TEF Canada Preparation',
    description:
      'Strengthen your French language abilities and prepare for the official French evaluation commonly used for Canadian immigration pathways.',
    href: '/test-preparation/tef-canada',
  },
  {
    name: 'TCF Canada Preparation',
    description:
      'Build confidence in French communication while preparing for the structure and requirements of the TCF Canada exam.',
    href: '/test-preparation/tcf-canada',
  },
]

function ExamSection({
  label,
  heading,
  cards,
  variant,
}: {
  label: string
  heading: string
  cards: typeof englishExams
  variant: 'default' | 'muted'
}) {
  const bg = variant === 'muted' ? 'bg-muted/40' : 'bg-background'
  return (
    <section className={`py-12 md:py-16 ${bg}`}>
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
          {label}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{heading}</h2>
        <ExamCardGrid cards={cards} />
      </div>
    </section>
  )
}

export function TestPrepOverviewPage() {
  return (
    <>
      <PageBanner title="Test Preparation Programs" />
      <PageIntro
        subheading="Prepare for Your Language Exam with Confidence"
        paragraphs={[
          'Canadian International Language School offers professional test preparation programs designed to help students improve language skills, build confidence, and become familiar with official exam formats used for education, immigration, and professional purposes in Canada.',
        ]}
        features={[
          'Structured learning',
          'Practical language development',
          'Experienced instructors',
          'Targeted skill training',
          'Realistic practice activities',
        ]}
        closing="Whether you are preparing for English or French language exams, our programs are designed to support your success through focused and interactive learning."
      />
      <ExamSection
        label="English Test Preparation"
        heading="English Test Preparation"
        cards={englishExams}
        variant="default"
      />
      <ExamSection
        label="French Test Preparation"
        heading="French Test Preparation"
        cards={frenchExams}
        variant="muted"
      />
      <ContentBlock
        heading="Why Choose Our Test Preparation Programs?"
        items={[
          'Experienced language instructors',
          'Practical exam-focused training',
          'Interactive classroom learning',
          'Speaking and communication practice',
          'Small class environments',
          'Flexible study options',
          'Supportive multicultural learning atmosphere',
        ]}
      />
      <ContentBlock
        heading="Start Your Preparation Journey Today"
        body="Whether your goal is immigration, higher education, or professional development, our preparation programs are designed to help you move forward with confidence."
        variant="primary"
      />
    </>
  )
}
