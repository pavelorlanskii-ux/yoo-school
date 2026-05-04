"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type CharacterBadgeProps = {
  character: "orlik" | "corgi" | "deer" | "flower" | "bee";
  className?: string;
  size?: "sm" | "md" | "lg";
};

const map = {
  orlik: { emoji: "🦉", label: "Орлик", color: "from-[#ffecd2] to-[#fcb69f]" },
  corgi: { emoji: "🐶", label: "Корги", color: "from-[#ffeaa7] to-[#dfe6e9]" },
  deer: { emoji: "🦌", label: "Олень", color: "from-[#a29bfe] to-[#dfe6e9]" },
  flower: { emoji: "🌼", label: "Цветочек", color: "from-[#fdcb6e] to-[#ffeaa7]" },
  bee: { emoji: "🐝", label: "Шмелёчек", color: "from-[#ffeaa7] to-[#fdcb6e]" },
};

const sizes = {
  sm: "px-3 py-1.5 text-xs gap-1.5",
  md: "px-4 py-2 text-sm gap-2",
  lg: "px-5 py-2.5 text-base gap-2.5",
};

const emojiSizes = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
};

export default function CharacterBadge({ character, className, size = "md" }: CharacterBadgeProps) {
  const data = map[character];
  
  return (
    <motion.div
      aria-hidden="true"
      whileHover={{ y: -3, rotate: -2, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "sticker-float character-sticker inline-flex items-center rounded-full border border-[#0E1017]/8 font-semibold text-[#0E1017]",
        sizes[size],
        className,
      )}
    >
      <span className={cn("leading-none", emojiSizes[size])}>{data.emoji}</span>
      <span>{data.label}</span>
    </motion.div>
  );
}
