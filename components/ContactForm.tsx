"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

export default function ContactForm() {
  return (
    <section id="contact" className="dark-section relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
      {/* Scattered decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[5%] top-16 h-24 w-24 rounded-full bg-[#c7ff4d]" />
        <div className="absolute right-[8%] top-24 h-16 w-16 rounded-full bg-[#FF8DC7]" />
        <div className="absolute bottom-24 left-[12%] h-14 w-14 rounded-full bg-[#FFD452]" />
        <div className="absolute bottom-32 right-[15%] h-28 w-28 rounded-full border-[14px] border-[#7CE8FF] border-b-transparent border-l-transparent rotate-12" />
        <div className="absolute left-[35%] top-8 h-12 w-12 bg-[#9D6AFF]" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
        <div className="absolute right-[30%] bottom-16 h-10 w-10 rounded-full bg-[#FF6B2B]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left side - info */}
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block rounded-full border-4 border-white bg-[#FF6B2B] px-6 py-3 text-lg font-bold text-white"
            >
              Записаться
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-balance text-4xl font-black leading-[1.1] text-white sm:text-5xl lg:text-6xl"
            >
              Подберём преподавателя и маршрут под вашу цель
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-xl leading-relaxed text-white/70 sm:text-2xl"
            >
              Расскажите, для кого нужны занятия и зачем нужен английский. Мы определим стартовую точку, предложим формат и подберём преподавателя под задачу.
            </motion.p>
            
            {/* Contact info */}
            <div className="mt-12 space-y-4">
              <a href="https://t.me/yoo_school" className="sticker inline-flex items-center gap-4 rounded-2xl bg-[#c7ff4d] px-6 py-5 text-lg font-bold text-[#0E1017] transition hover:-translate-y-1">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                {siteContent.contacts.telegram}
              </a>
              <a href={`tel:${siteContent.contacts.phone.replace(/\D/g, "")}`} className="sticker inline-flex items-center gap-4 rounded-2xl bg-[#FFD452] px-6 py-5 text-lg font-bold text-[#0E1017] transition hover:-translate-y-1">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteContent.contacts.phone}
              </a>
            </div>
            
            {/* Teacher mini card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <div className="sticker inline-flex items-center gap-5 rounded-2xl bg-white p-5">
                <div className="photo-sticker relative h-16 w-16 overflow-hidden rounded-xl">
                  <Image
                    src="/images/teacher.png"
                    alt={siteContent.teacher.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#0E1017]">{siteContent.teacher.name}</p>
                  <p className="text-base text-[#0E1017]/60">Отвечу в течение дня</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right side - form */}
          <motion.form 
            initial={{ opacity: 0, y: 20, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            className="sticker-lg relative rounded-[2.5rem] bg-white p-8 sm:p-10" 
            action="#" 
            method="post"
          >
            <div className="grid gap-5">
              <div>
                <label className="mb-3 block text-base font-bold text-[#0E1017]" htmlFor="name">Имя</label>
                <input 
                  id="name" 
                  name="name" 
                  type="text" 
                  className="sticker w-full rounded-2xl border-0 bg-[#F6F3EA] px-6 py-5 text-lg font-medium text-[#0E1017] placeholder:text-[#0E1017]/40 focus:outline-none focus:ring-4 focus:ring-[#c7ff4d]/50" 
                  placeholder="Как к вам обращаться" 
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-3 block text-base font-bold text-[#0E1017]" htmlFor="age">Возраст / формат</label>
                  <input 
                    id="age" 
                    name="age" 
                    type="text" 
                    className="sticker w-full rounded-2xl border-0 bg-[#F6F3EA] px-6 py-5 text-lg font-medium text-[#0E1017] placeholder:text-[#0E1017]/40 focus:outline-none focus:ring-4 focus:ring-[#c7ff4d]/50" 
                    placeholder="14 / команда 10 чел" 
                  />
                </div>
                <div>
                  <label className="mb-3 block text-base font-bold text-[#0E1017]" htmlFor="level">Текущий уровень</label>
                  <input 
                    id="level" 
                    name="level" 
                    type="text" 
                    className="sticker w-full rounded-2xl border-0 bg-[#F6F3EA] px-6 py-5 text-lg font-medium text-[#0E1017] placeholder:text-[#0E1017]/40 focus:outline-none focus:ring-4 focus:ring-[#c7ff4d]/50" 
                    placeholder="С нуля / базовый / средний" 
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-base font-bold text-[#0E1017]" htmlFor="goal">Цель занятий</label>
                <input 
                  id="goal" 
                  name="goal" 
                  type="text" 
                  className="sticker w-full rounded-2xl border-0 bg-[#F6F3EA] px-6 py-5 text-lg font-medium text-[#0E1017] placeholder:text-[#0E1017]/40 focus:outline-none focus:ring-4 focus:ring-[#c7ff4d]/50" 
                  placeholder="Школа, экзамен, корпоративное обучение" 
                />
              </div>

              <div>
                <label className="mb-3 block text-base font-bold text-[#0E1017]" htmlFor="contactField">Telegram или телефон</label>
                <input 
                  id="contactField" 
                  name="contactField" 
                  type="text" 
                  className="sticker w-full rounded-2xl border-0 bg-[#F6F3EA] px-6 py-5 text-lg font-medium text-[#0E1017] placeholder:text-[#0E1017]/40 focus:outline-none focus:ring-4 focus:ring-[#c7ff4d]/50" 
                  placeholder="@username или номер" 
                />
              </div>

              <button 
                type="submit" 
                className="btn-orange mt-4 w-full rounded-full px-8 py-6 text-xl font-black"
              >
                Записаться на вводное занятие
              </button>
            </div>

            {/* Floating eyes sticker */}
            <motion.div 
              initial={{ rotate: -10 }}
              animate={{ rotate: 10 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -right-4 -top-4 flex h-18 w-18 items-center justify-center rounded-full border-4 border-[#0E1017] bg-white shadow-[0_6px_0_0_rgba(0,0,0,0.15)]"
            >
              <span className="text-3xl">👀</span>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
