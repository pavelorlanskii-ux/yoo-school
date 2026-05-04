"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import Logo from "./Logo";

export default function TeacherBlock() {
  return (
    <section id="teacher" className="section-padding bg-[#F3F5F6]">
      <div className="creative-shell min-w-0">
        <div className="mb-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge bg-[#DFFF20]"
            >
              основатель и методический лидер
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="heading-lg mt-4 max-w-none"
            >
              Школа строится вокруг методики Дарьи Орлянской
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="max-w-2xl text-base font-bold leading-tight text-[#5D646B] sm:text-lg"
          >
            Здесь важен не просто преподаватель на уроке, а цельная система: диагностика, маршрут, подбор педагога, практика и контроль результата.
          </motion.p>
        </div>

        <div className="grid min-w-0 gap-3 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative min-h-[430px] overflow-hidden rounded-[1.45rem] bg-[#24C7F4] p-4 sm:min-h-[560px] lg:min-h-[620px]"
          >
            <div className="absolute left-4 top-4 z-20 max-w-[72%] rounded-2xl bg-white/95 px-3 py-2 sm:left-5 sm:top-5 sm:max-w-none sm:px-4 sm:py-3">
              <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[#5D646B]">YOO SCHOOL</p>
              <p className="text-lg font-extrabold leading-none tracking-[-0.03em] text-[#050505] sm:text-xl">{siteContent.teacher.name}</p>
            </div>
            <Image
              src="/images/teacher.png"
              alt={`${siteContent.teacher.name} — ${siteContent.teacher.role}`}
              fill
              className="object-cover object-[50%_12%] sm:object-[50%_14%] lg:object-[50%_16%]"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </motion.div>

          <div className="grid gap-3">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sky-panel-dark p-6 sm:p-8"
            >
              <Logo symbolOnly className="h-16 w-16" />
              <h3 className="mt-6 text-3xl font-extrabold leading-[0.92] tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
                {siteContent.teacher.title}
              </h3>
              <p className="mt-5 max-w-3xl text-lg font-bold leading-tight text-white/72">
                {siteContent.teacher.text}
              </p>
              <p className="mt-4 max-w-3xl text-lg font-bold leading-tight text-white/72">
                {siteContent.teacher.teamText}
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {siteContent.teacher.facts.map((fact, idx) => (
                <motion.div
                  key={fact}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className={`${idx === 0 ? "sky-panel" : "sky-card"} p-5`}
                >
                  <span className="text-sm font-extrabold text-[#5D646B]">0{idx + 1}</span>
                  <p className="mt-4 text-xl font-extrabold leading-[0.94] tracking-[-0.035em] text-[#050505] sm:text-2xl">{fact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
