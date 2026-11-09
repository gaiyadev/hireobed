import type { Principle } from './types'

export const philosophy = {
  title: 'Good Engineering Goes Beyond Writing Code.',
  principles: [
    { title: 'Architecture before complexity', body: 'Start with the simplest design that can meet the requirements, and add moving parts only when a real constraint demands them.' },
    { title: 'Security by design', body: 'Authentication, authorization, and input validation are designed in from the first endpoint, not bolted on before launch.' },
    { title: 'Performance and scalability', body: 'Measure first, then fix the bottleneck: indexes, caching, queues. Scale the part that is actually slow.' },
    { title: 'Maintainability', body: 'Code is read far more than it is written. Clear boundaries, tests, and review standards keep teams fast over years.' },
    { title: 'Business-driven engineering', body: 'Technical choices are judged by the outcome they create for users and the business, not by novelty.' },
    { title: 'Reliability in production', body: 'Idempotent operations, graceful failure, and observability so problems are found and fixed before customers report them.' },
  ] satisfies Principle[],
}
