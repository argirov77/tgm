// src/components/About.tsx
'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-white py-20 overflow-hidden"
    >
      {/* Soft diagonal accents */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full bg-teal opacity-10 transform rotate-12 origin-top-right pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-2/3 h-full bg-darkBlue opacity-10 transform -rotate-12 origin-bottom-left pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center font-poppins font-bold text-darkBlue text-3xl md:text-4xl mb-4"
        >
          About TGMind AI
        </motion.h2>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto max-w-3xl text-center text-gray-700 text-lg md:text-xl mb-12"
        >
          We find where AI creates real value in your business — and build it. Before you spend anything.
        </motion.p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: 'AI Audit',
              text: '2 weeks. We map your processes, find automation opportunities, calculate ROI. You get a written report — regardless of what comes next.',
            },
            {
              title: 'Implementation',
              text: 'Custom AI agents built into your existing tools. Support, sales, knowledge, documents — whatever the audit identifies as the highest-value starting point.',
            },
            {
              title: 'Ongoing Support',
              text: 'Monitoring, adjustments, performance reviews. Systems that improve over time, not ones you forget about.',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-50 p-6 rounded-xl shadow-lg text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-teal rounded-full text-white text-xl font-semibold">
                {i + 1}
              </div>
              <h3 className="font-poppins text-darkBlue text-xl font-bold mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-base">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call‑to‑action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#services"
            className="inline-block bg-teal hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
          >
            See how we work
          </a>
        </motion.div>
      </div>
    </section>
  )
}
