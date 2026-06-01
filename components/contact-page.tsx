'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function ContactPage() {
  return (
    <>
      {/* Top banner */}
      <section
        className="relative flex min-h-[260px] md:min-h-[320px] items-end bg-cover bg-center pt-32 md:pt-40"
        style={{
          backgroundImage: "url('/images/banner-2.jpg')",
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
          className="container relative z-10 mx-auto px-4 pb-10 md:pb-14"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary-foreground/80 mb-3">
            Contact Us
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground max-w-2xl">
            Get in touch with Canadian International College
          </h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/90 text-base md:text-lg">
            Questions about courses, schedules, or test preparation? Our team is here to help you
            find the right program and next steps.
          </p>
        </motion.div>
      </section>

      {/* Main content: left contact info, right form */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-10 md:gap-12 lg:gap-16 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start"
          >
            {/* Left: contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
                  Contact information
                </h2>
                <p className="text-muted-foreground">
                  Reach us by phone, email, or visit our Toronto campus. We aim to respond to all
                  inquiries within one business day.
                </p>
              </div>

              <div className="space-y-6 text-sm md:text-base">
                <div className="flex gap-4">
                  <div className="mt-1 rounded-full bg-primary/10 h-fit p-2 text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <a
                      href="tel:+14373403549"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (437) 340-3549
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 rounded-full bg-primary/10 h-fit p-2 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <a
                      href="mailto:info@cilanguage.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      info@cilanguage.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 rounded-full bg-primary/10 h-fit p-2 text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Location</div>
                    <p className="text-muted-foreground">
                      2347 Kennedy Rd, Suite 505
                      <br />
                      Scarborough, ON M1T 3T8
                      <br />
                      Canada
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 rounded-full bg-primary/10 h-fit p-2 text-primary">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Office hours</div>
                    <p className="text-muted-foreground">
                      Monday–Friday: 9:00 AM – 6:00 PM
                      <br />
                      Saturday: 10:00 AM – 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: contact form */}
            <div className="rounded-2xl border bg-card/60 backdrop-blur-sm shadow-sm p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                Send us a message
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Share a bit about your goals and questions. We&apos;ll follow up with course
                options, schedules, and next steps.
              </p>

              <form className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground" htmlFor="firstName">
                      First name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="block w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      placeholder="Alex"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground" htmlFor="lastName">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="block w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      placeholder="Chen"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="block w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground" htmlFor="phone">
                    Phone (optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="block w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    placeholder="+1 (437) 340-3549"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground" htmlFor="interest">
                    What are you interested in?
                  </label>
                  <select
                    id="interest"
                    className="block w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose a program
                    </option>
                    <option value="english">English courses</option>
                    <option value="french">French courses</option>
                    <option value="test-preparation">Test preparation (IELTS, TEF, TCF, CELPIP)</option>
                    <option value="online">Online learning</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 resize-none"
                    placeholder="Tell us about your language goals, preferred start date, or any questions you have."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Submit
                </button>

                <p className="text-xs text-muted-foreground">
                  This form is for demonstration only. For urgent questions, please call us during
                  office hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google map container */}
      <section className="bg-muted/40 py-12 md:py-16">
        <div className="container mx-auto px-4 space-y-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                Find us in Scarborough
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Use the map below to explore our campus location and plan your visit.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border bg-background shadow-sm min-h-[260px] md:min-h-[360px] lg:min-h-[420px]">
            <iframe
              title="Canadian International College location map"
              src="https://maps.google.com/maps?q=2347%20Kennedy%20Rd%2C%20Suite%20505%2C%20Scarborough%2C%20ON%20M1T%203T8&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  )
}

