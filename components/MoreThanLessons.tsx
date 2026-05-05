"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function MoreThanLessons() {
  return (
    <section className="section-padding">
      <div className="creative-shell">
        <div className="poster-scene p-6 sm:p-8 lg:p-10">
          <h2 className="heading-lg max-w-none text-[#0f2b57] lg:max-w-[15ch]">Экосистема обучения YOO SCHOOL</h2>
          <p className="mt-4 max-w-3xl text-base font-extrabold leading-tight text-[#355884] sm:text-lg">Уроки, домашняя практика, разговорные сценарии и контроль прогресса работают как единый продукт.</p>

          <div className="mt-7 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="liquid-card p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="/images/ref/bears-sky.png" alt="3D ecosystem visual" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {siteContent.moreThanLessons.items.map((item, idx) => (
                <motion.article key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className={`${idx % 3 === 0 ? "creative-lime" : "liquid-card"} min-h-[160px] p-5`}>
                  <h3 className="text-xl font-black leading-tight text-[#14345f]">{item.title}</h3>
                  <p className="mt-2 text-sm font-extrabold leading-tight text-[#355884]">{item.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
