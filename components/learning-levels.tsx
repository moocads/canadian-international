'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const levels = [
  {
    name: 'Beginner',
    level: 'A1',
    description: 'No prior knowledge. Learn basic vocabulary and simple phrases.',
  },
  {
    name: 'Elementary',
    level: 'A2',
    description: 'Understand and use everyday expressions. Basic interactions.',
  },
  {
    name: 'Intermediate',
    level: 'B1',
    description: 'Handle most travel situations. Describe experiences and events.',
  },
  {
    name: 'Upper-Intermediate',
    level: 'B2',
    description: 'Interact with fluency. Produce detailed text on various topics.',
  },
  {
    name: 'Advanced',
    level: 'C1',
    description: 'Express ideas fluently. Use language flexibly for all purposes.',
  },
  {
    name: 'Test Preparation',
    level: 'C2',
    description: 'Focused exam preparation with practice tests and strategies.',
  },
]

export function LearningLevels() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold mb-4">
            Structured Learning
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Courses for Every Level
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From beginner to advanced, our programs are structured to help students progress step by step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {levels.map((level, index) => (
            <motion.div
              key={level.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative bg-background rounded-2xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all group"
            >
              <div className="absolute top-4 right-4 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <span className="font-bold text-primary">{level.level}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 pr-14">{level.name}</h3>
              <p className="text-muted-foreground leading-relaxed">{level.description}</p>
              <div className="mt-4 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            Before starting your course, students may complete a level assessment so we can recommend the most suitable class.
          </p>
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
          >
            Book a Level Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
