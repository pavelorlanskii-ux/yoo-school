"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";

const visuals = [
  "/images/ref/stickers.png",
  "/images/ref/bears-sky.png",
  "/images/ref/glass-dog.png",
];

export default function DirectionCards() {
  return (
    <section id="directions" className="section-padding pt-6">
      <div className="creative-shell">
        <div className="mb-7 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="badge">Направления</span>
            <h2 className="heading-lg mt-4 text-[#eef9ff] lg:max-w-[14ch]">Программы с 3D-подачей</h2>
          </div>
          <p className="max-w-3xl text-base font-extrabold leading-tight text-white/88 sm:text-lg">Школа, экзамены, взрослый и корпоративный английский. Каждая траектория собирается после диагностики уровня.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {siteContent.directions.map((item, index) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="liquid-card flex h-full min-w-0 flex-col p-5 sm:p-6">
              <span className="badge w-fit">{item.sticker}</span>
              <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={visuals[index]} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <h3 className="mt-4 text-3xl font-black leading-[0.92] tracking-[-0.03em] text-[#13355f]">{item.title}</h3>
              <p className="mt-4 flex-1 text-sm font-extrabold leading-tight text-[#355884] sm:text-base">{item.description}</p>
              <a href="#contact" className="btn btn-primary mt-auto w-fit px-6 py-3 text-sm">Выбрать <ArrowRight className="h-4 w-4" /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
