"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const cardStyles = [
  "bg-gradient-to-br from-[#F0FFB3] to-[#E8FF8C]",
  "bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]",
  "bg-gradient-to-br from-[#FFE0CC] to-[#FFD1B3]",
  "bg-gradient-to-br from-[#FCE7F3] to-[#FBCFE8]",
  "bg-gradient-to-br from-[#EDE9FE] to-[#DDD6FE]",
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-[#F8F9FA]">
      <div className="container-xl min-w-0">
        {/* Section header */}
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
            className="heading-lg mx-auto mt-4 max-w-2xl"
          >
            Стоимость обучения
          </motion.h2>
        </div>

        {/* Pricing cards */}
        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {siteContent.pricing.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="min-w-0"
            >
              <div className={`${cardStyles[idx]} card-elevated flex h-full min-h-[220px] flex-col rounded-2xl p-5 sm:min-h-[240px] sm:p-6`}>
                {/* Label */}
                <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-600">
                  {plan.title}
                </span>

                {/* Price */}
                <p className="text-2xl font-bold text-[#1A1A2E] sm:text-3xl">
                  {plan.price}
                </p>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 sm:text-[0.9375rem]">
                  {plan.description}
                </p>

                {/* Free badge */}
                {idx === 0 && (
                  <div className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-white/60 px-3 py-1.5 text-xs font-semibold text-green-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Бесплатно
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 sm:text-base">
          {siteContent.pricingNote}
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="btn btn-primary px-8 py-4 text-base font-semibold"
          >
            Записаться на пробное занятие
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
