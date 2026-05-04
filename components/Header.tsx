"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-white bg-[#F6F3EA]/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-4">
          {/* Logo - larger, transparent background */}
          <Image 
            src="/images/logo.png" 
            alt="YOO SCHOOL" 
            width={180} 
            height={60} 
            className="h-14 w-auto object-contain sm:h-16 lg:h-20"
            style={{ mixBlendMode: "multiply" }}
            priority
          />
        </a>
        
        <nav className="hidden items-center gap-2 lg:flex">
          {siteContent.navigation.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="rounded-full px-5 py-3 text-base font-bold text-[#2A3142] transition hover:bg-[#c7ff4d] hover:text-[#0E1017]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="btn-orange hidden rounded-full px-8 py-4 text-base font-bold lg:inline-flex"
          >
            Записаться
          </a>
          <button 
            aria-label={open ? "Закрыть меню" : "Открыть меню"} 
            onClick={() => setOpen((v) => !v)} 
            className="card-3d inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0E1017] lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {open ? (
        <div className="border-t-4 border-white bg-[#F6F3EA] px-4 py-8 lg:hidden">
          <div className="flex flex-col gap-3">
            {siteContent.navigation.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                onClick={() => setOpen(false)} 
                className="rounded-2xl px-5 py-4 text-lg font-bold text-[#2A3142] transition hover:bg-[#c7ff4d]"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setOpen(false)} 
              className="btn-orange mt-4 rounded-full px-8 py-5 text-center text-lg font-bold"
            >
              Записаться
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
