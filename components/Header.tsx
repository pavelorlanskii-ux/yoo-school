"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-white bg-[#F6F3EA]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="sticker flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c7ff4d] p-1">
            <Image src="/images/logo.png" alt="" width={48} height={48} className="h-10 w-10 object-contain" />
          </div>
          <span className="text-xl font-black uppercase tracking-tight text-[#0E1017] sm:text-2xl">
            {siteContent.brand.name}
          </span>
        </a>
        
        <nav className="hidden items-center gap-1 lg:flex">
          {siteContent.navigation.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="rounded-full px-4 py-2.5 text-sm font-bold text-[#2A3142] transition hover:bg-[#c7ff4d] hover:text-[#0E1017]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <a 
            href="#contact" 
            className="btn-orange hidden rounded-full px-6 py-3 text-sm font-bold lg:inline-flex"
          >
            Записаться
          </a>
          <button 
            aria-label={open ? "Закрыть меню" : "Открыть меню"} 
            onClick={() => setOpen((v) => !v)} 
            className="sticker inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0E1017] lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {open ? (
        <div className="border-t-4 border-white bg-[#F6F3EA] px-4 py-6 lg:hidden">
          <div className="flex flex-col gap-2">
            {siteContent.navigation.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={() => setOpen(false)} 
                className="rounded-2xl px-4 py-3 text-base font-bold text-[#2A3142] transition hover:bg-[#c7ff4d]"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setOpen(false)} 
              className="btn-orange mt-3 rounded-full px-6 py-4 text-center text-base font-bold"
            >
              Записаться
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
