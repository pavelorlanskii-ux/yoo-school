"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import SectionTitle from "./SectionTitle";

const characterEmojis: Record<string, string> = {
  "Орлик": "🦉",
  "Олень": "🦌",
  "Корги": "🐶",
};

const cardConfigs = [
  { bg: "bg-[#FFD452]", tiltBg1: "#9D6AFF", tiltBg2: "#7CE8FF", rotate: -3 },
  { bg: "bg-[#c7ff4d]", tiltBg1: "#FF6B2B", tiltBg2: "#FFD452", rotate: 2 },
  { bg: "bg-[#7CE8FF]", tiltBg1: "#c7ff4d", tiltBg2: "#9D6AFF", rotate: -2 },
];

export default function DirectionCards() {
  return (
    <section id="directions" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle 
          overline="Направления" 
          title="Форматы под разные цели" 
          subtitle="Крупные маршруты, в которых легко понять, с чего стартовать и куда двигаться дальше."
          centered
        />
        
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {siteContent.directions.map((item, index) => {
            const config = cardConfigs[index];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24, rotate: config.rotate }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Tilted background cards */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 rounded-[2rem]" 
                  style={{ background: config.tiltBg1, transform: "rotate(-5deg) translate(-6px, 6px)" }} 
                />
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 rounded-[2rem]" 
                  style={{ background: config.tiltBg2, transform: "rotate(4deg) translate(6px, 8px)" }} 
                />
                
                {/* Main card */}
                <div className={`sticker-lg relative ${config.bg} rounded-[2rem] p-6 transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-1 sm:p-8`}>
                  {/* Top row */}
                  <div className="mb-4 flex items-start justify-between">
                    <span className="badge-sticker text-xs">
                      {item.sticker}
                    </span>
                    <motion.div 
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="sticker flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl"
                    >
                      {characterEmojis[item.sticker] || "🎯"}
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-black leading-tight text-[#0E1017] sm:text-3xl">
                    {item.title}
                  </h3>
                  
                  <p className="mt-4 text-base leading-relaxed text-[#0E1017]/80">
                    {item.description}
                  </p>
                  
                  {/* Action link */}
                  <a 
                    href="#contact" 
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0E1017] underline decoration-2 underline-offset-4 transition hover:decoration-[#FF6B2B]"
                  >
                    Записаться
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
