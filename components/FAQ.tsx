"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import SectionTitle from "./SectionTitle";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#0E1017]/[0.02] to-transparent" />
      
      <div className="mx-auto w-full max-w-4xl">
        <SectionTitle 
          overline="FAQ" 
          title="Частые вопросы перед стартом"
          centered
        />
        
        <div className="mt-14 space-y-4">
          {siteContent.faq.map((item, idx) => {
            const opened = active === idx;
            return (
              <motion.div 
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="overflow-hidden rounded-[1.5rem] border border-[#0E1017]/8 bg-white/80 shadow-[0_2px_12px_rgba(14,16,23,0.04)] backdrop-blur-sm transition hover:border-[#0E1017]/15 hover:shadow-[0_4px_20px_rgba(14,16,23,0.08)]"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6"
                  onClick={() => setActive(opened ? null : idx)}
                  aria-expanded={opened}
                >
                  <span className="text-lg font-bold text-[#0E1017] sm:text-xl">{item.q}</span>
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#0E1017]/10 transition ${opened ? "bg-[#0E1017] text-white" : "bg-white text-[#0E1017]"}`}>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${opened ? "rotate-180" : ""}`} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {opened && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-6 text-base leading-relaxed text-[#2A3142] sm:px-8 sm:pb-8 sm:text-lg">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
