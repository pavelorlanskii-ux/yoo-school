import { siteContent } from "@/data/siteContent";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle overline="Цены" title="Понятные пакеты без скрытых условий" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {siteContent.pricing.map((plan) => (
            <GlassCard key={plan.title} className="h-full bg-white/55">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0066FF]">{plan.title}</p>
              <p className="mt-4 text-3xl font-black text-[#0E1017]">{plan.price}</p>
              <p className="mt-3 text-[#2A3142]">{plan.description}</p>
            </GlassCard>
          ))}
        </div>
        <p className="mt-6 text-sm text-[#2A3142]">{siteContent.pricingNote}</p>
      </div>
    </section>
  );
}
