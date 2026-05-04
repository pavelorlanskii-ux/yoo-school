"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";

const characterEmojis: Record<string, string> = {
  "Орлик": "🦉",
  "Олень": "🦌",
  "Корги": "🐶",
};

const cardColors = [
  "from-[#c7ff4d]/30 via-white/60 to-[#7ce8ff]/25",
  "from-[#ffd452]/30 via-white/60 to-[#f9d8ff]/25",
  "from-[#7ce8ff]/30 via-white/60 to-[#c7ff4d]/25",
];

export default function DirectionCards() {
  return (
    <section id="directions" className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      {/* Section background accent */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#0E1017]/[0.02] to-transparent" />
      
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle 
          overline="Направления" 
          title="Форматы под разные цели" 
          subtitle="Крупные маршруты, в которых легко понять, с чего стартовать и куда двигаться дальше."
          centered
        />
        
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {siteContent.directions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <GlassCard 
                className={`card-hover h-full bg-gradient-to-br ${cardColors[index]} p-8`}
              >
                {/* Character sticker */}
                <div className="mb-6 flex items-start justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#0E1017]/10 bg-white/80 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#0066FF] shadow-[0_4px_16px_rgba(0,102,255,0.1)]">
                    {item.sticker}
                  </span>
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="character-sticker flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
                  >
                    {characterEmojis[item.sticker] || "🎯"}
                  </motion.div>
                </div>
                
                <h3 className="text-3xl font-black uppercase leading-tight text-[#0E1017] sm:text-4xl">
                  {item.title}
                </h3>
                
                <p className="mt-5 text-base leading-relaxed text-[#2A3142]">
                  {item.description}
                </p>
                
                {/* Hover indicator */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0066FF] opacity-0 transition-opacity group-hover:opacity-100">
                  <span>Подробнее</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
