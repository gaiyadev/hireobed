import type { Job } from './types'

// Source: CV. Edit freely.
export const experience: Job[] = [
  { role: 'Software Engineer', company: 'DigiSpray LLC', url: 'https://www.digispray.app/', location: 'Lagos, Nigeria', period: '2025 – Present', type: 'Contract', tech: ['Flutter', 'Firebase', 'Node.js', 'Express.js', 'Vue.js', 'Redis'], points: [
    'Leading the rebuild and architectural refactoring of the web and mobile platform.',
    'Building a real-time money-spraying platform: wallet top-ups, gifting, and bank withdrawals.',
    'Backend designed for bursts of simultaneous transactions using idempotency keys, verified webhooks, and reconciliation.',
  ] },
  { role: 'Co-Founder & Software Engineer', company: 'Zuka Solutions Limited', url: 'https://zuka-solutions.com/', location: 'Nigeria', period: '2025 – Present', type: 'Co-founder', tech: ['WhatsApp', 'FastAPI', 'Node.js', 'Fastify', 'React'], points: [
    'Built Zuka, a WhatsApp money assistant for balances, activity, transfers, and payments.',
    'Review-and-approve transaction flows with status tracking that prevents duplicate actions.',
    'Secure identity verification and onboarding outside the chat.',
  ] },
  { role: 'Senior Software Engineer', company: 'FracXn', url: 'https://fracxn.com/', location: 'Dubai, UAE', period: '2024 – 2025', type: 'Contract', tech: ['AdonisJS', 'Next.js', 'MySQL', 'PostgreSQL', 'Redis'], points: [
    'Built backend services and React/Next.js frontends for loan apps, payroll, invoice financing, and instant settlements.',
    'Built a lender risk scoring service; integrated Lean Technologies open banking, Emirates NBD, and Stripe.',
    'Integrated QuickBooks, Zoho Books, and Wafeq; built OCR document extraction; implemented UAE PASS SSO.',
  ] },
  { role: 'Lead Software Engineer', company: 'Juice Technology', url: 'https://juiceme.io/', location: 'Lagos, Nigeria', period: '2023 – 2024', type: 'Contract', tech: ['React', 'PostgreSQL', 'Laravel', 'Laravel Nova', 'WhatsApp', 'Redis', 'Node.js'], points: [
    'Led system design for an HR and payroll SaaS platform; built Laravel Nova admin dashboards.',
    'Built a NestJS wallet service for Juiceme and connected WhatsApp chatbots through Infobip.',
  ] },
  { role: 'Lead Software Engineer', company: 'Outsource Global (WorkNation)', url: 'https://www.worknation.africa/', location: 'Abuja, Nigeria', period: '2021 – 2025', type: 'Full time', tech: ['Node.js', 'NestJS', 'AdonisJS', 'PostgreSQL', 'Redis', 'Moodle'], points: [
    'Scaled the platform to 100K+ requests per second at 99.9% uptime.',
    'Migrated backend and frontend to microservices; cut API response times by 40% with caching.',
    'Built a coding challenge platform that made technical hiring 60% more efficient.',
    'Set code review standards that reduced defects by 30%; mentored engineers.',
  ] },
  { role: 'Software Engineer', company: 'Afropolis', location: '', period: '2020 – 2021', type: 'Contract', tech: ['NestJS', 'Node.js', 'React Native', 'Redis', 'WebSockets', 'Laravel', 'PostgreSQL'], points: [
    'Built RESTful APIs in Laravel and Node.js, real-time features with WebSockets, and reusable React, Vue.js, and React Native components.',
  ] },
]

export const earlier = [
  { text: 'Software Engineer and Lead Instructor (Contract), Tribesquare Inc. · 2021', tech: ['Node.js', 'React', 'Express.js', 'React Native', 'MongoDB'] },
  { text: 'Software Engineering Instructor, Campus Technologies (NIIT) · 2019 – 2021', tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'React', 'Node.js', 'Express.js', 'MongoDB'] },
  { text: 'Junior Software Engineer, Ogohtech Computers · 2017 – 2018', tech: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'] },
]

export const education = [
  'B.Sc. Mathematics, Kaduna State University · 2012 – 2017',
  'Postgraduate Diploma, Project Management',
  'Software Architecture (Udemy, 2022) · DevOps (Udemy)',
  'Docker and Kubernetes (Udemy, 2022)',
]
