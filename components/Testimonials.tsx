"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

export default function Testimonials() {
  return (
    <section id="reviews" className="section-padding pt-6">
      <div className="creative-shell">
        <h2 className="heading-lg max-w-none text-[#eef9ff] lg:max-w-[13ch]">Мини-кейсы учеников</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {siteContent.testimonials.map((item, idx) => (
            <motion.article
              key={item.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="liquid-card min-h-[220px] p-6"
            >
              <p className="text-base font-extrabold leading-tight text-[#12345f] sm:text-lg">{item.text}</p>
              <p className="mt-6 text-sm font-extrabold text-[#4b6f99]">{item.author}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
