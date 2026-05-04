import { siteContent } from "@/data/siteContent";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";

export default function Testimonials() {
  return (
    <section id="reviews" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle overline="Отзывы" title="Мини-кейсы и заметный прогресс" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {siteContent.testimonials.map((quote) => (
            <GlassCard key={quote} className="bg-gradient-to-br from-white/80 to-[#f9d8ff]/45">
              <p className="text-xl font-bold leading-snug text-[#0E1017]">{quote}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
