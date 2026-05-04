"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { IconChat, IconGlobe, IconChart, IconGraduation, IconHeadphones, IconRobot } from "./Icons";

const Icons = [IconChat, IconGlobe, IconChart, IconGraduation, IconHeadphones, IconRobot];

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-[#E9EDF0]">
      <div className="creative-shell min-w-0">
        <div className="mb-7">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg max-w-none lg:max-w-[15ch]"
          >
            Переверните своё представление об учёбе
          </motion.h2>
          <p className="mt-4 max-w-3xl text-base font-bold leading-tight text-[#5D646B] sm:text-lg">
            Не повторяем одно и то же по шаблону. Адаптируем программу под интересы, цель и темп ученика.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-3 lg:grid-cols-3">
          {siteContent.benefits.map((item, idx) => {
            const IconComponent = Icons[idx % Icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.36, delay: idx * 0.04 }}
                className={idx === 0 || idx === 5 ? "lg:col-span-2" : ""}
              >
                <div className={`${idx === 1 || idx === 4 ? "sky-panel" : "sky-card"} flex h-full min-h-[190px] flex-col p-5 sm:min-h-[210px] sm:p-6`}>
                  <div className="flex items-start justify-between gap-4">
                    <IconComponent size={52} className="h-12 w-12" />
                    <span className="text-sm font-black text-[#5D646B]">0{idx + 1}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-black leading-[0.94] tracking-[-0.04em] text-[#050505] sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base font-bold leading-snug text-[#5D646B]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
