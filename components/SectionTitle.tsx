import { cn } from "@/lib/utils";

type SectionTitleProps = {
  overline?: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
};

export default function SectionTitle({
  overline,
  title,
  subtitle,
  className,
  centered = false,
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-5xl", centered && "mx-auto text-center", className)}>
      {overline ? (
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0E1017] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F6F3EA] shadow-[0_4px_20px_rgba(14,16,23,0.2)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c7ff4d]" />
          {overline}
        </p>
      ) : null}
      <h2 className="text-balance text-4xl font-black uppercase leading-[0.9] tracking-tight text-[#0E1017] sm:text-5xl lg:text-6xl xl:text-7xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#2A3142] sm:text-xl">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
