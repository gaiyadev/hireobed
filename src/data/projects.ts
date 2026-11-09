import type { Project } from './types'

/**
 * EDIT ME. Entries marked `verified: false` contain only what is stated in the project brief.
 * Fill in challenges / solutions / impact with facts you can stand behind, then set verified: true.
 * No metrics are included unless they appear in your CV.
 */
export const projects: Project[] = [
  {
    slug: 'digispray',
    live: 'https://www.digispray.app/',
    name: 'DigiSpray',
    tagline: 'Real-time digital money-spraying platform for live events.',
    description:
      'Guests top up wallets, spray money and send gifts in real time, and celebrants withdraw to their bank accounts. Web and mobile.',
    role: 'Software Engineer (Contract), leading the platform rebuild',
    verified: true,
    tech: ['Flutter', 'Firebase', 'Node.js', 'Express.js', 'Vue.js', 'Redis'],
    challenges: [
      'Keeping balances accurate during bursts of simultaneous transactions at live events.',
      'Preventing duplicate sprays and handling asynchronous payment-provider callbacks.',
      'Paying out to banks reliably and reconciling against provider records.',
    ],
    solutions: [
      'Ledger-based balances for top-ups, sprays, gifting, and withdrawals.',
      'Idempotency keys against duplicate sprays.',
      'Verified webhooks and reconciliation with provider records, plus KYC checks.',
      'Architectural refactor of the web and mobile platform and core business logic.',
    ],
    impact: [
      'Reduced technical debt and sped up delivery of new payment features.',
    ],
  },
  {
    slug: 'zuka',
    live: 'https://getzuka.co/',
    name: 'Zuka',
    tagline: 'A WhatsApp money assistant, in early access in Nigeria.',
    description:
      'Check balances and activity, and send or receive money through chat. Every consequential action is shown for review and needs the user\'s approval. Built by Zuka Solutions, running on partner financial infrastructure.',
    role: 'Co-Founder & Software Engineer, Zuka Solutions Limited · 2025 – Present',
    verified: true,
    tech: ['WhatsApp', 'FastAPI', 'Node.js', 'Fastify', 'React'],
    challenges: [
      'Making money movement safe inside a chat interface.',
      'Preventing duplicate sends when users retry or messages arrive twice.',
      'Verifying identity without putting sensitive steps in the chat.',
    ],
    solutions: [
      'Review-and-approve transfer flows showing recipient, amount, and fees.',
      'Status tracking that prevents duplicate actions.',
      'Identity verification and onboarding through purpose-built forms outside the chat, with stronger checks for higher-risk actions.',
    ],
    impact: [],
  },
  {
    slug: 'juiceme',
    live: 'https://juiceme.io/',
    name: 'JuiceMe',
    tagline: 'HR, payroll, and wallet infrastructure for employers.',
    description:
      'An HR and payroll SaaS platform with an earned-wage product that lets employers pay staff any day, plus payroll brought into WhatsApp through chatbots.',
    role: 'Lead Software Engineer (Contract), Juice Technology · 2023 – 2024',
    verified: true,
    tech: ['Node.js', 'NestJS', 'React', 'Laravel', 'Laravel Nova', 'PostgreSQL', 'Redis', 'WhatsApp'],
    challenges: [
      'Moving employee money safely, with balances that always reconcile.',
      'Keeping payouts from being duplicated when requests or provider callbacks repeat.',
      'Giving finance and operations teams admin tools to manage payroll.',
    ],
    solutions: [
      'Led system design for the HR and payroll SaaS platform.',
      'Built a NestJS wallet service with ledger balances, idempotent payouts, webhooks, and reconciliation.',
      'Connected WhatsApp chatbots to the backend through Infobip.',
      'Built Laravel Nova admin and finance dashboards.',
    ],
    impact: [],
  },
  {
    slug: 'worknation',
    live: 'https://www.worknation.africa/',
    name: 'WorkNation',
    tagline: 'Workforce development and learning platform at scale.',
    description:
      'A SaaS platform supporting workforce development, learning management, career and skills assessment, and large-scale user operations.',
    role: 'Lead Software Engineer (Full Time), Outsource Global · 2021 – 2025',
    verified: true,
    tech: ['Node.js', 'NestJS', 'AdonisJS', 'PostgreSQL', 'Redis', 'Moodle'],
    challenges: [
      'Scaling the platform to very high request volume while staying reliable.',
      'Moving a monolithic backend and frontend to a microservices architecture.',
    ],
    solutions: [
      'Re-engineered backend and frontend into microservices, improving reliability and deployment speed.',
      'Introduced caching on hot paths.',
      'Built a coding challenge platform plus career and skills assessment tools.',
      'Set code review standards and mentored engineers.',
    ],
    impact: [
      'Scaled to 100K+ requests per second at 99.9% uptime.',
      '40% faster API response times through caching.',
      'Technical hiring 60% more efficient with the coding challenge platform.',
      'Code review standards reduced defects by 30%.',
    ],
  },
]
