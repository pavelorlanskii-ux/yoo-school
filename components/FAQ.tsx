"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding pt-6">
      <div className="creative-shell max-w-4xl">
        <div className="poster-scene p-6 sm:p-8">
          <h2 className="heading-lg text-[#0f2b57]">FAQ</h2>
          <div className="mt-6 space-y-3">
            {siteContent.faq.map((item, idx) => {
              const opened = active === idx;
              return (
                <motion.div key={item.q} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.04 }}>
                  <div className="glass-panel overflow-hidden bg-white/65">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-6"
                      onClick={() => setActive(opened ? null : idx)}
                      aria-expanded={opened}
                    >
                      <span className="text-base font-extrabold leading-snug text-[#13365f] sm:text-lg">{item.q}</span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/70">
                        <ChevronDown className={`h-4 w-4 text-[#1e4d80] transition ${opened ? "rotate-180" : ""}`} />
                      </span>
                    </button>
                    <AnimatePresence>
                      {opened ? (
                        <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-4 pb-4 text-sm font-extrabold leading-tight text-[#456f9b] sm:px-6 sm:text-base">
                          {item.a}
                        </motion.p>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
