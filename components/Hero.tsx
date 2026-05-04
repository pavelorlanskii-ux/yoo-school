"use client";

import { motion } from "framer-motion";
import CharacterBadge from "./CharacterBadge";
import GlassCard from "./GlassCard";
import { siteContent } from "@/data/siteContent";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#c7ff4d_0,#f6f3ea_30%),radial-gradient(circle_at_80%_10%,#8ddcff_0,#f6f3ea_35%),radial-gradient(circle_at_80%_85%,#ffd452_0,#f6f3ea_40%)]" />
      <div aria-hidden="true" className="orbit-drift pointer-events-none absolute left-[6%] top-20 hidden h-24 w-24 rounded-[2rem] border border-white/60 bg-white/50 shadow-[0_20px_40px_rgba(14,16,23,0.14)] backdrop-blur-xl md:block" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[7%] top-28 hidden h-20 w-20 rounded-full border border-[#0E1017]/10 bg-[#ffd452]/65 shadow-[0_20px_45px_rgba(255,180,0,0.3)] blur-[1px] md:block" />
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="mb-5 inline-flex rounded-full bg-[#0E1017] px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">Modern Creative Education Brand</p>
          <h1 className="text-balance text-5xl font-black uppercase leading-[0.9] text-[#0E1017] sm:text-6xl lg:text-8xl">{siteContent.hero.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-[#2A3142] sm:text-xl">{siteContent.hero.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="rounded-full bg-[#0066FF] px-8 py-4 text-center text-base font-bold text-white shadow-[0_16px_40px_rgba(0,102,255,0.35)] transition hover:translate-y-[-2px] hover:bg-[#0051cb] hover:shadow-[0_20px_52px_rgba(0,102,255,0.44)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0066FF]">
              {siteContent.hero.ctaPrimary}
            </a>
            <a href="#directions" className="rounded-full border border-[#0E1017]/20 bg-white/80 px-8 py-4 text-center text-base font-bold text-[#0E1017] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0066FF]">
              {siteContent.hero.ctaSecondary}
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {siteContent.hero.badges.map((badge) => (
              <span key={badge} className="rounded-full border border-[#0E1017]/10 bg-white px-4 py-2 text-sm font-semibold text-[#0E1017]">{badge}</span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ y: -4, rotate: -0.4 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <GlassCard className="relative overflow-hidden bg-gradient-to-br from-[#0066ff]/30 via-white/55 to-[#7ce8ff]/35 p-8 sm:p-10">
            <div aria-hidden="true" className="absolute right-3 top-3 h-24 w-24 rounded-full bg-[#c7ff4d]/90 blur-xl" />
            <div aria-hidden="true" className="absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-[#ffd452]/70 blur-2xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-4 bottom-12 h-16 w-16 rounded-2xl border border-white/60 bg-white/45 shadow-[0_12px_30px_rgba(14,16,23,0.2)] backdrop-blur-xl" />
            <div className="relative rounded-[2rem] border border-white/50 bg-[#0E1017] p-8 text-white shadow-2xl">
              <p className="text-sm uppercase tracking-[0.16em] text-[#7ce8ff]">YOO interface</p>
              <p className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">ORLIK ONLINE</p>
              <p className="mt-3 max-w-xs text-sm text-white/80">Стильный digital-помощник рядом с вами на каждом этапе маршрута.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <CharacterBadge character="orlik" />
                <CharacterBadge character="bee" />
                <CharacterBadge character="flower" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
