"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import Logo from "./Logo";

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

        <div className="grid min-w-0 gap-4 lg:grid-cols-[1.04fr_0.96fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="creative-card relative min-w-0 overflow-hidden p-5 sm:p-7 lg:p-10"
          >
            <div className="absolute right-5 top-5 hidden sm:block">
              <Logo symbolOnly className="h-20 w-20" />
            </div>
            <span className="badge">
              <Sparkles className="h-4 w-4" />
              школа Дарьи Орлянской
            </span>
            <h1 className="heading-xl mt-6 max-w-none text-pretty lg:max-w-[18ch]">
              Английский, который подстраивается под тебя
            </h1>
            <p className="mt-5 max-w-[52ch] text-lg font-extrabold leading-tight text-[#5E5E58] sm:mt-6 sm:text-xl lg:text-2xl">
              Индивидуальные занятия, диагностика уровня, практика между уроками и методика, которую лично собирает основатель YOO SCHOOL.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {siteContent.hero.badges.map((badge, index) => (
                <div key={badge} className={`${index === 0 ? "creative-lime" : "creative-soft"} p-4 text-sm font-extrabold leading-tight`}>
                  <CheckCircle2 className="mb-3 h-5 w-5" />
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
            <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-[#EAF7A2] p-4 sm:min-h-[620px] sm:p-5 lg:min-h-full">
              <div className="absolute left-4 top-4 z-20 max-w-[70%] rounded-[1.1rem] bg-[#F6F6F2]/95 px-3 py-2.5 sm:left-5 sm:top-5 sm:max-w-none sm:rounded-[1.25rem] sm:px-4 sm:py-3">
                <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#5E5E58]">основатель</p>
                <p className="text-lg font-extrabold leading-none tracking-[-0.04em] text-[#111111] sm:text-2xl">Дарья Орлянская</p>
              </div>
              <div className="absolute right-4 top-4 z-20 hidden rounded-full bg-[#B975F0] px-4 py-2 text-sm font-extrabold text-white sm:block">
                hello ooo!
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-20 grid gap-3 sm:bottom-5 sm:left-5 sm:right-5 sm:grid-cols-[0.8fr_1.2fr]">
                <div className="rounded-[1.1rem] bg-[#111111]/96 p-4 text-[#F6F6F2] sm:rounded-[1.25rem] sm:p-5">
                  <p className="text-4xl font-extrabold leading-none tracking-[-0.08em] sm:text-5xl">10+</p>
                  <p className="mt-2 text-xs font-bold leading-tight text-white/70 sm:text-sm">лет опыта в обучении английскому</p>
                </div>
                <div className="rounded-[1.1rem] bg-[#F34824]/96 p-4 text-[#F6F6F2] sm:rounded-[1.25rem] sm:p-5">
                  <p className="text-xl font-extrabold leading-[0.92] tracking-[-0.04em] sm:text-2xl">Личный подход без ощущения школьной обязаловки</p>
                </div>
              </div>
              <Image
                src="/images/teacher.png"
                alt="Дарья Орлянская — основатель YOO SCHOOL"
                fill
                className="object-cover object-[56%_10%] sm:object-[55%_12%] lg:object-[52%_12%] sticker-cutout"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
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
