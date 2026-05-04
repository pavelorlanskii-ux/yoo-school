import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";

export default function TeacherBlock() {
  return (
    <section id="teacher" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <SectionTitle overline="Trust block" title={siteContent.teacher.title} subtitle={siteContent.teacher.text} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {siteContent.teacher.facts.map((fact) => (
              <li key={fact} className="rounded-2xl border border-[#0E1017]/10 bg-white px-4 py-3 font-medium text-[#2A3142]">{fact}</li>
            ))}
          </ul>
        </div>
        <GlassCard className="bg-gradient-to-br from-[#ffd452]/35 via-white/55 to-[#7ce8ff]/35">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0E1017]/70">Преподаватель рядом</p>
          <p className="mt-3 text-3xl font-black uppercase text-[#0E1017]">Фокус на результат и комфорт</p>
          <p className="mt-3 text-[#2A3142]">Небольшой social-avatar и прозрачные ожидания по маршруту обучения.</p>
          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#0E1017]/10 bg-white px-4 py-3 shadow-lg">
            <Image src="/images/teacher-avatar-placeholder.jpg" alt="Аватар преподавателя" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="text-sm font-bold text-[#0E1017]">Преподаватель YOO</p>
              <p className="text-xs text-[#2A3142]">avatar pin</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
