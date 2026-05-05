"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function ContactForm() {
  return (
    <section id="contact" className="section-padding">
      <div className="creative-shell">
        <div className="poster-scene p-6 sm:p-8 lg:p-10">
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="liquid-card p-5 sm:p-7">
              <span className="badge">старт</span>
              <h2 className="heading-lg mt-5 max-w-none text-[#0f2b57] lg:max-w-[13ch]">Давайте соберем ваш маршрут</h2>
              <p className="mt-4 text-base font-extrabold leading-tight text-[#355884] sm:text-lg">Расскажите, для кого занятия и какая цель важнее всего. Подберем формат и стартуем с пробного урока.</p>

              <div className="mt-6 grid grid-cols-[auto_1fr] items-center gap-3 rounded-xl bg-white/70 p-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image src="/images/teacher.png" alt={siteContent.teacher.name} fill className="object-cover object-[50%_16%]" sizes="48px" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-[#12345f]">{siteContent.teacher.name}</p>
                  <p className="text-xs font-bold text-[#5074a0]">методический лидер YOO SCHOOL</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="badge">{siteContent.contacts.telegram}</span>
                <span className="badge">{siteContent.contacts.phone}</span>
              </div>
            </motion.div>

            <motion.form initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel p-5 sm:p-8" action="#" method="post">
              <h3 className="heading-md text-[#0f2b57]">Записаться на пробное занятие</h3>
              <div className="mt-5 grid gap-4">
                <input id="name" name="name" type="text" className="input" placeholder="Имя" />
                <input id="age" name="age" type="text" className="input" placeholder="Возраст ученика" />
                <input id="goal" name="goal" type="text" className="input" placeholder="Цель занятий" />
                <input id="level" name="level" type="text" className="input" placeholder="Текущий уровень" />
                <input id="contactField" name="contactField" type="text" className="input" placeholder="Telegram или телефон" />
                <textarea id="comment" name="comment" rows={4} className="input min-h-[120px] resize-none" placeholder="Комментарий" />
                <button type="submit" className="btn btn-primary mt-2 w-full py-4 text-base">Записаться <ArrowRight className="h-5 w-5" /></button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
