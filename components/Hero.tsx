"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
      {/* Decorative 3D icons */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image 
          src="/images/icon-globe.png" 
          alt="" 
          width={120} 
          height={120} 
          className="icon-3d icon-float absolute left-[5%] top-32 w-16 sm:w-20 lg:w-28"
        />
        <Image 
          src="/images/icon-graduation.png" 
          alt="" 
          width={100} 
          height={100} 
          className="icon-3d icon-float absolute right-[8%] top-40 w-14 sm:w-16 lg:w-24"
          style={{ animationDelay: "-1s" }}
        />
        <Image 
          src="/images/icon-chat.png" 
          alt="" 
          width={90} 
          height={90} 
          className="icon-3d icon-float absolute bottom-20 left-[10%] w-12 sm:w-14 lg:w-20"
          style={{ animationDelay: "-2s" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="badge badge-lime">
                <span className="h-2 w-2 rounded-full bg-[#6B8E00]" />
                Онлайн-школа английского
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="heading-xl text-balance"
            >
              Программы для любых целей{" "}
              <span className="text-gradient-lime">с гарантией результата</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-lg text-lg text-gray-600 sm:text-xl"
            >
              {siteContent.hero.text}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="btn btn-primary px-8 py-4 text-base font-semibold sm:text-lg"
              >
                {siteContent.hero.ctaPrimary}
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#directions"
                className="btn btn-outline px-8 py-4 text-base font-semibold sm:text-lg"
              >
                {siteContent.hero.ctaSecondary}
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              <div>
                <p className="text-3xl font-bold text-[#1A1A2E] sm:text-4xl">1000+</p>
                <p className="mt-1 text-sm text-gray-500">учеников</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1A1A2E] sm:text-4xl">10+</p>
                <p className="mt-1 text-sm text-gray-500">преподавателей</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#1A1A2E] sm:text-4xl">98%</p>
                <p className="mt-1 text-sm text-gray-500">довольных</p>
              </div>
            </motion.div>
          </div>

          {/* Right visual - Teacher card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          >
            {/* Main card */}
            <div className="card-elevated relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F0FFB3] to-[#E8FF8C] p-6 sm:p-8">
              {/* Photo */}
              <div className="photo-border-lime relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/teacher.png"
                    alt="Дарья Орлянская — основатель YOO SCHOOL"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Info overlay */}
              <div className="mt-6">
                <p className="text-2xl font-bold text-[#1A1A2E] sm:text-3xl">
                  {siteContent.teacher.name}
                </p>
                <p className="mt-1 text-base text-gray-600 sm:text-lg">
                  {siteContent.teacher.role}
                </p>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-3 -top-3 rounded-2xl bg-white px-5 py-3 shadow-lg sm:-right-6 sm:-top-6"
              >
                <p className="text-2xl font-bold text-[#FF5C00] sm:text-3xl">10+</p>
                <p className="text-xs font-medium text-gray-500 sm:text-sm">лет опыта</p>
              </motion.div>
            </div>

            {/* Decorative icon */}
            <Image 
              src="/images/icon-robot.png" 
              alt="" 
              width={80} 
              height={80} 
              className="icon-3d absolute -bottom-6 -left-6 w-16 sm:w-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
