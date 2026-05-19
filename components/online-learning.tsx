'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Settings, Pencil, Users } from 'lucide-react'

const stats = [
  { number: '1,800+', label: 'Oral and written comprehension exercises' },
  { number: '950', label: 'Topics for oral and written expression' },
  { number: '4', label: 'Mock tests' },
  { number: '25+', label: 'Practice hours' },
]

const features = [
  {
    icon: Settings,
    title: 'Mock Tests',
    description:
      'Designed to familiarize you with the format and interface of the real exam before test day, with progress tracking throughout your preparation.',
  },
  {
    icon: Pencil,
    title: 'Training Statements and Answers',
    description:
      'Exercises in oral and written comprehension with their corrections, as well as expression topics in both oral and written forms, accompanied by suggested answers.',
  },
  {
    icon: Users,
    title: 'Affordable Online Access',
    description: 'Flexible online access at a budget-friendly price: Starting from $50',
  },
]

export function OnlineLearning() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-background rounded-2xl p-6 text-center ${
                  index === 1 || index === 3 ? 'mt-8' : ''
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">{stat.number}</span>
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold mb-4">
              E-Learning Platform
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Adaptive Online Training Space
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Are you looking to prepare for language listening and reading comprehension tests?
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
            >
              DISCOVER THE PLATFORM BY CLICKING HERE
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
