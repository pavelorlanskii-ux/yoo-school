"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { OwlIcon, StarIcon, EyesIcon } from "./AnimalIcons";

export default function LearningPath() {
  return (
    <section id="path" className="dark-section section-padding relative px-4 sm:px-6 lg:px-8">
      {/* Scattered decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-20 h-24 w-24 rounded-full bg-[#9D6AFF] lg:h-36 lg:w-36" />
        <div className="absolute right-[10%] top-32 h-16 w-16 rounded-full bg-[#FF8DC7] lg:h-24 lg:w-24" />
        <div className="absolute bottom-32 left-[15%] h-28 w-28 rotate-45 rounded-full border-[14px] border-[#FF6B2B] border-b-transparent border-l-transparent" />
        <div className="absolute bottom-20 right-[20%] h-16 w-16 bg-[#FFD452]" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
        <div className="absolute left-[40%] top-16 h-14 w-14 rounded-full bg-[#7CE8FF]" />
        <div className="absolute right-[8%] top-1/2 h-20 w-20 rounded-full bg-[#c7ff4d]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section header */}
        <div className="text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border-4 border-white bg-[#FF6B2B] px-8 py-4 text-xl font-black text-white shadow-[0_4px_0_0_rgba(0,0,0,0.2)]"
          >
            Как проходит обучение
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-8 max-w-5xl text-balance text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Маршрут без хаоса
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/70 sm:text-2xl lg:text-3xl"
          >
            От знакомства до измеримого результата: шаг за шагом, в комфортном темпе.
          </motion.p>
        </div>
        
        {/* Floating eyes sticker */}
        <motion.div 
          className="absolute -right-4 top-0 hidden lg:block xl:right-8"
          animate={{ rotate: [-8, 8, -8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <EyesIcon className="h-28 w-28" color="#c7ff4d" />
        </motion.div>
        
        <ol className="mt-20 grid gap-8 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {siteContent.learningPath.map((item, idx) => {
            const colors = ["bg-[#c7ff4d]", "bg-[#FFD452]", "bg-[#7CE8FF]", "bg-[#9D6AFF]"];
            const textColors = ["text-[#0E1017]", "text-[#0E1017]", "text-[#0E1017]", "text-white"];
            return (
              <motion.li 
                key={item.step}
                initial={{ opacity: 0, y: 24, rotate: idx % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="group"
              >
                <div className={`card-3d ${colors[idx]} flex h-full min-h-[280px] flex-col rounded-[2.5rem] p-10`}>
                  <span className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-[#0E1017] bg-white text-3xl font-black text-[#0E1017] shadow-[0_6px_0_0_rgba(0,0,0,0.12)]`}>
                    {idx + 1}
                  </span>
                  <h3 className={`mt-6 text-2xl font-black leading-tight ${textColors[idx]} sm:text-3xl lg:text-4xl`}>
                    {item.step}
                  </h3>
                  <p className={`mt-4 flex-1 text-lg ${textColors[idx]} opacity-80 sm:text-xl`}>
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
