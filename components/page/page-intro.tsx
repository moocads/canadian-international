'use client'

import { motion } from 'framer-motion'
import { FeatureList } from './feature-list'

type PageIntroProps = {
  subheading?: string
  paragraphs: string[]
  features?: string[]
  closing?: string
  skills?: string[]
}

export function PageIntro({ subheading, paragraphs, features, closing, skills }: PageIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 max-w-3xl py-12 md:py-16"
    >
      {subheading && (
        <p className="text-xl md:text-2xl font-bold text-primary mb-6">{subheading}</p>
      )}
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-8">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
      {features && features.length > 0 && <FeatureList items={features} />}
      {closing && (
        <p className="mt-8 text-lg text-foreground leading-relaxed">{closing}</p>
      )}
    </motion.div>
  )
}
