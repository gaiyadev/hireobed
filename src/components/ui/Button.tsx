import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60 disabled:pointer-events-none'
const variants: Record<Variant, string> = {
  primary: 'bg-accent text-accent-ink hover:bg-accent-strong hover:shadow-[0_0_30px_-6px_var(--accent)]',
  secondary: 'border border-line-strong text-fg hover:border-accent hover:text-accent bg-glass backdrop-blur',
  ghost: 'text-muted hover:text-fg',
}

type Common = { variant?: Variant; children: ReactNode; className?: string }
type AsLink = Common & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'>
type AsButton = Common & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>

export function Button(props: AsLink | AsButton) {
  const { variant = 'primary', className, children, ...rest } = props
  const cls = cn(base, variants[variant], className)
  if (typeof rest.href === 'string') {
    const external = /^https?:/.test(rest.href)
    return (
      <a className={cls} {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }
  return <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>
}
