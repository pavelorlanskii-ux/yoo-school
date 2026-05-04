"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const cardBgs = [
  "bg-gradient-to-br from-[#F0FFB3] to-[#E8FF8C]",
  "bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]",
  "bg-gradient-to-br from-[#FCE7F3] to-[#FBCFE8]",
  "bg-gradient-to-br from-[#FFE0CC] to-[#FFD1B3]",
];

export default function Testimonials() {
  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="creative-shell min-w-0">
        {/* Section header */}
        <div className="mb-12 text-center lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-orange"
          >
            Отзывы
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg mx-auto mt-4 max-w-none lg:max-w-[14ch]"
          >
            Истории наших учеников
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2">
          {siteContent.testimonials.map((item, idx) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="min-w-0"
            >
              <div className={`${cardBgs[idx]} card-elevated flex h-full min-h-[220px] flex-col rounded-2xl p-6 sm:min-h-[260px] sm:p-8`}>
                {/* Quote icon */}
                <div className="mb-4 flex items-center justify-between">
                  <svg className="h-8 w-8 text-[#1A1A2E]/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <span className="rounded-full bg-white/50 px-3 py-1 text-xs font-semibold text-gray-600">
                    4.9 / 5
                  </span>
                </div>

                {/* Quote text */}
                <p className="flex-1 text-base font-medium leading-relaxed text-[#1A1A2E] sm:text-lg">
                  {item.text}
                </p>

                {/* Author */}
                <div className="mt-6">
                  <span className="inline-block rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-[#1A1A2E]">
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
