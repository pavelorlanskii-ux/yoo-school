"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const gradients = [
  "card-gradient-lime",
  "card-gradient-cyan",
  "card-gradient-orange",
  "card-gradient-pink",
  "card-gradient-purple",
];
const accents = ["#BFFF00", "#22D3EE", "#FF5C00", "#EC4899", "#A855F7"];

export default function Pricing() {
  return (
    <section id="pricing" className="section-spacing relative px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="floating-shape absolute left-1/3 top-1/4 h-[500px] w-[500px] bg-[#BFFF00] opacity-15" />
        <div className="floating-shape absolute right-1/4 bottom-1/3 h-[400px] w-[400px] bg-[#FF5C00] opacity-15" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section header */}
        <div className="mb-20 text-center lg:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-glow"
          >
            Цены
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-inflate">Понятные</span>{" "}
            <span className="text-inflate-lime">форматы</span>
          </motion.h2>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-6">
          {siteContent.pricing.map((plan, idx) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group"
            >
              <div className={`premium-card ${gradients[idx]} flex h-full min-h-[350px] flex-col p-7 sm:p-8`}>
                {/* Label */}
                <span
                  className="mb-4 text-xs font-bold uppercase tracking-wider"
                  style={{ color: accents[idx] }}
                >
                  {plan.title}
                </span>

                {/* Price */}
                <p className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                  {plan.price}
                </p>

                {/* Description */}
                <p className="mt-4 flex-1 text-sm text-white/60 sm:text-base lg:text-lg">
                  {plan.description}
                </p>

                {/* Free badge for first item */}
                {idx === 0 && (
                  <div
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-xs font-bold uppercase"
                    style={{ background: `${accents[idx]}20`, color: accents[idx] }}
                  >
                    <span className="h-2 w-2 rounded-full" style={{ background: accents[idx] }} />
                    Бесплатно
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-base text-white/50 sm:text-lg">
          {siteContent.pricingNote}
        </p>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="btn-glossy btn-lime px-10 py-5 text-lg font-bold sm:px-12 sm:py-6 sm:text-xl"
          >
            Записаться на пробное занятие
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
