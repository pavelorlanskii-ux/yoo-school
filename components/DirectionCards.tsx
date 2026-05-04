"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

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
    <section id="directions" className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header - HUGE */}
        <div className="mb-16 text-center lg:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border-4 border-[#0E1017] bg-[#FFD452] px-6 py-3 text-lg font-bold text-[#0E1017]"
          >
            Направления
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.1] tracking-tight text-[#0E1017] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Форматы под разные цели
          </motion.h2>
        </div>
        
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
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
                  className="absolute inset-0 rounded-[2.5rem]" 
                  style={{ background: config.tiltBg1, transform: "rotate(-5deg) translate(-6px, 6px)" }} 
                />
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 rounded-[2.5rem]" 
                  style={{ background: config.tiltBg2, transform: "rotate(4deg) translate(6px, 8px)" }} 
                />
                
                {/* Main card */}
                <div className={`sticker-lg relative ${config.bg} rounded-[2.5rem] p-8 transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-1 sm:p-10`}>
                  {/* Character emoji */}
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="sticker mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-5xl"
                  >
                    {characterEmojis[item.sticker] || "🎯"}
                  </motion.div>
                  
                  <h3 className="text-3xl font-black leading-tight text-[#0E1017] sm:text-4xl">
                    {item.title}
                  </h3>
                  
                  <p className="mt-4 text-lg leading-relaxed text-[#0E1017]/80 sm:text-xl">
                    {item.description}
                  </p>
                  
                  {/* Action link */}
                  <a 
                    href="#contact" 
                    className="mt-8 inline-flex items-center gap-2 text-lg font-bold text-[#0E1017] underline decoration-4 underline-offset-4 transition hover:decoration-[#FF6B2B]"
                  >
                    Записаться
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Corporate banner - wide */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-16 lg:mt-20"
        >
          {/* Background decorations */}
          <div aria-hidden="true" className="absolute inset-0 rounded-[2.5rem] bg-[#9D6AFF]" style={{ transform: "rotate(-1deg) translate(-4px, 4px)" }} />
          
          <div className="sticker-lg relative flex flex-col items-center justify-between gap-8 rounded-[2.5rem] bg-[#FF6B2B] p-8 text-center sm:p-12 lg:flex-row lg:text-left">
            {/* Icon */}
            <motion.div 
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="sticker flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl"
            >
              🏢
            </motion.div>

            <div className="flex-1">
              <h3 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">{siteContent.corporate.title}</h3>
              <p className="mt-2 text-xl font-bold text-white/90">{siteContent.corporate.subtitle}</p>
              <p className="mt-4 max-w-2xl text-lg text-white/80 lg:text-xl">
                {siteContent.corporate.description}
              </p>
            </div>

            <a 
              href="#contact" 
              className="btn-lime shrink-0 rounded-full px-8 py-5 text-lg font-bold sm:text-xl"
            >
              {siteContent.corporate.cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
