"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import SectionTitle from "./SectionTitle";

const cardColors = [
  "bg-[#FFD452]",
  "bg-[#7CE8FF]",
  "bg-[#FF8DC7]",
  "bg-[#c7ff4d]",
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle 
          overline="Отзывы" 
          title="Мини-кейсы и заметный прогресс"
          centered
        />
        
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {siteContent.testimonials.map((quote, idx) => (
            <motion.div
              key={quote}
              initial={{ opacity: 0, y: 20, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group"
            >
              <div className={`sticker ${cardColors[idx]} h-full rounded-[1.5rem] p-6 transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-1 sm:p-8`}>
                {/* Quote number */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border-3 border-white bg-white text-lg font-black text-[#0E1017] shadow-[0_2px_0_0_rgba(0,0,0,0.1)]">
                    {idx + 1}
                  </div>
                  <svg 
                    className="h-8 w-8 text-[#0E1017]/20" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                {/* Quote text */}
                <p className="text-xl font-black leading-snug text-[#0E1017] sm:text-2xl">
                  {quote}
                </p>
                
                {/* Result badge */}
                <div className="mt-6">
                  <span className="badge-sticker text-xs">
                    Реальный результат
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
