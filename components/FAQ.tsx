"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { siteContent } from "@/data/siteContent";
import SectionTitle from "./SectionTitle";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <SectionTitle overline="FAQ" title="Частые вопросы перед стартом" />
        <div className="mt-10 space-y-3">
          {siteContent.faq.map((item, idx) => {
            const opened = active === idx;
            return (
              <div key={item.q} className="overflow-hidden rounded-3xl border border-[#0E1017]/10 bg-white/80">
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  onClick={() => setActive(opened ? null : idx)}
                  aria-expanded={opened}
                >
                  <span className="text-xl font-bold text-[#0E1017]">{item.q}</span>
                  <ChevronDown className={`transition ${opened ? "rotate-180" : ""}`} />
                </button>
                {opened ? <p className="px-5 pb-5 text-[#2A3142]">{item.a}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
