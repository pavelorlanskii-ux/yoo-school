"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-8 sm:px-6 sm:pb-28 sm:pt-12 lg:px-8 lg:pb-32 lg:pt-16">
      {/* Scattered decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* Lime circle */}
        <div className="absolute left-[5%] top-20 h-16 w-16 rounded-full bg-[#c7ff4d] opacity-80 lg:h-24 lg:w-24" />
        {/* Orange arc */}
        <div className="absolute right-[10%] top-32 h-20 w-20 rotate-45 rounded-full border-[10px] border-[#FF6B2B] border-b-transparent border-l-transparent lg:h-28 lg:w-28 lg:border-[14px]" />
        {/* Purple blob */}
        <div className="absolute bottom-40 left-[8%] h-12 w-20 rounded-full bg-[#9D6AFF] lg:h-16 lg:w-28" />
        {/* Yellow star */}
        <div className="absolute bottom-32 right-[15%] hidden h-10 w-10 bg-[#FFD452] lg:block" style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} />
        {/* Pink circle small */}
        <div className="absolute right-[25%] top-48 hidden h-8 w-8 rounded-full bg-[#FF8DC7] lg:block" />
        {/* Cyan arc bottom */}
        <div className="absolute bottom-20 left-[30%] hidden h-16 w-16 -rotate-45 rounded-full border-8 border-[#7CE8FF] border-b-transparent border-l-transparent lg:block" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Brand badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-3"
            >
              <div className="sticker flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c7ff4d]">
                <Image src="/images/logo.png" alt="" width={40} height={40} className="h-8 w-8 object-contain" />
              </div>
              <span className="badge-sticker text-[#0E1017]">
                <span className="h-2 w-2 rounded-full bg-[#c7ff4d]" />
                YOO SCHOOL
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-balance text-4xl font-black leading-[1.1] tracking-tight text-[#0E1017] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="block">Яркий</span>
              <span className="text-sticker my-2 inline-block">английский</span>
              <span className="block">для школы,</span>
              <span className="block">поступления</span>
              <span className="block">и жизни</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#2A3142] lg:mx-0"
            >
              {siteContent.hero.text}
            </motion.p>

            {/* CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a 
                href="#contact" 
                className="btn-orange w-full rounded-full px-8 py-4 text-center text-base font-bold sm:w-auto sm:text-lg"
              >
                {siteContent.hero.ctaPrimary}
              </a>
              <a 
                href="#directions" 
                className="btn-lime w-full rounded-full px-8 py-4 text-center text-base font-bold sm:w-auto sm:text-lg"
              >
                {siteContent.hero.ctaSecondary}
              </a>
            </motion.div>

            {/* Feature badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              {siteContent.hero.badges.map((badge, idx) => (
                <span 
                  key={badge} 
                  className="badge-sticker"
                  style={{ background: idx === 0 ? "#c7ff4d" : idx === 1 ? "#7CE8FF" : "#FFD452" }}
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right visual - Stacked cards with teacher photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            {/* Background tilted cards */}
            <div aria-hidden="true" className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] bg-[#9D6AFF]" style={{ transform: "rotate(-6deg)" }} />
            <div aria-hidden="true" className="absolute -right-4 -top-2 h-full w-full rounded-[2rem] bg-[#FF6B2B]" style={{ transform: "rotate(4deg)" }} />
            
            {/* Main card */}
            <div className="sticker-lg relative rounded-[2rem] bg-[#c7ff4d] p-6">
              {/* Teacher photo */}
              <div className="photo-sticker relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/teacher.png"
                  alt="Преподаватель YOO SCHOOL"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              
              {/* Info badge */}
              <div className="mt-4">
                <p className="text-2xl font-black text-[#0E1017] sm:text-3xl">Юлия Орланская</p>
                <p className="mt-1 text-base text-[#0E1017]/70">Преподаватель английского</p>
              </div>

              {/* Floating eyes sticker */}
              <motion.div 
                initial={{ rotate: -10 }}
                animate={{ rotate: 10 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute -right-4 -top-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-white shadow-[0_4px_0_0_rgba(14,16,23,0.15),0_8px_24px_rgba(14,16,23,0.12)]"
              >
                <span className="text-3xl">👀</span>
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div 
              initial={{ y: 10 }}
              animate={{ y: -10 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 rounded-full border-4 border-white bg-[#FFD452] px-5 py-3 font-bold text-[#0E1017] shadow-[0_4px_0_0_rgba(14,16,23,0.15)]"
            >
              10+ лет опыта
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
