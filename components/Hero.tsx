"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-32 lg:pt-40">
      {/* Floating gradient shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="floating-shape absolute -left-40 top-20 h-[600px] w-[600px] bg-[#BFFF00] animate-pulse-glow" />
        <div className="floating-shape absolute -right-40 top-40 h-[500px] w-[500px] bg-[#FF5C00] animate-pulse-glow" style={{ animationDelay: "-2s" }} />
        <div className="floating-shape absolute -bottom-40 left-1/3 h-[400px] w-[400px] bg-[#A855F7] animate-pulse-glow" style={{ animationDelay: "-4s" }} />
        <div className="floating-shape absolute right-1/4 top-1/4 h-[300px] w-[300px] bg-[#22D3EE] animate-pulse-glow" style={{ animationDelay: "-1s" }} />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left content */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="badge-glow">
                <span className="h-2 w-2 rounded-full bg-[#BFFF00] animate-pulse" />
                Образовательный бренд
              </span>
            </motion.div>

            {/* Main headline - MASSIVE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-balance font-black leading-[0.9] tracking-tighter"
            >
              <span className="text-inflate block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
                Английский
              </span>
              <span className="text-inflate-lime mt-2 block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
                под вашу
              </span>
              <span className="text-inflate-orange mt-2 block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">
                цель
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl lg:text-2xl"
            >
              {siteContent.hero.text}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="btn-glossy btn-lime px-10 py-5 text-lg font-bold sm:px-12 sm:py-6 sm:text-xl"
              >
                {siteContent.hero.ctaPrimary}
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#directions"
                className="btn-glossy btn-white px-10 py-5 text-lg font-bold sm:px-12 sm:py-6 sm:text-xl"
              >
                {siteContent.hero.ctaSecondary}
              </a>
            </motion.div>

            {/* Feature badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-14 flex flex-wrap gap-3"
            >
              {siteContent.hero.badges.map((badge, idx) => (
                <span
                  key={badge}
                  className="glass rounded-full px-5 py-3 text-sm font-medium text-white/80 sm:text-base"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right visual - Teacher card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
          >
            {/* Glow effect behind card */}
            <div 
              className="absolute -inset-8 rounded-[4rem] opacity-60"
              style={{ 
                background: "linear-gradient(135deg, rgba(191,255,0,0.3) 0%, rgba(255,92,0,0.3) 50%, rgba(168,85,247,0.3) 100%)",
                filter: "blur(60px)"
              }} 
            />
            
            {/* Main card */}
            <div className="premium-card relative p-6 sm:p-8">
              {/* Gradient overlay */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#BFFF00]/10 via-transparent to-[#FF5C00]/10" />
              
              {/* Photo */}
              <div className="photo-frame relative">
                <div className="photo-frame-inner aspect-[4/5]">
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
              <div className="relative mt-6">
                <p className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                  {siteContent.teacher.name}
                </p>
                <p className="mt-2 text-base text-white/60 sm:text-lg">
                  {siteContent.teacher.role}
                </p>
              </div>

              {/* Floating stats badge */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 glass-strong rounded-2xl px-6 py-4 sm:-right-8"
              >
                <p className="text-3xl font-black text-[#BFFF00] sm:text-4xl">10+</p>
                <p className="text-sm font-medium text-white/60">лет опыта</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
