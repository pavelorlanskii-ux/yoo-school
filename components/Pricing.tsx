"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

const plans = [
  { title: "5 уроков", price: "1 900 ₽ / урок", className: "creative-purple text-white", active: true },
  { title: "10 уроков", price: "1 700 ₽ / урок", className: "creative-card", active: false },
  { title: "20 уроков", price: "1 500 ₽ / урок", className: "creative-card", active: false },
  { title: "Корпоративно", price: "по запросу", className: "creative-card", active: false },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="creative-shell min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="creative-card overflow-hidden p-5 sm:p-8 lg:p-10"
        >
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <span className="badge">Тарифы</span>
              <h2 className="heading-lg mt-5 max-w-2xl">
                Обирай свой самый удобный тариф
              </h2>
              <p className="mt-5 max-w-xl text-lg font-extrabold leading-tight text-[#5E5E58]">
                Формат и интенсивность подбираем после диагностики. Можно начать с пробного урока и затем собрать пакет под цель.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {plans.map((plan) => (
                <div key={plan.title} className={`${plan.className} min-h-[280px] p-5`}>
                  <div className="mx-auto mb-8 flex h-16 w-36 items-center justify-center rounded-b-2xl bg-[#EAF7A2] text-xl font-extrabold text-[#111111]">
                    {plan.title}
                  </div>
                  <p className="text-3xl font-extrabold leading-none tracking-[-0.065em]">{plan.price}</p>
                  <div className="mt-6 space-y-3">
                    {["бесплатная диагностика", "домашняя практика", "гибкий график"].map((item) => (
                      <div key={item} className="flex gap-2 text-sm font-extrabold leading-tight">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <a href="#contact" className="btn btn-white mt-7 w-full px-5 py-3 text-sm">
                    Попробовать бесплатно
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#ECEDE8]">
              <Image
                src="/images/teacher.png"
                alt="Дарья Орлянская"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="creative-lime p-6">
                <h3 className="text-3xl font-extrabold leading-none tracking-[-0.06em]">Бесплатный пробный урок</h3>
                <div className="mt-6 space-y-3">
                  <input className="input" placeholder="Имя" />
                  <input className="input" placeholder="Телефон" />
                  <input className="input" placeholder="Email" />
                </div>
                <a href="#contact" className="btn btn-primary mt-6 w-full px-5 py-3 text-sm">
                  Записаться
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="creative-orange p-6 text-white">
                <h3 className="text-3xl font-extrabold leading-none tracking-[-0.06em]">Запишись на бесплатный урок и получи индивидуальный план</h3>
                <p className="mt-5 text-base font-extrabold leading-tight text-white/80">
                  Дарья или преподаватель команды подскажет оптимальный формат и темп занятий.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
