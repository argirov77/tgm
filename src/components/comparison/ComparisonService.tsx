// src/components/comparison/ComparisonService.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

import IdentifyingStep from './IdentifyingStep'
import TargetingStep   from './TargetingStep'
import ConnectingStep  from './ConnectingStep'

export default function ComparisonService() {
  const { t } = useLanguage()

  return (
    <motion.section
      id="comparison"
      className="relative bg-gray-50 py-24 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 space-y-24">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center font-poppins font-bold text-darkBlue text-4xl md:text-5xl"
        >
          {t.comparison.title} <span className="text-teal">{t.comparison.titleHighlight}</span>
        </motion.h2>

        {/* 1. Audit before architecture */}
        <IdentifyingStep
          title={t.comparison.step1Title}
          description={t.comparison.step1Desc}
          query={t.comparison.step1Query}
        />

        {/* 2. Results before invoices */}
        <TargetingStep
          title={t.comparison.step2Title}
          description={t.comparison.step2Desc}
          query={t.comparison.step2Query}
          results={[...t.comparison.step2Results]}
        />

        {/* 3. Connecting */}
        <ConnectingStep />
      </div>
    </motion.section>
  )
}
