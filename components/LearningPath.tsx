"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import SectionTitle from "./SectionTitle";
import CharacterBadge from "./CharacterBadge";

export default function LearningPath() {
  return (
    <section id="path" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#0E1017] to-[#1a1d26] p-8 sm:p-12 lg:p-16">
          {/* Decorative elements */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#c7ff4d]/20 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#7ce8ff]/20 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute right-20 top-20 h-32 w-32 rounded-full bg-[#ffd452]/15 blur-2xl" />
          
          {/* Floating Orlik sticker */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="sticker-float absolute -right-4 top-8 hidden h-20 w-20 items-center justify-center rounded-2xl bg-white/95 text-4xl shadow-[0_12px_40px_rgba(0,0,0,0.3)] lg:flex xl:right-8 xl:h-24 xl:w-24 xl:text-5xl"
          >
            🦉
          </motion.div>
          
          <div className="relative">
            <SectionTitle 
              overline="Как проходит обучение" 
              title="Маршрут без хаоса" 
              subtitle="От знакомства до измеримого результата: шаг за шагом, в комфортном темпе." 
              className="[&_*]:text-white [&_p:last-child]:text-white/75 [&_.inline-flex]:bg-white/15 [&_.inline-flex]:text-white [&_.dot-indicator]:bg-[#c7ff4d]" 
            />
            
            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siteContent.learningPath.map((step, idx) => (
                <motion.li 
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/8 p-6 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/12"
                >
                  {/* Step number glow */}
                  <div aria-hidden="true" className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-[#c7ff4d]/10 blur-xl transition group-hover:bg-[#c7ff4d]/20" />
                  
                  <p className="relative text-sm font-bold uppercase tracking-[0.2em] text-[#c7ff4d]">
                    Шаг {idx + 1}
                  </p>
                  <p className="relative mt-4 text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
                    {step}
                  </p>
                </motion.li>
              ))}
            </ol>
            
            <div className="mt-10 flex flex-wrap gap-3">
              <CharacterBadge character="orlik" className="bg-white/95 text-[#0E1017]" />
              <CharacterBadge character="deer" className="bg-white/95 text-[#0E1017]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
