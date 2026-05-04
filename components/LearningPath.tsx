"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

export default function LearningPath() {
  return (
    <section id="path" className="section-padding bg-[#E9EDF0]">
      <div className="creative-shell min-w-0">
        <div className="mb-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge badge-dark"
            >
              Как проходит обучение
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="heading-lg studio-line mt-4 max-w-none lg:max-w-[16ch]"
            >
              От диагностики до результата без лишнего шума
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="max-w-2xl text-base font-bold leading-tight text-[#5D646B] sm:text-lg"
          >
            Маршрут строится по этапам: сначала цель и уровень, потом преподаватель, программа, практика и контроль прогресса.
          </motion.p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.learningPath.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.36, delay: idx * 0.05 }}
              className="min-w-0"
            >
              <div className={`${idx === 0 ? "sky-panel" : "sky-card"} flex h-full min-h-[190px] flex-col p-5 sm:p-6`}>
                <span className="text-sm font-black text-[#5D646B]">0{idx + 1}</span>
                <h3 className="mt-5 text-2xl font-extrabold leading-[0.94] tracking-[-0.04em] text-[#050505] sm:text-3xl">
                  {item.step}
                </h3>
                <p className="mt-3 flex-1 text-base font-bold leading-snug text-[#5D646B]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
