"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const gradients = [
  "card-gradient-lime",
  "card-gradient-cyan",
  "card-gradient-pink",
  "card-gradient-orange",
];
const accents = ["#BFFF00", "#22D3EE", "#EC4899", "#FF5C00"];

export default function Testimonials() {
  return (
    <section id="reviews" className="section-spacing relative px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="floating-shape absolute left-1/4 top-1/3 h-[400px] w-[400px] bg-[#EC4899] opacity-20" />
        <div className="floating-shape absolute right-1/3 bottom-1/4 h-[500px] w-[500px] bg-[#22D3EE] opacity-20" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section header */}
        <div className="mb-20 text-center lg:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-[#EC4899]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#EC4899]"
          >
            <span className="h-2 w-2 rounded-full bg-[#EC4899]" />
            Отзывы
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-inflate">Реальный</span>{" "}
            <span className="text-inflate-purple">прогресс</span>
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {siteContent.testimonials.map((item, idx) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className={`premium-card ${gradients[idx]} flex h-full min-h-[320px] flex-col p-8 sm:p-10`}>
                {/* Quote icon and number */}
                <div className="mb-8 flex items-center justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl font-black"
                    style={{ background: `${accents[idx]}20`, color: accents[idx] }}
                  >
                    {idx + 1}
                  </div>
                  <svg className="h-10 w-10 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote text */}
                <p className="flex-1 text-xl font-bold leading-snug text-white sm:text-2xl lg:text-3xl">
                  {item.text}
                </p>

                {/* Author */}
                <div className="mt-8">
                  <span
                    className="inline-block rounded-full px-5 py-3 text-sm font-medium"
                    style={{ background: `${accents[idx]}20`, color: accents[idx] }}
                  >
                    {item.author}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
