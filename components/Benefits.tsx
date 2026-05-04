"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { IconChat, IconGlobe, IconChart, IconGraduation, IconHeadphones, IconRobot } from "./Icons";

const Icons = [IconChat, IconGlobe, IconChart, IconGraduation, IconHeadphones, IconRobot];

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-xl min-w-0">
        {/* Section header */}
        <div className="mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-purple"
          >
            Почему YOO SCHOOL
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg mt-4 max-w-3xl"
          >
            Больше чем просто уроки
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.benefits.map((item, idx) => {
            const IconComponent = Icons[idx % Icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group min-w-0"
              >
                <div className="card flex h-full min-h-[200px] flex-col rounded-2xl p-6 sm:min-h-[220px] sm:p-8">
                  <IconComponent size={56} className="mb-4 h-12 w-12 sm:h-14 sm:w-14" />

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
