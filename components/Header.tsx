"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { siteContent } from "@/data/siteContent";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/50 bg-white/40 backdrop-blur-xl">
      <div className="creative-shell flex min-w-0 items-center justify-between gap-3 py-3">
        <a href="#top" className="flex min-w-0 shrink items-center" aria-label="YOO SCHOOL">
          <Logo className="h-9 w-auto sm:h-10" />
        </a>

        <nav className="hidden items-center gap-5 xl:flex">
          {siteContent.navigation.slice(0, 5).map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-extrabold text-[#0f2a57] transition hover:text-[#2b4bff]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn btn-primary hidden px-5 py-2.5 text-sm lg:inline-flex">
            Пробный урок
          </a>
          <button
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/70 bg-white/70 text-[#0f2a57] lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/60 bg-white/70 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {siteContent.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-extrabold text-[#0f2a57] transition hover:bg-white"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-3 px-6 py-3 text-center">
              Пробный урок
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
