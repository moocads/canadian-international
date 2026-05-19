'use client'

import { motion } from 'framer-motion'

export function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="relative flex min-h-[280px] md:min-h-[340px] items-end bg-cover bg-center pt-32 md:pt-40"
        style={{
          backgroundImage:
            "url('/images/banner-2.jpg')",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-primary/70"
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="container relative z-10 mx-auto px-4 pb-12 md:pb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">About Us</h1>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 max-w-3xl"
        >
          <p className="text-xl text-secondary font-semibold italic mb-8">
            You live it, you learn it!
          </p>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Canadian International College is a Toronto-based language school offering practical English
              and French courses, intensive language training, and test preparation programs for students,
              newcomers, and working professionals.
            </p>
            <p>
              Whether you are preparing for study, immigration, career development, or daily communication
              in Canada, we provide structured language programs to help you improve with confidence.
            </p>
            <p>
              Located in Toronto, we welcome learners from around the world into classrooms where English
              and French are taught with structure, warmth, and respect for every student&apos;s journey.
            </p>
            <p>
              Our courses focus on real communication skills—speaking, listening, reading, and writing—for
              everyday, academic, and professional situations. With flexible class options and preparation
              for major English and French tests, we support your goals every step of the way.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  )
}
