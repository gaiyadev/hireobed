import { site } from '@/data/site'

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 text-sm sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="font-medium text-fg">
            {site.name}
            <span className="text-muted">, {site.designations.join(', ')}</span>
          </p>
          <p className="mt-1 text-xs text-subtle">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <p className="font-mono text-xs text-subtle">{site.location}</p>
      </div>
    </footer>
  )
}
