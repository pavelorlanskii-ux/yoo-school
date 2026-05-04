"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";

export default function Benefits() {
  return (
    <section id="benefits" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle overline="Почему YOO SCHOOL" title="Удобная система, которая поддерживает" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.benefits.map((item, idx) => (
            <motion.div key={item} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: idx * 0.04 }}>
              <GlassCard className="h-full bg-gradient-to-br from-white/70 to-[#d7ebff]/60 p-5">
                <p className="text-lg font-bold text-[#0E1017]">{item}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
