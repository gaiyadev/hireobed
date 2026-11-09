import type { TechCategory } from './types'

// `slug` refers to a Simple Icons name. Items without one render as text only.
export const stack: TechCategory[] = [
  { name: 'Backend', items: [
    { name: 'Node.js', slug: 'nodedotjs' }, { name: 'TypeScript', slug: 'typescript' },
    { name: 'Express.js', slug: 'express' }, { name: 'NestJS', slug: 'nestjs' },
    { name: 'AdonisJS', slug: 'adonisjs' },
    { name: 'Laravel', slug: 'laravel' }, { name: 'Java', slug: 'openjdk' },
    { name: 'Spring Boot', slug: 'springboot' }, { name: 'Go', slug: 'go' },
  ] },
  { name: 'Frontend', items: [
    { name: 'React', slug: 'react' }, { name: 'TypeScript', slug: 'typescript' },
    { name: 'Next.js', slug: 'nextdotjs' }, { name: 'Angular', slug: 'angular' },
    { name: 'Vue.js', slug: 'vuedotjs' }, { name: 'Nuxt.js', slug: 'nuxt' },
  ] },
  { name: 'Mobile', items: [{ name: 'Flutter', slug: 'flutter' }, { name: 'React Native', slug: 'react' }] },
  { name: 'Database', items: [
    { name: 'PostgreSQL', slug: 'postgresql' }, { name: 'MySQL', slug: 'mysql' },
    { name: 'MongoDB', slug: 'mongodb' }, { name: 'Redis', slug: 'redis' },
  ] },
  { name: 'Infrastructure', items: [
    { name: 'Docker', slug: 'docker' }, { name: 'Kubernetes', slug: 'kubernetes' }, { name: 'Git', slug: 'git' },
    { name: 'GitHub Actions', slug: 'githubactions' }, { name: 'Linux', slug: 'linux' },
    { name: 'CI/CD' },
  ] },
  { name: 'AI & Automation', items: [
    { name: 'OpenAI APIs' }, { name: 'Claude Code', slug: 'claude' }, { name: 'n8n', slug: 'n8n' },
    { name: 'Conversational AI' }, { name: 'LLM integrations' },
  ] },
]
