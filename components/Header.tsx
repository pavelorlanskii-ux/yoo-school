"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteContent } from "@/data/siteContent";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[#F6F3EA]/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-xl font-black uppercase tracking-wide text-[#0E1017]">
          {siteContent.brand.name}
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {siteContent.navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-[#2A3142] transition hover:text-[#0066FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0066FF]">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-[#0066FF] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0051cb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0066FF] lg:inline-flex">
          Записаться
        </a>
        <button aria-label="Открыть меню" onClick={() => setOpen((v) => !v)} className="inline-flex rounded-full border border-[#0E1017]/10 p-2 text-[#0E1017] lg:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-[#0E1017]/10 bg-[#F6F3EA] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {siteContent.navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 font-medium text-[#2A3142] hover:bg-white">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-1 rounded-full bg-[#0066FF] px-4 py-3 text-center font-bold text-white">
              Записаться
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
