"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-24 pt-8 sm:px-6 sm:pb-32 sm:pt-12 lg:px-8 lg:pb-40 lg:pt-16">
      {/* Scattered decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[5%] top-20 h-20 w-20 rounded-full bg-[#c7ff4d] opacity-80 lg:h-32 lg:w-32" />
        <div className="absolute right-[10%] top-32 h-24 w-24 rotate-45 rounded-full border-[12px] border-[#FF6B2B] border-b-transparent border-l-transparent lg:h-36 lg:w-36 lg:border-[16px]" />
        <div className="absolute bottom-40 left-[8%] h-14 w-24 rounded-full bg-[#9D6AFF] lg:h-20 lg:w-36" />
        <div className="absolute bottom-32 right-[15%] hidden h-12 w-12 bg-[#FFD452] lg:block" style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} />
        <div className="absolute right-[25%] top-48 hidden h-10 w-10 rounded-full bg-[#FF8DC7] lg:block" />
        <div className="absolute bottom-20 left-[30%] hidden h-20 w-20 -rotate-45 rounded-full border-[10px] border-[#7CE8FF] border-b-transparent border-l-transparent lg:block" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Brand badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-3"
            >
              <div className="sticker flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c7ff4d]">
                <Image src="/images/logo.png" alt="" width={48} height={48} className="h-10 w-10 object-contain" />
              </div>
              <span className="rounded-full border-4 border-[#0E1017] bg-white px-5 py-2 text-base font-bold text-[#0E1017]">
                YOO SCHOOL
              </span>
            </motion.div>

            {/* Main headline - HUGE typography */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-balance font-black leading-[0.95] tracking-tight text-[#0E1017]"
            >
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">Английский</span>
              <span className="my-3 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
                <span className="text-sticker">под вашу</span>
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem]">цель</span>
            </motion.h1>

            {/* Subheadline - larger */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-[#2A3142] sm:text-2xl lg:mx-0"
            >
              {siteContent.hero.text}
            </motion.p>

            {/* CTA buttons - LARGER */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a 
                href="#contact" 
                className="btn-orange w-full rounded-full px-10 py-5 text-center text-lg font-bold sm:w-auto sm:text-xl"
              >
                {siteContent.hero.ctaPrimary}
              </a>
              <a 
                href="#directions" 
                className="btn-lime w-full rounded-full px-10 py-5 text-center text-lg font-bold sm:w-auto sm:text-xl"
              >
                {siteContent.hero.ctaSecondary}
              </a>
            </motion.div>

            {/* Feature badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              {siteContent.hero.badges.map((badge, idx) => (
                <span 
                  key={badge} 
                  className="rounded-full border-4 border-[#0E1017] px-6 py-3 text-base font-bold text-[#0E1017] sm:text-lg"
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
            className="relative mx-auto w-full max-w-lg lg:mx-0"
          >
            {/* Background tilted cards */}
            <div aria-hidden="true" className="absolute -left-4 -top-4 h-full w-full rounded-[2.5rem] bg-[#9D6AFF]" style={{ transform: "rotate(-6deg)" }} />
            <div aria-hidden="true" className="absolute -right-4 -top-2 h-full w-full rounded-[2.5rem] bg-[#FF6B2B]" style={{ transform: "rotate(4deg)" }} />
            
            {/* Main card */}
            <div className="sticker-lg relative rounded-[2.5rem] bg-[#c7ff4d] p-8">
              {/* Teacher photo */}
              <div className="photo-sticker relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                <Image
                  src="/images/teacher.png"
                  alt="Дарья Орлянская — основатель YOO SCHOOL"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              
              {/* Info badge */}
              <div className="mt-6">
                <p className="text-3xl font-black text-[#0E1017] sm:text-4xl">{siteContent.teacher.name}</p>
                <p className="mt-2 text-lg text-[#0E1017]/80">{siteContent.teacher.role}</p>
              </div>

              {/* Floating eyes sticker */}
              <motion.div 
                initial={{ rotate: -10 }}
                animate={{ rotate: 10 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="absolute -right-4 -top-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#0E1017] bg-white shadow-[0_6px_0_0_rgba(14,16,23,0.15)]"
              >
                <span className="text-4xl">👀</span>
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div 
              initial={{ y: 10 }}
              animate={{ y: -10 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 rounded-full border-4 border-[#0E1017] bg-[#FFD452] px-6 py-4 text-lg font-bold text-[#0E1017] shadow-[0_6px_0_0_rgba(14,16,23,0.15)]"
            >
              10+ лет опыта
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
