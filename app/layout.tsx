import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Journey Tracker - Care Execution at Scale',
  description:
    'Journey Tracker is an execution platform for clinical and care operations teams managing large patient volumes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
