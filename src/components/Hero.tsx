// src/components/Hero.jsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-white pt-28 pb-60 overflow-hidden">
      {/* Neutral wave bottom-right */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none overflow-hidden"
        style={{
          width: '140%',
          height: '60%',
          minHeight: '200px',
          transform: 'translateX(15%) translateY(10%)',
        }}
      >
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMaxYMax slice"
          className="w-full h-full"
        >
          <path
            d="M0,350 C360,310 720,400 1440,350 L1440,600 0,600 Z"
            fill="#F3F4F6"
            fillOpacity="0.8"
          />
          <path
            d="M0,380 C360,340 720,430 1440,380 L1440,600 0,600 Z"
            fill="#E5E7EB"
            fillOpacity="0.6"
          />
          <path
            d="M0,410 C360,370 720,460 1440,410 L1440,600 0,600 Z"
            fill="#D1D5DB"
            fillOpacity="0.4"
          />
        </svg>
      </div>

      {/* radial gradient for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.85) 50%, transparent 80%)',
        }}
      />

      {/* Hero content — left-aligned */}
      <div className="relative z-10 container mx-auto px-4" style={{ paddingLeft: '10%' }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-space-grotesk text-darkBlue text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight"
          style={{ textAlign: 'left' }}
        >
          <span className="font-normal">{t.hero.line1}</span>
          <br />
          <em className="font-bold not-italic">{t.hero.line2}</em>
          <br />
          <span style={{ color: '#9CA3AF', fontWeight: 400 }}>{t.hero.line3}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col justify-start items-start gap-y-1 text-2xl md:text-3xl mb-16"
          style={{ textAlign: 'left' }}
        >
          <span className="font-medium text-gray-700">{t.hero.sub1}</span>
          <span style={{ color: '#6B7280', fontWeight: 400 }}>{t.hero.sub2}</span>
        </motion.div>

        <motion.a
          href="mailto:hello@tgmind-ai.com"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block text-white px-10 py-3 font-medium shadow-md transition"
          style={{
            backgroundColor: '#0066FF',
            borderRadius: '6px',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#0052CC')}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#0066FF')}
        >
          {t.hero.cta}
        </motion.a>
      </div>

      {/* SVG transition to next section */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none"
        style={{ height: '120px' }}
      >
        <svg
          className="block w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z"
            fill="#F3F7FA"
          />
        </svg>
      </div>
    </section>
  )
}
