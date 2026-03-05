// src/components/Hero.jsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-28 pb-60 overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
      {/* Subtle glow accent */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: '50%',
          height: '60%',
          background: 'radial-gradient(ellipse at 20% 30%, rgba(59,130,246,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Hero content — left-aligned */}
      <div className="relative z-10 container mx-auto px-4" style={{ paddingLeft: '10%' }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-space-grotesk text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight"
          style={{ textAlign: 'left', color: '#E5E7EB' }}
        >
          <span className="font-normal">{t.hero.line1}</span>
          <br />
          <em className="font-bold not-italic" style={{ color: '#3B82F6' }}>{t.hero.line2}</em>
          <br />
          <span style={{ color: '#9CA3AF', fontWeight: 400 }}>{t.hero.line3}</span>
        </motion.h1>

        <motion.a
          href="mailto:hello@tgmind-ai.com"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block text-white font-inter font-medium shadow-md transition"
          style={{
            backgroundColor: '#3B82F6',
            borderRadius: '8px',
            padding: '14px 28px',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2563EB')}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#3B82F6')}
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
            fill="#111827"
          />
        </svg>
      </div>
    </section>
  )
}
