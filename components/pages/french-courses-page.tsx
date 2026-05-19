'use client'

import { PageBanner } from '@/components/page/page-banner'
import { Breadcrumbs } from '@/components/page/breadcrumbs'
import { PageIntro } from '@/components/page/page-intro'
import { CourseCardsGrid } from '@/components/page/course-cards-grid'
import { frenchCourses } from '@/lib/course-content'

export function FrenchCoursesPage() {
  return (
    <>
      <PageBanner title="French Courses" />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Courses', href: '/courses' },
          { label: 'French Courses' },
        ]}
      />
      <PageIntro
        subheading="Learn French for Life, Education, and Work in Canada"
        paragraphs={[
          'Our French programs help students develop practical communication skills while building confidence in real-world and academic environments. Courses are designed for beginners, intermediate learners, and advanced students who want to improve their French in Canada.',
        ]}
      />
      <section className="bg-muted/30 pb-8">
        <CourseCardsGrid courses={frenchCourses} />
      </section>
    </>
  )
}
