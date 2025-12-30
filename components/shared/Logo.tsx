import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

export function Logo({ variant = 'dark', className }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center', className)}>
      <span
        className={cn(
          'text-2xl font-bold tracking-tight',
          variant === 'dark' ? 'text-neutral-900' : 'text-white'
        )}
      >
        Lillia
      </span>
    </Link>
  )
}
