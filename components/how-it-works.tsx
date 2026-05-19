'use client'

import { motion } from 'framer-motion'
import { Compass, BookOpen, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Compass,
    number: '01',
    title: 'Explore Our Programs',
    description: 'Browse English, French, and test preparation courses to find the right fit for your goals.',
  },
  {
    icon: BookOpen,
    number: '02',
    title: 'Choose Your Program',
    description: 'Select the course format that fits your schedule and language needs.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Start Learning',
    description: 'Join your class, practice regularly, and track your progress with instructor support.',
  },
]

export function HowItWorks() {
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
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            How to Get Started
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started is easy. Follow these simple steps to begin your language learning journey.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="relative inline-block mb-8">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-secondary-foreground">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
