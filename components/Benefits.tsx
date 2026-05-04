"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const icons = ["👥", "🗺️", "📊", "📚", "📈", "🤖"];
const accents = ["#BFFF00", "#FF5C00", "#22D3EE", "#EC4899", "#A855F7", "#BFFF00"];

export default function Benefits() {
  return (
    <section id="benefits" className="section-spacing relative px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF5C00]/5 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section header */}
        <div className="mb-20 lg:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-[#22D3EE]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#22D3EE]"
          >
            <span className="h-2 w-2 rounded-full bg-[#22D3EE]" />
            Почему YOO SCHOOL
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-inflate">Система, которая</span>{" "}
            <span className="text-inflate-purple">поддерживает</span>
          </motion.h2>
        </div>

        {/* Grid - Bento style */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {siteContent.benefits.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group"
            >
              <div className="premium-card flex h-full min-h-[280px] flex-col p-8 sm:p-10">
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl text-2xl"
                  style={{ background: `${accents[idx]}15`, border: `1px solid ${accents[idx]}30` }}
                >
                  {icons[idx]}
                </div>

                <h3 className="text-xl font-black text-white sm:text-2xl lg:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-base text-white/60 sm:text-lg">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
