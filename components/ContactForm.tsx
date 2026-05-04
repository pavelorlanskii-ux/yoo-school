"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function ContactForm() {
  return (
    <section id="contact" className="section-padding bg-[#1A1A2E]">
      <div className="container-xl min-w-0">
        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left side - info */}
          <div className="min-w-0">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-[#FF5C00]/20 px-4 py-2 text-sm font-semibold text-[#FF5C00]"
            >
              Записаться
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 max-w-lg text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              Начните свой путь к{" "}
              <span className="text-[#BFFF00]">свободному английскому</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 max-w-lg text-base text-gray-400 sm:text-lg"
            >
              Посетите бесплатный вводный урок — составим программу обучения для вашей цели
            </motion.p>

            {/* Contact links */}
            <div className="mt-8 space-y-3">
              <a
                href="https://t.me/yoo_school"
                className="inline-flex min-w-0 max-w-full items-center gap-3 rounded-xl bg-white/10 px-4 py-4 text-base font-medium text-white transition hover:bg-white/15 sm:px-5"
              >
                <svg className="h-5 w-5 text-[#BFFF00]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span className="min-w-0 break-words">{siteContent.contacts.telegram}</span>
              </a>
              <a
                href={`tel:${siteContent.contacts.phone.replace(/\D/g, "")}`}
                className="inline-flex min-w-0 max-w-full items-center gap-3 rounded-xl bg-white/10 px-4 py-4 text-base font-medium text-white transition hover:bg-white/15 sm:px-5"
              >
                <svg className="h-5 w-5 text-[#FF5C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="min-w-0 break-words">{siteContent.contacts.phone}</span>
              </a>
            </div>

            {/* Teacher mini card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <div className="inline-flex items-center gap-4 rounded-xl bg-white/5 p-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src="/images/teacher.png"
                    alt={siteContent.teacher.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{siteContent.teacher.name}</p>
                  <p className="text-sm text-gray-400">Отвечу в течение дня</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-w-0 rounded-2xl bg-white p-5 sm:p-8"
            action="#"
            method="post"
          >
            <div className="grid min-w-0 gap-5">
              <div className="min-w-0">
                <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="name">
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Как к вам обращаться"
                />
              </div>

              <div className="grid min-w-0 gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="age">
                    Возраст / формат
                  </label>
                  <input
                    id="age"
                    name="age"
                    type="text"
                    className="input"
                    placeholder="14 / команда"
                  />
                </div>
                <div className="min-w-0">
                  <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="level">
                    Текущий уровень
                  </label>
                  <input
                    id="level"
                    name="level"
                    type="text"
                    className="input"
                    placeholder="С нуля / базовый"
                  />
                </div>
              </div>

              <div className="min-w-0">
                <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="goal">
                  Цель занятий
                </label>
                <input
                  id="goal"
                  name="goal"
                  type="text"
                  className="input"
                  placeholder="Школа, экзамен, работа..."
                />
              </div>

              <div className="min-w-0">
                <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="contactField">
                  Telegram или телефон
                </label>
                <input
                  id="contactField"
                  name="contactField"
                  type="text"
                  className="input"
                  placeholder="@username или номер"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary mt-2 w-full py-4 text-base font-semibold"
              >
                Записаться на вводное занятие
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <p className="text-center text-xs text-gray-500">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
