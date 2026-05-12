'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

const courseCategories = [
  { id: 'english', label: 'English', flag: '🇬🇧' },
  { id: 'french', label: 'French', flag: '🇫🇷' },
  { id: 'test-prep', label: 'Test Prep', flag: '📝' },
]

const courses = {
  english: [
    {
      title: 'Morning English Program',
      schedule: 'Monday to Friday',
      time: '9:00 a.m. - 12:00 p.m.',
      duration: '12 weeks',
      description: 'Intensive morning classes for rapid English improvement.',
      price: '$320',
      image: '/images/morning-english.jpg',
    },
    {
      title: 'Evening English Classes',
      schedule: 'Tuesday & Thursday',
      time: '6:30 p.m. - 9:00 p.m.',
      duration: '16 weeks',
      description: 'Perfect for working professionals who want to study after work.',
      price: '$280',
      image: '/images/evening-english.jpg',
    },
    {
      title: 'Weekend English Workshop',
      schedule: 'Saturday',
      time: '10:00 a.m. - 1:00 p.m.',
      duration: '10 weeks',
      description: 'Flexible weekend learning without affecting your weekday schedule.',
      price: '$240',
      image: '/images/weelend-english-workshop.jpg',
    },
  ],
  french: [
    {
      title: 'French for Beginners',
      schedule: 'Monday & Wednesday',
      time: '6:00 p.m. - 8:30 p.m.',
      duration: '12 weeks',
      description: 'Start your French journey with foundational grammar and vocabulary.',
      price: '$300',
      image: '/images/beginners-french.jpg',
    },
    {
      title: 'Intensive French Program',
      schedule: 'Monday to Friday',
      time: '1:00 p.m. - 4:00 p.m.',
      duration: '8 weeks',
      description: 'Fast-track your French skills with our intensive program.',
      price: '$380',
      image: '/images/intensive-french-02.jpg',
    },
    {
      title: 'French Conversation Class',
      schedule: 'Saturday',
      time: '2:00 p.m. - 5:00 p.m.',
      duration: '8 weeks',
      description: 'Practice speaking French in real-life scenarios.',
      price: '$220',
      image: '/images/conversation-french.jpg',
    },
  ],
  'test-prep': [
    {
      title: 'IELTS Preparation',
      schedule: 'Monday, Wednesday, Friday',
      time: '6:00 p.m. - 8:30 p.m.',
      duration: '8 weeks',
      description: 'Comprehensive preparation for all IELTS modules.',
      price: '$450',
      image: '/images/ielts-preparation.jpg',
    },
    {
      title: 'TEF Canada Preparation',
      schedule: 'Tuesday & Thursday',
      time: '7:00 p.m. - 9:00 p.m.',
      duration: '10 weeks',
      description: 'Master the TEF Canada test with expert guidance.',
      price: '$420',
      image: '/images/tef-canada-preparation.jpg',
    },
    {
      title: 'CELPIP Preparation',
      schedule: 'Saturday & Sunday',
      time: '10:00 a.m. - 1:00 p.m.',
      duration: '6 weeks',
      description: 'Targeted preparation for CELPIP success.',
      price: '$380',
      image: '/images/celpip-preparation.jpg',
    },
  ],
}

export function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState('english')

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold mb-4">
            Explore Our Courses
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
            Find Your Ideal Language Course in Toronto!
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our English and French programs to boost your language skills!
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-primary-foreground/10 rounded-full p-1">
            {courseCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-background text-foreground'
                    : 'text-primary-foreground hover:bg-primary-foreground/10'
                }`}
              >
                <span className="mr-2">{category.flag}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {courses[activeCategory as keyof typeof courses].map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 bg-gradient-to-br bg-cover bg-center from-primary/20 to-primary/5 flex items-center justify-center" style={{ backgroundImage: `url(${course.image})` }}>
                  <BookOpen className="h-16 w-16 text-primary/30" />
                  <span className="absolute bottom-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-bold text-lg">
                    {course.price}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{course.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{course.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
          >
            View All Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
