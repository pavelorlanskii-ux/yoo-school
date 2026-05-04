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
    <section id="pricing" className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header - HUGE */}
        <div className="mb-16 text-center lg:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border-4 border-[#0E1017] bg-[#c7ff4d] px-6 py-3 text-lg font-bold text-[#0E1017]"
          >
            Цены
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.1] tracking-tight text-[#0E1017] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Понятные форматы
          </motion.h2>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {siteContent.pricing.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group"
            >
              <div className={`sticker-lg ${cardColors[idx]} h-full rounded-[2rem] p-8 transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-1`}>
                {/* Plan label */}
                <span className={`text-base font-bold uppercase tracking-wider ${textColors[idx]} opacity-60`}>
                  {plan.title}
                </span>
                
                {/* Price - HUGE */}
                <p className={`mt-4 text-4xl font-black ${textColors[idx]} sm:text-5xl`}>
                  {plan.price}
                </p>
                
                {/* Description */}
                <p className={`mt-4 text-base leading-relaxed ${textColors[idx]} opacity-80 sm:text-lg`}>
                  {plan.description}
                </p>
                
                {/* Highlight for free trial */}
                {idx === 0 && (
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border-4 border-[#0E1017] bg-white px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#0E1017] shadow-[0_4px_0_0_rgba(0,0,0,0.15)]">
                    <span className="h-3 w-3 rounded-full bg-[#FF6B2B]" />
                    Бесплатно
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <p className="mt-10 text-center text-lg text-[#2A3142]">
          {siteContent.pricingNote}
        </p>
        
        {/* CTA - LARGER */}
        <div className="mt-12 flex justify-center">
          <a 
            href="#contact" 
            className="btn-orange inline-flex items-center gap-3 rounded-full px-10 py-5 text-lg font-bold sm:text-xl"
          >
            Записаться на пробное занятие
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
