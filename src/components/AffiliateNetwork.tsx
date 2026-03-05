// src/components/AffiliateNetwork.tsx
'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

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
  const { t } = useLanguage()

  const STEPS = [
    { id: 1, title: t.affiliateNetwork.step1Title, desc: t.affiliateNetwork.step1Desc },
    { id: 2, title: t.affiliateNetwork.step2Title, desc: t.affiliateNetwork.step2Desc },
    { id: 3, title: t.affiliateNetwork.step3Title, desc: t.affiliateNetwork.step3Desc },
    { id: 4, title: t.affiliateNetwork.step4Title, desc: t.affiliateNetwork.step4Desc },
  ]

  return (
    <motion.section
      id="affiliate"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#0F172A' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Subtle glow */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: '40%',
          height: '50%',
          background: 'radial-gradient(ellipse at 80% 80%, rgba(59,130,246,0.08) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Title */}
        <h2 className="text-center font-space-grotesk font-semibold text-4xl md:text-5xl mb-12" style={{ color: '#E5E7EB' }}>
          {t.affiliateNetwork.title} <span style={{ color: '#3B82F6' }}>{t.affiliateNetwork.titleHighlight}</span>
        </h2>

        <motion.div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {STEPS.map((step, i) => (
            <React.Fragment key={step.id}>
              <motion.div
                variants={cardVariants}
                className="relative flex-1 max-w-xs p-6 transition-shadow duration-300"
                style={{
                  backgroundColor: '#111827',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <span
                  className="absolute top-0 left-1/2 w-12 h-1 -translate-x-1/2 rounded-full"
                  style={{ background: 'linear-gradient(to right, #3B82F6, #06B6D4)' }}
                />
                <div className="mt-4 text-center space-y-3 z-10 relative">
                  <h3 className="font-space-grotesk text-lg font-semibold" style={{ color: '#E5E7EB' }}>
                    {step.title}
                  </h3>
                  <p className="font-inter text-sm" style={{ color: '#9CA3AF' }}>{step.desc}</p>
                </div>
              </motion.div>

              {/* Connector line */}
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
                      stroke="#3B82F6"
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
                      stroke="#3B82F6"
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

        {/* CTA button */}
        <motion.div className="mt-12 text-center" variants={cardVariants}>
          <Link
            href="mailto:hello@tgmind-ai.com"
            className="inline-block text-white font-inter font-medium shadow-lg transition-colors duration-300"
            style={{ backgroundColor: '#3B82F6', borderRadius: '8px', padding: '14px 28px' }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2563EB')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#3B82F6')}
          >
            {t.affiliateNetwork.cta}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
