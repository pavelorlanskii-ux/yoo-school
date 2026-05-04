import { cn } from "@/lib/utils";

type SectionTitleProps = {
  overline?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionTitle({
  overline,
  title,
  subtitle,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("max-w-4xl", className)}>
      {overline ? (
        <p className="mb-3 inline-block rounded-full bg-[#0E1017] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#F6F3EA]">
          {overline}
        </p>
      ) : null}
      <h2 className="text-balance text-4xl font-black uppercase leading-[0.95] text-[#0E1017] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-5 max-w-3xl text-lg text-[#2A3142]">{subtitle}</p> : null}
    </div>
  );
}
