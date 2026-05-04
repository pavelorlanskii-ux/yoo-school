"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#F3F5F6] px-3 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-34"
    >
      <div className="relative mx-auto w-full max-w-7xl min-w-0">
        <div className="grid min-w-0 gap-3 lg:grid-cols-[1.08fr_0.92fr] lg:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative min-w-0 overflow-hidden rounded-[1.45rem] bg-white p-5 sm:p-8 lg:p-10"
          >
            <div className="absolute right-5 top-5 hidden sm:block">
              <Logo symbolOnly className="h-16 w-16" />
            </div>
            <span className="badge bg-[#DFFF20]">
              <Sparkles className="h-4 w-4" />
              школа Дарьи Орлянской
            </span>
            <h1 className="mt-6 max-w-none text-[clamp(3rem,10vw,8.4rem)] font-extrabold leading-[0.9] tracking-[-0.085em] text-[#050505] text-balance">
              Английский под цель, темп и характер ученика
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-extrabold leading-tight text-[#5D646B] sm:text-2xl">
              YOO SCHOOL строит обучение вокруг методики, личного подхода Дарьи Орлянской и команды преподавателей. Диагностика, маршрут, практика и понятный прогресс в одном процессе.
            </p>

            <div className="mt-8 grid gap-2 sm:grid-cols-3">
              {siteContent.hero.badges.map((badge) => (
                <div key={badge} className="rounded-2xl bg-[#F3F5F6] p-4 text-sm font-extrabold leading-tight text-[#050505]">
                  <CheckCircle2 className="mb-2 h-5 w-5 text-[#98D60A]" />
                  {badge}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn btn-primary px-7 py-4 text-base">
                Записаться на вводный урок
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#teacher" className="btn btn-outline px-7 py-4 text-base">
                Познакомиться с Дарьей
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="grid min-w-0 gap-3"
          >
            <div className="relative min-h-[560px] overflow-hidden rounded-[1.45rem] bg-[#24C7F4] p-4 sm:min-h-[640px] sm:p-5 lg:min-h-full">
              <div className="absolute left-5 top-5 z-20 rounded-2xl bg-white px-4 py-3">
                <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#5D646B]">основатель</p>
                <p className="text-xl font-extrabold leading-none tracking-[-0.04em] text-[#050505]">Дарья Орлянская</p>
              </div>
              <div className="absolute bottom-5 left-5 right-5 z-20 rounded-2xl bg-[#06313D] p-5 text-white">
                <p className="text-4xl font-extrabold leading-none tracking-[-0.07em]">10+ лет</p>
                <p className="mt-2 text-base font-bold leading-tight text-white/75">методика, преподаватели и маршрут обучения под конкретную цель</p>
              </div>
              <Image
                src="/images/teacher.png"
                alt="Дарья Орлянская — основатель YOO SCHOOL"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                ["1000+", "учеников"],
                ["10+", "преподавателей"],
                ["98%", "довольных"],
              ].map(([value, label]) => (
                <div key={value} className="sky-card p-4">
                  <p className="text-3xl font-extrabold leading-none tracking-[-0.06em] text-[#050505]">{value}</p>
                  <p className="mt-1 text-xs font-extrabold leading-tight text-[#5D646B]">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
