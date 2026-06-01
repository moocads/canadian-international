'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'
import Image from 'next/image'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },

]

const courses = [
  { label: 'English Courses', href: '/courses/english' },
  { label: 'French Courses', href: '/courses/french' },
  { label: 'IELTS Preparation', href: '/test-preparation/ielts' },
  { label: 'TEF Canada Preparation', href: '/test-preparation/tef-canada' },
  { label: 'TCF Canada Preparation', href: '/test-preparation/tcf-canada' },

]

const socialLinks = [
  // { icon: Facebook, href: '#', label: 'Facebook' },
  // { icon: Instagram, href: '#', label: 'Instagram' },
  // { icon: Youtube, href: '#', label: 'YouTube' },
  // { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

const galleryImages = [
  '/images/footer-01.jpg',
  '/images/footer-02.jpg',
  '/images/footer-03.jpg',
  '/images/footer-04.jpg',
  '/images/footer-05.jpg',
]

export function Footer() {
  return (
    <footer className="bg-background">
      {/* Photo Gallery Strip */}
      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex"
        >
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/5 md:w-1/5 aspect-square"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16  rounded-lg flex items-center justify-center">
                <Image src="/cil-logo.png" alt="Canadian International College" width={68} height={68} />
              </div>
              <div>
                <p className="font-bold text-primary leading-tight">Canadian International</p>
                <p className="text-sm text-muted-foreground">College</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A college distinguished by its methodology and cultural approach. Building futures through quality language education in Toronto.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-primary mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-primary mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.label}>
                  <Link
                    href={course.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {course.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-primary mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+14373403549"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>+1 (437) 340-3549</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@cilanguage.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>info@cilanguage.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>2347 Kennedy Rd, Suite 505, Scarborough, ON M1T 3T8</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Canadian International College. All rights reserved.
            </p>
        
          </div>
        </div>
      </div>
    </footer>
  )
}
