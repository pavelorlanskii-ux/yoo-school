"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { OwlIcon } from "./AnimalIcons";

export default function TeacherBlock() {
  return (
    <section id="teacher" className="section-padding relative px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header */}
        <div className="mb-20 lg:mb-28">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border-4 border-[#0E1017] bg-[#9D6AFF] px-8 py-4 text-xl font-black text-white shadow-[0_4px_0_0_rgba(0,0,0,0.2)]"
          >
            Основатель и команда
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3d mt-8 text-balance text-4xl font-black leading-[1.05] tracking-tight text-[#0E1017] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            {siteContent.teacher.title}
          </motion.h2>
        </div>

        <div className="grid gap-20 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          {/* Text content */}
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl leading-relaxed text-[#2A3142] sm:text-2xl lg:text-3xl"
            >
              {siteContent.teacher.text}
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-8 text-xl leading-relaxed text-[#2A3142] sm:text-2xl"
            >
              {siteContent.teacher.teamText}
            </motion.p>
            
            <ul className="mt-14 grid gap-5 sm:grid-cols-2">
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
                    className={`card-3d flex items-center gap-5 ${colors[idx % colors.length]} rounded-2xl px-7 py-6 text-lg font-bold ${textColors[idx % textColors.length]} sm:text-xl`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-3 border-[#0E1017] bg-white text-lg shadow-[0_4px_0_0_rgba(0,0,0,0.12)]">
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
            className="relative mx-auto max-w-lg lg:mx-0 lg:max-w-none"
          >
            {/* Tilted background cards */}
            <div aria-hidden="true" className="absolute inset-0 rounded-[3rem] bg-[#9D6AFF]" style={{ transform: "rotate(-6deg) translate(-10px, 10px)" }} />
            <div aria-hidden="true" className="absolute inset-0 rounded-[3rem] bg-[#FFD452]" style={{ transform: "rotate(5deg) translate(10px, 6px)" }} />
            
            {/* Main card */}
            <div className="card-3d relative overflow-hidden rounded-[3rem] bg-[#c7ff4d] p-8">
              {/* Photo */}
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
              <div className="mt-8">
                <p className="text-3xl font-black text-[#0E1017] sm:text-4xl lg:text-5xl">{siteContent.teacher.name}</p>
                <p className="mt-3 text-xl font-medium text-[#0E1017]/80">{siteContent.teacher.role}</p>
              </div>
            </div>
            
            {/* Animated owl badge */}
            <motion.div 
              className="absolute -right-6 -top-6"
              animate={{ rotate: [-8, 8, -8] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="rounded-full border-4 border-[#0E1017] bg-white p-4 shadow-[0_8px_0_0_rgba(0,0,0,0.12)]">
                <OwlIcon className="h-16 w-16" animate={false} />
              </div>
            </motion.div>
            
            {/* Experience badge */}
            <motion.div 
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 rounded-full border-4 border-[#0E1017] bg-[#FF6B2B] px-8 py-5 text-xl font-black text-white shadow-[0_6px_0_0_rgba(0,0,0,0.15)]"
            >
              10+ лет опыта
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
