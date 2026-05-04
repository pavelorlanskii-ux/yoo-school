"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const cardConfigs = [
  { gradient: "card-gradient-lime", accent: "#BFFF00", icon: "📚" },
  { gradient: "card-gradient-orange", accent: "#FF5C00", icon: "🎯" },
  { gradient: "card-gradient-purple", accent: "#A855F7", icon: "💼" },
];

export default function DirectionCards() {
  return (
    <section id="directions" className="section-spacing relative px-4 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="floating-shape absolute -left-60 top-1/4 h-[500px] w-[500px] bg-[#BFFF00] opacity-30" />
        <div className="floating-shape absolute -right-40 bottom-1/4 h-[400px] w-[400px] bg-[#FF5C00] opacity-30" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section header */}
        <div className="mb-20 lg:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-glow"
          >
            Направления
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-inflate">Форматы под</span>{" "}
            <span className="text-inflate-lime">разные цели</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {siteContent.directions.map((item, index) => {
            const config = cardConfigs[index];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`premium-card ${config.gradient} flex h-full min-h-[420px] flex-col p-8 sm:p-10`}>
                  {/* Icon */}
                  <div 
                    className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl text-4xl"
                    style={{ background: `${config.accent}20`, border: `1px solid ${config.accent}40` }}
                  >
                    {config.icon}
                  </div>

                  <h3 className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 flex-1 text-base leading-relaxed text-white/60 sm:text-lg lg:text-xl">
                    {item.description}
                  </p>

                  {/* Action */}
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 text-base font-bold transition sm:text-lg"
                    style={{ color: config.accent }}
                  >
                    Записаться
                    <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Corporate banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-24"
        >
          <div className="premium-card card-gradient-cyan flex flex-col items-center gap-8 p-10 text-center sm:p-14 lg:flex-row lg:text-left">
            {/* Icon */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-[#22D3EE]/20 text-5xl">
              🏢
            </div>

            <div className="flex-1">
              <h3 className="text-3xl font-black text-white sm:text-4xl">
                {siteContent.corporate.title}
              </h3>
              <p className="mt-2 text-xl font-medium text-[#22D3EE]">
                {siteContent.corporate.subtitle}
              </p>
              <p className="mt-4 max-w-2xl text-base text-white/60 sm:text-lg lg:text-xl">
                {siteContent.corporate.description}
              </p>
            </div>

            <a
              href="#contact"
              className="btn-glossy btn-lime shrink-0 px-10 py-5 text-lg font-bold"
            >
              {siteContent.corporate.cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
