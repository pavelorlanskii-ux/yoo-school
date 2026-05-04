"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { OwlIcon, DeerIcon, CorgiIcon, StarIcon, EyesIcon } from "./AnimalIcons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-24 pt-8 sm:px-6 sm:pb-32 sm:pt-12 lg:px-8 lg:pb-40 lg:pt-16">
      {/* Animated character decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* Large decorative shapes */}
        <div className="absolute left-[3%] top-24 h-24 w-24 rounded-full bg-[#c7ff4d] opacity-90 lg:h-40 lg:w-40" />
        <div className="absolute right-[8%] top-32 h-28 w-28 rotate-45 rounded-full border-[14px] border-[#FF6B2B] border-b-transparent border-l-transparent lg:h-44 lg:w-44 lg:border-[18px]" />
        <div className="absolute bottom-40 left-[6%] h-16 w-28 rounded-full bg-[#9D6AFF] lg:h-24 lg:w-44" />
        <div className="absolute bottom-32 right-[12%] hidden h-16 w-16 bg-[#FFD452] lg:block" style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} />
        <div className="absolute right-[22%] top-48 hidden h-14 w-14 rounded-full bg-[#FF8DC7] lg:block" />
        <div className="absolute bottom-24 left-[28%] hidden h-24 w-24 -rotate-45 rounded-full border-[12px] border-[#7CE8FF] border-b-transparent border-l-transparent lg:block" />
        
        {/* Animated animal icons */}
        <motion.div 
          className="absolute left-[15%] top-[20%] hidden lg:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <OwlIcon className="h-20 w-20" />
        </motion.div>
        <motion.div 
          className="absolute right-[5%] top-[45%] hidden lg:block"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <DeerIcon className="h-16 w-16" />
        </motion.div>
        <motion.div 
          className="absolute bottom-[20%] left-[5%] hidden lg:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <CorgiIcon className="h-18 w-18" />
        </motion.div>
        <div className="absolute right-[30%] top-16 hidden lg:block">
          <StarIcon className="h-12 w-12" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Brand badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="mb-10 inline-flex items-center gap-4"
            >
              <EyesIcon className="h-16 w-16" color="#9D6AFF" />
              <span className="rounded-full border-4 border-[#0E1017] bg-white px-6 py-3 text-lg font-black text-[#0E1017] shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
                YOO SCHOOL
              </span>
            </motion.div>

            {/* Main headline - HUGE with 3D effect */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-balance font-black leading-[0.9] tracking-tight"
            >
              <span className="text-3d block text-5xl text-[#0E1017] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem]">
                Английский
              </span>
              <span className="my-4 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem]">
                <span className="inline-block -rotate-2 rounded-2xl bg-[#FF6B2B] px-6 py-2 text-white shadow-[0_6px_0_0_#c7521f]">
                  под вашу
                </span>
              </span>
              <span className="text-3d-lime block text-5xl text-[#c7ff4d] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem]" style={{ WebkitTextStroke: "3px #0E1017" }}>
                цель
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-10 max-w-2xl text-xl leading-relaxed text-[#2A3142] sm:text-2xl lg:mx-0 lg:text-2xl"
            >
              {siteContent.hero.text}
            </motion.p>

            {/* CTA buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a 
                href="#contact" 
                className="btn-orange w-full rounded-full px-12 py-6 text-center text-xl font-bold sm:w-auto"
              >
                {siteContent.hero.ctaPrimary}
              </a>
              <a 
                href="#directions" 
                className="btn-lime w-full rounded-full px-12 py-6 text-center text-xl font-bold sm:w-auto"
              >
                {siteContent.hero.ctaSecondary}
              </a>
            </motion.div>

            {/* Feature badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              {siteContent.hero.badges.map((badge, idx) => (
                <span 
                  key={badge} 
                  className="rounded-full border-4 border-[#0E1017] px-6 py-4 text-lg font-bold text-[#0E1017] shadow-[0_4px_0_0_rgba(0,0,0,0.1)]"
                  style={{ background: idx === 0 ? "#c7ff4d" : idx === 1 ? "#7CE8FF" : "#FFD452" }}
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right visual - Card with teacher */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xl lg:mx-0"
          >
            {/* Background tilted cards */}
            <div aria-hidden="true" className="absolute -left-6 -top-6 h-full w-full rounded-[3rem] bg-[#9D6AFF]" style={{ transform: "rotate(-8deg)" }} />
            <div aria-hidden="true" className="absolute -right-4 -top-4 h-full w-full rounded-[3rem] bg-[#FF6B2B]" style={{ transform: "rotate(5deg)" }} />
            
            {/* Main card */}
            <div className="card-3d relative rounded-[3rem] bg-[#c7ff4d] p-10">
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
              
              {/* Info */}
              <div className="mt-8">
                <p className="text-3xl font-black text-[#0E1017] sm:text-4xl lg:text-5xl">{siteContent.teacher.name}</p>
                <p className="mt-3 text-xl text-[#0E1017]/80">{siteContent.teacher.role}</p>
              </div>

              {/* Animated owl sticker */}
              <motion.div 
                className="absolute -right-6 -top-10"
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="rounded-full border-4 border-[#0E1017] bg-white p-3 shadow-[0_6px_0_0_rgba(0,0,0,0.12)]">
                  <OwlIcon className="h-16 w-16" animate={false} />
                </div>
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 rounded-full border-4 border-[#0E1017] bg-[#FFD452] px-8 py-5 text-xl font-black text-[#0E1017] shadow-[0_6px_0_0_rgba(0,0,0,0.12)]"
            >
              10+ лет опыта
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
