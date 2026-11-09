import { useState } from 'react'

/** Simple Icons glyph, recolored to the theme via CSS filter. Renders nothing if it fails to load. */
export function TechIcon({ slug, name }: { slug?: string; name: string }) {
  const [failed, setFailed] = useState(false)
  if (!slug || failed) return null
  return (
    <img
      src={`https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${slug}.svg`}
      alt=""
      aria-hidden
      title={name}
      width={20}
      height={20}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-5 w-5 opacity-70 brightness-0 invert [.light_&]:invert-0"
    />
  )
}
