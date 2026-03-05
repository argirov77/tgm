'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

interface TeamMember {
  photo: string
  name: string
  role: string
  bio: string
  telegram?: string
  email?: string
}

export default function Team() {
  const { t } = useLanguage()

  const teamMembers: TeamMember[] = [
    {
      photo: '/assets/team/Dmitriy.jpg',
      name: 'Dmitriy Stoykov',
      role: t.team.member1Role,
      bio: t.team.member1Bio,
      telegram: 'argirov77',
    },
    {
      photo: '/assets/team/Alexandr.jpg',
      name: 'Alexandr Voytovich',
      role: t.team.member2Role,
      bio: t.team.member2Bio,
      telegram: 'ManDiversity',
    },
  ]

  return (
    <section id="team" className="relative py-20 overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
      {/* Subtle glow */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: '40%',
          height: '50%',
          background: 'radial-gradient(ellipse at 20% 20%, rgba(6,182,212,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* section title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-block relative text-center font-space-grotesk font-semibold text-3xl md:text-4xl mb-8"
          style={{ color: '#E5E7EB' }}
        >
          <span style={{ color: '#E5E7EB' }}>{t.team.title}</span>{' '}
          <span style={{ color: '#06B6D4' }}>{t.team.titleHighlight}</span>
          <span className="absolute bottom-0 left-1/2 w-24 h-1 -translate-x-1/2 rounded-full" style={{ backgroundColor: '#3B82F6' }} />
        </motion.h2>

        {/* intro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="font-inter text-center max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed"
          style={{ color: '#9CA3AF' }}
        >
          {t.team.intro}
        </motion.p>

        {/* team grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto"
        >
          {teamMembers.map((member) => {
            const contactHref = member.telegram
              ? `https://t.me/${member.telegram}`
              : member.email
              ? `mailto:${member.email}`
              : undefined

            return (
              <div
                key={member.name}
                className="group hover:scale-[1.03] transition-transform p-6 flex flex-col items-center text-center"
                style={{
                  backgroundColor: '#111827',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {/* photo */}
                {contactHref ? (
                  <a
                    href={contactHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-44 h-44 mb-4 rounded-full overflow-hidden ring-4 ring-[#0F172A] transition-transform group-hover:scale-105"
                    style={{ backgroundColor: '#06B6D4' }}
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="176px"
                      className="object-cover"
                    />
                  </a>
                ) : (
                  <div className="relative w-44 h-44 mb-4 rounded-full overflow-hidden ring-4 ring-[#0F172A]" style={{ backgroundColor: '#06B6D4' }}>
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="176px"
                      className="object-cover"
                    />
                  </div>
                )}

                {/* name */}
                {contactHref ? (
                  <a
                    href={contactHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-space-grotesk text-xl font-semibold transition-colors mb-1"
                    style={{ color: '#E5E7EB' }}
                  >
                    {member.name}
                  </a>
                ) : (
                  <p className="font-space-grotesk text-xl font-semibold mb-1" style={{ color: '#E5E7EB' }}>
                    {member.name}
                  </p>
                )}

                {/* role */}
                <p className="font-inter font-medium uppercase tracking-wide mb-3" style={{ color: '#06B6D4' }}>
                  {member.role}
                </p>

                {/* bio */}
                <p className="font-inter text-sm leading-relaxed mb-4" style={{ color: '#9CA3AF' }}>
                  {member.bio}
                </p>

                {/* telegram icon */}
                {contactHref && (
                  <a
                    href={contactHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <Image
                      src="/assets/icons/telegram.svg"
                      alt="Telegram"
                      width={24}
                      height={24}
                    />
                  </a>
                )}
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
