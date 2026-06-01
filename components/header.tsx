'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Courses',
    href: '/courses',
    children: [
      { label: 'English Courses', href: '/courses/english' },
      { label: 'French Courses', href: '/courses/french' },
    ],
  },
  {
    label: 'Test Preparation',
    href: '/test-preparation',
    children: [
      { label: 'IELTS', href: '/test-preparation/ielts' },
      { label: 'CELPIP', href: '/test-preparation/celpip' },
      { label: 'TEF Canada', href: '/test-preparation/tef-canada' },
      { label: 'TCF Canada', href: '/test-preparation/tcf-canada' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+14373403549" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+1 (437) 340-3549</span>
            </a>
            <a href="mailto:info@cicollege.ca" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@cicollege.ca</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Scarborough, Ontario, Canada</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/cil-logo.png" alt="Canadian International Language School" width={100} height={100} />
            <div className="hidden sm:block">
              <p className="font-bold text-primary text-lg leading-tight">Canadian International Language School</p>
   
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-foreground hover:text-primary font-medium transition-colors py-2"
                >
                  {link.label}
                  {link.children && <ChevronDown className="h-4 w-4" />}
                </Link>
                
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-background shadow-lg rounded-lg border border-border py-2 min-w-48"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>


          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="block py-2 text-foreground font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="pl-4 space-y-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-1 text-muted-foreground hover:text-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
