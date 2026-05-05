"use client";

import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import { FloatingStar, LiquidOrb } from "./CreativeArts";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="section-padding pt-10">
      <div className="creative-shell">
        <div className="poster-scene p-6 sm:p-8 lg:p-10">
          <FloatingStar className="floating-object motion-float h-10 w-10 left-6 top-6" />
          <LiquidOrb className="floating-object motion-float-slow motion-delay-2 h-16 w-16 right-8 top-8" />

          <div className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <Logo className="h-10 w-auto" />
              <p className="mt-5 max-w-2xl text-xl font-extrabold leading-tight tracking-[-0.025em] text-[#0f2a57] sm:text-2xl">
                {siteContent.footer.tagline}
              </p>
            </div>
            <div className="glass-panel p-5">
              <p className="text-2xl font-extrabold leading-[0.95] tracking-[-0.03em] text-[#0f2a57]">Бесплатная диагностика уровня и подбор маршрута</p>
              <a href="#contact" className="btn btn-primary mt-5 px-5 py-3 text-sm">
                Записаться
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-6 border-t border-white/55 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#5f79a0]">Контакты</p>
              <a href="https://t.me/yoo_school" className="mt-3 block text-base font-extrabold text-[#0f2a57]">{siteContent.contacts.telegram}</a>
              <a href={`tel:${siteContent.contacts.phone.replace(/\D/g, "")}`} className="mt-2 block text-base font-extrabold text-[#0f2a57]">{siteContent.contacts.phone}</a>
            </div>
            {siteContent.navigation.slice(0, 3).map((item) => (
              <div key={item.href}>
                <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#5f79a0]">{item.label}</p>
                <a href={item.href} className="mt-3 block text-sm font-bold text-[#0f2a57]/85">Перейти к разделу</a>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="liquid-card p-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image src="/images/ref/stickers.png" alt="Glossy sticker reference" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
            <div className="liquid-card p-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image src="/images/ref/animals-grid.png" alt="3D animals reference" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-white/55 pt-4 text-xs font-bold text-[#6b84a8]">
            © 2026 {siteContent.brand.name}. Creative-tech english school.
          </div>
        </div>
      </div>
    </footer>
  );
}
