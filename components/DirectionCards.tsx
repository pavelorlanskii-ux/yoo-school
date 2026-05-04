"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/siteContent";
import { IconGraduation, IconHeadphones, IconChart, IconRobot } from "./Icons";

const cardConfigs = [
  { bg: "bg-gradient-to-br from-[#F0FFB3] to-[#E8FF8C]", Icon: IconGraduation, textColor: "text-[#1A1A2E]" },
  { bg: "bg-gradient-to-br from-[#FFE0CC] to-[#FFD1B3]", Icon: IconHeadphones, textColor: "text-[#1A1A2E]" },
  { bg: "bg-gradient-to-br from-[#EDE9FE] to-[#DDD6FE]", Icon: IconChart, textColor: "text-[#1A1A2E]" },
];

export default function DirectionCards() {
  return (
    <section id="directions" className="section-padding bg-white">
      <div className="container-xl min-w-0">
        {/* Section header */}
        <div className="mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge badge-lime"
          >
            Направления
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg mt-4 max-w-3xl"
          >
            Курсы и программы{" "}
            <span className="text-gradient-lime">по целям</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.directions.map((item, index) => {
            const config = cardConfigs[index];
            const IconComponent = config.Icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group min-w-0"
              >
                <div className={`${config.bg} card-elevated flex h-full min-h-[280px] flex-col rounded-2xl p-6 sm:min-h-[320px] sm:p-8 lg:min-h-[340px]`}>
                  {/* Icon */}
                  <div className="mb-6">
                    <IconComponent size={80} className="h-16 w-16 sm:h-20 sm:w-20" />
                  </div>

                  <h3 className={`text-xl font-bold ${config.textColor} sm:text-2xl`}>
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-base leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                  {/* Action */}
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-[#FF5C00] transition hover:gap-3"
                  >
                    Записаться
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Corporate banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <div className="card-dark flex min-w-0 flex-col items-center gap-6 rounded-2xl p-6 text-center sm:p-8 lg:flex-row lg:gap-10 lg:p-10 lg:text-left">
            {/* Icon */}
            <IconRobot size={96} className="h-20 w-20 shrink-0 sm:h-24 sm:w-24" />

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                {siteContent.corporate.title}
              </h3>
              <p className="mt-2 text-base text-gray-400 sm:text-lg">
                {siteContent.corporate.description}
              </p>
            </div>

            <a
              href="#contact"
              className="btn btn-lime shrink-0 px-8 py-4 font-semibold"
            >
              {siteContent.corporate.cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
