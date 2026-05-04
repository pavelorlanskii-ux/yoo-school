"use client";

// Custom SVG icons in YOO SCHOOL brand style
// Lime gradient (#DFFF20 -> #98D60A), rounded square, white elements

interface IconProps {
  className?: string;
  size?: number;
}

// Graduation cap icon - for education/courses
export function IconGraduation({ className = "", size = 80 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <linearGradient id="lime-grad" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#DFFF20"/>
          <stop offset="1" stopColor="#98D60A"/>
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#lime-grad)"/>
      {/* Cap top */}
      <path d="M50 30 L25 42 L50 54 L75 42 Z" fill="white"/>
      {/* Cap body */}
      <path d="M32 46 L32 58 Q50 68 68 58 L68 46" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round"/>
      {/* Tassel */}
      <path d="M68 42 L68 60" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="68" cy="62" r="3" fill="white"/>
    </svg>
  );
}

// Globe icon - for international/languages
export function IconGlobe({ className = "", size = 80 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <linearGradient id="lime-grad-globe" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#DFFF20"/>
          <stop offset="1" stopColor="#98D60A"/>
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#lime-grad-globe)"/>
      {/* Globe circle */}
      <circle cx="50" cy="50" r="22" stroke="white" strokeWidth="4" fill="none"/>
      {/* Horizontal line */}
      <ellipse cx="50" cy="50" rx="22" ry="10" stroke="white" strokeWidth="3" fill="none"/>
      {/* Vertical line */}
      <ellipse cx="50" cy="50" rx="10" ry="22" stroke="white" strokeWidth="3" fill="none"/>
    </svg>
  );
}

// Chat/speech bubble icon - for communication
export function IconChat({ className = "", size = 80 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <linearGradient id="lime-grad-chat" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#DFFF20"/>
          <stop offset="1" stopColor="#98D60A"/>
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#lime-grad-chat)"/>
      {/* Speech bubble */}
      <path d="M30 38 Q30 30 38 30 L62 30 Q70 30 70 38 L70 52 Q70 60 62 60 L45 60 L35 70 L35 60 L38 60 Q30 60 30 52 Z" fill="white"/>
      {/* Dots */}
      <circle cx="42" cy="45" r="3" fill="#98D60A"/>
      <circle cx="50" cy="45" r="3" fill="#98D60A"/>
      <circle cx="58" cy="45" r="3" fill="#98D60A"/>
    </svg>
  );
}

// Headphones icon - for listening/audio
export function IconHeadphones({ className = "", size = 80 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <linearGradient id="lime-grad-head" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#DFFF20"/>
          <stop offset="1" stopColor="#98D60A"/>
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#lime-grad-head)"/>
      {/* Headband */}
      <path d="M30 55 Q30 32 50 32 Q70 32 70 55" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round"/>
      {/* Left ear */}
      <rect x="26" y="50" width="10" height="18" rx="4" fill="white"/>
      {/* Right ear */}
      <rect x="64" y="50" width="10" height="18" rx="4" fill="white"/>
    </svg>
  );
}

