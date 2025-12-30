'use client'

import { useState } from 'react'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you! We will be in touch soon.')
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="py-20">
        <div className="max-w-[640px] mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-[48px] leading-[56px] font-semibold tracking-tight text-neutral-900 mb-6">
              Book a Demo
            </h1>
            <p className="text-lg text-neutral-600">
              See how Journey Tracker can transform your care execution. Fill
              out the form below and we'll be in touch within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Role *
              </label>
              <select
                id="role"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
              >
                <option value="">Select your role</option>
                <option value="clinical-leadership">Clinical Leadership</option>
                <option value="operations">Operations Head</option>
                <option value="care-delivery">Care Delivery Leader</option>
                <option value="founder">Healthcare Founder</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-700 mb-2"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your care programs..."
              />
            </div>

            <Button type="submit" variant="primary" size="large" className="w-full">
              Request Demo
            </Button>

            <p className="text-center text-sm text-neutral-500">
              We typically respond within 24 hours
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
