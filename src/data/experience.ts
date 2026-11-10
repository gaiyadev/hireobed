import type { Credential, EarlierRole, Job } from "./types";

// Source: CV. Edit freely.
export const experience: Job[] = [
  {
    role: "Senior Full-Stack Engineer",
    company: "DigiSpray LLC",
    url: "https://www.digispray.app/",
    location: "Lagos, Nigeria",
    period: "2025 – Present",
    type: "Contract",
    fintech: true,
    summary:
      "Real-time digital money-spraying for live events: guests top up wallets and gift in real time, and celebrants withdraw to their banks.",
    capabilities: [
      "Ledger balances",
      "Idempotency",
      "Verified webhooks",
      "Reconciliation",
      "KYC",
    ],
    points: [
      {
        lead: "Wallet engine",
        text: "Built top-ups, sprays, gifting, and withdrawals, keeping balances accurate during bursts of simultaneous transactions at live events.",
      },
      {
        lead: "Duplicate-proof payments",
        text: "Implemented ledger-based balances and idempotency keys against duplicate sprays, with verified webhooks and reconciliation against provider records.",
      },
      {
        lead: "Platform rebuild",
        text: "Leading the rebuild of the web and mobile platform and core business logic, cutting technical debt and speeding up new payment features.",
      },
    ],
    tech: ["Flutter", "Firebase", "Node.js", "Express.js", "Vue.js", "Redis"],
  },
  {
    role: "Co-Founder & Software Engineer",
    company: "Zuka Solutions Limited",
    url: "https://zuka-solutions.com/",
    location: "Nigeria",
    period: "2025 – Present",
    type: "Co-founder",
    fintech: true,
    summary:
      "A WhatsApp money assistant for balances, activity, receipts, transfers, and payments, running on partner financial infrastructure.",
    capabilities: [
      "Ledger balances",
      "Idempotency",
      "Review-and-approve flows",
      "Duplicate-send prevention",
      "Identity verification",
    ],
    points: [
      {
        lead: "Approval before money moves",
        text: "Built review-and-approve transfer flows that show the recipient, amount, and fees before anything is sent.",
      },
      {
        lead: "No duplicate sends",
        text: "Added status tracking so a retried or repeated message cannot trigger the same transfer twice.",
      },
      {
        lead: "Verification outside the chat",
        text: "Built identity verification and onboarding in purpose-built forms, with stronger checks for higher-risk actions.",
      },
    ],
    tech: ["WhatsApp", "FastAPI", "Node.js", "Fastify", "Spring Boot", "React"],
  },
  {
    role: "Senior Software Engineer",
    company: "FracXn",
    url: "https://fracxn.com/",
    location: "Dubai, UAE",
    period: "2024 – 2025",
    type: "Contract",
    fintech: true,
    summary:
      "Four financial products for the UAE market: loan apps, payroll, invoice financing, and instant settlements.",
    capabilities: [
      "Ledger balances",
      "Idempotent APIs",
      "Webhooks",
      "Reconciliation",
      "KYC",
      "Open banking",
      "Risk scoring",
    ],
    points: [
      {
        lead: "Lender risk scoring",
        text: "Built a risk scoring service that helps lenders assess borrower creditworthiness.",
      },
      {
        lead: "Money-safe core",
        text: "Implemented ledger-based balances, idempotent payment APIs, webhook handling, reconciliation, and KYC across loan and settlement flows.",
      },
      {
        lead: "Banking and payments",
        text: "Integrated Lean Technologies open banking, Emirates NBD banking services, and Stripe for account data, settlements, and customer payments.",
      },
      {
        lead: "Finance automation and identity",
        text: "Built OCR document extraction, integrated QuickBooks, Zoho Books, and Wafeq, and implemented UAE PASS digital identity for onboarding.",
      },
      {
        lead: "Full stack",
        text: "Delivered the backend services and the responsive React and Next.js frontends.",
      },
    ],
    tech: ["AdonisJS", "Next.js", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    role: "Lead Software Engineer",
    company: "Juice Technology",
    url: "https://juiceme.io/",
    location: "Lagos, Nigeria",
    period: "2023 – 2024",
    type: "Contract",
    fintech: true,
    summary:
      "An HR and payroll SaaS platform with Juiceme, an earned-wage product that lets employers pay staff any day.",
    capabilities: [
      "Ledger balances",
      "Idempotent payouts",
      "Webhooks",
      "Reconciliation",
      "KYC",
    ],
    points: [
      {
        lead: "Earned-wage wallet",
        text: "Built a NestJS wallet with ledger balances, idempotent payouts, webhooks, reconciliation, and KYC.",
      },
      {
        lead: "Payroll in WhatsApp",
        text: "Brought payroll into WhatsApp by connecting chatbots to the backend through Infobip.",
      },
      {
        lead: "Architecture and finance tooling",
        text: "Led system design for the HR and payroll SaaS platform and built its Laravel Nova admin and finance dashboards.",
      },
    ],
    tech: [
      "React",
      "PostgreSQL",
      "Laravel",
      "Laravel Nova",
      "WhatsApp",
      "Redis",
      "Node.js",
    ],
  },
  {
    role: "Lead Software Engineer",
    company: "Outsource Global",
    location: "Abuja, Nigeria",
    period: "2021 – 2025",
    type: "Full time",
    summary:
      "WorkNation, a workforce-development and learning platform serving large-scale user operations.",
    highlights: [
      { value: "100K+", label: "requests per second" },
      { value: "99.9%", label: "uptime" },
      { value: "40%", label: "faster API responses" },
      { value: "30%", label: "fewer defects" },
    ],
    points: [
      {
        lead: "Scale",
        text: "Scaled the platform to 100K+ requests per second at 99.9% uptime.",
      },
      {
        lead: "Microservices migration",
        text: "Re-engineered backend and frontend into microservices, improving reliability and deployment speed, and cut API response times by 40% with caching.",
      },
      {
        lead: "Hiring platform",
        text: "Built a coding challenge platform that made technical hiring 60% more efficient, plus career and skills assessment tools.",
      },
      {
        lead: "Technical leadership",
        text: "Set code review standards that reduced defects by 30%, mentored engineers, and delivered multiple projects from concept to production.",
      },
    ],
    tech: ["Node.js", "NestJS", "AdonisJS", "PostgreSQL", "Redis", "Moodle"],
  },
  {
    role: "Software Engineer",
    company: "Afropolis",
    location: "",
    period: "2020 – 2021",
    type: "Contract",
    points: [
      {
        lead: "APIs and real-time",
        text: "Built RESTful APIs in Laravel and Node.js and real-time features with WebSockets.",
      },
      {
        lead: "Shared components",
        text: "Built reusable components in React, Vue.js, and React Native.",
      },
    ],
    tech: [
      "NestJS",
      "Node.js",
      "React Native",
      "Redis",
      "WebSockets",
      "Laravel",
      "PostgreSQL",
    ],
  },
];

export const earlier: EarlierRole[] = [
  {
    role: "Software Engineer and Lead Instructor",
    company: "Tribesquare Inc.",
    type: "Contract",
    period: "2021",
    tagsLabel: "Stack",
    tech: [
      "Node.js",
      "React",
      "Express.js",
      "React Native",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    role: "Software Engineering Instructor",
    company: "Campus Technologies (NIIT)",
    period: "2019 – 2021",
    tagsLabel: "Taught",
    tech: [
      "JavaScript",
      "PHP",
      "MySQL",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Ogohtech Computers",
    period: "2017 – 2018",
    tagsLabel: "Stack",
    tech: [
      "WordPress",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Bootstrap",
      "JQuery",
      "AngularJs",
      "MySQL",
      "SQL",
    ],
  },
];

export const education: Credential[] = [
  {
    name: "B.Sc. (HONS) Mathematics",
    by: "Kaduna State University (KASU)",
    period: "2012 – 2017",
  },
  {
    name: "Postgraduate Diploma in Project Management",
    by: "The Chartered Institute of Project Management (CIPM)",
    period: "2018 - 2019",
  },
  {
    name: "Diploma in Facility Management",
    by: "Chartered Institute of Contract Project and Facility Management (CICPFM)",
    period: "2018 - 2019",
  },
];

export const certifications: Credential[] = [
  { name: "Software Architecture", by: "Udemy", period: "2022" },
  { name: "Docker and Kubernetes", by: "Udemy", period: "2022" },
];
