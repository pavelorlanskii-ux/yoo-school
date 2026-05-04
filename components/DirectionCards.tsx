"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { OwlIcon, DeerIcon, CorgiIcon } from "./AnimalIcons";

const cardConfigs = [
  { bg: "bg-[#FFD452]", tiltBg1: "#9D6AFF", tiltBg2: "#7CE8FF", rotate: -3, Icon: OwlIcon },
  { bg: "bg-[#c7ff4d]", tiltBg1: "#FF6B2B", tiltBg2: "#FFD452", rotate: 2, Icon: DeerIcon },
  { bg: "bg-[#7CE8FF]", tiltBg1: "#c7ff4d", tiltBg2: "#9D6AFF", rotate: -2, Icon: CorgiIcon },
];

export default function DirectionCards() {
  return (
    <section id="directions" className="section-padding relative px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header - HUGE with 3D */}
        <div className="mb-20 text-center lg:mb-28">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border-4 border-[#0E1017] bg-[#FFD452] px-8 py-4 text-xl font-black text-[#0E1017] shadow-[0_4px_0_0_rgba(0,0,0,0.1)]"
          >
            Направления
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3d mx-auto mt-8 max-w-5xl text-balance text-4xl font-black leading-[1.05] tracking-tight text-[#0E1017] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Форматы под разные цели
          </motion.h2>
        </div>
        
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {siteContent.directions.map((item, index) => {
            const config = cardConfigs[index];
            const IconComponent = config.Icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, rotate: config.rotate }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Tilted background cards */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 rounded-[2.5rem]" 
                  style={{ background: config.tiltBg1, transform: "rotate(-6deg) translate(-8px, 8px)" }} 
                />
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 rounded-[2.5rem]" 
                  style={{ background: config.tiltBg2, transform: "rotate(4deg) translate(8px, 10px)" }} 
                />
                
                {/* Main card - larger padding */}
                <div className={`card-3d relative ${config.bg} rounded-[2.5rem] p-10 sm:p-12`}>
                  {/* Animated character icon */}
                  <div className="mb-8 inline-block rounded-3xl border-4 border-[#0E1017] bg-white p-4 shadow-[0_6px_0_0_rgba(0,0,0,0.1)]">
                    <IconComponent className="h-20 w-20" />
                  </div>
                  
                  <h3 className="text-3xl font-black leading-tight text-[#0E1017] sm:text-4xl lg:text-5xl">
                    {item.title}
                  </h3>
                  
                  <p className="mt-5 min-h-[100px] text-xl leading-relaxed text-[#0E1017]/80 sm:text-2xl">
                    {item.description}
                  </p>
                  
                  {/* Action link */}
                  <a 
                    href="#contact" 
                    className="mt-8 inline-flex items-center gap-3 text-xl font-bold text-[#0E1017] underline decoration-4 underline-offset-4 transition hover:decoration-[#FF6B2B]"
                  >
                    Записаться
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Corporate banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-20 lg:mt-28"
        >
          {/* Background decoration */}
          <div aria-hidden="true" className="absolute inset-0 rounded-[3rem] bg-[#9D6AFF]" style={{ transform: "rotate(-2deg) translate(-6px, 6px)" }} />
          
          <div className="card-3d relative flex flex-col items-center justify-between gap-10 rounded-[3rem] bg-[#FF6B2B] p-10 text-center sm:p-14 lg:flex-row lg:text-left">
            {/* Icon */}
            <div className="shrink-0 rounded-3xl border-4 border-white bg-white p-5 shadow-[0_6px_0_0_rgba(0,0,0,0.1)]">
              <span className="block text-6xl">🏢</span>
            </div>

            <div className="flex-1">
              <h3 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">{siteContent.corporate.title}</h3>
              <p className="mt-3 text-xl font-bold text-white/90 sm:text-2xl">{siteContent.corporate.subtitle}</p>
              <p className="mt-5 max-w-2xl text-lg text-white/80 sm:text-xl lg:text-2xl">
                {siteContent.corporate.description}
              </p>
            </div>

            <a 
              href="#contact" 
              className="btn-lime shrink-0 rounded-full px-10 py-6 text-xl font-bold"
            >
              {siteContent.corporate.cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
