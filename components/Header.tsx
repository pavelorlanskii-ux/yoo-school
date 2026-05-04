"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto flex w-full min-w-0 max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 shrink items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="YOO SCHOOL"
            width={280}
            height={72}
            className="h-9 w-auto max-w-[min(190px,52vw)] sm:h-11 sm:max-w-[230px] lg:h-12 lg:max-w-[270px]"
            priority
          />
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {siteContent.navigation.slice(0, 5).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-extrabold text-[#050505] transition hover:text-[#129FC5]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn btn-primary hidden px-5 py-2.5 text-sm lg:inline-flex"
          >
            Попробовать бесплатно
          </a>
          <button
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white text-[#050505] lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {siteContent.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-extrabold text-[#050505] transition hover:bg-[#E9EDF0]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-3 px-6 py-3 text-center"
            >
              Попробовать бесплатно
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
