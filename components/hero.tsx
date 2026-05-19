'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const welcomeWords = [
  'Welcome',
  'Bienvenue',
  'Bienvenido',
  'Willkommen',
  'Benvenuto',
  'Bem-vindo',
  'Välkommen',
  'Velkommen',
  'Tervetuloa',
  'Vítejte',
  'Üdvözöljük',
]

export function Hero() {
  return (
    <section className="relative min-h-screen bg-background pt-32 md:pt-40 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-primary leading-tight text-balance">
              Build Your Future with English, French & International Language Skills
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-xl text-secondary font-semibold italic"
            >
              You live it, you learn it!
            </motion.p>

          

            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Canadian International College is a Toronto-based language school offering practical English and French courses, intensive language training, and test preparation programs for students, newcomers, and working professionals.
            </p>

            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-lg px-8"
              >
                <Link href="/courses">
                  Explore Our Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

     
          </motion.div>

          {/* Right Content - Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/images/banner-2.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-primary/30" />
              
              </div>
            </div>

            {/* Stats Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-xl border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary p-2 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white p-2">15+</span>
                </div>
                <div>
                  <p className="font-semibold text-primary">Years of Excellence</p>
                  <p className="text-sm text-muted-foreground">in Language Education</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#043b86"
          />
        </svg>
      </div>
    </section>
  )
}
