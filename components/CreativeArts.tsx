type ArtProps = {
  className?: string;
};

export function YooSpark({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M80 10L98 57L148 43L113 81L150 118L99 105L80 150L61 105L10 118L47 81L12 43L62 57L80 10Z" fill="#F34824" stroke="#111111" strokeWidth="8" strokeLinejoin="round" />
      <circle cx="80" cy="80" r="18" fill="#EAF7A2" stroke="#111111" strokeWidth="7" />
    </svg>
  );
}

export function YooOrb({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="90" cy="90" r="76" fill="#B975F0" stroke="#111111" strokeWidth="8" />
      <circle cx="68" cy="62" r="20" fill="#F6F6F2" />
      <path d="M48 112C77 137 112 137 137 111" stroke="#111111" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}

export function YooBook({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M24 35C62 21 88 29 109 50V156C84 136 56 130 24 143V35Z" fill="#EAF7A2" stroke="#111111" strokeWidth="8" strokeLinejoin="round" />
      <path d="M196 35C158 21 132 29 111 50V156C136 136 164 130 196 143V35Z" fill="#F6F6F2" stroke="#111111" strokeWidth="8" strokeLinejoin="round" />
      <path d="M111 50V156" stroke="#111111" strokeWidth="8" strokeLinecap="round" />
      <path d="M48 58H83M48 82H89M138 58H173M132 82H172" stroke="#111111" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}

export function YooPencil({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22 45L64 17H170L202 45L170 73H64L22 45Z" fill="#F34824" stroke="#111111" strokeWidth="8" strokeLinejoin="round" />
      <path d="M64 17L79 45L64 73" stroke="#111111" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M170 17L156 45L170 73" stroke="#111111" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M95 45H142" stroke="#F6F6F2" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export function YooScribble({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 260 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18 78C44 26 86 110 113 54C143 -8 183 129 241 42" stroke="#111111" strokeWidth="10" strokeLinecap="round" />
      <path d="M36 88C74 73 96 83 126 102" stroke="#EAF7A2" strokeWidth="12" strokeLinecap="round" />
    </svg>
  );
}

export function YooSpeech({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 220 170" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M30 34C30 20 41 10 55 10H165C179 10 190 20 190 34V94C190 108 179 118 165 118H107L70 154V118H55C41 118 30 108 30 94V34Z" fill="#F6F6F2" stroke="#111111" strokeWidth="8" strokeLinejoin="round" />
      <path d="M69 59H151M69 84H127" stroke="#F34824" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}

export function YooInflatable({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 620 620" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="inflatableBody" x1="130" y1="40" x2="520" y2="600" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="0.42" stopColor="#F6FBFF" stopOpacity="0.48" />
          <stop offset="1" stopColor="#BEE7FF" stopOpacity="0.38" />
        </linearGradient>
        <radialGradient id="inflatableShine" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(214 128) rotate(54) scale(206 118)">
          <stop stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <filter id="inflatableShadow" x="38" y="36" width="544" height="548" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="22" stdDeviation="18" floodColor="#111111" floodOpacity="0.16" />
        </filter>
      </defs>

      <circle cx="128" cy="126" r="74" fill="#EAF7A2" opacity="0.78" />
      <circle cx="510" cy="456" r="86" fill="#B975F0" opacity="0.28" />
      <path d="M146 502C235 548 394 560 500 506" stroke="#F6F6F2" strokeWidth="24" strokeLinecap="round" opacity="0.7" />

      <g filter="url(#inflatableShadow)">
        <path
          d="M302 74C410 74 490 153 490 260C490 374 403 456 312 456H252V548H140V82H304C303 82 302 74 302 74ZM252 188V344H309C349 344 378 312 378 267C378 220 348 188 305 188H252Z"
          fill="url(#inflatableBody)"
          stroke="#FFFFFF"
          strokeWidth="18"
          strokeLinejoin="round"
        />
        <path
          d="M302 74C410 74 490 153 490 260C490 374 403 456 312 456H252V548H140V82H304C303 82 302 74 302 74ZM252 188V344H309C349 344 378 312 378 267C378 220 348 188 305 188H252Z"
          fill="url(#inflatableShine)"
          opacity="0.82"
        />
        <path d="M196 126C236 99 312 94 370 121" stroke="#FFFFFF" strokeWidth="16" strokeLinecap="round" opacity="0.88" />
        <path d="M178 454C218 480 298 488 360 469" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" opacity="0.66" />
      </g>

      <g className="motion-art motion-float-slow motion-delay-1">
        <path d="M116 210C148 184 188 196 194 235C162 260 122 249 116 210Z" fill="#8BB46B" />
        <path d="M139 210C155 224 166 242 170 265" stroke="#4D6B36" strokeWidth="5" strokeLinecap="round" />
      </g>
      <g className="motion-art motion-float motion-delay-2">
        <path d="M440 176C472 150 512 162 518 201C486 226 446 215 440 176Z" fill="#8BB46B" />
        <path d="M464 176C480 190 491 208 495 231" stroke="#4D6B36" strokeWidth="5" strokeLinecap="round" />
      </g>
      <g className="motion-art motion-float motion-delay-3">
        <circle cx="226" cy="180" r="24" fill="#F7B4CB" />
        <circle cx="252" cy="186" r="22" fill="#F7B4CB" />
        <circle cx="238" cy="210" r="24" fill="#F7B4CB" />
        <circle cx="236" cy="191" r="10" fill="#FFF1A7" />
      </g>
      <g className="motion-art motion-float-slow motion-delay-2">
        <circle cx="422" cy="390" r="24" fill="#F7B4CB" />
        <circle cx="448" cy="396" r="22" fill="#F7B4CB" />
        <circle cx="434" cy="420" r="24" fill="#F7B4CB" />
        <circle cx="432" cy="401" r="10" fill="#FFF1A7" />
      </g>
      <g className="motion-art motion-wiggle motion-delay-1">
        <path d="M192 370C224 344 264 356 270 395C238 420 198 409 192 370Z" fill="#8BB46B" />
        <path d="M216 370C232 384 243 402 247 425" stroke="#4D6B36" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
