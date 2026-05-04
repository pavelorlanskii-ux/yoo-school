"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteContent } from "@/data/siteContent";

function BrandMark() {
  return (
    <span className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#111111] text-xs font-black text-[#EAF7A2]">
      Y
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-0 pb-6 pt-24 sm:pt-28 lg:pb-8 lg:pt-32">
      <div className="creative-shell relative">
        <div className="mb-4 overflow-hidden rounded-[1.2rem] border border-white/20 bg-[#111111] py-3 text-[#F6F6F2]">
          <div className="creative-marquee text-xs font-extrabold uppercase tracking-[0.08em] sm:text-sm">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-8 px-4">
                <span>английский для детей</span>
                <span>подготовка к экзаменам</span>
                <span>взрослый английский</span>
                <span>корпоративное обучение</span>
                <span>школа Дарьи Орлянской</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1.06fr)_minmax(390px,0.94fr)]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="creative-card relative min-w-0 p-5 sm:p-7 lg:p-10 xl:p-12"
          >
            <span className="badge">
              <Sparkles className="h-4 w-4" />
              школа Дарьи Орлянской
            </span>
            <h1 className="mt-6 max-w-[900px] text-[clamp(2.35rem,5.45vw,5rem)] font-extrabold leading-[0.96] tracking-[-0.058em] text-[#111111] text-balance">
              Английский, который подстраивается под тебя
            </h1>
            <p className="mt-5 max-w-[58ch] text-lg font-extrabold leading-tight text-[#5E5E58] sm:mt-6 sm:text-xl xl:text-2xl">
              Индивидуальные занятия, диагностика уровня, практика между уроками и методика, которую лично собирает основатель YOO SCHOOL.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {siteContent.hero.badges.map((badge, index) => (
                <div key={badge} className={`${index === 0 ? "creative-lime" : "creative-soft"} flex min-h-[94px] flex-col p-4 text-sm font-extrabold leading-tight`}>
                  <BrandMark />
                  {badge}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <a href="#contact" className="btn btn-primary w-full px-6 py-4 text-base sm:w-auto sm:px-7">
                Записаться на пробный урок
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#pricing" className="btn btn-outline w-full px-6 py-4 text-base sm:w-auto sm:px-7">
                Смотреть тарифы
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="grid min-w-0 gap-4"
          >
            <div className="creative-lime relative min-h-[500px] overflow-hidden p-5 sm:min-h-[600px] lg:min-h-full lg:p-6">
              <div className="absolute inset-x-6 top-6 z-10 flex flex-wrap items-start justify-between gap-3">
                <div className="rounded-[1.2rem] bg-[#F6F6F2] px-4 py-3">
                  <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#5E5E58]">методика</p>
                  <p className="text-xl font-extrabold leading-none tracking-[-0.04em] text-[#111111] sm:text-2xl">Дарьи Орлянской</p>
                </div>
                <div className="rounded-full bg-[#B975F0] px-4 py-2 text-sm font-extrabold text-white">
                  founder-led school
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F34824]" />
              <div className="absolute left-[14%] top-[34%] h-24 w-24 rotate-12 rounded-[1.2rem] border-[8px] border-[#111111] bg-[#F6F6F2]" />
              <div className="absolute right-[12%] top-[28%] h-28 w-28 rounded-full bg-[#B975F0]" />
              <div className="absolute bottom-[22%] left-[18%] h-16 w-48 -rotate-6 rounded-full bg-[#111111]" />
              <div className="absolute bottom-[18%] right-[10%] h-28 w-28 rotate-12 rounded-[2rem] bg-[#F6F6F2]" />

              <div className="absolute bottom-5 left-5 right-5 z-10 grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
                <div className="rounded-[1.1rem] bg-[#111111] p-4 text-[#F6F6F2] sm:rounded-[1.25rem] sm:p-5">
                  <p className="text-4xl font-extrabold leading-none tracking-[-0.08em] sm:text-5xl">10+</p>
                  <p className="mt-2 text-xs font-bold leading-tight text-white/70 sm:text-sm">лет опыта в обучении английскому</p>
                </div>
                <div className="rounded-[1.1rem] bg-[#F6F6F2] p-4 text-[#111111] sm:rounded-[1.25rem] sm:p-5">
                  <p className="text-xl font-extrabold leading-[0.92] tracking-[-0.04em] sm:text-2xl">Личный подход без ощущения школьной обязаловки</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            ["1000+", "учеников прошли обучение"],
            ["10+", "преподавателей в команде"],
            ["98%", "довольных учеников"],
          ].map(([value, label], index) => (
            <div key={value} className={`${index === 1 ? "creative-purple text-white" : "creative-card"} p-5 sm:p-6`}>
              <p className="text-4xl font-extrabold leading-none tracking-[-0.08em] sm:text-5xl">{value}</p>
              <p className="mt-2 text-base font-extrabold leading-tight opacity-75">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
