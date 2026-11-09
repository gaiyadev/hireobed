import type { OpenSourceProject } from './types'

// Facts from the repositories and package pages. Add stats only when you want to show them.
export const openSource = {
  title: 'Open Source',
  note: 'The Fincra Checkout SDKs are community-maintained and not affiliated with Fincra.',
  projects: [
    {
      name: 'react-native-fincra-checkout',
      description: 'TypeScript SDK for accepting Fincra Checkout payments in React Native apps, with WebView and inline modes, typed success, error, and cancel results, and built-in error recovery.',
      tech: ['React Native', 'TypeScript'],
      links: [
        { label: 'GitHub', href: 'https://github.com/gaiyadev/react-native-fincra-checkout', kind: 'github' },
        { label: 'npm', href: 'https://www.npmjs.com/package/react-native-fincra-checkout', kind: 'registry' },
      ],
    },
    {
      name: 'flutter_fincra_checkout',
      description: 'Flutter package for Fincra Checkout payments in a native in-app WebView, with callback interception, strongly typed payment results, and async/await or callback APIs.',
      tech: ['Flutter', 'Dart'],
      links: [
        { label: 'GitHub', href: 'https://github.com/gaiyadev/flutter_fincra_checkout', kind: 'github' },
        { label: 'pub.dev', href: 'https://pub.dev/packages/flutter_fincra_checkout', kind: 'registry' },
      ],
    },
    {
      name: 'nestjs-drizzle-orm',
      description: 'NestJS module for Drizzle ORM with PostgreSQL and MySQL support.',
      tech: ['NestJS', 'Drizzle ORM', 'TypeScript'],
      links: [{ label: 'npm', href: 'https://www.npmjs.com/package/nestjs-drizzle-orm', kind: 'registry' }],
    },
  ] satisfies OpenSourceProject[],
}
