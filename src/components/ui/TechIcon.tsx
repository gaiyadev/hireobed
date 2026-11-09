import { MessagesSquare, Sparkles, Workflow, type LucideIcon } from 'lucide-react'
import type { TechGlyph } from '@/data/types'
import { techIcons } from '@/lib/techIcons'

const glyphs: Record<TechGlyph, LucideIcon> = { chat: MessagesSquare, sparkles: Sparkles, workflow: Workflow }

/** Brand logo (inline SVG, inherits text color so it follows the theme) or a generic glyph for concepts without a logo. */
export function TechIcon({ slug, glyph }: { slug?: string; glyph?: TechGlyph }) {
  const icon = slug ? techIcons[slug] : undefined
  if (icon) {
    return (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden className="shrink-0 text-muted">
        <path d={icon.path} />
      </svg>
    )
  }
  if (glyph) {
    const Glyph = glyphs[glyph]
    return <Glyph size={18} strokeWidth={1.6} aria-hidden className="shrink-0 text-muted" />
  }
  return null
}
