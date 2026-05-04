"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="glass-strong mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#BFFF00] sm:h-12 sm:w-12">
            <span className="text-xl font-black text-[#0A0A0F] sm:text-2xl">Y</span>
          </div>
          <span className="text-xl font-black text-white sm:text-2xl">YOO SCHOOL</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn-glossy btn-lime hidden px-6 py-3 text-sm font-bold lg:inline-flex"
          >
            Записаться
          </a>
          <button
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((v) => !v)}
            className="glass inline-flex h-12 w-12 items-center justify-center rounded-xl text-white lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="glass-strong mt-2 rounded-2xl px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-2">
            {siteContent.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-lg font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-glossy btn-lime mt-4 px-6 py-4 text-center text-lg font-bold"
            >
              Записаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
