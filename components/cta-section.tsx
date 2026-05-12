'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden" style={{ backgroundImage: `url('/images/cta-background.jpg')` , backgroundSize: 'cover', backgroundPosition: 'top' }}>
      <div className="absolute inset-0 bg-primary/60" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Improve Your English or French?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Take the first step toward better communication, stronger test results, and more opportunities in Canada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg px-8"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
