export type ExamPrepContent = {
  bannerTitle: string
  breadcrumbs: { label: string; href?: string }[]
  subheading: string
  paragraphs: string[]
  skills?: string[]
  highlights: { heading: string; items: string[] }
  audience: { heading: string; intro: string; items: string[] }
  environment: { heading: string; intro: string; items: string[] }
  closing: { heading: string; body: string }
}

export const ieltsContent: ExamPrepContent = {
  bannerTitle: 'IELTS Preparation',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Test Preparation', href: '/test-preparation' },
    { label: 'IELTS Preparation' },
  ],
  subheading: 'Prepare for IELTS with Confidence',
  paragraphs: [
    'Our IELTS Preparation program is designed to help students improve English communication skills while becoming familiar with the structure and expectations of the IELTS examination.',
    'Through guided instruction and practical learning activities, students strengthen their speaking, listening, reading, and writing abilities in an interactive and supportive classroom environment.',
  ],
  skills: ['Speaking', 'Listening', 'Reading', 'Writing'],
  highlights: {
    heading: 'Program Highlights',
    items: [
      'Comprehensive English skill development',
      'Academic and practical communication training',
      'IELTS-style practice activities',
      'Time management strategies',
      'Speaking confidence development',
      'Experienced instructors',
      'Small class learning environment',
    ],
  },
  audience: {
    heading: 'Who Is This Program For?',
    intro: 'This program is ideal for:',
    items: [
      'International students',
      'Future college or university applicants',
      'Newcomers to Canada',
      'Individuals pursuing professional or immigration goals',
    ],
  },
  environment: {
    heading: 'Learning Environment',
    intro: 'Students benefit from:',
    items: [
      'Interactive classroom discussions',
      'Guided feedback',
      'Personalized support',
      'Practical communication exercises designed to build confidence and fluency',
    ],
  },
  closing: {
    heading: 'Build Your Future in Canada',
    body: 'Our IELTS Preparation program helps students strengthen English proficiency while preparing for academic and professional opportunities in Canada and internationally.',
  },
}

export const celpipContent: ExamPrepContent = {
  bannerTitle: 'CELPIP Preparation',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Test Preparation', href: '/test-preparation' },
    { label: 'CELPIP Preparation' },
  ],
  subheading: 'Prepare for the Canadian English Testing Environment',
  paragraphs: [
    'Our CELPIP Preparation program helps students develop practical English communication skills while becoming familiar with the format and expectations of the CELPIP examination.',
    'The program focuses on real-life English usage commonly used in Canadian academic, professional, and everyday environments.',
  ],
  highlights: {
    heading: 'Program Highlights',
    items: [
      'Practical communication training',
      'Listening and speaking development',
      'Reading and writing practice',
      'Canadian English language focus',
      'Interactive classroom learning',
      'Guided practice activities',
      'Supportive learning environment',
    ],
  },
  audience: {
    heading: 'Who Is This Program For?',
    intro: 'This program is suitable for:',
    items: [
      'Newcomers to Canada',
      'International students',
      'Working professionals',
      'Individuals preparing for Canadian language requirements',
    ],
  },
  environment: {
    heading: 'Practical and Interactive Learning',
    intro: 'Students participate in:',
    items: [
      'Classroom discussions',
      'Communication exercises',
      'Practice tasks',
      'Instructor-guided activities designed to improve confidence and fluency',
    ],
  },
  closing: {
    heading: 'Improve Your English Skills for Canada',
    body: 'Our CELPIP Preparation program supports students in building strong English communication skills for life, work, and future opportunities in Canada.',
  },
}

export const tefContent: ExamPrepContent = {
  bannerTitle: 'TEF Canada Preparation',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Test Preparation', href: '/test-preparation' },
    { label: 'TEF Canada Preparation' },
  ],
  subheading: 'Prepare for French Success in Canada',
  paragraphs: [
    'Our TEF Canada Preparation program is designed to help students strengthen French communication skills while becoming familiar with the structure and expectations of the TEF Canada examination.',
    'The program focuses on practical French language development for academic, professional, and immigration-related goals in Canada.',
  ],
  highlights: {
    heading: 'Program Highlights',
    items: [
      'Comprehensive French communication training',
      'Speaking and listening development',
      'Reading and writing practice',
      'Interactive classroom activities',
      'Guided learning support',
      'Practical French usage',
      'Small class learning environment',
    ],
  },
  audience: {
    heading: 'Who Is This Program For?',
    intro: 'This program is ideal for:',
    items: [
      'Students learning French in Canada',
      'Newcomers and future immigrants',
      'Professionals',
      'Individuals pursuing French-language opportunities',
    ],
  },
  environment: {
    heading: 'Supportive French Learning Environment',
    intro: 'Students improve their French skills through:',
    items: [
      'Interactive communication practice',
      'Classroom participation',
      'Instructor feedback',
      'Practical learning activities designed to build fluency and confidence',
    ],
  },
  closing: {
    heading: 'Learn French with Confidence',
    body: 'Our TEF Canada Preparation program helps students strengthen French proficiency while preparing for future opportunities in Canada.',
  },
}

export const tcfContent: ExamPrepContent = {
  bannerTitle: 'TCF Canada Preparation',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Test Preparation', href: '/test-preparation' },
    { label: 'TCF Canada Preparation' },
  ],
  subheading: 'Build Confidence in French Communication',
  paragraphs: [
    'Our TCF Canada Preparation program helps students improve French language skills while becoming familiar with the structure and requirements of the TCF Canada examination.',
    'The program focuses on practical communication, language development, and confidence building in real-world French environments.',
  ],
  highlights: {
    heading: 'Program Highlights',
    items: [
      'Practical French communication training',
      'Listening and speaking development',
      'Reading and writing practice',
      'Interactive classroom learning',
      'Experienced instructors',
      'Guided practice activities',
      'Supportive multicultural environment',
    ],
  },
  audience: {
    heading: 'Who Is This Program For?',
    intro: 'This program is designed for:',
    items: [
      'International students',
      'Newcomers to Canada',
      'Professionals',
      'Learners pursuing French-language development',
    ],
  },
  environment: {
    heading: 'Interactive Learning Experience',
    intro: 'Students participate in:',
    items: [
      'Speaking exercises',
      'Classroom discussions',
      'Communication activities',
      'Practical learning experiences designed to improve fluency and confidence',
    ],
  },
  closing: {
    heading: 'Strengthen Your French Skills for Canada',
    body: 'Our TCF Canada Preparation program supports students in developing strong French communication abilities for education, work, and life in Canada.',
  },
}
