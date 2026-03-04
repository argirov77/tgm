// src/components/Footer.tsx
'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-darkBlue text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Logo + copyright */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="font-poppins font-bold text-3xl text-white">
            TGMind <span className="text-teal">AI</span>
          </h3>
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} TGMind AI<br />
            {t.footer.copyright}
          </p>
        </div>

        {/* Contact & Connect */}
        <div className="flex flex-col items-center md:items-end space-y-6">
          {/* Contact */}
          <div className="text-center md:text-right space-y-2">
            <h4 className="text-xl font-semibold underline decoration-teal-400 underline-offset-4">
              {t.footer.contact}
            </h4>
            <Link
              href="mailto:hello@tgmind-ai.com"
              className="flex items-center justify-center md:justify-end space-x-2 hover:text-teal transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-teal-400 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 11h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">hello@tgmind-ai.com</span>
            </Link>
          </div>

          {/* Connect */}
          <div className="text-center md:text-right space-y-2">
            <h4 className="text-xl font-semibold underline decoration-teal-400 underline-offset-4">
              {t.footer.connect}
            </h4>
            <Link
              href="https://linkedin.com/company/tgmind-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-end space-x-2 hover:text-teal transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-teal-400 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
