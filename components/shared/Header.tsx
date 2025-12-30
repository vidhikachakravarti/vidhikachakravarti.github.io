'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './Logo'
import { Button } from '../ui/Button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/api', label: 'API Documentation' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-neutral-100">
      <div className="max-w-content mx-auto px-6">
        <nav className="h-16 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-10">
            <Logo />
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors relative',
                    pathname === link.href
                      ? 'text-primary-600'
                      : 'text-neutral-600 hover:text-primary-600'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary-600" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" href="/api">
              Login
            </Button>
            <Button variant="primary" href="/contact">
              Book a Demo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
