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
            <h2 className="heading-lg mt-5 max-w-4xl">
              Заканчивай листать, давай креативить на английском
            </h2>
            <p className="mt-6 max-w-xl text-xl font-extrabold leading-tight text-[#5E5E58]">
              Оставь заявку. Мы определим уровень, цель и предложим маршрут занятий с Дарьей или преподавателем команды.
            </p>
            <div className="absolute bottom-0 right-0 h-[58%] w-[62%] sm:h-[70%] sm:w-[48%]">
              <Image src="/images/teacher.png" alt={siteContent.teacher.name} fill className="object-cover object-top" />
            </div>
            <div className="absolute bottom-6 left-6 z-10 rounded-[1.25rem] bg-[#111111] p-5 text-[#F6F6F2]">
              <p className="text-sm font-extrabold text-white/60">пишите</p>
              <p className="mt-1 text-xl font-extrabold leading-none tracking-[-0.045em]">{siteContent.contacts.telegram}</p>
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
            <h3 className="text-5xl font-extrabold leading-none tracking-[-0.08em] text-[#111111] sm:text-6xl">
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
