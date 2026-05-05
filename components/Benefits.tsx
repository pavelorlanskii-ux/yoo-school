"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding pt-6">
      <div className="creative-shell">
        <h2 className="heading-lg max-w-none text-[#eef9ff] lg:max-w-[14ch]">Почему выбирают YOO SCHOOL</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.benefits.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="liquid-card min-h-[190px] p-5"
            >
              <span className="badge">0{idx + 1}</span>
              <h3 className="mt-5 text-2xl font-black leading-tight text-[#11325f]">{item.title}</h3>
              <p className="mt-3 text-sm font-extrabold leading-tight text-[#355c88]">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
