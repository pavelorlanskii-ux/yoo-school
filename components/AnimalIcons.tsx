"use client";

import { motion } from "framer-motion";

// Owl - Орлик
export function OwlIcon({ className = "", animate = true }: { className?: string; animate?: boolean }) {
  const icon = (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      {/* Body */}
      <ellipse cx="40" cy="45" rx="28" ry="30" fill="#c7ff4d" stroke="#0E1017" strokeWidth="3" />
      {/* Ears */}
      <path d="M18 22L26 35L14 35Z" fill="#c7ff4d" stroke="#0E1017" strokeWidth="3" strokeLinejoin="round" />
      <path d="M62 22L54 35L66 35Z" fill="#c7ff4d" stroke="#0E1017" strokeWidth="3" strokeLinejoin="round" />
      {/* Eye backgrounds */}
      <circle cx="28" cy="40" r="12" fill="white" stroke="#0E1017" strokeWidth="3" />
      <circle cx="52" cy="40" r="12" fill="white" stroke="#0E1017" strokeWidth="3" />
      {/* Pupils */}
      <circle cx="30" cy="40" r="6" fill="#0E1017" />
      <circle cx="54" cy="40" r="6" fill="#0E1017" />
      {/* Eye shine */}
      <circle cx="32" cy="38" r="2" fill="white" />
      <circle cx="56" cy="38" r="2" fill="white" />
      {/* Beak */}
      <path d="M40 48L36 56L40 60L44 56Z" fill="#FF6B2B" stroke="#0E1017" strokeWidth="2" strokeLinejoin="round" />
      {/* Belly */}
      <ellipse cx="40" cy="60" rx="14" ry="10" fill="#F6F3EA" stroke="#0E1017" strokeWidth="2" />
      {/* Feet */}
      <path d="M32 72L28 78M32 72L32 78M32 72L36 78" stroke="#FF6B2B" strokeWidth="3" strokeLinecap="round" />
      <path d="M48 72L44 78M48 72L48 78M48 72L52 78" stroke="#FF6B2B" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );

  if (!animate) return icon;

  return (
    <motion.div
      className="inline-flex"
      animate={{ rotateY: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {icon}
    </motion.div>
  );
}

// Deer - Олень
export function DeerIcon({ className = "", animate = true }: { className?: string; animate?: boolean }) {
  const icon = (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      {/* Antlers */}
      <path d="M20 15L24 28M20 15L14 8M20 15L10 18" stroke="#8B4513" strokeWidth="4" strokeLinecap="round" />
      <path d="M60 15L56 28M60 15L66 8M60 15L70 18" stroke="#8B4513" strokeWidth="4" strokeLinecap="round" />
      {/* Head */}
      <ellipse cx="40" cy="45" rx="22" ry="26" fill="#FFD452" stroke="#0E1017" strokeWidth="3" />
      {/* Ears */}
      <ellipse cx="18" cy="35" rx="6" ry="10" fill="#FFD452" stroke="#0E1017" strokeWidth="3" transform="rotate(-20 18 35)" />
      <ellipse cx="62" cy="35" rx="6" ry="10" fill="#FFD452" stroke="#0E1017" strokeWidth="3" transform="rotate(20 62 35)" />
      {/* Inner ears */}
      <ellipse cx="18" cy="35" rx="3" ry="6" fill="#FF8DC7" transform="rotate(-20 18 35)" />
      <ellipse cx="62" cy="35" rx="3" ry="6" fill="#FF8DC7" transform="rotate(20 62 35)" />
      {/* Eyes */}
      <circle cx="30" cy="42" r="8" fill="white" stroke="#0E1017" strokeWidth="2" />
      <circle cx="50" cy="42" r="8" fill="white" stroke="#0E1017" strokeWidth="2" />
      <circle cx="32" cy="42" r="4" fill="#0E1017" />
      <circle cx="52" cy="42" r="4" fill="#0E1017" />
      <circle cx="33" cy="41" r="1.5" fill="white" />
      <circle cx="53" cy="41" r="1.5" fill="white" />
      {/* Nose */}
      <ellipse cx="40" cy="58" rx="8" ry="6" fill="#0E1017" />
      <ellipse cx="40" cy="57" rx="3" ry="2" fill="#444" />
      {/* Spots */}
      <circle cx="25" cy="55" r="3" fill="#F6F3EA" />
      <circle cx="55" cy="55" r="3" fill="#F6F3EA" />
    </svg>
  );

  if (!animate) return icon;

  return (
    <motion.div
      className="inline-flex"
      animate={{ rotateY: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {icon}
    </motion.div>
  );
}

// Corgi - Корги
export function CorgiIcon({ className = "", animate = true }: { className?: string; animate?: boolean }) {
  const icon = (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      {/* Ears */}
      <path d="M12 28L22 45L8 48Z" fill="#FF6B2B" stroke="#0E1017" strokeWidth="3" strokeLinejoin="round" />
      <path d="M68 28L58 45L72 48Z" fill="#FF6B2B" stroke="#0E1017" strokeWidth="3" strokeLinejoin="round" />
      {/* Inner ears */}
      <path d="M14 32L20 42L12 44Z" fill="#FF8DC7" />
      <path d="M66 32L60 42L68 44Z" fill="#FF8DC7" />
      {/* Head */}
      <ellipse cx="40" cy="52" rx="28" ry="24" fill="#FF6B2B" stroke="#0E1017" strokeWidth="3" />
      {/* White face mask */}
      <path d="M40 35C30 35 22 45 22 58C22 65 30 72 40 72C50 72 58 65 58 58C58 45 50 35 40 35Z" fill="white" stroke="#0E1017" strokeWidth="2" />
      {/* Eyes */}
      <circle cx="30" cy="48" r="7" fill="white" stroke="#0E1017" strokeWidth="2" />
      <circle cx="50" cy="48" r="7" fill="white" stroke="#0E1017" strokeWidth="2" />
      <circle cx="32" cy="48" r="4" fill="#0E1017" />
      <circle cx="52" cy="48" r="4" fill="#0E1017" />
      <circle cx="33" cy="47" r="1.5" fill="white" />
      <circle cx="53" cy="47" r="1.5" fill="white" />
      {/* Nose */}
      <ellipse cx="40" cy="60" rx="6" ry="5" fill="#0E1017" />
      <ellipse cx="40" cy="59" rx="2" ry="1.5" fill="#444" />
      {/* Mouth */}
      <path d="M40 65C37 68 34 68 32 66" stroke="#0E1017" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 65C43 68 46 68 48 66" stroke="#0E1017" strokeWidth="2" strokeLinecap="round" />
      {/* Tongue */}
      <ellipse cx="40" cy="70" rx="4" ry="5" fill="#FF8DC7" stroke="#0E1017" strokeWidth="2" />
    </svg>
  );

  if (!animate) return icon;

  return (
    <motion.div
      className="inline-flex"
      animate={{ rotateY: 360 }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {icon}
    </motion.div>
  );
}

// Star burst character
export function StarIcon({ className = "", animate = true }: { className?: string; animate?: boolean }) {
  const icon = (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      {/* Star burst shape */}
      <path 
        d="M40 5L46 25L66 20L52 35L70 45L50 48L55 68L40 55L25 68L30 48L10 45L28 35L14 20L34 25Z" 
        fill="white" 
        stroke="#0E1017" 
        strokeWidth="3" 
        strokeLinejoin="round"
      />
      {/* Eyes */}
      <circle cx="32" cy="38" r="6" fill="#0E1017" />
      <circle cx="48" cy="38" r="6" fill="#0E1017" />
      <circle cx="34" cy="36" r="2" fill="white" />
      <circle cx="50" cy="36" r="2" fill="white" />
    </svg>
  );

  if (!animate) return icon;

  return (
    <motion.div
      className="inline-flex"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {icon}
    </motion.div>
  );
}

// Eyes only character (like Goo Goo School)
export function EyesIcon({ className = "", color = "#9D6AFF" }: { className?: string; color?: string }) {
  return (
    <motion.div 
      className={`inline-flex items-center justify-center rounded-full ${className}`}
      style={{ backgroundColor: color }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 60 60" fill="none" className="h-full w-full p-2">
        <circle cx="20" cy="30" r="10" fill="white" stroke="#0E1017" strokeWidth="2" />
        <circle cx="40" cy="30" r="10" fill="white" stroke="#0E1017" strokeWidth="2" />
        <circle cx="23" cy="30" r="5" fill="#0E1017" />
        <circle cx="43" cy="30" r="5" fill="#0E1017" />
        <circle cx="25" cy="28" r="2" fill="white" />
        <circle cx="45" cy="28" r="2" fill="white" />
      </svg>
    </motion.div>
  );
}
