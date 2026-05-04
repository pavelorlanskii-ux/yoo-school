"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function ContactForm() {
  return (
    <section id="contact" className="section-padding">
      <div className="creative-shell min-w-0">
        <div className="grid min-w-0 gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="creative-card relative min-h-[520px] overflow-hidden p-6 sm:p-8"
          >
            <span className="badge">финальный шаг</span>
            <h2 className="heading-lg mt-5 max-w-none lg:max-w-[14ch]">
              Заканчивай листать, давай креативить на английском
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-extrabold leading-tight text-[#5E5E58] sm:text-xl">
              Оставь заявку. Мы определим уровень, цель и предложим маршрут занятий с Дарьей или преподавателем команды.
            </p>
            <div className="absolute bottom-0 right-0 h-[52%] w-[68%] sm:h-[66%] sm:w-[48%]">
              <Image src="/images/teacher.png" alt={siteContent.teacher.name} fill className="object-cover object-top" />
            </div>
            <div className="absolute bottom-4 left-4 z-10 rounded-[1.1rem] bg-[#111111] p-4 text-[#F6F6F2] sm:bottom-6 sm:left-6 sm:rounded-[1.25rem] sm:p-5">
              <p className="text-sm font-extrabold text-white/60">пишите</p>
              <p className="mt-1 text-lg font-extrabold leading-none tracking-[-0.03em] sm:text-xl">{siteContent.contacts.telegram}</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="creative-lime min-w-0 p-6 sm:p-8 lg:p-10"
            action="#"
            method="post"
          >
            <h3 className="text-4xl font-extrabold leading-[0.92] tracking-[-0.05em] text-[#111111] sm:text-5xl lg:text-6xl">
              Бесплатный пробный урок
            </h3>
            <p className="mt-5 max-w-lg text-lg font-extrabold leading-tight text-[#5E5E58]">
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

              <div className="grid gap-2 text-xs font-extrabold leading-snug text-[#5E5E58] sm:grid-cols-2">
                <p>Даю согласие на обработку персональных данных</p>
                <p>Соглашаюсь на получение рекламы</p>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
