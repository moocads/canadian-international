'use client'

import { PageBanner } from '@/components/page/page-banner'
import { PageIntro } from '@/components/page/page-intro'
import { ContentBlock } from '@/components/page/content-block'

export function CoursesOverviewPage() {
  return (
    <>
      <PageBanner title="Our Language Programs" />
      <PageIntro
        subheading="English and French Programs Designed for International Students in Canada"
        paragraphs={[
          'At Canadian International Language School, we offer a wide range of English and French language programs designed to support students at every stage of their learning journey.',
          'Whether your goal is academic preparation, professional development, daily communication, or adapting to life in Canada, our programs provide practical language training in a supportive and multicultural learning environment.',
        ]}
        features={[
          'Real-world communication',
          'Interactive classroom learning',
          'Confidence building',
          'Personalized student support',
        ]}
        closing="Students can choose from full-time, part-time, intensive, and private learning options based on their individual goals and schedules."
      />
      <ContentBlock
        label="English Programs"
        heading="English Programs"
        body="Our English courses help students improve communication skills for academic, professional, and everyday situations in Canada."
        listLabel="Programs Include:"
        items={[
          'General English',
          'Intensive English',
          'Academic English',
          'Business English',
          'Speaking & Pronunciation',
          'English for Beginners',
          'English for International Students',
          'Everyday English Communication',
          'Private English Lessons',
        ]}
        cta={{ label: 'Explore English Courses →', href: '/courses/english' }}
        variant="muted"
      />
      <ContentBlock
        label="French Programs"
        heading="French Programs"
        body="Our French courses are designed to help students build practical communication skills for education, work, and daily life in Canada."
        listLabel="Programs Include:"
        items={[
          'General French',
          'Intensive French',
          'Academic French',
          'French for Work',
          'French for Immigration',
          'French Conversation & Pronunciation',
          'French for Beginners',
          'Everyday French Communication',
          'Private French Lessons',
        ]}
        cta={{ label: 'Explore French Courses →', href: '/courses/french' }}
      />
      <ContentBlock
        heading="Flexible Learning Options"
        body="We offer flexible study formats to meet the needs of different students:"
        items={[
          'Full-Time Programs',
          'Part-Time Programs',
          'Evening Classes',
          'Intensive Courses',
          'Private Lessons',
          'Small Group Classes',
        ]}
        variant="muted"
      />
      <ContentBlock
        heading="Learn in a Supportive Canadian Environment"
        body={[
          'Our multicultural learning environment allows students to improve their language skills while experiencing Canadian culture, education, and community life.',
          'At Canadian International Language School, we are committed to helping every student build confidence, achieve their goals, and succeed in Canada.',
        ]}
        variant="primary"
      />
    </>
  )
}
