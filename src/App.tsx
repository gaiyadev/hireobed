import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'

// Single-page site: any path other than "/" (or index.html) is a 404, so no router dependency is needed.
export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '')
  return path === '' || path === '/index.html' ? <Home /> : <NotFound />
}
