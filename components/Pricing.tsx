"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-[#F3F5F6]">
      <div className="container-xl min-w-0">
        <div className="mb-7">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-lg max-w-4xl"
          >
            Стоимость обучения
          </motion.h2>
          <p className="mt-4 max-w-2xl text-lg font-bold leading-tight text-[#5D646B]">
            Расскажем всё об обучении и подберём программу под вашу цель, уровень и график.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-3 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sky-panel-dark p-6 sm:p-8"
          >
            <span className="badge bg-[#24C7F4] text-[#050505]">популярно</span>
            <h3 className="mt-5 text-5xl font-black leading-none tracking-[-0.07em] text-white sm:text-6xl">
              от 13 900 ₽ / в месяц
            </h3>
            <p className="mt-4 text-xl font-black leading-tight text-white">
              Индивидуальные занятия с преподавателем на выбор
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Доступ к онлайн-тренажёрам",
                "Прогресс-тесты",
                "Гибкий график",
                "Практика между уроками",
                "Персональный маршрут",
                "Поддержка преподавателя",
              ].map((item) => (
                <div key={item} className="flex gap-2 text-sm font-bold leading-tight text-white/78">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#24C7F4]" />
                  {item}
                </div>
              ))}
            </div>
            <a href="#contact" className="btn btn-white mt-7 px-7 py-4">
              Попробовать бесплатно
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          <div className="grid gap-3">
            {siteContent.pricing.slice(1, 4).map((plan, idx) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.36, delay: idx * 0.05 }}
                className="sky-card p-5"
              >
                <span className="badge bg-[#E9EDF0]">{plan.title}</span>
                <p className="mt-4 text-4xl font-black leading-none tracking-[-0.065em] text-[#050505]">
                  {plan.price}
                </p>
                <p className="mt-3 text-base font-bold leading-snug text-[#5D646B]">
                  {plan.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="sky-panel p-6">
            <h3 className="text-3xl font-black leading-none tracking-[-0.06em] text-[#050505]">Учитесь сейчас, платите потом</h3>
            <p className="mt-3 text-base font-bold leading-snug text-[#07313D]">Разделим стоимость курса на удобные платежи. Точные условия подберём после консультации.</p>
          </div>
          <div className="sky-card p-6">
            <h3 className="text-3xl font-black leading-none tracking-[-0.06em] text-[#050505]">{siteContent.pricingNote}</h3>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-base font-black text-[#050505]">
              Получить консультацию
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
