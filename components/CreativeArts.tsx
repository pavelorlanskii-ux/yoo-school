type ArtProps = {
  className?: string;
};

export function YooSpark({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M80 10L98 57L148 43L113 81L150 118L99 105L80 150L61 105L10 118L47 81L12 43L62 57L80 10Z" fill="#FF6B2C" stroke="#FFFFFF" strokeWidth="7" strokeLinejoin="round" />
      <circle cx="80" cy="80" r="18" fill="#EAF7A2" stroke="#FFFFFF" strokeWidth="6" />
    </svg>
  );
}

export function YooOrb({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="orbGlass" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(56 44) rotate(50) scale(142)">
          <stop stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="0.34" stopColor="#73F4FF" stopOpacity="0.72" />
          <stop offset="0.68" stopColor="#FF7DC7" stopOpacity="0.58" />
          <stop offset="1" stopColor="#B993FF" stopOpacity="0.84" />
        </radialGradient>
      </defs>
      <circle cx="90" cy="90" r="74" fill="url(#orbGlass)" stroke="rgba(255,255,255,0.9)" strokeWidth="8" />
      <circle cx="64" cy="54" r="16" fill="white" opacity="0.86" />
      <path d="M48 112C77 137 112 137 137 111" stroke="#FFFFFF" strokeWidth="9" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

export function YooBook({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="bookGlass" x1="0" y1="0" x2="220" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" stopOpacity="0.86" />
          <stop offset="0.55" stopColor="#EAF7A2" stopOpacity="0.72" />
          <stop offset="1" stopColor="#6FC8FF" stopOpacity="0.54" />
        </linearGradient>
      </defs>
      <path d="M24 35C62 21 88 29 109 50V156C84 136 56 130 24 143V35Z" fill="url(#bookGlass)" stroke="#FFFFFF" strokeWidth="8" strokeLinejoin="round" />
      <path d="M196 35C158 21 132 29 111 50V156C136 136 164 130 196 143V35Z" fill="rgba(255,255,255,0.62)" stroke="#FFFFFF" strokeWidth="8" strokeLinejoin="round" />
      <path d="M111 50V156" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
      <path d="M48 58H83M48 82H89M138 58H173M132 82H172" stroke="#2F74FF" strokeWidth="7" strokeLinecap="round" opacity="0.74" />
    </svg>
  );
}

export function YooPencil({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="pencilChrome" x1="22" y1="16" x2="202" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB65C" />
          <stop offset="0.42" stopColor="#FF6B2C" />
          <stop offset="0.66" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F450B6" />
        </linearGradient>
      </defs>
      <path d="M22 45L64 17H170L202 45L170 73H64L22 45Z" fill="url(#pencilChrome)" stroke="#FFFFFF" strokeWidth="8" strokeLinejoin="round" />
      <path d="M64 17L79 45L64 73" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M170 17L156 45L170 73" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M95 45H142" stroke="#10131A" strokeWidth="8" strokeLinecap="round" opacity="0.48" />
    </svg>
  );
}

export function YooScribble({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18 78C44 26 86 110 113 54C143 -8 183 129 241 42" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" opacity="0.82" />
      <path d="M36 88C74 73 96 83 126 102" stroke="#EAF7A2" strokeWidth="12" strokeLinecap="round" />
    </svg>
  );
}

export function YooSpeech({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 220 170" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M30 34C30 20 41 10 55 10H165C179 10 190 20 190 34V94C190 108 179 118 165 118H107L70 154V118H55C41 118 30 108 30 94V34Z" fill="rgba(255,255,255,0.58)" stroke="#FFFFFF" strokeWidth="8" strokeLinejoin="round" />
      <path d="M69 59H151M69 84H127" stroke="#FF6B2C" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}

export function YooInflatable({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 620 620" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="inflatableBody" x1="130" y1="40" x2="520" y2="600" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.96" />
          <stop offset="0.32" stopColor="#DDF6FF" stopOpacity="0.66" />
          <stop offset="0.62" stopColor="#FFB8DC" stopOpacity="0.42" />
          <stop offset="1" stopColor="#6FC8FF" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="inflatableShine" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(214 128) rotate(54) scale(206 118)">
          <stop stopColor="#FFFFFF" stopOpacity="0.98" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <filter id="inflatableShadow" x="38" y="36" width="544" height="548" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="22" stdDeviation="18" floodColor="#2B5D82" floodOpacity="0.22" />
        </filter>
      </defs>
      <circle cx="128" cy="126" r="74" fill="#EAF7A2" opacity="0.78" />
      <circle cx="510" cy="456" r="86" fill="#B993FF" opacity="0.34" />
      <path d="M146 502C235 548 394 560 500 506" stroke="#FFFFFF" strokeWidth="24" strokeLinecap="round" opacity="0.78" />
      <g filter="url(#inflatableShadow)">
        <path d="M302 74C410 74 490 153 490 260C490 374 403 456 312 456H252V548H140V82H304C303 82 302 74 302 74ZM252 188V344H309C349 344 378 312 378 267C378 220 348 188 305 188H252Z" fill="url(#inflatableBody)" stroke="#FFFFFF" strokeWidth="18" strokeLinejoin="round" />
        <path d="M302 74C410 74 490 153 490 260C490 374 403 456 312 456H252V548H140V82H304C303 82 302 74 302 74ZM252 188V344H309C349 344 378 312 378 267C378 220 348 188 305 188H252Z" fill="url(#inflatableShine)" opacity="0.86" />
        <path d="M196 126C236 99 312 94 370 121" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" opacity="0.9" />
        <path d="M178 454C218 480 298 488 360 469" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" opacity="0.7" />
      </g>
      <g className="motion-art motion-float-slow motion-delay-1"><path d="M116 210C148 184 188 196 194 235C162 260 122 249 116 210Z" fill="#8BB46B" /><path d="M139 210C155 224 166 242 170 265" stroke="#4D6B36" strokeWidth="5" strokeLinecap="round" /></g>
      <g className="motion-art motion-float motion-delay-2"><path d="M440 176C472 150 512 162 518 201C486 226 446 215 440 176Z" fill="#8BB46B" /><path d="M464 176C480 190 491 208 495 231" stroke="#4D6B36" strokeWidth="5" strokeLinecap="round" /></g>
      <g className="motion-art motion-float motion-delay-3"><circle cx="226" cy="180" r="24" fill="#F7B4CB" /><circle cx="252" cy="186" r="22" fill="#F7B4CB" /><circle cx="238" cy="210" r="24" fill="#F7B4CB" /><circle cx="236" cy="191" r="10" fill="#FFF1A7" /></g>
      <g className="motion-art motion-float-slow motion-delay-2"><circle cx="422" cy="390" r="24" fill="#F7B4CB" /><circle cx="448" cy="396" r="22" fill="#F7B4CB" /><circle cx="434" cy="420" r="24" fill="#F7B4CB" /><circle cx="432" cy="401" r="10" fill="#FFF1A7" /></g>
      <g className="motion-art motion-wiggle motion-delay-1"><path d="M192 370C224 344 264 356 270 395C238 420 198 409 192 370Z" fill="#8BB46B" /><path d="M216 370C232 384 243 402 247 425" stroke="#4D6B36" strokeWidth="5" strokeLinecap="round" /></g>
    </svg>
  );
}

export function YooJellyBear({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="bearGlass" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(140 92) rotate(50) scale(330)">
          <stop stopColor="#FFFFFF" stopOpacity="0.92" />
          <stop offset="0.32" stopColor="#76F0FF" stopOpacity="0.78" />
          <stop offset="0.58" stopColor="#FF83C9" stopOpacity="0.68" />
          <stop offset="1" stopColor="#FFB341" stopOpacity="0.9" />
        </radialGradient>
        <filter id="bearShadow" x="42" y="28" width="336" height="360" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="24" stdDeviation="22" floodColor="#2B5D82" floodOpacity="0.22" />
        </filter>
      </defs>
      <g filter="url(#bearShadow)">
        <path d="M126 122C94 78 119 45 161 67C182 34 236 34 258 67C302 44 326 80 294 124C336 165 348 245 308 307C266 373 151 373 111 307C73 245 84 166 126 122Z" fill="url(#bearGlass)" stroke="#FFFFFF" strokeWidth="11" />
        <circle cx="157" cy="167" r="15" fill="#10131A" />
        <circle cx="263" cy="167" r="15" fill="#10131A" />
        <ellipse cx="210" cy="202" rx="22" ry="17" fill="#FFFFFF" opacity="0.75" />
        <path d="M181 238C202 256 226 256 247 237" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" opacity="0.82" />
        <path d="M126 280C91 278 76 313 96 338C119 366 156 342 145 310" fill="url(#bearGlass)" stroke="#FFFFFF" strokeWidth="10" />
        <path d="M294 280C329 278 344 313 324 338C301 366 264 342 275 310" fill="url(#bearGlass)" stroke="#FFFFFF" strokeWidth="10" />
      </g>
      <circle cx="116" cy="96" r="18" fill="#FFFFFF" opacity="0.75" />
      <path d="M132 86C164 57 218 53 264 80" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function YooChromeWord({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 560 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="chrome" x1="0" y1="0" x2="560" y2="260" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.18" stopColor="#85CFFF" />
          <stop offset="0.38" stopColor="#FFFFFF" />
          <stop offset="0.6" stopColor="#CDB7FF" />
          <stop offset="0.82" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#7BB6E9" />
        </linearGradient>
        <filter id="chromeShadow" x="10" y="20" width="540" height="230" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#2B5D82" floodOpacity="0.24" />
        </filter>
      </defs>
      <g filter="url(#chromeShadow)" fontFamily="Arial Black, Manrope, sans-serif" fontWeight="900" letterSpacing="-14" fill="url(#chrome)" stroke="#FFFFFF" strokeWidth="5">
        <text x="30" y="110" fontSize="112">YOO</text>
        <text x="30" y="220" fontSize="104">SCHOOL</text>
      </g>
      <circle cx="225" cy="55" r="9" fill="#FFFFFF" />
      <circle cx="410" cy="130" r="8" fill="#FFFFFF" />
      <path d="M218 44L232 64M232 44L218 64" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
      <path d="M402 120L418 140M418 120L402 140" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function YooTechOverlay({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g opacity="0.35" stroke="#FFFFFF" strokeWidth="1.5">
        {Array.from({ length: 12 }).map((_, i) => <path key={`h${i}`} d={`M24 ${40 + i * 36}H496`} strokeDasharray="3 12" />)}
        {Array.from({ length: 8 }).map((_, i) => <path key={`v${i}`} d={`M${48 + i * 60} 24V496`} strokeDasharray="3 14" />)}
      </g>
      <g fill="#FFFFFF" opacity="0.62" fontFamily="monospace" fontSize="14">
        <text x="34" y="72">012</text><text x="422" y="112">A1</text><text x="64" y="420">YOO</text><text x="370" y="454">ENG</text>
      </g>
    </svg>
  );
}
