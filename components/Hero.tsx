"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-x-clip bg-white px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_120%_80%_at_100%_-10%,rgba(191,255,0,0.22),transparent_55%),radial-gradient(ellipse_90%_60%_at_-10%_60%,rgba(255,92,0,0.08),transparent_50%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl min-w-0">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="relative z-10 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 sm:mb-6"
            >
              <span className="badge badge-lime">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#6B8E00]" aria-hidden="true" />
                Онлайн-школа английского
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl text-balance"
            >
              Программы для любых целей{" "}
              <span className="text-gradient-lime">с гарантией результата</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg"
            >
              {siteContent.hero.text}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-7 flex min-w-0 flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <a
                href="#contact"
                className="btn btn-primary w-full justify-center px-6 py-4 text-base font-semibold sm:w-auto sm:px-8 sm:text-lg"
              >
                {siteContent.hero.ctaPrimary}
                <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#directions"
                className="btn btn-outline w-full justify-center px-6 py-4 text-base font-semibold sm:w-auto sm:px-8 sm:text-lg"
              >
                {siteContent.hero.ctaSecondary}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 grid min-w-0 grid-cols-3 gap-3 sm:mt-12 sm:gap-6"
            >
              <div className="min-w-0">
                <p className="text-2xl font-bold tabular-nums text-[#1A1A2E] sm:text-3xl lg:text-4xl">1000+</p>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">учеников</p>
              </div>
              <div className="min-w-0">
                <p className="text-2xl font-bold tabular-nums text-[#1A1A2E] sm:text-3xl lg:text-4xl">10+</p>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">преподавателей</p>
              </div>
              <div className="min-w-0">
                <p className="text-2xl font-bold tabular-nums text-[#1A1A2E] sm:text-3xl lg:text-4xl">98%</p>
                <p className="mt-1 text-xs text-gray-500 sm:text-sm">довольных</p>
              </div>
            </motion.div>
          </div>

          {/* Right visual - Teacher card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative mx-auto w-full min-w-0 max-w-md lg:mx-0 lg:max-w-none"
          >
            <div className="card-elevated relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F0FFB3] to-[#E8FF8C] p-5 sm:p-8">
              <div className="photo-border-lime relative">
                <div className="relative aspect-[4/5] w-full min-w-0 overflow-hidden rounded-2xl">
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

              <div className="mt-4 flex justify-end sm:mt-5">
                <div className="rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-md sm:px-5 sm:py-3">
                  <p className="text-xl font-bold text-[#FF5C00] sm:text-2xl lg:text-3xl">10+</p>
                  <p className="text-xs font-medium text-gray-500 sm:text-sm">лет опыта</p>
                </div>
              </div>

              <div className="mt-5 sm:mt-6">
                <p className="text-xl font-bold text-[#1A1A2E] sm:text-2xl lg:text-3xl">{siteContent.teacher.name}</p>
                <p className="mt-1 text-sm text-gray-600 sm:text-base sm:text-lg">{siteContent.teacher.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
