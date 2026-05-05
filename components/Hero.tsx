"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { YooInflatable, YooSpeech } from "./CreativeArts";

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
                <span>индивидуальная программа</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="creative-card relative min-w-0 overflow-hidden p-5 sm:p-7 lg:p-10 xl:p-12"
          >
            <YooScribbleFallback />
            <span className="badge relative z-10">
              <Sparkles className="h-4 w-4" />
              онлайн-школа английского
            </span>
            <h1 className="relative z-10 mt-6 max-w-[780px] text-[clamp(2.1rem,4.75vw,4.35rem)] font-extrabold leading-[1.01] tracking-[-0.052em] text-[#111111] text-balance">
              Английский, который подстраивается под тебя
            </h1>
            <p className="relative z-10 mt-5 max-w-[58ch] text-lg font-extrabold leading-tight text-[#5E5E58] sm:mt-6 sm:text-xl xl:text-2xl">
              Индивидуальные занятия, диагностика уровня, практика между уроками и программа, собранная под вашу цель и темп.
            </p>

            <div className="relative z-10 mt-7 grid gap-3 sm:grid-cols-3">
              {siteContent.hero.badges.map((badge, index) => (
                <div key={badge} className={`${index === 0 ? "creative-lime" : "creative-soft"} flex min-h-[94px] flex-col p-4 text-sm font-extrabold leading-tight`}>
                  <BrandMark />
                  {badge}
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
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
            <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#9EC9F8] via-[#D8EAFF] to-[#F6F6F2] p-5 sm:min-h-[600px] lg:min-h-full lg:p-6">
              <div className="absolute left-5 top-5 z-10 rounded-[1.2rem] bg-[#F6F6F2]/80 px-4 py-3 backdrop-blur-md">
                <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#5E5E58]">визуальная система</p>
                <p className="text-xl font-extrabold leading-none tracking-[-0.04em] text-[#111111] sm:text-2xl">YOO воздушный</p>
              </div>
              <div className="absolute right-5 top-5 z-10 rounded-full bg-[#FFF7A8] px-4 py-2 text-sm font-extrabold text-[#111111]">
                english in motion
              </div>

              <div className="absolute left-[10%] top-[10%] h-16 w-28 rounded-full bg-white/70 blur-sm" />
              <div className="absolute right-[8%] top-[32%] h-20 w-36 rounded-full bg-white/65 blur-sm" />
              <div className="absolute bottom-[22%] left-[8%] h-16 w-28 rounded-full bg-white/70 blur-sm" />

              <YooInflatable className="motion-art motion-float-slow absolute left-1/2 top-1/2 z-[3] h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2" />

              <div className="absolute bottom-5 left-5 right-5 z-10 grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
                <div className="rounded-[1.1rem] bg-[#111111] p-4 text-[#F6F6F2] sm:rounded-[1.25rem] sm:p-5">
                  <p className="text-4xl font-extrabold leading-none tracking-[-0.08em] sm:text-5xl">10+</p>
                  <p className="mt-2 text-xs font-bold leading-tight text-white/70 sm:text-sm">лет опыта в обучении английскому</p>
                </div>
                <div className="rounded-[1.1rem] bg-[#F6F6F2]/88 p-4 text-[#111111] backdrop-blur-md sm:rounded-[1.25rem] sm:p-5">
                  <p className="text-xl font-extrabold leading-[0.92] tracking-[-0.04em] sm:text-2xl">Лёгкая система без ощущения школьной обязаловки</p>
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

function YooScribbleFallback() {
  return (
    <div className="pointer-events-none absolute -right-10 bottom-6 hidden opacity-70 lg:block">
      <YooSpeech className="motion-art motion-float-slow h-36 w-44" />
    </div>
  );
}
