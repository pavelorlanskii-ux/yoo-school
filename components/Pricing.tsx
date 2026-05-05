"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="creative-shell">
        <div className="poster-scene p-6 sm:p-8 lg:p-10">
          <h2 className="heading-lg max-w-none text-[#0f2b57] lg:max-w-[14ch]">Тарифы</h2>
          <p className="mt-4 max-w-3xl text-base font-extrabold leading-tight text-[#355884] sm:text-lg">Пробный урок и форматы под школу, экзамены, взрослых и корпоративные задачи.</p>

          <div className="mt-7 overflow-x-auto pb-2">
            <div className="grid min-w-[980px] gap-4 md:grid-cols-5">
              {siteContent.pricing.map((plan, idx) => (
                <motion.article key={plan.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }} className={`${idx === 0 ? "creative-purple" : "liquid-card"} flex min-h-[300px] flex-col p-5`}>
                  <span className="badge w-fit">{plan.title}</span>
                  <p className="mt-6 text-4xl font-black leading-none tracking-[-0.03em]">{plan.price}</p>
                  <p className="mt-4 flex-1 text-sm font-extrabold leading-tight opacity-90">{plan.description}</p>
                  <a href="#contact" className="btn btn-primary mt-auto w-full px-4 py-3 text-sm">Выбрать <ArrowRight className="h-4 w-4" /></a>
                </motion.article>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm font-extrabold text-[#40648f]">{siteContent.pricingNote}</p>
        </div>
      </div>
    </section>
  );
}
