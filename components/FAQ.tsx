"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import SectionTitle from "./SectionTitle";

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

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
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
                className={`sticker overflow-hidden rounded-[1.5rem] ${opened ? colors[idx % colors.length] : "bg-white"} transition-colors`}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6"
                  onClick={() => setActive(opened ? null : idx)}
                  aria-expanded={opened}
                >
                  <span className="text-base font-black text-[#0E1017] sm:text-lg">{item.q}</span>
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-3 border-white bg-white text-[#0E1017] shadow-[0_2px_0_0_rgba(0,0,0,0.1)] transition`}>
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
                      <p className="px-6 pb-6 text-base leading-relaxed text-[#0E1017]/80 sm:px-8 sm:pb-8">
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
