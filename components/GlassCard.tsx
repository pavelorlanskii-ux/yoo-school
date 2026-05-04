import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "deep" | "light";
};

export default function GlassCard({ children, className, variant = "default" }: GlassCardProps) {
  const baseClasses = "relative rounded-[2rem] transition-all duration-300";
  
  const variants = {
    default: "glossy-surface border border-white/50 bg-white/40 p-6 shadow-[0_8px_32px_rgba(14,16,23,0.1),0_16px_48px_rgba(14,16,23,0.08)] backdrop-blur-xl",
    deep: "glass-card-deep p-6",
    light: "border border-white/60 bg-white/55 p-6 shadow-[0_4px_20px_rgba(14,16,23,0.06),0_12px_40px_rgba(14,16,23,0.08)] backdrop-blur-lg",
  };

  return (
    <div className={cn(baseClasses, variants[variant], className)}>
      {children}
    </div>
  );
}
