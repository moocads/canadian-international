'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

type ContentBlockProps = {
  label?: string
  heading: string
  body?: string | string[]
  listLabel?: string
  items?: string[]
  cta?: { label: string; href: string }
  variant?: 'default' | 'muted' | 'primary'
}

export function ContentBlock({
  label,
  heading,
  body,
  listLabel,
  items,
  cta,
  variant = 'default',
}: ContentBlockProps) {
  const bg =
    variant === 'muted' ? 'bg-muted/40' : variant === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-background'
  const paragraphs = body ? (Array.isArray(body) ? body : [body]) : []

  return (
    <section className={`py-16 md:py-20 ${bg}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 max-w-3xl"
      >
        {label && (
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
              variant === 'primary'
                ? 'bg-secondary text-secondary-foreground'
                : 'bg-primary text-primary-foreground'
            }`}
          >
            {label}
          </span>
        )}
        <h2
          className={`text-2xl md:text-3xl font-bold mb-6 text-balance ${
            variant === 'primary' ? 'text-primary-foreground' : 'text-foreground'
          }`}
        >
          {heading}
        </h2>
        {paragraphs.map((p) => (
          <p
            key={p.slice(0, 40)}
            className={`text-lg leading-relaxed mb-4 last:mb-0 ${
              variant === 'primary' ? 'text-primary-foreground/85' : 'text-muted-foreground'
            }`}
          >
            {p}
          </p>
        ))}
        {listLabel && (
          <p
            className={`mt-6 font-semibold ${
              variant === 'primary' ? 'text-primary-foreground' : 'text-foreground'
            }`}
          >
            {listLabel}
          </p>
        )}
        {items && items.length > 0 && (
          <ul className="mt-4 space-y-3">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-secondary-foreground" />
                </div>
                <span className={variant === 'primary' ? 'text-primary-foreground/90' : 'text-foreground'}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}
        {cta && (
          <Button
            asChild
            className="mt-8 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
          >
            <Link href={cta.href}>
              {cta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </motion.div>
    </section>
  )
}
