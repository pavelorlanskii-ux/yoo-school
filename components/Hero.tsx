"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { GlossyYooWord, InflatableY, JellyBear, LensSpark, LiquidOrb, TechOverlayArt, TranslucentCloud } from "./CreativeArts";

export default function Hero() {
  return (
    <section id="top" className="section-padding pb-8 pt-24 sm:pt-28">
      <div className="creative-shell">
        <div className="poster-scene min-h-[760px] p-5 sm:p-8 lg:p-10">
          <TechOverlayArt className="floating-object inset-y-0 right-0 h-full w-1/2 opacity-35" />
          <LensSpark className="right-[8%] top-[10%]" />
          <TranslucentCloud className="floating-object left-[5%] top-[18%] h-24 w-56 opacity-80" />
          <TranslucentCloud className="floating-object bottom-[18%] right-[10%] h-28 w-64 opacity-70" />
          <LiquidOrb className="floating-object motion-float right-[7%] top-[24%] h-24 w-24 opacity-75" />
          <LiquidOrb className="floating-object motion-float-slow bottom-[16%] left-[44%] h-16 w-16 opacity-70" />

          <div className="relative z-10 grid min-w-0 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="min-w-0">
              <span className="badge"><Sparkles className="h-4 w-4" />online creative english school</span>
              <h1 className="heading-xl mt-6 max-w-[12ch] text-[#0f2a57]">Английский, который ощущается легко</h1>
              <p className="mt-5 max-w-[58ch] text-base font-extrabold leading-tight text-[#355884] sm:text-lg lg:text-xl">{siteContent.hero.text}</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#contact" className="btn btn-primary w-full px-6 py-4 text-base sm:w-auto">{siteContent.hero.ctaPrimary}<ArrowRight className="h-5 w-5" /></a>
                <a href="#directions" className="btn btn-outline w-full px-6 py-4 text-base sm:w-auto">{siteContent.hero.ctaSecondary}</a>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {siteContent.hero.badges.map((badge) => (
                  <div key={badge} className="liquid-card min-h-[94px] p-4 text-sm font-extrabold leading-tight text-[#14335d]">{badge}</div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.52, delay: 0.05 }} className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[620px]">
              <GlossyYooWord className="floating-object motion-float-slow left-[-4%] top-[2%] z-[4] h-auto w-[92%] opacity-90" />
              <InflatableY className="floating-object motion-float left-[22%] top-[22%] z-[5] h-[58%] w-[58%]" />
              <JellyBear className="floating-object motion-float-slow motion-delay-2 bottom-[2%] right-[2%] z-[6] h-[34%] w-[34%]" />
              <div className="absolute bottom-[10%] left-[8%] z-[7] max-w-[280px] rounded-[1.4rem] border border-white/70 bg-white/52 p-4 shadow-2xl backdrop-blur-xl">
                <p className="text-xs font-black uppercase tracking-[0.1em] text-[#55749b]">learning route</p>
                <p className="mt-1 text-2xl font-black leading-[0.95] tracking-[-0.04em] text-[#0f2a57]">диагностика → маршрут → практика</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
