'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface ComparisonCardProps {
  image: string
  imagePosition: 'left' | 'right'
  theme: 'problem' | 'solution'
  children: React.ReactNode
}

export function ComparisonCard({
  image,
  imagePosition,
  theme,
  children,
}: ComparisonCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const isReversed = imagePosition === 'right'

  return (
    <div
      ref={ref}
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32'
      )}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={cn('relative', isReversed && 'md:order-2')}
      >
        <div
          className={cn(
            'rounded-lg overflow-hidden border shadow-2xl aspect-video bg-neutral-100 flex items-center justify-center',
            theme === 'solution'
              ? 'border-accent-200 shadow-accent-100/50'
              : 'border-neutral-200'
          )}
        >
          <div className="text-neutral-400 text-sm">[{image}]</div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn('space-y-6', isReversed && 'md:order-1')}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function Headline({
  children,
  highlight,
}: {
  children: React.ReactNode
  highlight?: boolean
}) {
  return (
    <h3
      className={cn(
        'text-3xl font-semibold tracking-tight',
        highlight ? 'text-accent-600' : 'text-neutral-900'
      )}
    >
      {children}
    </h3>
  )
}

export function Subhead({ children }: { children: React.ReactNode }) {
  return <p className="text-lg text-neutral-700">{children}</p>
}

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm uppercase tracking-wide text-neutral-600 font-medium">
      {children}
    </p>
  )
}

export function BulletList({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-2 text-neutral-700">{children}</ul>
}

export function Reality({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 p-4 bg-neutral-100 rounded-lg border-l-4 border-neutral-400">
      <p className="text-base italic text-neutral-800">
        <strong>Reality:</strong> {children}
      </p>
    </div>
  )
}

export function Impact({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 p-4 bg-accent-50 rounded-lg border-l-4 border-accent-500">
      <p className="text-base font-medium text-accent-900">{children}</p>
    </div>
  )
}

export function Insight({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 p-4 bg-neutral-100 rounded-lg border-l-4 border-neutral-400">
      <p className="text-base text-neutral-800">{children}</p>
    </div>
  )
}
