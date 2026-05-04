"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteContent } from "@/data/siteContent";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-[#F6F3EA]/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 text-xl font-black uppercase tracking-wide text-[#0E1017] sm:text-2xl">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0E1017] text-sm text-white sm:h-10 sm:w-10 sm:text-base">Y</span>
          <span className="hidden sm:inline">{siteContent.brand.name}</span>
          <span className="sm:hidden">YOO</span>
        </a>
        
        <nav className="hidden items-center gap-1 lg:flex">
          {siteContent.navigation.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="rounded-full px-4 py-2 text-sm font-medium text-[#2A3142] transition hover:bg-[#0E1017]/5 hover:text-[#0E1017] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <a 
            href="#contact" 
            className="btn-primary hidden rounded-full px-6 py-3 text-sm font-bold text-white lg:inline-flex"
          >
            Записаться
          </a>
          <button 
            aria-label={open ? "Закрыть меню" : "Открыть меню"} 
            onClick={() => setOpen((v) => !v)} 
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0E1017]/10 bg-white text-[#0E1017] transition hover:border-[#0E1017]/20 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {open ? (
        <div className="border-t border-[#0E1017]/10 bg-[#F6F3EA] px-4 py-6 lg:hidden">
          <div className="flex flex-col gap-2">
            {siteContent.navigation.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={() => setOpen(false)} 
                className="rounded-2xl px-4 py-3 text-base font-medium text-[#2A3142] transition hover:bg-white"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setOpen(false)} 
              className="btn-primary mt-3 rounded-full px-6 py-4 text-center text-base font-bold text-white"
            >
              Записаться
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
