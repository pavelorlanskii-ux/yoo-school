"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { IconGraduation, IconHeadphones, IconChart, IconRobot } from "./Icons";

const cardConfigs = [
  { bg: "from-[#F4FFB8] via-[#E8FF72] to-[#BFFF00]", Icon: IconGraduation, label: "School boost" },
  { bg: "from-[#FFE7D6] via-[#FFC199] to-[#FF7A1A]", Icon: IconHeadphones, label: "Exam track" },
  { bg: "from-[#EFE9FF] via-[#D9CCFF] to-[#9B72FF]", Icon: IconChart, label: "Adult flow" },
];

export default function DirectionCards() {
  return (
    <section id="directions" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-20 h-56 w-56 orb opacity-30 [--orb-from:#BFFF00] [--orb-to:#45D7FF]" aria-hidden="true" />
      <div className="container-xl min-w-0">
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge badge-lime"
            >
              Направления
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-lg mt-4 max-w-4xl"
            >
              Курсы не по шаблону, а <span className="text-gradient-lime">по задаче</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-lg font-semibold leading-relaxed text-[#68657A]"
          >
            В каждой программе есть диагностика, понятный маршрут, практика между занятиями и преподаватель под возраст, темп и цель ученика.
          </motion.p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.directions.map((item, index) => {
            const config = cardConfigs[index];
            const IconComponent = config.Icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: index * 0.1 }}
                className="group min-w-0"
              >
                <div className={`card-elevated relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br ${config.bg} p-6 sm:p-8`}>
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/35 blur-2xl" />
                  <div className="relative z-10 mb-8 flex items-start justify-between gap-4">
                    <div className="rounded-[1.4rem] bg-white/68 p-4 shadow-xl backdrop-blur">
                      <IconComponent size={76} className="h-16 w-16" />
                    </div>
                    <span className="rounded-full bg-white/64 px-3 py-2 text-xs font-black uppercase tracking-[0.08em] text-[#151427]/70 shadow-sm">
                      {config.label}
                    </span>
                  </div>

                  <h3 className="relative z-10 text-3xl font-black leading-none tracking-[-0.05em] text-[#151427] sm:text-4xl">
                    {item.title}
                  </h3>

                  <p className="relative z-10 mt-4 flex-1 text-base font-semibold leading-relaxed text-[#3A3654]/80">
                    {item.description}
                  </p>

                  <a
                    href="#contact"
                    className="relative z-10 mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#151427] px-5 py-3 text-sm font-black text-white shadow-xl transition group-hover:gap-3"
                  >
                    Записаться
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <div className="card-dark relative flex min-w-0 flex-col gap-7 overflow-hidden rounded-[2rem] p-7 sm:p-9 lg:flex-row lg:items-center lg:gap-10 lg:p-10">
            <div className="orb h-24 w-24 shrink-0 [--orb-from:#BFFF00] [--orb-to:#FF5C00]" aria-hidden="true" />
            <div className="relative z-10 flex-1">
              <span className="badge badge-lime">для бизнеса</span>
              <h3 className="mt-4 text-4xl font-black leading-none tracking-[-0.055em] text-white sm:text-5xl">
                {siteContent.corporate.title}
              </h3>
              <p className="mt-4 max-w-3xl text-lg font-semibold leading-relaxed text-white/70">
                {siteContent.corporate.description}
              </p>
            </div>
            <a
              href="#contact"
              className="btn btn-lime relative z-10 shrink-0 px-8 py-4 font-black"
            >
              {siteContent.corporate.cta}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
