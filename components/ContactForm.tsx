"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function ContactForm() {
  return (
    <section id="contact" className="section-padding bg-[#06313D]">
      <div className="container-xl min-w-0">
        <div className="grid min-w-0 gap-4 lg:grid-cols-[1fr_0.82fr] lg:items-stretch">
          <div className="min-w-0 rounded-[1.35rem] bg-[#24C7F4] p-6 sm:p-8 lg:p-10">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge bg-white"
            >
              бесплатный вводный урок
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="heading-lg studio-line mt-5 max-w-5xl"
            >
              Начните свой путь к свободному английскому
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              className="mt-6 max-w-2xl text-xl font-extrabold leading-tight text-[#07313D]"
            >
              Посетите бесплатный вводный урок. Определим уровень, цель и соберём программу обучения под ваш график.
            </motion.p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href="https://t.me/yoo_school" className="rounded-2xl bg-white p-5 text-base font-extrabold text-[#050505]">
                Telegram<br />{siteContent.contacts.telegram}
              </a>
              <a href={`tel:${siteContent.contacts.phone.replace(/\D/g, "")}`} className="rounded-2xl bg-white p-5 text-base font-extrabold text-[#050505]">
                Телефон<br />{siteContent.contacts.phone}
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 inline-flex items-center gap-4 rounded-2xl bg-[#06313D] p-3 pr-5 text-white"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white">
                <Image src="/images/teacher.png" alt={siteContent.teacher.name} fill className="object-cover object-top" />
              </div>
              <div>
                <p className="font-extrabold">{siteContent.teacher.name}</p>
                <p className="text-sm font-bold text-white/70">поможет выбрать формат</p>
              </div>
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-w-0 rounded-[1.35rem] bg-white p-5 sm:p-7 lg:p-8"
            action="#"
            method="post"
          >
            <h3 className="text-3xl font-extrabold leading-none tracking-[-0.055em] text-[#050505]">
              Запишитесь на бесплатную консультацию
            </h3>
            <p className="mt-3 text-base font-bold leading-snug text-[#5D646B]">
              Расскажем всё как есть и составим план обучения.
            </p>

            <div className="mt-6 grid min-w-0 gap-4">
              <input id="name" name="name" type="text" className="input" placeholder="Имя" />
              <input id="email" name="email" type="email" className="input" placeholder="Почта" />
              <input id="phone" name="phone" type="tel" className="input" placeholder="+7 (___) ___-__-__" />
              <input id="goal" name="goal" type="text" className="input" placeholder="Для чего хотите изучать язык?" />

              <button type="submit" className="btn btn-primary mt-2 w-full py-4 text-base">
                Отправить заявку
                <ArrowRight className="h-5 w-5" />
              </button>

              <div className="space-y-2 text-xs font-bold leading-snug text-[#8A9299]">
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
