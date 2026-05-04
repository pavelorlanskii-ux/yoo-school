"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { IconGraduation, IconHeadphones, IconChat, IconChart, IconRobot, IconGlobe } from "./Icons";

const Icons = [IconGraduation, IconHeadphones, IconChat, IconChart, IconRobot, IconGlobe];

const cardBgs = [
  "bg-gradient-to-br from-[#F0FFB3] to-[#E8FF8C]",
  "bg-gradient-to-br from-[#FFE0CC] to-[#FFD1B3]",
  "bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]",
  "bg-gradient-to-br from-[#FCE7F3] to-[#FBCFE8]",
  "bg-gradient-to-br from-[#EDE9FE] to-[#DDD6FE]",
  "bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0]",
];

export default function MoreThanLessons() {
  return (
    <section className="section-padding bg-[#F8F9FA]">
      <div className="container-xl">
        {/* Section header */}
        <div className="mb-12 lg:mb-16">
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
            className="heading-lg mt-4 max-w-3xl"
          >
            {siteContent.moreThanLessons.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl text-gray-600 sm:text-lg"
          >
            {siteContent.moreThanLessons.subtitle}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.moreThanLessons.items.map((item, idx) => {
            const IconComponent = Icons[idx % Icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className={`${cardBgs[idx]} card-elevated flex h-full min-h-[260px] flex-col rounded-2xl p-6 sm:p-8`}>
                  <IconComponent size={64} className="mb-4 h-12 w-12 sm:h-16 sm:w-16" />

                  <h3 className="text-lg font-bold text-[#1A1A2E] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm text-gray-600 sm:text-base">
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
