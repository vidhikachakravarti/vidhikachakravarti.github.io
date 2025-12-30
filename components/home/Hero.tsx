'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative pt-20 pb-24 bg-gradient-to-b from-neutral-0 to-neutral-50">
      <div className="max-w-[1120px] mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[56px] leading-[64px] font-semibold tracking-tight text-neutral-900 mb-6"
        >
          Care breaks down at scale, not because of intent,
          <br />
          but because of execution.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[18px] leading-[28px] text-neutral-600 max-w-[768px] mx-auto"
        >
          When clinical and operations teams manage thousands of patients across long programs,
          even small gaps in tracking turn into missed tasks, delayed follow-ups, and inconsistent care.
        </motion.p>
      </div>
    </section>
  )
}
