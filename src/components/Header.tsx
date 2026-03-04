// src/components/Header.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import type { Language } from '@/translations'

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'bg', label: 'BG' },
]

export default function Header() {
  const path = usePathname()
  const { lang, setLang, t } = useLanguage()

  const NAV_LINKS = [
    { href: '/', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#team', label: t.nav.team },
  ]

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" aria-label="TGMind AI Home">
          <Image
            src="/assets/logo.png"
            alt="TGMind AI"
            width={120}
            height={32}
            priority
          />
        </Link>

        {/* Nav + Language switcher */}
        <div className="flex items-center gap-6">
          <nav>
            <ul className="flex space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === '/'
                    ? path === '/'
                    : path.startsWith(link.href.replace('#', ''))
                return (
                  <li key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={`
                        text-lg font-medium transition-colors duration-200
                        ${isActive ? 'text-teal' : 'text-gray-800'}
                        hover:text-teal
                      `}
                    >
                      {link.label}
                    </Link>
                    <span
                      className={`
                        absolute left-0 -bottom-1 h-0.5 bg-teal transition-all
                        duration-200
                        ${isActive ? 'w-full' : 'w-0'}
                        group-hover:w-full
                      `}
                    />
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Language switcher */}
          <div className="flex items-center border border-gray-200 rounded-full overflow-hidden text-sm font-semibold">
            {LANGUAGES.map(({ code, label }, i) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`
                  px-3 py-1 transition-colors duration-200
                  ${lang === code ? 'bg-teal text-white' : 'text-gray-600 hover:bg-gray-100'}
                  ${i > 0 ? 'border-l border-gray-200' : ''}
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
