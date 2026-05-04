"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";

const cardStyles = [
  "from-[#F4FFB8] to-[#BFFF00]",
  "from-[#DBEAFE] to-[#93C5FD]",
  "from-[#FFE0CC] to-[#FF9D57]",
  "from-[#FCE7F3] to-[#F9A8D4]",
  "from-[#EDE9FE] to-[#BFA9FF]",
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding section-gray relative overflow-hidden">
      <div className="container-xl min-w-0">
        <div className="mb-12 text-center lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-lime"
          >
            Стоимость
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg mx-auto mt-4 max-w-4xl"
          >
            Стартуем с диагностики, потом собираем <span className="text-gradient-lime">точный формат</span>
          </motion.h2>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {siteContent.pricing.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: idx * 0.05 }}
              className="min-w-0"
            >
              <div className={`card-elevated relative flex h-full min-h-[270px] flex-col overflow-hidden rounded-[1.8rem] bg-gradient-to-br ${cardStyles[idx]} p-6`}>
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/42 blur-xl" />
                <span className="relative z-10 mb-4 text-xs font-black uppercase tracking-[0.08em] text-[#151427]/60">
                  {plan.title}
                </span>

                <p className="relative z-10 text-4xl font-black leading-none tracking-[-0.06em] text-[#151427]">
                  {plan.price}
                </p>

                <p className="relative z-10 mt-4 flex-1 text-base font-semibold leading-relaxed text-[#3A3654]/78">
                  {plan.description}
                </p>

                {idx === 0 ? (
                  <div className="relative z-10 mt-5 inline-flex items-center gap-2 self-start rounded-full bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.06em] text-[#416300] shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-[#84B800]" />
                    Бесплатно
                  </div>
                ) : (
                  <a href="#contact" className="relative z-10 mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-black text-[#151427] shadow-sm transition hover:gap-3">
                    выбрать
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-full bg-white/70 px-6 py-4 text-center shadow-sm backdrop-blur">
          <p className="text-base font-bold text-[#68657A]">{siteContent.pricingNote}</p>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="btn btn-primary px-8 py-4 text-base font-black"
          >
            Записаться на пробное занятие
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
