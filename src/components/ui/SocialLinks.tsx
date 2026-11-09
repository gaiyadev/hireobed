import { Mail } from 'lucide-react'
import { site } from '@/data/site'
import { GithubIcon, LinkedinIcon, XIcon } from './BrandIcons'

const items = [
  { label: 'GitHub', href: site.links.github, Icon: GithubIcon },
  { label: 'LinkedIn', href: site.links.linkedin, Icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${site.email}`, Icon: Mail },
  ...(site.links.x ? [{ label: 'X', href: site.links.x, Icon: XIcon }] : []),
]

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-2">
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
            aria-label={label}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  )
}
