"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function TeacherBlock() {
  return (
    <section id="teacher" className="section-padding bg-white">
      <div className="container-xl min-w-0">
        <div className="mb-10 lg:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-purple"
          >
            Основатель и команда
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg mt-3 max-w-3xl sm:mt-4"
          >
            {siteContent.teacher.title}
          </motion.h2>
        </div>

        <div className="grid min-w-0 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-full min-w-0 max-w-md lg:mx-0"
          >
            <div className="card-elevated overflow-hidden rounded-3xl bg-gradient-to-br from-[#EDE9FE] to-[#DDD6FE] p-4 sm:p-6">
              <div className="photo-border-lime">
                <div className="relative aspect-[4/5] w-full min-w-0 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/teacher.png"
                    alt={`${siteContent.teacher.name} — ${siteContent.teacher.role}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-start justify-between gap-3 sm:mt-5">
                <div className="min-w-0 flex-1">
                  <p className="text-lg font-bold text-[#1A1A2E] sm:text-xl lg:text-2xl">{siteContent.teacher.name}</p>
                  <p className="mt-1 text-sm text-gray-600 sm:text-base">{siteContent.teacher.role}</p>
                </div>
                <div className="shrink-0 rounded-xl border border-gray-100 bg-white px-3 py-2 shadow-md sm:px-4 sm:py-2">
                  <p className="text-lg font-bold text-[#FF5C00] sm:text-xl lg:text-2xl">10+</p>
                  <p className="text-xs text-gray-500">лет опыта</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base leading-relaxed text-gray-600 sm:text-lg"
            >
              {siteContent.teacher.text}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg"
            >
              {siteContent.teacher.teamText}
            </motion.p>

            <ul className="mt-8 grid min-w-0 gap-3 sm:grid-cols-2">
              {siteContent.teacher.facts.map((fact, idx) => (
                <motion.li
                  key={fact}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex min-w-0 items-center gap-3 rounded-xl bg-[#F8F9FA] px-3 py-3 sm:px-4"
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#BFFF00] text-xs font-bold text-[#1A1A2E]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="min-w-0 text-sm font-medium leading-snug text-[#1A1A2E] sm:text-[0.9375rem]">{fact}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
