"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { OwlIcon, DeerIcon, CorgiIcon, StarIcon, EyesIcon } from "./AnimalIcons";

const icons = [
  <span key="1" className="text-5xl">👥</span>,
  <span key="2" className="text-5xl">🗺️</span>,
  <span key="3" className="text-5xl">📊</span>,
  <span key="4" className="text-5xl">📚</span>,
  <span key="5" className="text-5xl">📈</span>,
  <span key="6" className="text-5xl">🤖</span>,
];

const colors = [
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

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding relative px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header */}
        <div className="mb-20 lg:mb-28">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border-4 border-[#0E1017] bg-[#7CE8FF] px-8 py-4 text-xl font-black text-[#0E1017] shadow-[0_4px_0_0_rgba(0,0,0,0.1)]"
          >
            Почему YOO SCHOOL
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3d mt-8 max-w-5xl text-balance text-4xl font-black leading-[1.05] tracking-tight text-[#0E1017] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Система, которая поддерживает
          </motion.h2>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.benefits.map((item, idx) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, y: 20, rotate: idx % 2 === 0 ? -2 : 2 }} 
              whileInView={{ opacity: 1, y: 0, rotate: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group"
            >
              <div className={`card-3d ${colors[idx]} h-full rounded-[2.5rem] p-10 sm:p-12`}>
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-[#0E1017] bg-white shadow-[0_6px_0_0_rgba(0,0,0,0.1)]">
                  {icons[idx]}
                </div>
                <h3 className={`text-2xl font-black leading-tight ${textColors[idx]} sm:text-3xl lg:text-4xl`}>
                  {item.title}
                </h3>
                <p className={`mt-5 min-h-[80px] text-lg leading-relaxed ${textColors[idx]} opacity-80 sm:text-xl lg:text-2xl`}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative floating characters */}
        <div className="relative mt-20 flex justify-center gap-8">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <OwlIcon className="h-24 w-24 lg:h-32 lg:w-32" />
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <DeerIcon className="h-24 w-24 lg:h-32 lg:w-32" />
          </motion.div>
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <CorgiIcon className="h-24 w-24 lg:h-32 lg:w-32" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
