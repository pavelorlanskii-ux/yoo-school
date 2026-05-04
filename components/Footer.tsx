"use client";

import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        {/* Tagline */}
        <p className="mb-8 max-w-2xl text-lg font-semibold leading-snug text-[#1A1A2E] sm:mb-10 sm:text-xl md:text-2xl">
          {siteContent.footer.tagline}
        </p>

        <div className="grid min-w-0 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#top" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="YOO SCHOOL"
                width={240}
                height={62}
                className="h-9 w-auto sm:h-10"
              />
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Современный образовательный бренд для детей, подростков, взрослых и команд.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#1A1A2E]">Разделы</p>
            <div className="mt-4 flex flex-col gap-2">
              {siteContent.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-600 transition hover:text-[#FF5C00]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#1A1A2E]">Контакты</p>
            <div className="mt-4 space-y-3">
              <a
                href="https://t.me/yoo_school"
                className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-[#FF5C00]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                {siteContent.contacts.telegram}
              </a>
              <a
                href={`tel:${siteContent.contacts.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-[#FF5C00]"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteContent.contacts.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-xs text-gray-400">
            © 2026 {siteContent.brand.name}. Все права защищены.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#BFFF00]" />
            Modern Creative Education Brand
          </div>
        </div>
      </div>
    </footer>
  );
}
