// src/components/Header.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import type { Language } from '@/translations'

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'bg', label: 'BG' },
]

export default function Header() {
  const { lang, setLang, t } = useLanguage()

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

        {/* Tagline */}
        <span className="font-inter text-sm font-medium hidden md:block" style={{ color: '#9CA3AF' }}>
          {t.nav.tagline}
        </span>

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
    </header>
  )
}
