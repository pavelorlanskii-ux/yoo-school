"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function TeacherBlock() {
  return (
    <section id="teacher" className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header - HUGE */}
        <div className="mb-16 lg:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border-4 border-[#0E1017] bg-[#9D6AFF] px-6 py-3 text-lg font-bold text-white"
          >
            Основатель и команда
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-balance text-4xl font-black leading-[1.1] tracking-tight text-[#0E1017] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {siteContent.teacher.title}
          </motion.h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          {/* Text content */}
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl leading-relaxed text-[#2A3142] sm:text-2xl"
            >
              {siteContent.teacher.text}
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-xl leading-relaxed text-[#2A3142] sm:text-2xl"
            >
              {siteContent.teacher.teamText}
            </motion.p>
            
            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {siteContent.teacher.facts.map((fact, idx) => {
                const colors = ["bg-[#c7ff4d]", "bg-[#FFD452]", "bg-[#7CE8FF]", "bg-[#FF8DC7]", "bg-[#9D6AFF]"];
                const textColors = ["text-[#0E1017]", "text-[#0E1017]", "text-[#0E1017]", "text-[#0E1017]", "text-white"];
                return (
                  <motion.li 
                    key={fact}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className={`sticker flex items-center gap-4 ${colors[idx % colors.length]} rounded-2xl px-6 py-5 text-lg font-bold ${textColors[idx % textColors.length]}`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border-2 border-[#0E1017] bg-white text-base shadow-[0_3px_0_0_rgba(0,0,0,0.15)]">
                      ✓
                    </span>
                    {fact}
                  </motion.li>
                );
              })}
            </ul>
          </div>
          
          {/* Teacher photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none"
          >
            {/* Tilted background cards */}
            <div aria-hidden="true" className="absolute inset-0 rounded-[2.5rem] bg-[#9D6AFF]" style={{ transform: "rotate(-5deg) translate(-8px, 8px)" }} />
            <div aria-hidden="true" className="absolute inset-0 rounded-[2.5rem] bg-[#FFD452]" style={{ transform: "rotate(4deg) translate(8px, 4px)" }} />
            
            {/* Main card */}
            <div className="sticker-lg relative overflow-hidden rounded-[2.5rem] bg-[#c7ff4d] p-6">
              {/* Photo with sticker cutout effect */}
              <div className="photo-sticker relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="/images/teacher.png"
                  alt={`${siteContent.teacher.name} — ${siteContent.teacher.role}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
              
              {/* Name */}
              <div className="mt-5">
                <p className="text-3xl font-black text-[#0E1017] sm:text-4xl">{siteContent.teacher.name}</p>
                <p className="mt-2 text-lg font-medium text-[#0E1017]/80">{siteContent.teacher.role}</p>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ rotate: -5 }}
              animate={{ rotate: 5 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -right-4 -top-4 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#0E1017] bg-white shadow-[0_6px_0_0_rgba(0,0,0,0.15)]"
            >
              <span className="text-4xl">🦉</span>
            </motion.div>
            
            {/* Experience badge */}
            <motion.div 
              initial={{ y: 5 }}
              animate={{ y: -5 }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -bottom-4 -left-4 rounded-full border-4 border-[#0E1017] bg-[#FF6B2B] px-6 py-4 text-lg font-bold text-white shadow-[0_6px_0_0_rgba(0,0,0,0.15)]"
            >
              10+ лет опыта
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
