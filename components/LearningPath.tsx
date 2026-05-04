"use client";

import { siteContent } from "@/data/siteContent";
import SectionTitle from "./SectionTitle";
import CharacterBadge from "./CharacterBadge";

export default function LearningPath() {
  return (
    <section id="path" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl rounded-[2.5rem] bg-[#0E1017] p-8 text-white sm:p-10 lg:p-14">
        <SectionTitle overline="Как проходит обучение" title="Маршрут без хаоса" subtitle="От знакомства до измеримого результата: шаг за шагом, в комфортном темпе." className="[&_*]:text-white [&_p:last-child]:text-white/80" />
        <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {siteContent.learningPath.map((step, idx) => (
            <li key={step} className="rounded-3xl border border-white/20 bg-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#c7ff4d]">Шаг {idx + 1}</p>
              <p className="mt-3 text-2xl font-black uppercase leading-tight">{step}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <CharacterBadge character="orlik" className="bg-white/90 text-[#0E1017]" />
          <CharacterBadge character="deer" className="bg-white/90 text-[#0E1017]" />
        </div>
      </div>
    </section>
  );
}
