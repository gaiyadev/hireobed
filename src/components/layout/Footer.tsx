import { site } from '@/data/site'

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 text-sm text-subtle sm:flex-row sm:items-center sm:px-8">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p className="font-mono text-xs">{site.location}</p>
      </div>
    </footer>
  )
}
