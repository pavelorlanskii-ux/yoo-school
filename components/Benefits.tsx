"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { IconChat, IconGlobe, IconChart, IconGraduation, IconHeadphones, IconRobot } from "./Icons";

const Icons = [IconChat, IconGlobe, IconChart, IconGraduation, IconHeadphones, IconRobot];

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding relative overflow-hidden">
      <div className="container-xl min-w-0">
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge badge-orange"
            >
              Почему YOO SCHOOL
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-lg mt-4 max-w-4xl"
            >
              Не просто занятия. <span className="text-gradient-orange">Система роста</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="gloss-panel rounded-[2rem] p-6"
          >
            <p className="relative z-10 text-lg font-bold leading-relaxed text-[#5F5B72]">
              Мы соединяем методику, преподавателя, digital-инструменты и регулярную обратную связь, чтобы ученик понимал не только что учить, но и зачем.
            </p>
          </motion.div>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.benefits.map((item, idx) => {
            const IconComponent = Icons[idx % Icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: idx * 0.06 }}
                className="group min-w-0"
              >
                <div className="card relative flex h-full min-h-[230px] flex-col overflow-hidden rounded-[1.75rem] p-6 sm:p-7">
                  <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-[#BFFF00]/18 blur-2xl transition group-hover:bg-[#FF5C00]/20" />
                  <div className="relative z-10 mb-5 flex items-center justify-between gap-4">
                    <div className="rounded-3xl bg-white p-3 shadow-lg">
                      <IconComponent size={56} className="h-12 w-12" />
                    </div>
                    <span className="rounded-full bg-[#151427] px-3 py-2 text-xs font-black uppercase tracking-[0.08em] text-white">
                      benefit
                    </span>
                  </div>

                  <h3 className="relative z-10 text-2xl font-black leading-none tracking-[-0.045em] text-[#151427]">
                    {item.title}
                  </h3>

                  <p className="relative z-10 mt-3 flex-1 text-base font-semibold leading-relaxed text-[#68657A]">
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
