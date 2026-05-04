"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const plans = [
  { title: "5 уроков", price: "1 900 ₽", label: "/ урок", className: "creative-purple text-white", accent: "bg-[#EAF7A2] text-[#111111]" },
  { title: "10 уроков", price: "1 700 ₽", label: "/ урок", className: "creative-card", accent: "bg-[#EAF7A2] text-[#111111]" },
  { title: "20 уроков", price: "1 500 ₽", label: "/ урок", className: "creative-card", accent: "bg-[#EAF7A2] text-[#111111]" },
  { title: "Команда", price: "по запросу", label: "", className: "creative-lime", accent: "bg-[#111111] text-[#F6F6F2]" },
];

const features = ["диагностика", "домашняя практика", "гибкий график"];

function Bullet({ active = false }: { active?: boolean }) {
  return (
    <span className={`${active ? "bg-[#EAF7A2] text-[#111111]" : "bg-[#111111] text-[#EAF7A2]"} mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-black`}>
      Y
    </span>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="creative-shell min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="creative-card p-5 sm:p-8 lg:p-10"
        >
          <div className="grid gap-6 xl:grid-cols-[0.6fr_1.4fr] xl:items-start">
            <div>
              <span className="badge">Тарифы</span>
              <h2 className="mt-5 max-w-[11ch] text-[clamp(2.4rem,5.5vw,5.2rem)] font-extrabold leading-[0.92] tracking-[-0.065em] text-[#111111]">
                Выбирай удобный тариф
              </h2>
              <p className="mt-5 max-w-xl text-lg font-extrabold leading-tight text-[#5E5E58]">
                Пакеты стали крупнее и понятнее: выбираем интенсивность после диагностики, а затем собираем маршрут под цель.
              </p>
            </div>

            <div className="grid min-w-0 gap-4 md:grid-cols-2 2xl:grid-cols-4">
              {plans.map((plan, index) => (
                <article key={plan.title} className={`${plan.className} flex min-h-[360px] min-w-0 flex-col p-6 sm:p-7`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className={`${plan.accent} rounded-[1rem] px-4 py-3 text-lg font-extrabold leading-none tracking-[-0.03em]`}>
                      {plan.title}
                    </div>
                    <span className="rounded-full border border-current/20 px-3 py-1 text-xs font-extrabold opacity-70">0{index + 1}</span>
                  </div>

                  <div className="mt-10">
                    <p className="text-5xl font-extrabold leading-none tracking-[-0.08em] sm:text-6xl">{plan.price}</p>
                    {plan.label && <p className="mt-1 text-2xl font-extrabold leading-none tracking-[-0.05em] opacity-80">{plan.label}</p>}
                  </div>

                  <div className="mt-8 space-y-4">
                    {features.map((item) => (
                      <div key={item} className="flex gap-3 text-sm font-extrabold leading-tight">
                        <Bullet active={index === 0} />
                        {item}
                      </div>
                    ))}
                  </div>

                  <a href="#contact" className="btn btn-primary mt-auto w-full px-5 py-3 text-sm">
                    Попробовать бесплатно
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] bg-[#ECEDE8] sm:min-h-[360px]">
              <Image
                src="/images/teacher.png"
                alt="Дарья Орлянская"
                fill
                className="object-cover object-[50%_12%] sm:object-[50%_14%]"
                sizes="(max-width: 1024px) 100vw, 36vw"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-[0.92fr_1.08fr]">
              <div className="creative-lime p-6">
                <h3 className="text-2xl font-extrabold leading-[0.92] tracking-[-0.04em] sm:text-3xl">Бесплатный пробный урок</h3>
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
                <h3 className="text-2xl font-extrabold leading-[0.92] tracking-[-0.04em] sm:text-3xl">Запишись на бесплатный урок и получи индивидуальный план</h3>
                <p className="mt-5 text-base font-extrabold leading-tight text-white/80">
                  Оригинальное фото Дарьи оставлено здесь и в форме заявки, как живой личный контакт с основателем школы.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
