'use client'

import { PageBanner } from '@/components/page/page-banner'
import { Breadcrumbs } from '@/components/page/breadcrumbs'
import { PageIntro } from '@/components/page/page-intro'
import { CourseCardsGrid } from '@/components/page/course-cards-grid'
import { englishCourses } from '@/lib/course-content'

export function EnglishCoursesPage() {
  return (
    <>
      <PageBanner title="English Courses" />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Courses', href: '/courses' },
          { label: 'English Courses' },
        ]}
      />
      <PageIntro
        subheading="Improve Your English Skills with Confidence"
        paragraphs={[
          'Our English programs are designed for students who want to improve communication skills for education, work, and daily life in Canada. Through interactive lessons and practical learning experiences, students develop confidence in speaking, listening, reading, and writing.',
        ]}
      />
      <section className="bg-muted/30 pb-8">
        <CourseCardsGrid courses={englishCourses} />
      </section>
    </>
  )
}
