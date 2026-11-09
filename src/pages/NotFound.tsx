import { Button } from '@/components/ui/Button'

export function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-mono text-sm text-accent">HTTP 404</p>
        <h1 className="mt-3 text-5xl font-semibold tracking-tight">Resource not found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">The page you requested doesn't exist or has moved. Nothing was charged and no state was changed.</p>
        <Button href="/" className="mt-8">Back to home</Button>
      </div>
    </main>
  )
}
