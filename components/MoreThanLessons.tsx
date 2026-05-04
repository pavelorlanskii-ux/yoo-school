"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const icons = ["👤", "📝", "💬", "📊", "🏢", "⚡"];
const gradients = [
  "card-gradient-lime",
  "card-gradient-orange",
  "card-gradient-cyan",
  "card-gradient-pink",
  "card-gradient-purple",
  "card-gradient-lime",
];
const accents = ["#BFFF00", "#FF5C00", "#22D3EE", "#EC4899", "#A855F7", "#BFFF00"];

export default function MoreThanLessons() {
  return (
    <section className="section-spacing relative px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="floating-shape absolute -right-60 top-1/3 h-[500px] w-[500px] bg-[#A855F7] opacity-25" />
        <div className="floating-shape absolute -left-40 bottom-1/4 h-[400px] w-[400px] bg-[#22D3EE] opacity-25" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section header */}
        <div className="mb-20 lg:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-[#A855F7]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#A855F7]"
          >
            <span className="h-2 w-2 rounded-full bg-[#A855F7]" />
            Экосистема
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-inflate">{siteContent.moreThanLessons.title}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg text-white/60 sm:text-xl lg:text-2xl"
          >
            {siteContent.moreThanLessons.subtitle}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {siteContent.moreThanLessons.items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group"
            >
              <div className={`premium-card ${gradients[idx]} flex h-full min-h-[320px] flex-col p-8 sm:p-10`}>
                <div
                  className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
                  style={{ background: `${accents[idx]}15`, border: `1px solid ${accents[idx]}30` }}
                >
                  {icons[idx]}
                </div>

                <h3 className="text-2xl font-black text-white sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-base text-white/60 sm:text-lg lg:text-xl">
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
