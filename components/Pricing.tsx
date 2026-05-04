"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const cardColors = [
  "bg-[#c7ff4d]",
  "bg-[#7CE8FF]",
  "bg-[#FFD452]",
  "bg-[#FF8DC7]",
  "bg-[#9D6AFF]",
];

const textColors = [
  "text-[#0E1017]",
  "text-[#0E1017]",
  "text-[#0E1017]",
  "text-[#0E1017]",
  "text-white",
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding relative px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header */}
        <div className="mb-20 text-center lg:mb-28">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border-4 border-[#0E1017] bg-[#c7ff4d] px-8 py-4 text-xl font-black text-[#0E1017] shadow-[0_4px_0_0_rgba(0,0,0,0.1)]"
          >
            Цены
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3d mx-auto mt-8 max-w-5xl text-balance text-4xl font-black leading-[1.05] tracking-tight text-[#0E1017] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Понятные форматы
          </motion.h2>
        </div>
        
        {/* Pricing grid - responsive */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {siteContent.pricing.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 24, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group"
            >
              <div className={`card-3d ${cardColors[idx]} flex h-full min-h-[320px] flex-col rounded-[2.5rem] p-8 sm:p-10`}>
                {/* Plan label */}
                <span className={`text-lg font-black uppercase tracking-wider ${textColors[idx]} opacity-70`}>
                  {plan.title}
                </span>
                
                {/* Price - HUGE */}
                <p className={`mt-5 text-4xl font-black leading-none ${textColors[idx]} sm:text-5xl lg:text-6xl`}>
                  {plan.price}
                </p>
                
                {/* Description */}
                <p className={`mt-5 flex-1 text-lg leading-relaxed ${textColors[idx]} opacity-80 sm:text-xl`}>
                  {plan.description}
                </p>
                
                {/* Highlight for free trial */}
                {idx === 0 && (
                  <div className="mt-6 inline-flex items-center gap-3 rounded-full border-4 border-[#0E1017] bg-white px-6 py-4 text-base font-black uppercase tracking-wider text-[#0E1017] shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
                    <span className="h-4 w-4 rounded-full bg-[#FF6B2B]" />
                    Бесплатно
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <p className="mt-12 text-center text-xl text-[#2A3142] lg:text-2xl">
          {siteContent.pricingNote}
        </p>
        
        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a 
            href="#contact" 
            className="btn-orange inline-flex items-center gap-4 rounded-full px-12 py-6 text-xl font-bold sm:text-2xl"
          >
            Записаться на пробное занятие
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
