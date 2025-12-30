'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const impacts = [
  'No added operational overhead',
  'Faster onboarding for new hires',
  'Sustainable growth',
]

export function ScaleStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-neutral-900 via-neutral-800 to-white"
    >
      <div className="max-w-[768px] mx-auto px-6 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'rgba(40, 4, 112, 0.5)', color: '#9F7BFF' }}>
          Built to Scale
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[40px] leading-[48px] font-semibold text-white mt-4 mb-6"
        >
          200+ patients per care team member, without chaos.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[18px] leading-[28px] text-neutral-300"
        >
          Whether you manage 20 patients or 2,000, Journey Tracker keeps
          execution predictable, structured, and manageable.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-lg p-4 shadow-sm"
            >
              <div className="flex items-start gap-2">
                <span className="mt-1" style={{ color: '#7848FE' }}>✔</span>
                <span className="text-sm" style={{ color: '#3F3B3A' }}>{impact}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
