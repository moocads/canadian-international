'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const tests = [
  {
    name: 'IELTS',
    fullName: 'International English Language Testing System',
    color: 'bg-red-500',
    textColor: 'text-red-500',
  },
  {
    name: 'CELPIP',
    fullName: 'Canadian English Language Proficiency Index Program',
    color: 'bg-primary',
    textColor: 'text-primary',
  },
  {
    name: 'TEF Canada',
    fullName: "Test d'évaluation de Français pour le Canada",
    color: 'bg-primary',
    textColor: 'text-primary',
  },
  {
    name: 'TCF Canada',
    fullName: 'Test de connaissance du Français Canada',
    color: 'bg-primary',
    textColor: 'text-primary',
  },
  {
    name: 'TEFAQ',
    fullName: "Test d'évaluation de Français adapté au Québec",
    color: 'bg-primary',
    textColor: 'text-primary',
  },
  {
    name: 'TOEFL',
    fullName: 'Test of English as a Foreign Language',
    color: 'bg-blue-600',
    textColor: 'text-blue-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
}

export function TestsSection() {
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
            Accredited Official Language Test Centre
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Discover Our Official Language Tests!
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A calm environment, a dedicated team of experts, and optimal testing conditions to help you succeed with confidence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tests.map((test) => (
            <motion.div
              key={test.name}
              variants={itemVariants}
              className="group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-8 bg-muted/30 flex items-center justify-center min-h-32">
                <span className={`text-3xl font-bold ${test.textColor}`}>
                  {test.name}
                </span>
              </div>
              <div className={`${test.color} text-white p-6`}>
                <h3 className="font-bold text-lg mb-2">{test.fullName}</h3>
                <p className="text-white/80 text-sm mb-4">{test.name}</p>
                <button className="flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all">
                  Immediate availability
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
