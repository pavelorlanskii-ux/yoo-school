"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const cardColors = [
  "bg-[#FFD452]",
  "bg-[#7CE8FF]",
  "bg-[#FF8DC7]",
  "bg-[#c7ff4d]",
];

export default function Testimonials() {
  return (
    <section id="reviews" className="section-padding relative px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header */}
        <div className="mb-20 text-center lg:mb-28">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border-4 border-[#0E1017] bg-[#FFD452] px-8 py-4 text-xl font-black text-[#0E1017] shadow-[0_4px_0_0_rgba(0,0,0,0.1)]"
          >
            Отзывы
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3d mx-auto mt-8 max-w-5xl text-balance text-4xl font-black leading-[1.05] tracking-tight text-[#0E1017] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Реальный прогресс
          </motion.h2>
        </div>
        
        <div className="grid gap-10 md:grid-cols-2">
          {siteContent.testimonials.map((item, idx) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 24, rotate: idx % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group"
            >
              <div className={`card-3d ${cardColors[idx]} flex h-full min-h-[320px] flex-col rounded-[2.5rem] p-10 sm:p-12`}>
                {/* Quote icon */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-[#0E1017] bg-white text-3xl font-black text-[#0E1017] shadow-[0_6px_0_0_rgba(0,0,0,0.12)]">
                    {idx + 1}
                  </div>
                  <svg 
                    className="h-12 w-12 text-[#0E1017]/20" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                {/* Quote text */}
                <p className="flex-1 text-2xl font-black leading-snug text-[#0E1017] sm:text-3xl lg:text-4xl">
                  {item.text}
                </p>
                
                {/* Author */}
                <div className="mt-10">
                  <span className="rounded-full border-4 border-[#0E1017] bg-white px-6 py-4 text-lg font-bold text-[#0E1017]">
                    {item.author}
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
