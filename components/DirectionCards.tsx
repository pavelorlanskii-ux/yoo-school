"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { YooBook, YooOrb, YooPencil, YooSpeech } from "./CreativeArts";

const labels = ["school track", "exam track", "adult flow"];
const arts = [YooBook, YooPencil, YooSpeech];
const styles = ["liquid-sky", "liquid-card", "liquid-purple"];

export default function DirectionCards() {
  return (
    <section id="directions" className="section-padding">
      <div className="creative-shell min-w-0">
        <div className="mb-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="badge">Курсы</span>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-lg mt-5 max-w-4xl"
            >
              Программы под разные цели и темп
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="max-w-3xl text-lg font-extrabold leading-tight text-[#5F6876] sm:text-xl"
          >
            После диагностики собираем программу под уровень, сроки и задачу: школа, экзамены, работа, путешествия или уверенное общение.
          </motion.p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3">
          {siteContent.directions.map((item, index) => {
            const Art = arts[index];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.36, delay: index * 0.06 }}
                className={`${styles[index]} relative flex h-full min-h-[420px] min-w-0 flex-col overflow-hidden p-6 sm:p-7`}
              >
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <span className="badge">{labels[index]}</span>
                  <span className="rounded-full bg-white/50 px-3 py-1 text-xs font-black text-[#10131A]/60 backdrop-blur">0{index + 1}</span>
                </div>

                <Art className="motion-art motion-float-slow absolute right-[-8%] top-[12%] z-0 h-44 w-44 opacity-80" />

                <h3 className="relative z-10 mt-auto max-w-[12ch] text-3xl font-extrabold leading-[0.92] tracking-[-0.055em] sm:text-4xl">
                  {item.title}
                </h3>
                <p className="relative z-10 mt-5 flex-1 text-base font-extrabold leading-tight opacity-75">
                  {item.description}
                </p>
                <a href="#contact" className="btn btn-primary relative z-10 mt-8 w-fit px-6 py-3 text-sm">
                  Попробовать
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 grid gap-4 lg:grid-cols-[1fr_0.64fr]"
        >
          <div className="liquid-card p-6 sm:p-8 lg:p-10">
            <span className="badge">для компаний</span>
            <h3 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] text-[#10131A] sm:text-5xl lg:text-6xl">
              Корпоративное обучение для вашей команды
            </h3>
            <p className="mt-5 max-w-3xl text-xl font-extrabold leading-tight text-[#5F6876]">
              {siteContent.corporate.description}
            </p>
            <a href="#contact" className="btn btn-primary mt-8 px-7 py-4">
              {siteContent.corporate.cta}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="liquid-blue relative overflow-hidden p-6 sm:p-8">
            <YooOrb className="motion-art motion-pulse-soft absolute -right-8 -top-10 h-36 w-36 opacity-60" />
            <p className="relative z-10 text-6xl font-extrabold leading-none tracking-[-0.08em] sm:text-7xl">24/7</p>
            <p className="relative z-10 mt-4 text-3xl font-extrabold leading-[0.94] tracking-[-0.055em] sm:text-4xl">
              практика между уроками
            </p>
            <p className="relative z-10 mt-6 text-base font-extrabold leading-tight text-white/78">
              Тренажёры, задания, разговорная практика и контроль прогресса помогают не терять темп после занятия.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
