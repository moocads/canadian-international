'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Contact Canadian International College
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions about our courses, schedules, or test preparation programs? Reach our team by phone, email, or visit us in Toronto.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto bg-primary rounded-2xl p-8 text-primary-foreground"
        >
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <ul className="space-y-6">
            <li>
              <a href="tel:+14165550123" className="flex items-center gap-4 hover:text-secondary transition-colors">
                <Phone className="h-5 w-5 shrink-0" />
                <span>
                  <span className="block font-semibold">Phone</span>
                  <span className="text-primary-foreground/80">+1 (416) 555-0123</span>
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:info@cicollege.ca" className="flex items-center gap-4 hover:text-secondary transition-colors">
                <Mail className="h-5 w-5 shrink-0" />
                <span>
                  <span className="block font-semibold">Email</span>
                  <span className="text-primary-foreground/80">info@cicollege.ca</span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
              <span>
                <span className="block font-semibold">Location</span>
                <span className="text-primary-foreground/80">
                  2347 Kennedy Rd, Suite 505
                  <br />
                  Scarborough, ON M1T 3T8
                </span>
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