// Chart/progress icon - for results/growth
export function IconChart({ className = "", size = 80 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <linearGradient id="lime-grad-chart" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#DFFF20"/>
          <stop offset="1" stopColor="#98D60A"/>
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#lime-grad-chart)"/>
      {/* Bars */}
      <rect x="28" y="52" width="10" height="18" rx="3" fill="white"/>
      <rect x="45" y="40" width="10" height="30" rx="3" fill="white"/>
      <rect x="62" y="30" width="10" height="40" rx="3" fill="white"/>
      {/* Arrow */}
      <path d="M30 48 L48 36 L66 26" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M60 26 L66 26 L66 32" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Robot/AI icon - for modern learning
export function IconRobot({ className = "", size = 80 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <linearGradient id="lime-grad-robot" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#DFFF20"/>
          <stop offset="1" stopColor="#98D60A"/>
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#lime-grad-robot)"/>
      {/* Head */}
      <rect x="32" y="35" width="36" height="30" rx="8" fill="white"/>
      {/* Antenna */}
      <path d="M50 35 L50 28" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="50" cy="25" r="4" fill="white"/>
      {/* Eyes */}
      <circle cx="42" cy="48" r="5" fill="#98D60A"/>
      <circle cx="58" cy="48" r="5" fill="#98D60A"/>
      {/* Mouth */}
      <rect x="42" y="56" width="16" height="4" rx="2" fill="#98D60A"/>
      {/* Ears */}
      <rect x="24" y="45" width="6" height="12" rx="2" fill="white"/>
      <rect x="70" y="45" width="6" height="12" rx="2" fill="white"/>
    </svg>
  );
}

// Book icon - for learning materials
export function IconBook({ className = "", size = 80 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <linearGradient id="lime-grad-book" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#DFFF20"/>
          <stop offset="1" stopColor="#98D60A"/>
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#lime-grad-book)"/>
      {/* Book cover */}
      <path d="M28 30 L50 36 L72 30 L72 65 L50 71 L28 65 Z" fill="white"/>
      {/* Center line */}
      <path d="M50 36 L50 71" stroke="#98D60A" strokeWidth="2"/>
      {/* Lines on pages */}
      <path d="M34 42 L46 46" stroke="#98D60A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M34 50 L46 54" stroke="#98D60A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M54 46 L66 42" stroke="#98D60A" strokeWidth="2" strokeLinecap="round"/>
      <path d="M54 54 L66 50" stroke="#98D60A" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// Star icon - for achievements/quality
export function IconStar({ className = "", size = 80 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <linearGradient id="lime-grad-star" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#DFFF20"/>
          <stop offset="1" stopColor="#98D60A"/>
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#lime-grad-star)"/>
      {/* Star */}
      <path d="M50 28 L55 43 L71 43 L58 53 L63 68 L50 58 L37 68 L42 53 L29 43 L45 43 Z" fill="white"/>
    </svg>
  );
}

// Clock icon - for schedule/time
export function IconClock({ className = "", size = 80 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <linearGradient id="lime-grad-clock" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#DFFF20"/>
          <stop offset="1" stopColor="#98D60A"/>
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#lime-grad-clock)"/>
      {/* Clock face */}
      <circle cx="50" cy="50" r="22" stroke="white" strokeWidth="4" fill="none"/>
      {/* Hour hand */}
      <path d="M50 50 L50 38" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      {/* Minute hand */}
      <path d="M50 50 L60 50" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      {/* Center dot */}
      <circle cx="50" cy="50" r="3" fill="white"/>
    </svg>
  );
}

// Users/team icon - for group lessons
export function IconUsers({ className = "", size = 80 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <linearGradient id="lime-grad-users" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#DFFF20"/>
          <stop offset="1" stopColor="#98D60A"/>
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#lime-grad-users)"/>
      {/* Person 1 (center front) */}
      <circle cx="50" cy="42" r="10" fill="white"/>
      <path d="M35 68 Q35 55 50 55 Q65 55 65 68" fill="white"/>
      {/* Person 2 (left back) */}
      <circle cx="32" cy="38" r="7" fill="white" fillOpacity="0.7"/>
      <path d="M22 55 Q22 46 32 46 Q42 46 42 55" fill="white" fillOpacity="0.7"/>
      {/* Person 3 (right back) */}
      <circle cx="68" cy="38" r="7" fill="white" fillOpacity="0.7"/>
      <path d="M58 55 Q58 46 68 46 Q78 46 78 55" fill="white" fillOpacity="0.7"/>
    </svg>
  );
}

// Check/success icon
export function IconCheck({ className = "", size = 80 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <defs>
        <linearGradient id="lime-grad-check" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#DFFF20"/>
          <stop offset="1" stopColor="#98D60A"/>
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#lime-grad-check)"/>
      {/* Checkmark */}
      <path d="M32 52 L45 65 L68 38" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}
