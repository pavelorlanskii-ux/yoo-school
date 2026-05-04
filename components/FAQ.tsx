"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-[#F8F9FA]">
      <div className="creative-shell max-w-4xl min-w-0">
        {/* Section header */}
        <div className="mb-10 text-center lg:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-lime"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg mx-auto mt-4"
          >
            О чём ещё интересно узнать
          </motion.h2>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
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
                  className={`rounded-xl bg-white transition-all ${
                    opened ? "ring-2 ring-[#BFFF00]" : "border border-gray-200"
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full min-w-0 items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                    onClick={() => setActive(opened ? null : idx)}
                    aria-expanded={opened}
                  >
                    <span className="min-w-0 flex-1 pr-2 text-base font-semibold leading-snug text-[#1A1A2E] sm:text-lg">
                      {item.q}
                    </span>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${
                        opened ? "bg-[#BFFF00] text-[#1A1A2E]" : "bg-gray-100 text-gray-500"
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${opened ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {opened && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="px-4 pb-4 text-base leading-relaxed text-gray-600 sm:px-6 sm:pb-6">
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
