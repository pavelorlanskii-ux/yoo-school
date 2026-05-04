"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type CharacterBadgeProps = {
  character: "orlik" | "corgi" | "deer" | "flower" | "bee";
  className?: string;
};

const map = {
  orlik: { emoji: "🦅", label: "Орлик" },
  corgi: { emoji: "🐶", label: "Корги" },
  deer: { emoji: "🦌", label: "Олень" },
  flower: { emoji: "🌼", label: "Цветочек" },
  bee: { emoji: "🐝", label: "Шмелёчек" },
};

export default function CharacterBadge({ character, className }: CharacterBadgeProps) {
  return (
    <motion.div
      aria-hidden="true"
      whileHover={{ y: -4, rotate: -2, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
      className={cn(
        "sticker-float inline-flex items-center gap-2 rounded-full border border-[#0E1017]/10 bg-white px-4 py-2 text-sm font-semibold text-[#0E1017] shadow-[0_10px_30px_rgba(14,16,23,0.14)]",
        className,
      )}
    >
      <span className="text-xl leading-none">{map[character].emoji}</span>
      <span>{map[character].label}</span>
    </motion.div>
  );
}
