"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const icons = ["👤", "📝", "💬", "📊", "🏢", "⚡"];
const cardColors = [
  "bg-[#c7ff4d]",
  "bg-[#FFD452]",
  "bg-[#7CE8FF]",
  "bg-[#FF8DC7]",
  "bg-[#9D6AFF]",
  "bg-[#FF6B2B]",
];
const textColors = [
  "text-[#0E1017]",
  "text-[#0E1017]",
  "text-[#0E1017]",
  "text-[#0E1017]",
  "text-white",
  "text-white",
];

export default function MoreThanLessons() {
  return (
    <section className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header - HUGE */}
        <div className="mb-16 lg:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border-4 border-[#0E1017] bg-[#9D6AFF] px-6 py-3 text-lg font-bold text-white"
          >
            Экосистема
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.1] tracking-tight text-[#0E1017] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {siteContent.moreThanLessons.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-3xl text-xl leading-relaxed text-[#2A3142] sm:text-2xl"
          >
            {siteContent.moreThanLessons.subtitle}
          </motion.p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.moreThanLessons.items.map((item, idx) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, y: 16, rotate: idx % 2 === 0 ? -2 : 2 }} 
              whileInView={{ opacity: 1, y: 0, rotate: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group"
            >
              <div className={`sticker-lg ${cardColors[idx]} h-full rounded-[2rem] p-8 transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-1`}>
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-[#0E1017] bg-white text-3xl shadow-[0_4px_0_0_rgba(0,0,0,0.15)]">
                  {icons[idx]}
                </div>
                <h3 className={`text-2xl font-black leading-tight ${textColors[idx]} sm:text-3xl`}>
                  {item.title}
                </h3>
                <p className={`mt-3 text-lg leading-relaxed ${textColors[idx]} opacity-80`}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
