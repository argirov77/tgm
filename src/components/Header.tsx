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
    <header className="sticky top-0 z-50" style={{ backgroundColor: '#0F172A', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
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
                      className="font-inter text-base font-medium transition-colors duration-200"
                      style={{ color: isActive ? '#3B82F6' : '#E5E7EB' }}
                    >
                      {link.label}
                    </Link>
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-200 ${isActive ? 'w-full' : 'w-0'} group-hover:w-full`}
                      style={{ backgroundColor: '#3B82F6' }}
                    />
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Language switcher */}
          <div className="flex items-center overflow-hidden text-sm font-semibold" style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px' }}>
            {LANGUAGES.map(({ code, label }, i) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className="px-3 py-1 transition-colors duration-200"
                style={{
                  backgroundColor: lang === code ? '#3B82F6' : 'transparent',
                  color: lang === code ? '#fff' : '#9CA3AF',
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                }}
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
