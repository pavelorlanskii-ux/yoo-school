"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

const iconMap = [
  "/images/icon-chat.png",
  "/images/icon-globe.png", 
  "/images/icon-chart.png",
  "/images/icon-graduation.png",
  "/images/icon-headphones.png",
  "/images/icon-robot.png",
];

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-xl">
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.benefits.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group"
            >
              <div className="card flex h-full min-h-[220px] flex-col rounded-2xl p-6 sm:p-8">
                <Image
                  src={iconMap[idx]}
                  alt=""
                  width={64}
                  height={64}
                  className="icon-3d mb-4 h-12 w-12 sm:h-14 sm:w-14"
                />

                <h3 className="text-lg font-bold text-[#1A1A2E] sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 flex-1 text-sm text-gray-600 sm:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
