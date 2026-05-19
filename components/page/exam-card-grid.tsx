'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export type ExamCard = {
  name: string
  description: string
  href: string
}

type ExamCardGridProps = {
  cards: ExamCard[]
}

export function ExamCardGrid({ cards }: ExamCardGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={card.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Link
              href={card.href}
              className="block h-full bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <h3 className="text-xl font-bold text-primary mb-3">{card.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{card.description}</p>
              <span className="inline-flex items-center text-primary font-semibold text-sm">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
  )
}
