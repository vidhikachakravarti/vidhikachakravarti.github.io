'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const metrics = [
  { stat: '~60–70%', label: 'reduction in manual tracking and follow-ups' },
  { stat: '~40%', label: 'improvement in outcomes' },
  { label: 'Fewer missed tasks across long-term programs' },
  { label: 'Clear ownership for every patient, every day' },
  { label: 'Faster onboarding of new team members' },
  { label: 'More predictable program execution' },
]

export function ImpactMetrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative py-24"
      style={{ background: 'linear-gradient(180deg, #F9EAE4 0%, #FFD2BB 50%, #EADEFC 100%)' }}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{
                y: -5,
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(120, 72, 254, 0.15)',
                transition: { duration: 0.3 }
              }}
              className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm cursor-pointer"
            >
              {metric.stat ? (
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#7848FE' }}>
                    {metric.stat}
                  </div>
                  <div className="text-sm" style={{ color: '#3F3B3A' }}>{metric.label}</div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-base" style={{ color: '#3F3B3A' }}>{metric.label}</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
