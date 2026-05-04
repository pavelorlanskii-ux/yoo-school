"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import SectionTitle from "./SectionTitle";

export default function TeacherBlock() {
  return (
    <section id="teacher" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
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
              {siteContent.teacher.facts.map((fact, idx) => {
                const colors = ["bg-[#c7ff4d]", "bg-[#FFD452]", "bg-[#7CE8FF]", "bg-[#FF8DC7]", "bg-[#9D6AFF]", "bg-[#FF6B2B]"];
                return (
                  <motion.li 
                    key={fact}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className={`sticker flex items-center gap-3 ${colors[idx % colors.length]} rounded-2xl px-5 py-4 font-bold text-[#0E1017]`}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 border-white bg-white text-sm shadow-[0_2px_0_0_rgba(0,0,0,0.1)]">
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
            className="relative mx-auto max-w-sm lg:mx-0 lg:max-w-none"
          >
            {/* Tilted background cards */}
            <div aria-hidden="true" className="absolute inset-0 rounded-[2rem] bg-[#9D6AFF]" style={{ transform: "rotate(-5deg) translate(-8px, 8px)" }} />
            <div aria-hidden="true" className="absolute inset-0 rounded-[2rem] bg-[#FFD452]" style={{ transform: "rotate(4deg) translate(8px, 4px)" }} />
            
            {/* Main card */}
            <div className="sticker-lg relative overflow-hidden rounded-[2rem] bg-[#c7ff4d] p-5">
              {/* Photo with sticker cutout effect */}
              <div className="photo-sticker relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/teacher.png"
                  alt="Преподаватель YOO SCHOOL"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
              
              {/* Name */}
              <div className="mt-4">
                <p className="text-2xl font-black text-[#0E1017]">Юлия Орланская</p>
                <p className="mt-1 text-sm font-medium text-[#0E1017]/70">Преподаватель английского языка</p>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ rotate: -5 }}
              animate={{ rotate: 5 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-white shadow-[0_4px_0_0_rgba(0,0,0,0.15)]"
            >
              <span className="text-3xl">🦉</span>
            </motion.div>
            
            {/* Experience badge */}
            <motion.div 
              initial={{ y: 5 }}
              animate={{ y: -5 }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -bottom-4 -left-4 rounded-full border-4 border-white bg-[#FF6B2B] px-5 py-3 font-bold text-white shadow-[0_4px_0_0_rgba(0,0,0,0.15)]"
            >
              10+ лет опыта
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
