"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { IconGraduation, IconHeadphones, IconChart } from "./Icons";

const icons = [IconGraduation, IconHeadphones, IconChart];
const labels = ["популярно", "топ", "base"];

export default function DirectionCards() {
  return (
    <section id="directions" className="section-padding bg-[#F3F5F6]">
      <div className="container-xl min-w-0">
        <div className="mb-7">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg max-w-4xl"
          >
            Курсы и программы по целям
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 max-w-2xl text-lg font-bold leading-tight text-[#5D646B]"
          >
            Выбирайте направление сами или с нашей помощью. После диагностики соберём программу под ваш уровень, сроки и задачу.
          </motion.p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-3">
          {siteContent.directions.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.36, delay: index * 0.06 }}
                className="sky-card min-w-0 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="badge bg-[#24C7F4]">{labels[index]}</span>
                  <Icon size={54} className="h-12 w-12" />
                </div>
                <h3 className="mt-6 text-3xl font-black leading-none tracking-[-0.06em] text-[#050505]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base font-bold leading-snug text-[#5D646B]">
                  {item.description}
                </p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-base font-black text-[#050505]">
                  Попробовать бесплатно
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 grid gap-3 lg:grid-cols-[1fr_0.62fr]"
        >
          <div className="sky-panel-dark p-6 sm:p-8">
            <span className="badge bg-[#24C7F4] text-[#050505]">корпоративное обучение</span>
            <h3 className="mt-5 max-w-2xl text-4xl font-black leading-none tracking-[-0.06em] text-white sm:text-5xl">
              Английский для вашей команды
            </h3>
            <p className="mt-4 max-w-3xl text-lg font-bold leading-tight text-white/72">
              {siteContent.corporate.description}
            </p>
            <a href="#contact" className="btn btn-white mt-7 px-7 py-4">
              {siteContent.corporate.cta}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="sky-panel p-6 sm:p-8">
            <p className="text-5xl font-black leading-none tracking-[-0.07em] text-[#050505]">24/7</p>
            <p className="mt-3 text-2xl font-black leading-none tracking-[-0.05em] text-[#050505]">
              практика между уроками
            </p>
            <p className="mt-4 text-base font-bold leading-snug text-[#07313D]">
              Тренажёры, задания, разговорная практика и контроль прогресса помогают не терять темп после занятия.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
