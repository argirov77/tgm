// src/components/comparison/ConnectingStep.tsx
'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function ConnectingStep() {
  const ref = useRef<HTMLDivElement>(null)
  const active = useInView(ref, { margin: '-40% 0px -40% 0px' })
  const { t } = useLanguage()

  const CLIENT_COUNT = 6

  const polarToPercent = (deg: number, radius = 40) => {
    const rad = (deg * Math.PI) / 180
    const x = 50 + Math.cos(rad) * radius
    const y = 50 + Math.sin(rad) * radius
    return {
      left: `${x.toFixed(2)}%`,
      top: `${y.toFixed(2)}%`,
    }
  }

  return (
    <div
      ref={ref}
      className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row gap-8 overflow-hidden"
    >
      {/* Left: client circle */}
      <div className="flex-1 flex flex-col items-center">
        <div className="relative w-full aspect-square max-w-sm">
          {/* center icon */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center drop-shadow-lg">
              <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-white" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
          </div>
          {/* dashed lines to clients */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {Array.from({ length: CLIENT_COUNT }).map((_, i) => {
              const { left, top } = polarToPercent(i * (360 / CLIENT_COUNT))
              return (
                <line
                  key={i}
                  x1={left}
                  y1={top}
                  x2="50%"
                  y2="50%"
                  stroke="#94A3B8"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                />
              )
            })}
          </svg>
          {/* client icons */}
          {Array.from({ length: CLIENT_COUNT }).map((_, i) => {
            const { left, top } = polarToPercent(i * (360 / CLIENT_COUNT))
            return (
              <div
                key={i}
                className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2 z-20 bg-gray-100 rounded-full flex items-center justify-center shadow-sm"
                style={{ left, top }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-darkBlue" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </div>
            )
          })}
        </div>
      </div>

      {/* Right: description */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-3">
        <h3 className="text-2xl md:text-3xl font-bold text-darkBlue">{t.comparison.step3Title}</h3>
        <p className="text-gray-600 leading-relaxed">
          {t.comparison.step3Desc}
        </p>
      </div>
    </div>
  )
}
