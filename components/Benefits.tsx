"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import SectionTitle from "./SectionTitle";

const icons = ["✓", "♡", "🎯", "💬", "⚡", "📍", "🔄", "🤝"];
const colors = [
  "bg-[#c7ff4d]",
  "bg-[#FF8DC7]",
  "bg-[#FFD452]",
  "bg-[#7CE8FF]",
  "bg-[#FF6B2B]",
  "bg-[#9D6AFF]",
  "bg-[#c7ff4d]",
  "bg-[#FFD452]",
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle 
            overline="Почему YOO SCHOOL" 
            title="Удобная система, которая поддерживает" 
          />
          
          {/* Floating badge */}
          <motion.div 
            initial={{ y: 5 }}
            animate={{ y: -5 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
            className="sticker rounded-full bg-[#FF6B2B] px-5 py-3 text-sm font-bold text-white"
          >
            Super Genius!
          </motion.div>
        </div>
        
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.benefits.map((item, idx) => (
            <motion.div 
              key={item} 
              initial={{ opacity: 0, y: 16, rotate: idx % 2 === 0 ? -2 : 2 }} 
              whileInView={{ opacity: 1, y: 0, rotate: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group"
            >
              <div className={`sticker ${colors[idx]} h-full rounded-[1.5rem] p-5 transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-1`}>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border-3 border-white bg-white text-lg shadow-[0_2px_0_0_rgba(0,0,0,0.1)]">
                  {icons[idx]}
                </div>
                <p className="text-base font-bold leading-snug text-[#0E1017]">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
