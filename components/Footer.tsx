"use client";

import { siteContent } from "@/data/siteContent";
import Logo from "./Logo";

const footerColumns = [
  {
    title: "Обучение",
    items: ["Школьный английский", "ОГЭ и ЕГЭ", "Взрослый английский", "Корпоративное обучение", "Разговорная практика"],
  },
  {
    title: "Форматы",
    items: ["Индивидуальные занятия", "Диагностика уровня", "Домашняя практика", "Прогресс-трекинг", "ИИ-помощники"],
  },
  {
    title: "YOO SCHOOL",
    items: ["О подходе", "Преподаватели", "Стоимость", "FAQ", "Контакты"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <Logo className="h-10 w-auto" />
            <p className="mt-5 max-w-xl text-2xl font-extrabold leading-tight tracking-[-0.035em] text-[#050505] sm:text-3xl">
              {siteContent.footer.tagline}
            </p>
          </div>
          <div className="sky-panel p-5 sm:p-6">
            <p className="text-3xl font-extrabold leading-none tracking-[-0.055em] text-[#050505]">
              Бесплатно определим уровень и подберём программу обучения
            </p>
            <a href="#contact" className="mt-5 inline-flex items-center rounded-xl bg-[#050505] px-5 py-3 text-sm font-extrabold text-white">
              Записаться на вводный урок
            </a>
          </div>
        </div>

        <div className="grid min-w-0 gap-8 border-t border-black/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#5D646B]">Контакты</p>
            <div className="mt-4 space-y-3">
              <a href="https://t.me/yoo_school" className="block text-base font-extrabold text-[#050505] transition hover:text-[#129FC5]">
                {siteContent.contacts.telegram}
              </a>
              <a href={`tel:${siteContent.contacts.phone.replace(/\D/g, "")}`} className="block text-base font-extrabold text-[#050505] transition hover:text-[#129FC5]">
                {siteContent.contacts.phone}
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#5D646B]">{column.title}</p>
              <div className="mt-4 flex flex-col gap-2">
                {column.items.map((item) => (
                  <a key={item} href="#top" className="text-sm font-bold text-[#5D646B] transition hover:text-[#050505]">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-black/10 pt-6 md:flex-row md:items-center">
          <p className="text-xs font-bold text-[#8A9299]">
            © 2026 {siteContent.brand.name}. Все права защищены.
          </p>
          <p className="text-xs font-bold text-[#8A9299]">
            Creative education brand · English for kids, adults and teams
          </p>
        </div>
      </div>
    </footer>
  );
}
