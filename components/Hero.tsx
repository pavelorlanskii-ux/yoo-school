"use client";

import { motion } from "framer-motion";
import CharacterBadge from "./CharacterBadge";
import { siteContent } from "@/data/siteContent";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-24 pt-8 sm:px-6 sm:pb-32 sm:pt-12 lg:px-8 lg:pb-40 lg:pt-20">
      {/* Background gradient blobs */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_20%_0%,#c7ff4d_0,transparent_45%),radial-gradient(ellipse_60%_40%_at_85%_10%,#8ddcff_0,transparent_40%),radial-gradient(ellipse_70%_50%_at_75%_90%,#ffd452_0,transparent_45%),radial-gradient(ellipse_50%_30%_at_10%_80%,#f9d8ff_0,transparent_35%)]" 
      />
      
      {/* Floating decorative elements */}
      <div 
        aria-hidden="true" 
        className="orbit-drift pointer-events-none absolute left-[5%] top-24 hidden h-20 w-20 rounded-[1.5rem] border border-white/70 bg-white/60 backdrop-blur-xl float-element lg:block" 
      />
      <div 
        aria-hidden="true" 
        className="soft-pulse pointer-events-none absolute right-[8%] top-32 hidden h-16 w-16 rounded-full bg-gradient-to-br from-[#ffd452] to-[#ffb800] opacity-80 blur-[2px] lg:block" 
      />
      <div 
        aria-hidden="true" 
        className="sticker-float pointer-events-none absolute bottom-40 left-[12%] hidden h-14 w-14 rounded-2xl border border-[#c7ff4d]/60 bg-[#c7ff4d]/40 backdrop-blur-md lg:block" 
      />
      <div 
        aria-hidden="true" 
        className="orbit-drift pointer-events-none absolute bottom-32 right-[15%] hidden h-10 w-10 rounded-full border border-[#7ce8ff]/60 bg-[#7ce8ff]/50 lg:block" 
        style={{ animationDelay: "-3s" }} 
      />

      <div className="mx-auto w-full max-w-7xl">
        {/* Top brand badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center lg:justify-start"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0E1017] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_32px_rgba(14,16,23,0.25)]">
            <span className="h-2 w-2 rounded-full bg-[#c7ff4d]" />
            Modern Creative Education Brand
          </span>
        </motion.div>

        {/* Main headline - massive and impactful */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance text-center text-5xl font-black uppercase leading-[0.85] tracking-tight text-[#0E1017] sm:text-6xl md:text-7xl lg:text-left lg:text-8xl xl:text-[7rem]"
        >
          {siteContent.hero.title.split(" ").slice(0, 2).join(" ")}
          <br className="hidden sm:block" />
          <span className="relative inline-block">
            <span className="relative z-10">{siteContent.hero.title.split(" ").slice(2).join(" ")}</span>
            <span 
              aria-hidden="true" 
              className="absolute -bottom-1 left-0 -z-10 h-4 w-full bg-gradient-to-r from-[#c7ff4d] to-[#7ce8ff] opacity-60 sm:-bottom-2 sm:h-5 lg:h-6" 
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-[#2A3142] sm:text-xl lg:mx-0 lg:text-left"
        >
          {siteContent.hero.text}
        </motion.p>

        {/* CTA buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
        >
          <a 
            href="#contact" 
            className="btn-primary inline-flex w-full items-center justify-center rounded-full px-10 py-5 text-base font-bold text-white sm:w-auto sm:text-lg"
          >
            {siteContent.hero.ctaPrimary}
          </a>
          <a 
            href="#directions" 
            className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#0E1017]/15 bg-white/80 px-10 py-5 text-base font-bold text-[#0E1017] backdrop-blur-sm transition hover:border-[#0E1017]/30 hover:bg-white sm:w-auto sm:text-lg"
          >
            {siteContent.hero.ctaSecondary}
          </a>
        </motion.div>

        {/* Feature badges row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
        >
          {siteContent.hero.badges.map((badge, idx) => (
            <span 
              key={badge} 
              className="badge-pill inline-flex items-center gap-2 rounded-full border border-[#0E1017]/10 px-5 py-2.5 text-sm font-semibold text-[#0E1017]"
            >
              <span className={`h-2 w-2 rounded-full ${idx === 0 ? "bg-[#0066FF]" : idx === 1 ? "bg-[#c7ff4d]" : "bg-[#ffd452]"}`} />
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Hero visual card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto mt-16 max-w-xl lg:absolute lg:right-8 lg:top-40 lg:mx-0 lg:mt-0 lg:max-w-md xl:right-12 xl:max-w-lg"
        >
          {/* Decorative blobs behind card */}
          <div aria-hidden="true" className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#c7ff4d]/70 blur-2xl" />
          <div aria-hidden="true" className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-[#7ce8ff]/50 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-4 bottom-8 h-24 w-24 rounded-full bg-[#ffd452]/60 blur-xl" />
          
          {/* Main glass card */}
          <div className="glass-card-deep relative rounded-[2.5rem] p-6 sm:p-8">
            {/* Inner glossy highlight */}
            <div aria-hidden="true" className="absolute left-4 right-4 top-4 h-1/3 rounded-t-[2rem] bg-gradient-to-b from-white/50 to-transparent" />
            
            {/* Dark inner card */}
            <div className="relative rounded-[2rem] bg-gradient-to-br from-[#0E1017] to-[#1a1d26] p-6 text-white shadow-[0_20px_60px_rgba(14,16,23,0.4)] sm:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7ce8ff]">YOO interface</p>
                  <p className="mt-3 text-3xl font-black uppercase leading-none sm:text-4xl">ORLIK</p>
                  <p className="text-3xl font-black uppercase leading-none text-[#c7ff4d] sm:text-4xl">ONLINE</p>
                </div>
                {/* Orlik sticker */}
                <div className="sticker-float character-sticker flex h-16 w-16 items-center justify-center rounded-2xl sm:h-20 sm:w-20">
                  <span className="text-3xl sm:text-4xl">🦉</span>
                </div>
              </div>
              
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">
                Стильный digital-помощник рядом с вами на каждом этапе маршрута.
              </p>
              
              {/* Character badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <CharacterBadge character="orlik" />
                <CharacterBadge character="bee" />
                <CharacterBadge character="flower" />
              </div>
            </div>
          </div>

          {/* Floating mini card */}
          <div 
            aria-hidden="true" 
            className="orbit-drift absolute -left-8 bottom-16 hidden rounded-2xl border border-white/60 bg-white/70 p-4 shadow-[0_16px_40px_rgba(14,16,23,0.15)] backdrop-blur-xl lg:block"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[#0066FF]">Digital Vibe</p>
            <p className="mt-1 text-sm font-semibold text-[#0E1017]">Современный подход</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
