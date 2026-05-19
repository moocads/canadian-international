'use client'

import { motion } from 'framer-motion'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600'

type PageBannerProps = {
  title: string
  image?: string
}

export function PageBanner({ title, image = DEFAULT_IMAGE }: PageBannerProps) {
  return (
    <section
      className="relative flex min-h-[280px] md:min-h-[340px] items-end bg-cover bg-center pt-32 md:pt-40"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-primary/70"
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="container relative z-10 mx-auto px-4 pb-12 md:pb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-balance">
          {title}
        </h1>
      </motion.div>
    </section>
  )
}
