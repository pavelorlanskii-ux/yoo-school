"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CharacterBadge from "./CharacterBadge";
import SectionTitle from "./SectionTitle";
import { siteContent } from "@/data/siteContent";

export default function ContactForm() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#0E1017] to-[#1a1d26] p-8 sm:p-12 lg:p-16"
        >
          {/* Decorative elements */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#c7ff4d]/15 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#7ce8ff]/15 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute right-1/4 top-1/4 h-40 w-40 rounded-full bg-[#ffd452]/10 blur-2xl" />
          
          {/* Floating Orlik */}
          <div className="sticker-float absolute right-8 top-8 hidden h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-[0_12px_40px_rgba(0,0,0,0.3)] lg:flex">
            🦉
          </div>
          
          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            {/* Left side - info */}
            <div>
              <SectionTitle
                overline="Старт"
                title="Давайте найдём ваш маршрут в английском"
                subtitle="Расскажите, для кого нужны занятия и какая цель сейчас важнее всего. Мы подберём понятный формат и стартуем с пробного занятия."
                className="[&_*]:text-white [&_p:last-child]:text-white/75 [&_.inline-flex]:bg-white/15 [&_.inline-flex]:text-white [&_.h-1\\.5]:bg-[#c7ff4d]"
              />
              
              {/* Contact info */}
              <div className="mt-10 space-y-4">
                <a href="https://t.me/yoo_school" className="flex items-center gap-3 text-white/90 transition hover:text-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </div>
                  <span className="font-medium">{siteContent.contacts.telegram}</span>
                </a>
                <a href={`tel:${siteContent.contacts.phone.replace(/\D/g, "")}`} className="flex items-center gap-3 text-white/90 transition hover:text-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium">{siteContent.contacts.phone}</span>
                </a>
              </div>
              
              {/* Teacher mini avatar */}
              <div className="mt-10 flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white/30 shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
                  <Image
                    src="/images/teacher.png"
                    alt="Преподаватель"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">Преподаватель YOO</p>
                  <p className="text-sm text-white/60">Отвечу в течение дня</p>
                </div>
              </div>
              
              {/* Characters */}
              <div className="mt-8 flex flex-wrap gap-2">
                <CharacterBadge character="orlik" className="bg-white/95 text-[#0E1017]" />
                <CharacterBadge character="corgi" className="bg-white/95 text-[#0E1017]" />
              </div>
            </div>
            
            {/* Right side - form */}
            <form className="relative grid gap-4" action="#" method="post">
              <div>
                <label className="mb-2 block text-sm font-medium text-white/80" htmlFor="name">Имя</label>
                <input 
                  id="name" 
                  name="name" 
                  type="text" 
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 backdrop-blur-sm transition focus:border-[#7ce8ff]/50 focus:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ce8ff]" 
                  placeholder="Как к вам обращаться" 
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80" htmlFor="age">Возраст ученика</label>
                  <input 
                    id="age" 
                    name="age" 
                    type="text" 
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 backdrop-blur-sm transition focus:border-[#7ce8ff]/50 focus:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ce8ff]" 
                    placeholder="Например, 14" 
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80" htmlFor="level">Текущий уровень</label>
                  <input 
                    id="level" 
                    name="level" 
                    type="text" 
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 backdrop-blur-sm transition focus:border-[#7ce8ff]/50 focus:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ce8ff]" 
                    placeholder="С нуля / базовый / средний" 
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/80" htmlFor="goal">Цель занятий</label>
                <input 
                  id="goal" 
                  name="goal" 
                  type="text" 
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 backdrop-blur-sm transition focus:border-[#7ce8ff]/50 focus:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ce8ff]" 
                  placeholder="Школа, экзамен, разговорный" 
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/80" htmlFor="contactField">Telegram или телефон</label>
                <input 
                  id="contactField" 
                  name="contactField" 
                  type="text" 
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 backdrop-blur-sm transition focus:border-[#7ce8ff]/50 focus:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ce8ff]" 
                  placeholder="@username или номер" 
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/80" htmlFor="comment">Комментарий</label>
                <textarea 
                  id="comment" 
                  name="comment" 
                  rows={3} 
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 backdrop-blur-sm transition focus:border-[#7ce8ff]/50 focus:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ce8ff]" 
                  placeholder="Коротко расскажите, что важно именно сейчас" 
                />
              </div>

              <button 
                type="submit" 
                className="btn-lime mt-2 rounded-full px-8 py-5 text-base font-black text-[#0E1017] sm:text-lg"
              >
                Записаться на пробное занятие
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
