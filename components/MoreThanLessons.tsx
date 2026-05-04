"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { IconGraduation, IconHeadphones, IconChat, IconChart, IconRobot, IconGlobe } from "./Icons";

const Icons = [IconRobot, IconGlobe, IconGraduation, IconChat, IconChart, IconHeadphones];

export default function MoreThanLessons() {
  return (
    <section className="section-padding bg-[#F3F5F6]">
      <div className="container-xl min-w-0">
        <div className="sky-panel-dark mb-3 p-6 sm:p-8 lg:p-10">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl"
          >
            Добейтесь реальных результатов с нашей экосистемой
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-5 max-w-2xl text-xl font-bold leading-tight text-white/72"
          >
            В одном курсе — комплекс продуктов по английскому, которые помогают держать темп и видеть прогресс.
          </motion.p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.moreThanLessons.items.map((item, idx) => {
            const IconComponent = Icons[idx % Icons.length];
            const isWide = idx === 0 || idx === 2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.36, delay: idx * 0.04 }}
                className={`${isWide ? "lg:col-span-2" : ""} min-w-0`}
              >
                <div className={`${idx % 3 === 0 ? "sky-panel" : "sky-card"} flex h-full min-h-[190px] flex-col p-5 sm:p-6`}>
                  <IconComponent size={54} className="h-12 w-12" />
                  <h3 className="mt-5 text-3xl font-black leading-none tracking-[-0.06em] text-[#050505]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base font-bold leading-snug text-[#07313D]">
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
