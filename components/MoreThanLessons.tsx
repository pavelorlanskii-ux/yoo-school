"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { IconGraduation, IconHeadphones, IconChat, IconChart, IconRobot, IconGlobe } from "./Icons";

const Icons = [IconGraduation, IconHeadphones, IconChat, IconChart, IconRobot, IconGlobe];

const cardBgs = [
  "from-[#F4FFB8] to-[#DFFF42]",
  "from-[#FFE4D1] to-[#FFB27A]",
  "from-[#DBEAFE] to-[#93C5FD]",
  "from-[#FCE7F3] to-[#F9A8D4]",
  "from-[#EDE9FE] to-[#C4B5FD]",
  "from-[#D1FAE5] to-[#6EE7B7]",
];

export default function MoreThanLessons() {
  return (
    <section className="section-padding section-gray relative overflow-hidden">
      <div className="pointer-events-none absolute right-[-6rem] top-20 h-72 w-72 orb opacity-30 [--orb-from:#FF7AD9] [--orb-to:#7C3CFF]" aria-hidden="true" />
      <div className="container-xl min-w-0">
        <div className="mb-12 grid gap-7 lg:mb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge badge-purple"
            >
              Экосистема
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-lg mt-4 max-w-4xl"
            >
              {siteContent.moreThanLessons.title}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg font-semibold leading-relaxed text-[#68657A]"
          >
            {siteContent.moreThanLessons.subtitle}
          </motion.p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.moreThanLessons.items.map((item, idx) => {
            const IconComponent = Icons[idx % Icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: idx * 0.06 }}
                className="min-w-0"
              >
                <div className={`card-elevated relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${cardBgs[idx]} p-6 sm:p-7`}>
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/40 blur-xl" />
                  <div className="relative z-10 mb-5 flex items-center justify-between gap-4">
                    <div className="rounded-3xl bg-white/70 p-3 shadow-lg backdrop-blur">
                      <IconComponent size={58} className="h-12 w-12" />
                    </div>
                    <span className="text-5xl font-black leading-none tracking-[-0.08em] text-[#151427]/12">0{idx + 1}</span>
                  </div>

                  <h3 className="relative z-10 text-2xl font-black leading-none tracking-[-0.045em] text-[#151427]">
                    {item.title}
                  </h3>

                  <p className="relative z-10 mt-3 flex-1 text-base font-semibold leading-relaxed text-[#3A3654]/78">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
