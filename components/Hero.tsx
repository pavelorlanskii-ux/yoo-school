"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#F3F5F6] px-3 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-34"
    >
      <div className="relative mx-auto w-full max-w-7xl min-w-0">
        <div className="grid min-w-0 gap-3 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="sky-panel min-w-0 p-5 sm:p-8 lg:p-10"
          >
            <span className="badge bg-white/75">Онлайн-школа английского</span>
            <h1 className="heading-xl mt-5 max-w-4xl text-balance">
              Программы для любых целей с гарантией результата
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-extrabold leading-tight text-[#07313D] sm:text-2xl">
              Занимайтесь один на один с опытным преподавателем и практикуйте английский 24/7
            </p>

            <div className="mt-8 grid gap-2 sm:grid-cols-3">
              {siteContent.hero.badges.map((badge) => (
                <div key={badge} className="rounded-2xl bg-white/72 p-4 text-sm font-extrabold leading-tight text-[#050505]">
                  <CheckCircle2 className="mb-2 h-5 w-5" />
                  {badge}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn btn-primary px-7 py-4 text-base">
                Попробовать бесплатно
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#pricing" className="btn btn-white px-7 py-4 text-base">
                Смотреть стоимость
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="grid gap-3"
          >
            <div className="sky-panel-dark min-h-[320px] overflow-hidden p-5 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-5xl font-black leading-none tracking-[-0.07em] text-white sm:text-6xl">+1</p>
                  <p className="mt-1 text-2xl font-black leading-none tracking-[-0.04em] text-white">уровень английского</p>
                </div>
                <span className="badge bg-[#24C7F4] text-[#050505]">курс-бестселлер</span>
              </div>
              <p className="mt-5 max-w-sm text-lg font-bold leading-tight text-white/78">
                Гарантируем результат или доучим за свой счёт. Закрепляем цель и ведём по программе.
              </p>
              <div className="mt-7 rounded-[1.1rem] bg-white p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[0.9rem] bg-[#E9EDF0]">
                  <Image
                    src="/images/teacher.png"
                    alt="Дарья Орлянская — основатель YOO SCHOOL"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                ["1000+", "учеников"],
                ["10+", "преподавателей"],
                ["98%", "довольных"],
              ].map(([value, label]) => (
                <div key={value} className="sky-card p-4">
                  <p className="text-3xl font-black leading-none tracking-[-0.06em] text-[#050505]">{value}</p>
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
