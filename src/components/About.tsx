// src/components/About.tsx
'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  const cards = [
    { title: t.about.card1Title, text: t.about.card1Text },
    { title: t.about.card2Title, text: t.about.card2Text },
    { title: t.about.card3Title, text: t.about.card3Text },
  ]

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: '#111827' }}
    >
      {/* Subtle accent glow */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '40%',
          height: '50%',
          background: 'radial-gradient(ellipse at 80% 20%, rgba(6,182,212,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center font-space-grotesk font-semibold text-3xl md:text-4xl mb-4"
          style={{ color: '#E5E7EB' }}
        >
          {t.about.title}
        </motion.h2>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-inter mx-auto max-w-3xl text-center text-lg md:text-xl mb-12"
          style={{ color: '#9CA3AF' }}
        >
          {t.about.intro}
        </motion.p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 text-center"
              style={{
                backgroundColor: '#0F172A',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div
                className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-white text-xl font-semibold"
                style={{ backgroundColor: '#3B82F6', borderRadius: '8px' }}
              >
                {i + 1}
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold mb-2" style={{ color: '#E5E7EB' }}>
                {card.title}
              </h3>
              <p className="font-inter text-base" style={{ color: '#9CA3AF' }}>
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#services"
            className="inline-block text-white font-inter font-medium shadow-md transition"
            style={{ backgroundColor: '#3B82F6', borderRadius: '8px', padding: '14px 28px' }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#2563EB')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#3B82F6')}
          >
            {t.about.cta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
