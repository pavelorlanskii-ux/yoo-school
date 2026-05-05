"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";
import { YooInflatable, YooJellyBear, YooTechOverlay } from "./CreativeArts";

export default function ContactForm() {
  return (
    <section id="contact" className="section-padding">
      <div className="creative-shell min-w-0">
        <div className="poster-scene min-h-[720px] p-5 sm:p-8 lg:p-10">
          <div className="tech-noise" />
          <div className="lens-flare left-[10%] top-[14%]" />
          <YooTechOverlay className="motion-art absolute inset-0 z-[1] h-full w-full opacity-24" />
          <YooInflatable className="motion-art motion-float-slow absolute -right-[12%] top-[2%] z-[2] h-[520px] w-[520px] opacity-70" />
          <YooJellyBear className="motion-art motion-float motion-delay-2 absolute bottom-[10%] left-[4%] z-[2] h-[220px] w-[220px] opacity-75" />

          <div className="relative z-10 grid min-w-0 gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="liquid-card relative min-h-[520px] overflow-hidden p-6 sm:p-8"
            >
              <span className="badge">final step</span>
              <h2 className="heading-lg mt-5 max-w-4xl">
                Начни английский в лёгком формате
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-extrabold leading-tight text-[#5F6876] sm:text-xl">
                Оставь заявку. Мы определим уровень, цель и предложим маршрут занятий с Дарьей или преподавателем команды.
              </p>
              <div className="absolute bottom-0 right-0 h-[54%] w-[68%] sm:h-[66%] sm:w-[48%]">
                <Image src="/images/teacher.png" alt={siteContent.teacher.name} fill className="object-cover object-top" />
              </div>
              <div className="absolute bottom-4 left-4 z-10 rounded-[1.1rem] bg-[#10131A]/88 p-4 text-white shadow-2xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:rounded-[1.25rem] sm:p-5">
                <p className="text-sm font-extrabold text-white/60">пишите</p>
                <p className="mt-1 text-lg font-extrabold leading-none tracking-[-0.03em] sm:text-xl">{siteContent.contacts.telegram}</p>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="liquid-card min-w-0 p-6 sm:p-8 lg:p-10"
              action="#"
              method="post"
            >
              <h3 className="text-4xl font-black leading-[0.92] tracking-[-0.05em] text-[#10131A] sm:text-5xl lg:text-6xl">
                Бесплатный пробный урок
              </h3>
              <p className="mt-5 max-w-lg text-lg font-extrabold leading-tight text-[#5F6876]">
                Расскажем всё как есть и составим план обучения.
              </p>

              <div className="mt-8 grid min-w-0 gap-5">
                <input id="name" name="name" type="text" className="input" placeholder="Имя" />
                <input id="phone" name="phone" type="tel" className="input" placeholder="Телефон" />
                <input id="email" name="email" type="email" className="input" placeholder="Email" />
                <input id="goal" name="goal" type="text" className="input" placeholder="Для чего хотите изучать язык?" />

                <button type="submit" className="btn btn-primary mt-2 w-full py-4 text-base">
                  Отправить заявку
                  <ArrowRight className="h-5 w-5" />
                </button>

                <div className="grid gap-2 text-xs font-extrabold leading-snug text-[#5F6876] sm:grid-cols-2">
                  <p>Даю согласие на обработку персональных данных</p>
                  <p>Соглашаюсь на получение рекламы</p>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
