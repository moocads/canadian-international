'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

type FeatureListProps = {
  items: string[]
  className?: string
}

export function FeatureList({ items, className }: FeatureListProps) {
  return (
    <ul className={className ?? 'grid sm:grid-cols-2 gap-4 mt-8'}>
      {items.map((item, index) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          className="flex items-start gap-3"
        >
          <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center shrink-0 mt-0.5">
            <Check className="h-4 w-4 text-secondary-foreground" />
          </div>
          <span className="text-foreground">{item}</span>
        </motion.li>
      ))}
    </ul>
  )
}
