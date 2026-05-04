"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import SectionTitle from "./SectionTitle";

export default function LearningPath() {
  return (
    <section id="path" className="dark-section px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      {/* Scattered decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-20 h-16 w-16 rounded-full bg-[#9D6AFF] lg:h-20 lg:w-20" />
        <div className="absolute right-[10%] top-32 h-12 w-12 rounded-full bg-[#FF8DC7]" />
        <div className="absolute bottom-32 left-[15%] h-20 w-20 rounded-full border-[10px] border-[#FF6B2B] border-b-transparent border-l-transparent rotate-45" />
        <div className="absolute right-[20%] bottom-20 h-10 w-10 bg-[#FFD452]" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
        <div className="absolute left-[40%] top-16 h-8 w-8 rounded-full bg-[#7CE8FF]" />
        <div className="absolute right-[8%] top-1/2 h-14 w-14 rounded-full bg-[#c7ff4d]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="text-center">
          <span className="badge-sticker mb-6 inline-flex bg-[#FF6B2B] text-white">
            Как проходит обучение
          </span>
          <h2 className="text-balance text-3xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Маршрут без хаоса
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            От знакомства до измеримого результата: шаг за шагом, в комфортном темпе.
          </p>
        </div>
        
        {/* Floating eyes sticker */}
        <motion.div 
          initial={{ rotate: -5 }}
          animate={{ rotate: 5 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute -right-4 top-0 hidden h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white shadow-[0_4px_0_0_rgba(0,0,0,0.2)] lg:flex xl:right-8"
        >
          <span className="text-4xl">👀</span>
        </motion.div>
        
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.learningPath.map((step, idx) => {
            const colors = ["bg-[#c7ff4d]", "bg-[#FFD452]", "bg-[#7CE8FF]", "bg-[#9D6AFF]"];
            return (
              <motion.li 
                key={step}
                initial={{ opacity: 0, y: 20, rotate: idx % 2 === 0 ? -3 : 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className={`sticker ${colors[idx]} rounded-[1.5rem] p-6 transition-transform duration-300 group-hover:-translate-y-2`}>
                  <p className="text-sm font-bold uppercase tracking-wider text-[#0E1017]/60">
                    Шаг {idx + 1}
                  </p>
                  <p className="mt-3 text-xl font-black leading-tight text-[#0E1017] sm:text-2xl">
                    {step}
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
