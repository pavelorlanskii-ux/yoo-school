"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight, PlayCircle } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-40"
    >
      <div className="pointer-events-none absolute left-[6%] top-32 h-24 w-24 orb opacity-90 [--orb-from:#BFFF00] [--orb-to:#45D7FF] sm:h-32 sm:w-32" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[8%] top-24 h-16 w-16 orb opacity-80 [--orb-from:#FF7AD9] [--orb-to:#FF5C00] sm:h-24 sm:w-24" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-12 left-[45%] h-20 w-20 orb opacity-70 [--orb-from:#7C3CFF] [--orb-to:#BFFF00]" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl min-w-0">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="relative z-10 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-5 flex flex-wrap gap-2 sm:mb-6"
            >
              <span className="badge badge-lime">
                <Sparkles className="h-4 w-4" />
                Онлайн-школа английского
              </span>
              <span className="badge badge-orange">дети · взрослые · команды</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.08 }}
              className="heading-xl max-w-4xl text-balance"
            >
              Английский, который собирается{" "}
              <span className="text-gradient-orange">под вашу цель</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.16 }}
              className="mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-[#5F5B72] sm:text-xl"
            >
              {siteContent.hero.text}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.24 }}
              className="mt-8 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <a
                href="#contact"
                className="btn btn-primary w-full justify-center px-7 py-4 text-base sm:w-auto sm:px-9 sm:text-lg"
              >
                {siteContent.hero.ctaPrimary}
                <ArrowRight className="h-5 w-5 shrink-0" />
              </a>
              <a
                href="#directions"
                className="btn btn-outline w-full justify-center px-7 py-4 text-base sm:w-auto sm:px-9 sm:text-lg"
              >
                <PlayCircle className="h-5 w-5 shrink-0" />
                {siteContent.hero.ctaSecondary}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, delay: 0.32 }}
              className="mt-8 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {[
                ["1000+", "учеников прошли обучение"],
                ["10+", "преподавателей в команде"],
                ["98%", "довольных учеников"],
              ].map(([value, label]) => (
                <div key={value} className="gloss-panel rounded-3xl px-5 py-4">
                  <p className="relative z-10 text-4xl font-black leading-none tracking-[-0.06em] text-[#151427]">{value}</p>
                  <p className="relative z-10 mt-1 text-sm font-bold text-[#706C82]">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.12 }}
            className="relative mx-auto w-full min-w-0 max-w-md lg:mx-0 lg:max-w-none"
          >
            <div className="gloss-panel soft-3d relative rounded-[2.25rem] p-4 sm:p-6 lg:p-7">
              <div className="pointer-events-none absolute -right-5 top-10 z-20 rotate-6 rounded-[2rem] bg-[#BFFF00] px-5 py-4 shadow-2xl sm:-right-8">
                <p className="text-4xl font-black leading-none tracking-[-0.06em] text-[#151427]">10+</p>
                <p className="text-xs font-black uppercase tracking-[0.08em] text-[#4B6200]">лет опыта</p>
              </div>

              <div className="photo-border-lime relative z-10">
                <div className="relative aspect-[4/5] w-full min-w-0 overflow-hidden rounded-[1.75rem] bg-white">
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

              <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="text-2xl font-black leading-tight tracking-[-0.04em] text-[#151427] sm:text-3xl">{siteContent.teacher.name}</p>
                  <p className="mt-1 text-base font-bold text-[#68657A]">{siteContent.teacher.role}</p>
                </div>
                <div className="rounded-2xl bg-[#151427] px-4 py-3 text-white shadow-xl">
                  <p className="text-xs font-black uppercase tracking-[0.08em] text-[#BFFF00]">методика</p>
                  <p className="text-sm font-extrabold">без хаоса</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
