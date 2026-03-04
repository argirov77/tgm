// src/components/AffiliateNetwork.tsx
'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'

const STEPS = [
  {
    id: 1,
    title: 'AI Audit',
    desc: 'We interview your team, map processes, identify automation opportunities. Written report in 2 weeks.',
  },
  {
    id: 2,
    title: 'Roadmap',
    desc: 'Prioritized plan: what to build first, expected ROI, timeline. Included in the audit.',
  },
  {
    id: 3,
    title: 'Implementation',
    desc: 'Custom AI agents integrated into your existing tools and workflows. 4–8 weeks.',
  },
  {
    id: 4,
    title: 'Support',
    desc: 'Monitoring, updates, performance reviews. Systems that improve, not ones you forget about.',
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const lineVariants: Variants = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
}

export default function AffiliateNetwork() {
  return (
    <motion.section
      id="affiliate"
      className="relative bg-white py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Фоновые диагонали */}
      <div
        className="absolute top-0 left-0 w-2/3 h-full bg-teal-100 opacity-20
                   transform -rotate-12 origin-top-left pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-0 w-2/3 h-full bg-darkBlue/20 opacity-20
                   transform rotate-12 origin-bottom-right pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Заголовок */}
        <h2 className="text-center font-poppins font-bold text-darkBlue text-4xl md:text-5xl mb-12">
          What We <span className="text-teal">Do</span>
        </h2>

        <motion.div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {STEPS.map((step, i) => (
            <React.Fragment key={step.id}>
              {/* Карточка без масштабирования */}
              <motion.div
                variants={cardVariants}
                className="relative flex-1 max-w-xs bg-white rounded-2xl p-6 shadow-lg
                           hover:shadow-2xl transition-shadow duration-300"
              >
                <span
                  className="absolute top-0 left-1/2 w-12 h-1 bg-gradient-to-r
                             from-teal to-darkBlue -translate-x-1/2 rounded-full"
                />
                <div className="mt-4 text-center space-y-3 z-10 relative">
                  <h3 className="text-lg font-semibold text-darkBlue">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </motion.div>

              {/* Соединительная линия */}
              {i < STEPS.length - 1 && (
                <>
                  {/* Desktop */}
                  <motion.svg
                    variants={lineVariants}
                    className="hidden lg:block flex-1 h-[2px]"
                    viewBox="0 0 100 2"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 1 L100 1"
                      stroke="#22d3ee"
                      strokeWidth="2"
                      strokeDasharray="8 8"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                  {/* Mobile */}
                  <motion.svg
                    variants={lineVariants}
                    className="lg:hidden w-[2px] h-12 my-4 mx-auto"
                    viewBox="0 0 2 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M1 0 L1 100"
                      stroke="#22d3ee"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Кнопка приглашения */}
        <motion.div className="mt-12 text-center" variants={cardVariants}>
          <Link
            href="mailto:hello@tgmind-ai.com"
            className="inline-block bg-teal hover:bg-teal-700 text-white px-8 py-3 rounded-full
                       font-medium shadow-lg transition-colors duration-300"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
