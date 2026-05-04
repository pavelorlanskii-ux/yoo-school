import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glossy-surface relative rounded-[2rem] border border-white/45 bg-white/35 p-6 shadow-[0_16px_60px_rgba(18,24,37,0.15)] backdrop-blur-xl transition-transform duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
}
