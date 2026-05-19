'use client'

import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

export type CourseItem = {
  name: string
  description: string
}

type CourseCardsGridProps = {
  courses: CourseItem[]
}

export function CourseCardsGrid({ courses }: CourseCardsGridProps) {
  return (
    <div className="container mx-auto px-4 pb-16 md:pb-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.article
            key={course.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={ { opacity: 1, y: 0 }}
            viewport={ { once: true }}
            transition={ { delay: index * 0.05, duration: 0.4 }}
            className="bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{course.name}</h3>
            <p className="text-muted-foreground leading-relaxed">{course.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
