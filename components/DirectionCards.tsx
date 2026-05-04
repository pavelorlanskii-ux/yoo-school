"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { IconGraduation, IconHeadphones, IconChart } from "./Icons";

const icons = [IconGraduation, IconHeadphones, IconChart];
const cardStyles = ["creative-lime", "creative-card", "creative-purple text-white"];
const labels = ["курс-бестселлер", "экзамены", "base"];

export default function DirectionCards() {
  return (
    <section id="directions" className="section-padding">
      <div className="creative-shell min-w-0">
        <div className="mb-8 grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <span className="badge">Курсы</span>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-lg mt-5 max-w-none text-[#F6F6F2] lg:max-w-[18ch]"
            >
              Курсы и программы по целям
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="max-w-3xl text-lg font-extrabold leading-tight text-white/80 sm:text-xl"
          >
            После диагностики собираем программу под уровень, сроки и задачу: школа, экзамены, работа, путешествия или уверенное общение.
          </motion.p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3">
          {siteContent.directions.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.36, delay: index * 0.06 }}
                className={`${cardStyles[index]} flex h-full min-w-0 flex-col p-6 sm:p-7`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="badge bg-white/80">{labels[index]}</span>
                  <div className="rounded-3xl bg-white/70 p-3 text-[#111111]">
                    <Icon size={58} className="h-14 w-14" />
                  </div>
                </div>
                <h3 className="mt-8 text-3xl font-extrabold leading-[0.92] tracking-[-0.055em] sm:mt-10 sm:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-5 flex-1 text-base font-extrabold leading-tight opacity-75">
                  {item.description}
                </p>
                <a href="#contact" className="btn btn-primary mt-8 w-fit px-6 py-3 text-sm">
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
          <div className="creative-card p-6 sm:p-8 lg:p-10">
            <span className="badge">для компаний</span>
            <h3 className="mt-6 max-w-none text-4xl font-extrabold leading-[0.92] tracking-[-0.055em] text-[#111111] sm:text-5xl lg:max-w-[17ch] lg:text-6xl">
              Корпоративное обучение для вашей команды
            </h3>
            <p className="mt-5 max-w-3xl text-xl font-extrabold leading-tight text-[#5E5E58]">
              {siteContent.corporate.description}
            </p>
            <a href="#contact" className="btn btn-primary mt-8 px-7 py-4">
              {siteContent.corporate.cta}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="creative-lime p-6 sm:p-8">
            <p className="text-6xl font-extrabold leading-none tracking-[-0.08em] text-[#111111] sm:text-7xl">24/7</p>
            <p className="mt-4 text-3xl font-extrabold leading-[0.92] tracking-[-0.055em] text-[#111111] sm:text-4xl">
              практика между уроками
            </p>
            <p className="mt-6 text-base font-extrabold leading-tight text-[#5E5E58]">
              Тренажёры, задания, разговорная практика и контроль прогресса помогают не терять темп после занятия.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
