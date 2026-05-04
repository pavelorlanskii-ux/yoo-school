"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

export default function LearningPath() {
  return (
    <section id="path" className="dark-section px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
      {/* Scattered decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-20 h-20 w-20 rounded-full bg-[#9D6AFF] lg:h-28 lg:w-28" />
        <div className="absolute right-[10%] top-32 h-14 w-14 rounded-full bg-[#FF8DC7] lg:h-18 lg:w-18" />
        <div className="absolute bottom-32 left-[15%] h-24 w-24 rounded-full border-[12px] border-[#FF6B2B] border-b-transparent border-l-transparent rotate-45" />
        <div className="absolute right-[20%] bottom-20 h-12 w-12 bg-[#FFD452]" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
        <div className="absolute left-[40%] top-16 h-10 w-10 rounded-full bg-[#7CE8FF]" />
        <div className="absolute right-[8%] top-1/2 h-16 w-16 rounded-full bg-[#c7ff4d]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section header - HUGE */}
        <div className="text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border-4 border-white bg-[#FF6B2B] px-6 py-3 text-lg font-bold text-white"
          >
            Как проходит обучение
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Маршрут без хаоса
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-white/70 sm:text-2xl"
          >
            От знакомства до измеримого результата: шаг за шагом, в комфортном темпе.
          </motion.p>
        </div>
        
        {/* Floating eyes sticker */}
        <motion.div 
          initial={{ rotate: -5 }}
          animate={{ rotate: 5 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute -right-4 top-0 hidden h-24 w-24 items-center justify-center rounded-full border-4 border-[#0E1017] bg-white shadow-[0_6px_0_0_rgba(0,0,0,0.2)] lg:flex xl:right-8"
        >
          <span className="text-5xl">👀</span>
        </motion.div>
        
        <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:mt-20">
          {siteContent.learningPath.map((item, idx) => {
            const colors = ["bg-[#c7ff4d]", "bg-[#FFD452]", "bg-[#7CE8FF]", "bg-[#9D6AFF]"];
            const textColors = ["text-[#0E1017]", "text-[#0E1017]", "text-[#0E1017]", "text-white"];
            return (
              <motion.li 
                key={item.step}
                initial={{ opacity: 0, y: 20, rotate: idx % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className={`sticker-lg ${colors[idx]} h-full rounded-[2rem] p-8 transition-transform duration-300 group-hover:-translate-y-2`}>
                  <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-[#0E1017] bg-white text-2xl font-black ${textColors[idx] === "text-white" ? "text-[#0E1017]" : textColors[idx]} shadow-[0_4px_0_0_rgba(0,0,0,0.15)]`}>
                    {idx + 1}
                  </span>
                  <h3 className={`mt-5 text-2xl font-black leading-tight ${textColors[idx]} sm:text-3xl`}>
                    {item.step}
                  </h3>
                  <p className={`mt-3 text-lg ${textColors[idx]} opacity-80`}>
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
