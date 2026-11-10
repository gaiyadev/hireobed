import type { Expertise } from "./types";

export const expertise: Expertise[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    icon: "server",
    summary:
      "APIs and services built to stay fast, secure, and maintainable as they grow.",
    points: [
      "Node.js, TypeScript, Express.js, NestJS, AdonisJS, Laravel, Java, Spring Boot, Go",
      "RESTful APIs and microservices",
      "PostgreSQL, MySQL, MongoDB, Redis, database optimization",
      "Authentication, authorization, and security",
    ],
  },
  {
    id: "fintech",
    title: "Fintech Engineering",
    icon: "wallet",
    summary:
      "Money-safe systems where every balance, transfer, and webhook has to be right.",
    points: [
      "Wallet infrastructure",
      "Core banking",
      "Payment gateway integrations",
      "Transaction processing and financial ledger design",
      "Webhooks and payment reconciliation",
      "Transaction consistency and reliability",
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    icon: "layers",
    summary:
      "Web and mobile products delivered end to end, from schema to screen.",
    points: [
      "React, Next.js, Vue.js, Nuxt.js, Angular, TypeScript",
      "Flutter and React Native",
      "Modern web and mobile applications",
      "Scalable frontend architecture",
    ],
  },
  {
    id: "distributed",
    title: "Distributed Systems & Architecture",
    icon: "network",
    summary:
      "Design decisions that hold up under load, failure, and changing requirements.",
    points: [
      "System design",
      "Event-driven architecture and message queues",
      "Caching strategies",
      "Database optimization and performance engineering",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Infrastructure",
    icon: "container",
    summary:
      "Repeatable delivery and production systems you can observe and trust.",
    points: [
      "Docker and Kubernetes",
      "CI/CD",
      "Linux",
      "Cloud deployment",
      "Monitoring and production reliability",
    ],
  },
];
