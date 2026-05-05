"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { YooChromeWord, YooInflatable, YooJellyBear, YooTechOverlay } from "./CreativeArts";

function BrandMark() {
  return (
    <span className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#10131A] text-xs font-black text-[#EAF7A2] shadow-lg">
      Y
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-0 pb-8 pt-24 sm:pt-28 lg:pb-12 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute left-[6%] top-[10%] h-40 w-40 rounded-full bg-white/45 blur-2xl" />
        <div className="absolute right-[8%] top-[22%] h-56 w-56 rounded-full bg-[#FF7DC7]/28 blur-3xl" />
        <div className="absolute bottom-[10%] left-[20%] h-64 w-64 rounded-full bg-[#EAF7A2]/34 blur-3xl" />
      </div>

      <div className="creative-shell relative">
        <div className="mb-4 overflow-hidden rounded-full border border-white/45 bg-white/28 py-3 text-[#10131A] shadow-[0_18px_60px_rgba(43,93,130,0.12)] backdrop-blur-xl">
          <div className="creative-marquee text-xs font-black uppercase tracking-[0.12em] sm:text-sm">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-8 px-4">
                <span>liquid english</span>
                <span>creative learning</span>
                <span>ai-practice</span>
                <span>speaking flow</span>
                <span>yoo school</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid min-w-0 gap-4 xl:grid-cols-[minmax(0,0.95fr)_minmax(480px,1.05fr)]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="liquid-card relative min-w-0 overflow-hidden p-5 sm:p-7 lg:p-10 xl:p-12"
          >
            <YooTechOverlay className="motion-art absolute -right-24 -top-20 h-[360px] w-[360px] opacity-35" />
            <span className="badge relative z-10">
              <Sparkles className="h-4 w-4" />
              modern education brand
            </span>
            <h1 className="relative z-10 mt-6 max-w-[820px] text-[clamp(2.35rem,5.2vw,5.2rem)] font-black leading-[0.95] tracking-[-0.062em] text-[#10131A] text-balance">
              Английский, который ощущается легко
            </h1>
            <p className="relative z-10 mt-5 max-w-[58ch] text-lg font-extrabold leading-tight text-[#5F6876] sm:mt-6 sm:text-xl xl:text-2xl">
              Индивидуальные занятия, диагностика уровня, практика между уроками и программа, собранная под вашу цель и темп.
            </p>

            <div className="relative z-10 mt-7 grid gap-3 sm:grid-cols-3">
              {siteContent.hero.badges.map((badge, index) => (
                <div key={badge} className={`${index === 0 ? "liquid-sky" : "creative-soft"} flex min-h-[104px] flex-col p-4 text-sm font-extrabold leading-tight`}>
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
            <div className="relative min-h-[560px] overflow-hidden rounded-[2.35rem] bg-gradient-to-b from-[#46B5FF] via-[#BFE7FF] to-[#FFF9F4] p-5 shadow-[0_32px_100px_rgba(43,93,130,0.2)] sm:min-h-[660px] lg:min-h-full lg:p-6">
              <YooTechOverlay className="motion-art absolute inset-0 z-[1] h-full w-full opacity-34" />
              <div className="absolute left-5 top-5 z-10 rounded-[1.2rem] bg-white/42 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-[0.1em] text-[#5F6876]">visual system</p>
                <p className="text-xl font-black leading-none tracking-[-0.04em] text-[#10131A] sm:text-2xl">YOO liquid flow</p>
              </div>
              <div className="absolute right-5 top-5 z-10 rounded-full bg-[#FFF7A8]/86 px-4 py-2 text-sm font-black text-[#10131A] shadow-lg backdrop-blur">
                english in motion
              </div>

              <div className="absolute left-[8%] top-[12%] z-[2] h-16 w-32 rounded-full bg-white/68 blur-sm" />
              <div className="absolute right-[10%] top-[34%] z-[2] h-20 w-40 rounded-full bg-white/62 blur-sm" />
              <div className="absolute bottom-[22%] left-[8%] z-[2] h-16 w-28 rounded-full bg-white/70 blur-sm" />

              <YooInflatable className="motion-art motion-float-slow absolute left-[50%] top-[48%] z-[4] h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2" />
              <YooChromeWord className="motion-art motion-float absolute bottom-[7%] left-[2%] z-[3] h-[34%] w-[70%] opacity-70" />
              <YooJellyBear className="motion-art motion-float motion-delay-2 absolute right-[-4%] top-[34%] z-[5] h-[34%] w-[34%]" />

              <div className="absolute bottom-5 left-5 right-5 z-10 grid gap-3 sm:grid-cols-[0.78fr_1.22fr]">
                <div className="rounded-[1.1rem] bg-[#10131A]/88 p-4 text-white shadow-2xl backdrop-blur-md sm:rounded-[1.25rem] sm:p-5">
                  <p className="text-4xl font-black leading-none tracking-[-0.08em] sm:text-5xl">10+</p>
                  <p className="mt-2 text-xs font-bold leading-tight text-white/70 sm:text-sm">лет опыта в обучении английскому</p>
                </div>
                <div className="rounded-[1.1rem] bg-white/56 p-4 text-[#10131A] shadow-2xl backdrop-blur-md sm:rounded-[1.25rem] sm:p-5">
                  <p className="text-xl font-black leading-[0.94] tracking-[-0.04em] sm:text-2xl">Лёгкая система без ощущения школьной обязаловки</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
