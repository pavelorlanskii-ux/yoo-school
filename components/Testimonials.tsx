"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import SectionTitle from "./SectionTitle";

const avatarColors = [
  "from-[#c7ff4d] to-[#7ce8ff]",
  "from-[#ffd452] to-[#f9d8ff]",
  "from-[#7ce8ff] to-[#c7ff4d]",
  "from-[#f9d8ff] to-[#ffd452]",
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle 
          overline="Отзывы" 
          title="Мини-кейсы и заметный прогресс"
          centered
        />
        
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {siteContent.testimonials.map((quote, idx) => (
            <motion.div
              key={quote}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group"
            >
              <div className="card-hover h-full rounded-[2rem] border border-[#0E1017]/8 bg-gradient-to-br from-white/90 via-white/70 to-[#f9d8ff]/20 p-8 shadow-[0_4px_24px_rgba(14,16,23,0.05),0_16px_48px_rgba(14,16,23,0.06)] backdrop-blur-lg">
                {/* Quote icon */}
                <div className="mb-5 flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${avatarColors[idx]} text-xl font-bold text-[#0E1017]`}>
                    {idx + 1}
                  </div>
                  <svg 
                    className="h-8 w-8 text-[#0E1017]/10" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                {/* Quote text */}
                <p className="text-xl font-bold leading-snug text-[#0E1017] sm:text-2xl">
                  {quote}
                </p>
                
                {/* Result indicator */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#0066FF]">
                  <span className="h-2 w-2 rounded-full bg-[#c7ff4d]" />
                  Реальный результат
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
