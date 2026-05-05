"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function Hero() {
  return (
    <section id="top" className="section-padding pb-6 pt-24 sm:pt-28">
      <div className="creative-shell">
        <div className="poster-scene p-5 sm:p-8 lg:p-10">
          <div className="grid min-w-0 gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="min-w-0">
              <span className="badge"><Sparkles className="h-4 w-4" />online creative english school</span>
              <h1 className="heading-xl mt-6 max-w-none text-[#0f2a57] lg:max-w-[14ch]">Английский, который ощущается легко</h1>
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

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.52, delay: 0.05 }} className="liquid-card p-3 sm:p-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem]">
                <Image src="/images/ref/animals-grid.png" alt="Glossy 3D mascot references" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <p className="mt-4 text-sm font-extrabold text-[#355884] sm:text-base">3D визуальный стиль YOO SCHOOL: glossy mascots, air-light среда и мягкие объемные формы.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
