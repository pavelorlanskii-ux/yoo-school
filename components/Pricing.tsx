"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";

const cardColors = [
  "from-[#c7ff4d]/20 via-white/70 to-white/50",
  "from-white/70 via-[#7ce8ff]/15 to-white/50",
  "from-[#ffd452]/20 via-white/70 to-white/50",
  "from-white/70 via-[#f9d8ff]/20 to-white/50",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      {/* Background accent */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#ffd452]/[0.03] to-transparent" />
      
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle 
          overline="Цены" 
          title="Понятные пакеты без скрытых условий"
          centered
        />
        
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {siteContent.pricing.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <GlassCard className={`card-hover h-full bg-gradient-to-br ${cardColors[idx]} p-7`}>
                {/* Plan label */}
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0066FF]">
                  {plan.title}
                </p>
                
                {/* Price */}
                <p className="mt-5 text-4xl font-black text-[#0E1017]">
                  {plan.price}
                </p>
                
                {/* Description */}
                <p className="mt-4 leading-relaxed text-[#2A3142]">
                  {plan.description}
                </p>
                
                {/* Highlight for free trial */}
                {idx === 0 && (
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#c7ff4d]/30 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0E1017]">
                    <span className="h-2 w-2 rounded-full bg-[#0E1017]" />
                    Бесплатно
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        <p className="mt-8 text-center text-sm text-[#2A3142]">
          {siteContent.pricingNote}
        </p>
        
        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white"
          >
            Записаться на пробное занятие
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
