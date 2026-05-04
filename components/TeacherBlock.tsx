"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import SectionTitle from "./SectionTitle";

export default function TeacherBlock() {
  return (
    <section id="teacher" className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          {/* Text content */}
          <div>
            <SectionTitle 
              overline="О преподавателе" 
              title={siteContent.teacher.title} 
              subtitle={siteContent.teacher.text} 
            />
            
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {siteContent.teacher.facts.map((fact, idx) => (
                <motion.li 
                  key={fact}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 rounded-2xl border border-[#0E1017]/8 bg-white/80 px-5 py-4 font-medium text-[#2A3142] shadow-[0_2px_12px_rgba(14,16,23,0.04)] backdrop-blur-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#c7ff4d] to-[#7ce8ff] text-xs font-bold text-[#0E1017]">
                    ✓
                  </span>
                  {fact}
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Teacher photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative blobs */}
            <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#ffd452]/50 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-[#7ce8ff]/40 blur-3xl" />
            
            {/* Main card */}
            <div className="glass-card-deep relative overflow-hidden rounded-[2.5rem] p-6 sm:p-8">
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0]">
                <Image
                  src="/images/teacher.png"
                  alt="Преподаватель YOO SCHOOL"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                
                {/* Gradient overlay at bottom */}
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0E1017]/60 to-transparent" />
                
                {/* Name badge on photo */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-white/30 bg-white/20 p-4 backdrop-blur-xl">
                    <p className="text-lg font-bold text-white">Преподаватель YOO SCHOOL</p>
                    <p className="mt-1 text-sm text-white/80">Ваш проводник в мир английского</p>
                  </div>
                </div>
              </div>
              
              {/* Bottom info */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#c7ff4d]" />
                  <p className="text-sm font-semibold text-[#0E1017]">Онлайн и офлайн форматы</p>
                </div>
                <div className="sticker-float flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-[0_8px_24px_rgba(14,16,23,0.12)]">
                  🦉
                </div>
              </div>
            </div>
            
            {/* Floating testimonial card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -left-6 -top-6 hidden rounded-2xl border border-white/60 bg-white/90 p-4 shadow-[0_12px_40px_rgba(14,16,23,0.15)] backdrop-blur-xl lg:block"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#0066FF]">10+ лет опыта</p>
              <p className="mt-1 text-sm font-medium text-[#0E1017]">Сотни учеников</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
