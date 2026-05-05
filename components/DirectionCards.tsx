"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { GlassSpeechBubble, GlossyBook, GlossyPencil, JellyBear, LiquidOrb } from "./CreativeArts";

const art = [GlossyBook, GlossyPencil, GlassSpeechBubble];
const styles = ["creative-lime", "liquid-card", "creative-purple"];

export default function DirectionCards() {
  return (
    <section id="directions" className="section-padding pt-6">
      <div className="creative-shell">
        <div className="mb-7 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="badge">Направления</span>
            <h2 className="heading-lg mt-4 max-w-4xl text-[#0f2a57]">Программы под разные цели</h2>
          </div>
          <p className="max-w-3xl text-base font-extrabold leading-tight text-[#355884] sm:text-lg">Школа, экзамены, взрослый и корпоративный английский. Каждая траектория собирается после диагностики уровня.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {siteContent.directions.map((item, index) => {
            const Art = art[index];
            return (
              <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className={`${styles[index]} relative flex h-full min-h-[430px] min-w-0 flex-col p-5 sm:p-6`}>
                <LiquidOrb className="floating-object -right-8 -top-8 h-28 w-28 opacity-60" />
                <span className="badge relative z-10 w-fit">0{index + 1}</span>
                <div className="relative z-10 mt-5 flex min-h-[160px] items-center justify-center">
                  <Art className="motion-float-slow h-44 w-56 max-w-full" />
                </div>
                <h3 className="relative z-10 mt-auto text-3xl font-black leading-[0.92] tracking-[-0.04em] text-[#13355f]">{item.title}</h3>
                <p className="relative z-10 mt-4 flex-1 text-sm font-extrabold leading-tight text-[#355884] sm:text-base">{item.description}</p>
                <a href="#contact" className="btn btn-primary relative z-10 mt-7 w-fit px-6 py-3 text-sm">Выбрать <ArrowRight className="h-4 w-4" /></a>
              </motion.article>
            );
          })}
        </div>

        <div className="poster-scene mt-4 grid gap-4 p-5 sm:p-7 lg:grid-cols-[1fr_0.62fr] lg:items-center">
          <div className="relative z-10">
            <span className="badge">для компаний</span>
            <h3 className="heading-lg mt-4 max-w-4xl text-[#0f2a57]">Корпоративное обучение</h3>
            <p className="mt-5 max-w-3xl text-base font-extrabold leading-tight text-[#355884] sm:text-lg">{siteContent.corporate.description}</p>
            <a href="#contact" className="btn btn-primary mt-7 px-7 py-4">{siteContent.corporate.cta}<ArrowRight className="h-5 w-5" /></a>
          </div>
          <div className="relative min-h-[260px]">
            <JellyBear className="floating-object motion-float right-[8%] top-[6%] h-56 w-56" />
            <GlassSpeechBubble className="floating-object motion-float-slow left-[4%] bottom-[4%] h-36 w-44" />
          </div>
        </div>
      </div>
    </section>
  );
}
