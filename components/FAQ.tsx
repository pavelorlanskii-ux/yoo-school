"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const accents = ["#BFFF00", "#FF5C00", "#22D3EE", "#EC4899", "#A855F7", "#BFFF00", "#FF5C00", "#22D3EE"];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="section-spacing relative px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#A855F7]/5 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-4xl">
        {/* Section header */}
        <div className="mb-16 text-center lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-glow"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-inflate">Частые</span>{" "}
            <span className="text-inflate-lime">вопросы</span>
          </motion.h2>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {siteContent.faq.map((item, idx) => {
            const opened = active === idx;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="overflow-hidden"
              >
                <div
                  className={`glass rounded-2xl transition-all duration-300 ${
                    opened ? "ring-1 ring-white/20" : ""
                  }`}
                  style={opened ? { background: `${accents[idx % accents.length]}08` } : {}}
                >
                  <button
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
                    onClick={() => setActive(opened ? null : idx)}
                    aria-expanded={opened}
                  >
                    <span className="text-lg font-bold text-white sm:text-xl lg:text-2xl">
                      {item.q}
                    </span>
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition"
                      style={{
                        background: `${accents[idx % accents.length]}20`,
                        color: accents[idx % accents.length],
                      }}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${opened ? "rotate-180" : ""}`}
                      />
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
                        <p className="px-6 pb-6 text-base leading-relaxed text-white/60 sm:px-8 sm:pb-8 sm:text-lg">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
