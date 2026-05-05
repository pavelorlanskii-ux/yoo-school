"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { FloatingStar, GlassSpeechBubble, LiquidOrb } from "./CreativeArts";

export default function LearningPath() {
  return (
    <section id="path" className="section-padding">
      <div className="creative-shell">
        <div className="poster-scene p-6 sm:p-8 lg:p-10">
          <h2 className="heading-lg max-w-none text-[#0d2b55] lg:max-w-[14ch]">Как проходит обучение</h2>
          <p className="mt-4 max-w-3xl text-base font-extrabold leading-tight text-[#345780] sm:text-lg">
            Маршрут выглядит как трек с контрольными точками: диагностика, подбор преподавателя, индивидуальный план и видимый прогресс.
          </p>

          <div className="relative mt-8">
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent" aria-hidden="true" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siteContent.learningPath.map((item, idx) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  className="glass-panel relative flex min-h-[230px] flex-col p-5"
                >
                  <span className="badge w-fit">0{idx + 1}</span>
                  <h3 className="heading-md mt-6 text-[#12345f]">{item.step}</h3>
                  <p className="mt-3 text-sm font-extrabold leading-tight text-[#37618d] sm:text-base">{item.desc}</p>
                  {idx === 0 ? <FloatingStar className="floating-object motion-float h-8 w-8 right-4 top-3" /> : null}
                  {idx === 2 ? <GlassSpeechBubble className="floating-object motion-float-slow h-12 w-12 right-3 bottom-3" /> : null}
                  {idx === 3 ? <LiquidOrb className="floating-object motion-pulse h-9 w-9 right-4 top-8" /> : null}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
