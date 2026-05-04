"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const colors = [
  "bg-[#c7ff4d]",
  "bg-[#FFD452]",
  "bg-[#7CE8FF]",
  "bg-[#FF8DC7]",
  "bg-[#9D6AFF]",
  "bg-[#FF6B2B]",
  "bg-[#c7ff4d]",
  "bg-[#FFD452]",
];
const textColors = [
  "text-[#0E1017]",
  "text-[#0E1017]",
  "text-[#0E1017]",
  "text-[#0E1017]",
  "text-white",
  "text-white",
  "text-[#0E1017]",
  "text-[#0E1017]",
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto w-full max-w-4xl">
        {/* Section header - HUGE */}
        <div className="mb-16 text-center lg:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border-4 border-[#0E1017] bg-[#FF8DC7] px-6 py-3 text-lg font-bold text-[#0E1017]"
          >
            FAQ
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-black leading-[1.1] tracking-tight text-[#0E1017] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Частые вопросы
          </motion.h2>
        </div>
        
        <div className="space-y-5">
          {siteContent.faq.map((item, idx) => {
            const opened = active === idx;
            return (
              <motion.div 
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`sticker-lg overflow-hidden rounded-[2rem] ${opened ? colors[idx % colors.length] : "bg-white"} transition-colors`}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-8 py-6 text-left sm:px-10 sm:py-8"
                  onClick={() => setActive(opened ? null : idx)}
                  aria-expanded={opened}
                >
                  <span className={`text-xl font-black ${opened ? textColors[idx % textColors.length] : "text-[#0E1017]"} sm:text-2xl`}>{item.q}</span>
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-4 border-[#0E1017] bg-white text-[#0E1017] shadow-[0_4px_0_0_rgba(0,0,0,0.15)] transition`}>
                    <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${opened ? "rotate-180" : ""}`} />
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
                      <p className={`px-8 pb-8 text-lg leading-relaxed ${textColors[idx % textColors.length]} opacity-80 sm:px-10 sm:pb-10 sm:text-xl`}>
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
