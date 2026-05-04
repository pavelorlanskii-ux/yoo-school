"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function TeacherBlock() {
  return (
    <section id="teacher" className="section-padding bg-white">
      <div className="container-xl">
        {/* Section header */}
        <div className="mb-12 lg:mb-16">
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
            className="heading-lg mt-4 max-w-3xl"
          >
            {siteContent.teacher.title}
          </motion.h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Teacher photo card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto max-w-md lg:mx-0"
          >
            <div className="card-elevated overflow-hidden rounded-3xl bg-gradient-to-br from-[#EDE9FE] to-[#DDD6FE] p-5 sm:p-6">
              {/* Photo */}
              <div className="photo-border-lime">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/teacher.png"
                    alt={`${siteContent.teacher.name} — ${siteContent.teacher.role}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="mt-5">
                <p className="text-xl font-bold text-[#1A1A2E] sm:text-2xl">
                  {siteContent.teacher.name}
                </p>
                <p className="mt-1 text-base text-gray-600">
                  {siteContent.teacher.role}
                </p>
              </div>

              {/* Badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-3 -top-3 rounded-xl bg-white px-4 py-2 shadow-lg sm:-right-4 sm:-top-4"
              >
                <p className="text-xl font-bold text-[#FF5C00] sm:text-2xl">10+</p>
                <p className="text-xs text-gray-500">лет опыта</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 sm:text-lg"
            >
              {siteContent.teacher.text}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-base text-gray-600 sm:text-lg"
            >
              {siteContent.teacher.teamText}
            </motion.p>

            {/* Facts */}
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {siteContent.teacher.facts.map((fact, idx) => (
                <motion.li
                  key={fact}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 rounded-xl bg-[#F8F9FA] px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#BFFF00] text-xs font-bold text-[#1A1A2E]">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-[#1A1A2E]">{fact}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
