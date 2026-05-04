"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const stepColors = ["#BFFF00", "#FF5C00", "#22D3EE", "#A855F7"];

export default function LearningPath() {
  return (
    <section id="path" className="section-spacing relative px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#BFFF00]/5 to-transparent" />
        <div className="floating-shape absolute left-1/4 top-1/2 h-[600px] w-[600px] bg-[#BFFF00] opacity-20" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section header */}
        <div className="mb-20 text-center lg:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-glow"
          >
            <span className="h-2 w-2 rounded-full bg-[#FF5C00]" />
            Как проходит обучение
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-inflate">Маршрут</span>{" "}
            <span className="text-inflate-orange">без хаоса</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-white/60 sm:text-xl lg:text-2xl"
          >
            От знакомства до измеримого результата: шаг за шагом, в комфортном темпе.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {siteContent.learningPath.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="premium-card flex h-full min-h-[320px] flex-col p-8 sm:p-10">
                {/* Step number */}
                <div
                  className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-black"
                  style={{
                    background: `${stepColors[idx]}20`,
                    border: `1px solid ${stepColors[idx]}40`,
                    color: stepColors[idx],
                  }}
                >
                  {idx + 1}
                </div>

                <h3 className="text-2xl font-black text-white sm:text-3xl">
                  {item.step}
                </h3>

                <p className="mt-4 flex-1 text-base text-white/60 sm:text-lg">
                  {item.desc}
                </p>

                {/* Connector line on desktop */}
                {idx < 3 && (
                  <div
                    className="absolute right-0 top-1/2 hidden h-px w-8 lg:block"
                    style={{ background: `linear-gradient(90deg, ${stepColors[idx]}, transparent)` }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
