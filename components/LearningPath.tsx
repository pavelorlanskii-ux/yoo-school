"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";

const stepColors = ["#BFFF00", "#FF5C00", "#8B5CF6", "#3B82F6"];

export default function LearningPath() {
  return (
    <section id="path" className="section-padding bg-[#F8F9FA]">
      <div className="container-xl min-w-0">
        {/* Section header */}
        <div className="mb-12 text-center lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-orange"
          >
            Как проходит обучение
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg mx-auto mt-4 max-w-3xl"
          >
            Добейтесь{" "}
            <span className="text-gradient-orange">реальных результатов</span>{" "}
            с нашей экосистемой
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-gray-600 sm:text-lg"
          >
            От знакомства до измеримого результата: шаг за шагом, в комфортном темпе.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid min-w-0 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.learningPath.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group min-w-0"
            >
              <div className="card-elevated flex h-full min-h-[220px] flex-col rounded-2xl p-6 sm:min-h-[240px] sm:p-8 lg:min-h-[260px]">
                {/* Step number */}
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white"
                  style={{ background: stepColors[idx] }}
                >
                  {idx + 1}
                </div>

                <h3 className="text-lg font-bold text-[#1A1A2E] sm:text-xl">
                  {item.step}
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
