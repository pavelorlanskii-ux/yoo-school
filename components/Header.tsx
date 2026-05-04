"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="gloss-panel mx-auto flex w-full min-w-0 max-w-7xl items-center justify-between gap-3 rounded-full px-3 py-2 sm:px-4 lg:px-5">
        <a href="#top" className="relative z-10 flex min-w-0 shrink items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="YOO SCHOOL"
            width={280}
            height={72}
            className="h-9 w-auto max-w-[min(190px,52vw)] sm:h-11 sm:max-w-[230px] lg:h-12 lg:max-w-[270px]"
            priority
          />
        </a>

        <nav className="relative z-10 hidden items-center gap-1 lg:flex">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-extrabold text-[#4A465D] transition hover:bg-white hover:text-[#151427] hover:shadow-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-3">
          <a
            href="#contact"
            className="btn btn-primary hidden px-6 py-3 text-sm lg:inline-flex"
          >
            Записаться
          </a>
          <button
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/70 text-[#151427] shadow-sm lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="gloss-panel mx-3 mt-2 rounded-3xl px-4 py-4 sm:mx-5 lg:hidden">
          <div className="relative z-10 flex flex-col gap-1">
            {siteContent.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-extrabold text-[#4A465D] transition hover:bg-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-3 px-6 py-3 text-center"
            >
              Записаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
