'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #F9EAE4 0%, #EADEFC 50%, #D3B9F9 100%)' }}>
      {/* Decorative accent circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full" style={{ backgroundColor: '#9F7BFF', opacity: 0.3 }} />
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full" style={{ backgroundColor: '#FFD2BB', opacity: 0.5 }} />
      </div>

      <div className="max-w-[1120px] mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[56px] leading-[64px] font-bold tracking-tight mb-6"
          style={{ color: '#280470' }}
        >
          Care breaks down at scale,
          <br />
          <span style={{ color: '#7848FE' }}>
            not because of intent, but because of execution.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[18px] leading-[28px] max-w-[768px] mx-auto"
          style={{ color: '#280470' }}
        >
          When clinical and operations teams manage thousands of patients across long programs,
          even small gaps in tracking turn into missed tasks, delayed follow-ups, and inconsistent care.
        </motion.p>
      </div>
    </section>
  )
}
