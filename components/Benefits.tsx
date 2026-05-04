"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import SectionTitle from "./SectionTitle";
import CharacterBadge from "./CharacterBadge";

const icons = ["✓", "♡", "🎯", "💬", "⚡", "📍", "💬", "🤝"];

export default function Benefits() {
  return (
    <section id="benefits" className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      {/* Background gradient */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#7ce8ff]/[0.04] to-transparent" />
      
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle 
            overline="Почему YOO SCHOOL" 
            title="Удобная система, которая поддерживает" 
          />
          
          {/* Character decoration */}
          <div className="flex gap-2">
            <CharacterBadge character="bee" size="lg" />
            <CharacterBadge character="flower" size="lg" />
          </div>
        </div>
        
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.benefits.map((item, idx) => (
            <motion.div 
              key={item} 
              initial={{ opacity: 0, y: 16 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group"
            >
              <div className="card-hover h-full rounded-[1.5rem] border border-[#0E1017]/8 bg-gradient-to-br from-white/90 to-white/60 p-6 shadow-[0_4px_20px_rgba(14,16,23,0.04),0_12px_40px_rgba(14,16,23,0.06)] backdrop-blur-lg">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#c7ff4d]/30 to-[#7ce8ff]/20 text-lg font-bold text-[#0E1017]">
                  {icons[idx] || "✓"}
                </div>
                <p className="text-lg font-bold leading-snug text-[#0E1017]">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
