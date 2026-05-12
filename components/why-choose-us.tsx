'use client'

import { motion } from 'framer-motion'
import { BookOpen, Clock, Globe, Award } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Practical Language Training',
    description:
      'Our courses focus on real communication skills, including speaking, listening, reading, and writing for everyday, academic, and professional situations.',
  },
  {
    icon: Clock,
    title: 'Flexible Class Options',
    description:
      'Choose from morning, evening, weekend, online, and intensive courses that fit your schedule.',
  },
  {
    icon: Globe,
    title: 'Multicultural Learning Environment',
    description:
      'Located in Toronto, we welcome students from diverse backgrounds and help them adapt to life, study, and work in Canada.',
  },
  {
    icon: Award,
    title: 'Test Preparation Support',
    description:
      'We offer preparation programs for major English and French language tests required for immigration, education, and career goals.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            A Language School Designed for Real-Life Success
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Whether you are preparing for study, immigration, career development, or daily communication in Canada, Canadian International College provides structured language programs to help you improve with confidence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
