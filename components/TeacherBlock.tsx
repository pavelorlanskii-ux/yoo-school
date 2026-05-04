"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function TeacherBlock() {
  return (
    <section id="teacher" className="section-spacing relative px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="floating-shape absolute -left-40 top-1/4 h-[600px] w-[600px] bg-[#A855F7] opacity-20" />
        <div className="floating-shape absolute -right-60 bottom-1/4 h-[500px] w-[500px] bg-[#BFFF00] opacity-20" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Section header */}
        <div className="mb-20 lg:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-[#A855F7]/10 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-[#A855F7]"
          >
            <span className="h-2 w-2 rounded-full bg-[#A855F7]" />
            Основатель и команда
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-inflate">{siteContent.teacher.title}</span>
          </motion.h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          {/* Text content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-white/70 sm:text-xl lg:text-2xl"
            >
              {siteContent.teacher.text}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg leading-relaxed text-white/60 sm:text-xl"
            >
              {siteContent.teacher.teamText}
            </motion.p>

            {/* Facts */}
            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {siteContent.teacher.facts.map((fact, idx) => {
                const colors = ["#BFFF00", "#FF5C00", "#22D3EE", "#EC4899", "#A855F7"];
                return (
                  <motion.li
                    key={fact}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="glass flex items-center gap-4 rounded-2xl px-6 py-5"
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
                      style={{ background: `${colors[idx % colors.length]}20`, color: colors[idx % colors.length] }}
                    >
                      ✓
                    </span>
                    <span className="text-base font-medium text-white/80 sm:text-lg">{fact}</span>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Teacher photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none"
          >
            {/* Glow */}
            <div
              className="absolute -inset-8 rounded-[3rem] opacity-50"
              style={{
                background: "linear-gradient(135deg, rgba(168,85,247,0.4) 0%, rgba(191,255,0,0.4) 100%)",
                filter: "blur(60px)",
              }}
            />

            {/* Card */}
            <div className="premium-card relative p-6 sm:p-8">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#A855F7]/10 via-transparent to-[#BFFF00]/10" />

              {/* Photo */}
              <div className="photo-frame relative">
                <div className="photo-frame-inner aspect-[4/5]">
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
              <div className="relative mt-6">
                <p className="text-2xl font-black text-white sm:text-3xl lg:text-4xl">
                  {siteContent.teacher.name}
                </p>
                <p className="mt-2 text-base text-white/60 sm:text-lg">
                  {siteContent.teacher.role}
                </p>
              </div>

              {/* Badge */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -right-5 glass-strong rounded-2xl px-6 py-4"
              >
                <p className="text-3xl font-black text-[#BFFF00]">10+</p>
                <p className="text-sm text-white/60">лет опыта</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
