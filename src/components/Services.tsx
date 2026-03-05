// src/components/Services.tsx
'use client'

import React from 'react'
import HowWeWork from './HowWeWork'

export default function Services() {
  return (
    <section id="services" className="py-20" style={{ backgroundColor: '#0F172A' }}>
      <div className="container mx-auto px-4 space-y-20">
        <HowWeWork />
      </div>
    </section>
  )
}
