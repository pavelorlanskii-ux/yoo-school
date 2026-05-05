"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { FloatingStar, LiquidOrb } from "./CreativeArts";

export default function TeacherBlock() {
  return (
    <section id="teacher" className="section-padding">
      <div className="creative-shell">
        <div className="poster-scene p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div className="glass-panel relative overflow-hidden p-5 sm:p-6">
              <FloatingStar className="floating-object motion-float h-9 w-9 right-5 top-5" />
              <LiquidOrb className="floating-object motion-pulse h-12 w-12 left-5 bottom-5" />
              <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-white/80 shadow-[0_20px_50px_rgba(34,84,132,0.28)] sm:h-60 sm:w-60">
                <Image
                  src="/images/teacher.png"
                  alt={siteContent.teacher.name}
                  fill
                  className="object-cover object-[50%_16%]"
                  sizes="240px"
                />
              </div>
              <p className="mt-5 text-center text-2xl font-black leading-tight text-[#10325f]">{siteContent.teacher.name}</p>
              <p className="mt-2 text-center text-sm font-extrabold text-[#3c628f]">{siteContent.teacher.role}</p>
            </div>

            <div>
              <h2 className="heading-lg max-w-none text-[#0d2b55] lg:max-w-[15ch]">Методика и команда под вашу цель</h2>
              <p className="mt-4 text-base font-extrabold leading-tight text-[#31547e] sm:text-lg">Дарья Орлянская — основатель и методический лидер YOO SCHOOL. Развивает проект, где английский подбирается под цель, возраст, уровень и темп ученика.</p>
              <p className="mt-3 text-base font-extrabold leading-tight text-[#31547e] sm:text-lg">В основе подхода: диагностика, индивидуальный маршрут, регулярная практика и поддержка между уроками.</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {siteContent.teacher.facts.map((fact, idx) => (
                  <motion.div key={fact} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="liquid-card p-4 text-sm font-extrabold leading-tight text-[#12355f] sm:text-base">
                    {fact}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="liquid-card p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="/images/ref/glass-dog.png" alt="Glossy dog reference" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
            <div className="liquid-card p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="/images/ref/bears-sky.png" alt="Glossy bears reference" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
