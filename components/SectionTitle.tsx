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
        <span className="badge-sticker mb-6 inline-flex bg-[#c7ff4d] text-[#0E1017]">
          {overline}
        </span>
      ) : null}
      <h2 className="text-balance text-3xl font-black leading-[1.1] tracking-tight text-[#0E1017] sm:text-4xl lg:text-5xl xl:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#2A3142] sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
