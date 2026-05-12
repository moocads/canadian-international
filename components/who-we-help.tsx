'use client'

import { motion } from 'framer-motion'
import { Users, GraduationCap, Briefcase, FileCheck, BookOpen, TrendingUp } from 'lucide-react'

const audiences = [
  {
    icon: Users,
    title: 'Newcomers to Canada',
    description:
      'Build the language skills you need for daily life, community involvement, and long-term settlement.',
  },
  {
    icon: GraduationCap,
    title: 'International Students',
    description:
      'Improve your English or French for academic success, communication, and future career opportunities.',
  },
  {
    icon: Briefcase,
    title: 'Working Professionals',
    description:
      'Develop stronger communication skills for the workplace, interviews, networking, and professional growth.',
  },
  {
    icon: FileCheck,
    title: 'Immigration Applicants',
    description:
      'Prepare for language exams required for Canadian immigration pathways and permanent residence applications.',
  },
  {
    icon: BookOpen,
    title: 'Beginners',
    description:
      'Start from the basics with clear instruction, guided practice, and a supportive learning environment.',
  },
  {
    icon: TrendingUp,
    title: 'Advanced Learners',
    description:
      'Improve fluency, accuracy, writing, pronunciation, and confidence in higher-level communication.',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function WhoWeHelp() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
            Our Students
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Who Our Courses Are For
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our programs are suitable for learners with different backgrounds and goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {audiences.map((audience) => (
            <motion.div
              key={audience.title}
              variants={itemVariants}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-border"
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                <audience.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{audience.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{audience.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
