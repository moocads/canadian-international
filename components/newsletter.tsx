'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="relative">
      {/* Wave Top */}
      <div className="bg-primary">

      </div>

      <div className="bg-background py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-muted/50 rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Dotted Pattern Background */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'radial-gradient(circle,rgb(201, 212, 227) 1px, transparent 1px)',
                backgroundSize: '10px 10px',
              }}
            />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold mb-4">
                  Monthly Newsletter
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-muted-foreground">
                  Learn more about our College, new courses, and special offers. A new edition each month.
                </p>
              </div>

              <div>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-6"
                  >
                    <CheckCircle className="h-8 w-8 text-green-500" />
                    <div>
                      <p className="font-semibold text-green-800">Thank you for subscribing!</p>
                      <p className="text-sm text-green-600">{"You'll receive our next newsletter soon."}</p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter Your E-Mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-14 bg-background border-border text-lg"
                      required
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="h-14 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
                    >
                      Register
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
