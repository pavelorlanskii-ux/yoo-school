"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";

export default function DirectionCards() {
  return (
    <section id="directions" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle overline="Направления" title="Форматы под разные цели" subtitle="Крупные маршруты, в которых легко понять, с чего стартовать и куда двигаться дальше." />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {siteContent.directions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, rotate: index % 2 === 0 ? -0.8 : 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <GlassCard className="h-full bg-white/50 transition hover:bg-white/65">
                <div aria-hidden="true" className="mb-4 inline-flex rounded-full border border-[#0E1017]/15 bg-[#f7ffcf] px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-[#0E1017] shadow-[0_8px_24px_rgba(14,16,23,0.15)]">
                  sticker mode
                </div>
                <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-[#0066FF]">{item.sticker}</p>
                <h3 className="text-3xl font-black uppercase leading-tight text-[#0E1017]">{item.title}</h3>
                <p className="mt-4 text-[#2A3142]">{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
