"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import SectionTitle from "./SectionTitle";

const cardColors = [
  "bg-[#c7ff4d]",
  "bg-[#7CE8FF]",
  "bg-[#FFD452]",
  "bg-[#FF8DC7]",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle 
          overline="Цены" 
          title="Понятные пакеты без скрытых условий"
          centered
        />
        
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {siteContent.pricing.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group"
            >
              <div className={`sticker ${cardColors[idx]} h-full rounded-[1.5rem] p-6 transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-1`}>
                {/* Plan label */}
                <span className="badge-sticker text-xs">
                  {plan.title}
                </span>
                
                {/* Price */}
                <p className="mt-5 text-3xl font-black text-[#0E1017] sm:text-4xl">
                  {plan.price}
                </p>
                
                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-[#0E1017]/80">
                  {plan.description}
                </p>
                
                {/* Highlight for free trial */}
                {idx === 0 && (
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border-3 border-white bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0E1017] shadow-[0_2px_0_0_rgba(0,0,0,0.1)]">
                    <span className="h-2 w-2 rounded-full bg-[#FF6B2B]" />
                    Бесплатно
                  </div>
                )}
              </div>
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
            className="btn-orange inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold sm:text-lg"
          >
            Записаться на пробное занятие
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
