'use client'

import { motion } from 'framer-motion'
import { Check, MapPin } from 'lucide-react'

const highlights = [
  'Toronto-based language school',
  'Multicultural student community',
  'Practical courses for life in Canada',
  'Supportive instructors and flexible schedules',
  'Programs for study, work, immigration, and daily communication',
]

export function StudyInToronto() {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage:
                   `url('/images/toronto-city.jpg')`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">Scarborough, Ontario</span>
                </div>
                <p className="text-white/90 text-sm">
                  One of the most multicultural cities in the world
                </p>
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-background p-6 rounded-2xl shadow-xl border border-border"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <span className="text-3xl font-bold text-primary">50+</span>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-primary">1000+</span>
                  <p className="text-sm text-muted-foreground">Students</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
              Study in Canada
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Learn Languages in the Heart of Toronto
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Toronto is one of the most multicultural cities in the world and an ideal place to improve your English and French skills. At Canadian International College, students learn in an international environment where language is connected to real life, culture, education, and career opportunities.
            </p>

            <ul className="space-y-4">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-secondary-foreground" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
