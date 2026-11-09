import { techIcons } from '@/lib/techIcons'

/** Inline brand glyph that inherits text color, so it follows the theme. Renders nothing for unknown slugs. */
export function TechIcon({ slug }: { slug?: string }) {
  const icon = slug ? techIcons[slug] : undefined
  if (!icon) return null
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden className="shrink-0 text-muted">
      <path d={icon.path} />
    </svg>
  )
}
