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
    <section id="team" className="relative bg-gray-50 py-20 overflow-hidden">
      {/* decorative diagonals */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full bg-teal opacity-10 transform rotate-12 origin-top-right pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-2/3 h-full bg-blue-800 opacity-5 transform -rotate-12 origin-bottom-left pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* section title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-block relative text-center font-poppins font-bold text-darkBlue text-3xl md:text-4xl mb-8"
        >
          <span className="text-darkBlue">{t.team.title}</span>{' '}
          <span className="text-teal">{t.team.titleHighlight}</span>
          <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-teal -translate-x-1/2 rounded-full" />
        </motion.h2>

        {/* intro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed"
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
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.03] transition-transform p-6 flex flex-col items-center text-center"
              >
                {/* photo */}
                {contactHref ? (
                  <a
                    href={contactHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-36 h-36 mb-4 rounded-full overflow-hidden bg-teal-600 ring-4 ring-gray-50 transition-transform group-hover:scale-105"
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </a>
                ) : (
                  <div className="relative w-36 h-36 mb-4 rounded-full overflow-hidden bg-teal-600 ring-4 ring-gray-50">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="144px"
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
                    className="text-xl font-semibold text-darkBlue hover:text-teal transition-colors mb-1"
                  >
                    {member.name}
                  </a>
                ) : (
                  <p className="text-xl font-semibold text-darkBlue mb-1">
                    {member.name}
                  </p>
                )}

                {/* role */}
                <p className="text-teal font-medium uppercase tracking-wide mb-3">
                  {member.role}
                </p>

                {/* bio */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
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
