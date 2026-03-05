'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const steps = [
  {
    icon: '/assets/icons/analysis.png',
    title: 'Analysis & Strategy',
    description: 'We analyze your audience and develop a custom, data-driven strategy.',
  },
  {
    icon: '/assets/icons/traffic.png',
    title: 'Traffic Generation',
    description: 'Attracting high-quality, targeted traffic using advanced marketing tactics.',
  },
  {
    icon: '/assets/icons/engagement.png',
    title: 'User Engagement',
    description: 'Engaging visitors through interactive content and optimized designs.',
  },
  {
    icon: '/assets/icons/conversion.png',
    title: 'Conversion & Revenue',
    description: 'Optimizing conversion paths to maximize revenue and ROI.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20" style={{ backgroundColor: '#111827' }}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-space-grotesk font-semibold text-center mb-12"
          style={{ color: '#E5E7EB' }}
        >
          How It <span style={{ color: '#06B6D4' }}>Works</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 flex flex-col items-center text-center relative"
              style={{
                backgroundColor: '#0F172A',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <Image
                src={step.icon}
                alt={step.title}
                width={70}
                height={70}
                className="mb-4"
              />
              <h3 className="font-space-grotesk text-lg font-semibold mb-2" style={{ color: '#E5E7EB' }}>{step.title}</h3>
              <p className="font-inter text-sm" style={{ color: '#9CA3AF' }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
