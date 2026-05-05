"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { YooJellyBear, YooOrb, YooPencil, YooTechOverlay } from "./CreativeArts";

const plans = [
  { title: "Пробный урок", price: "0 ₽", label: "старт", accent: "liquid-blue" },
  { title: "Школьный", price: "от 1 700 ₽", label: "урок", accent: "liquid-card" },
  { title: "Экзамены", price: "от 2 500 ₽", label: "цель", accent: "liquid-purple" },
  { title: "Команда", price: "по запросу", label: "b2b", accent: "liquid-sky" },
];

const features = ["диагностика", "практика", "маршрут"];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="creative-shell min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="poster-scene min-h-[860px] p-5 sm:p-8 lg:p-10"
        >
          <div className="tech-noise" />
          <div className="lens-flare right-[12%] top-[8%]" />
          <YooTechOverlay className="motion-art absolute inset-y-0 right-0 z-[1] h-full w-1/2 opacity-28" />
          <YooJellyBear className="motion-art motion-float absolute right-[4%] top-[10%] z-[2] h-[260px] w-[260px] opacity-90 sm:h-[340px] sm:w-[340px]" />
          <YooOrb className="motion-art motion-pulse-soft absolute bottom-[12%] left-[8%] z-[2] h-32 w-32 opacity-70 sm:h-44 sm:w-44" />
          <YooPencil className="motion-art motion-wiggle motion-delay-2 absolute bottom-[8%] right-[10%] z-[2] h-20 w-56 opacity-80" />

          <div className="relative z-10 grid gap-7 xl:grid-cols-[0.55fr_1.45fr] xl:items-start">
            <div>
              <span className="badge">Pricing system</span>
              <h2 className="mt-5 max-w-[11ch] text-[clamp(2.7rem,6.2vw,6.2rem)] font-black leading-[0.9] tracking-[-0.074em] text-[#10131A]">
                Выбирай формат
              </h2>
              <p className="mt-5 max-w-xl text-lg font-extrabold leading-tight text-[#5F6876] sm:text-xl">
                Стоимость и темп подбираем после диагностики. Визуально всё просто: выбираешь цель, мы собираем маршрут.
              </p>
            </div>

            <div className="grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {plans.map((plan, index) => (
                <article key={plan.title} className={`${plan.accent} relative flex min-h-[420px] min-w-0 flex-col overflow-hidden p-6 sm:p-7`}>
                  <div className="absolute -right-10 -top-10 h-32 w-32 jelly-object opacity-70" />
                  <div className="relative z-10 flex items-start justify-between gap-3">
                    <div className="rounded-full bg-white/56 px-4 py-2 text-sm font-black text-[#10131A] backdrop-blur">
                      {plan.title}
                    </div>
                    <span className="rounded-full bg-white/34 px-3 py-1 text-xs font-black text-[#10131A]/60 backdrop-blur">0{index + 1}</span>
                  </div>

                  <div className="relative z-10 mt-auto">
                    <p className="text-5xl font-black leading-[0.9] tracking-[-0.08em] sm:text-6xl">{plan.price}</p>
                    <p className="mt-2 text-xl font-black leading-none tracking-[-0.045em] opacity-70">{plan.label}</p>
                  </div>

                  <div className="relative z-10 mt-8 space-y-3">
                    {features.map((item) => (
                      <div key={item} className="flex gap-3 text-sm font-extrabold leading-tight">
                        <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-white/72 shadow-inner" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <a href="#contact" className="btn btn-primary relative z-10 mt-8 w-full px-5 py-3 text-sm">
                    Попробовать
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-8 grid gap-4 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div className="liquid-card relative min-h-[300px] overflow-hidden sm:min-h-[380px]">
              <Image
                src="/images/teacher.png"
                alt="Дарья Орлянская"
                fill
                className="object-cover object-[50%_12%] sm:object-[50%_14%]"
                sizes="(max-width: 1024px) 100vw, 36vw"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 to-transparent" />
            </div>
            <div className="liquid-card p-6 sm:p-8">
              <h3 className="max-w-3xl text-3xl font-black leading-[0.94] tracking-[-0.055em] text-[#10131A] sm:text-5xl">
                Бесплатный вводный урок и индивидуальный план обучения
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <input className="input" placeholder="Имя" />
                <input className="input" placeholder="Телефон" />
                <input className="input" placeholder="Email" />
              </div>
              <a href="#contact" className="btn btn-primary mt-6 w-full px-5 py-3 text-sm sm:w-fit">
                Записаться
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
