type ArtProps = {
  className?: string;
};

export function GlossyYooWord({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="yoo-chrome" x1="0" y1="0" x2="640" y2="240">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.2" stopColor="#90dcff" />
          <stop offset="0.4" stopColor="#ffffff" />
          <stop offset="0.64" stopColor="#d4bbff" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <filter id="yoo-shadow" x="0" y="0" width="640" height="240" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="18" stdDeviation="12" floodColor="#336197" floodOpacity="0.25" />
        </filter>
      </defs>
      <g filter="url(#yoo-shadow)" fill="url(#yoo-chrome)" stroke="#ffffff" strokeWidth="5" fontFamily="Arial Black, Manrope, sans-serif" fontWeight="900" letterSpacing="-10">
        <text x="20" y="110" fontSize="116">YOO</text>
        <text x="20" y="210" fontSize="106">SCHOOL</text>
      </g>
    </svg>
  );
}

export function InflatableY({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="infl-y" cx="0" cy="0" r="1" gradientTransform="translate(170 120) rotate(48) scale(380)">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="0.34" stopColor="#90ecff" stopOpacity="0.84" />
          <stop offset="0.62" stopColor="#ff9ece" stopOpacity="0.76" />
          <stop offset="1" stopColor="#ffc983" stopOpacity="0.9" />
        </radialGradient>
      </defs>
      <path d="M144 122C181 90 233 110 248 159L278 263L310 162C326 111 379 91 416 124C454 157 450 213 408 245L330 308L330 420C330 465 293 500 248 500C203 500 166 465 166 420L166 307L89 246C47 214 44 157 82 124C100 108 122 100 144 122Z" fill="url(#infl-y)" stroke="#ffffff" strokeWidth="16" />
      <ellipse cx="198" cy="156" rx="52" ry="24" fill="#ffffff" opacity="0.52" />
    </svg>
  );
}

export function JellyBear({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="bear-jelly" cx="0" cy="0" r="1" gradientTransform="translate(140 96) rotate(48) scale(350)">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="0.32" stopColor="#8cf0ff" stopOpacity="0.85" />
          <stop offset="0.63" stopColor="#ff82ca" stopOpacity="0.72" />
          <stop offset="1" stopColor="#ffc470" stopOpacity="0.86" />
        </radialGradient>
      </defs>
      <path d="M120 116C89 74 115 40 158 62C178 29 235 28 257 61C301 38 327 74 296 118C338 159 349 240 310 302C270 366 150 366 111 302C74 240 85 160 120 116Z" fill="url(#bear-jelly)" stroke="#ffffff" strokeWidth="10" />
      <circle cx="160" cy="165" r="14" fill="#121827" />
      <circle cx="260" cy="165" r="14" fill="#121827" />
      <ellipse cx="210" cy="198" rx="20" ry="15" fill="#ffffff" opacity="0.76" />
      <path d="M182 232C202 248 226 248 246 232" stroke="#ffffff" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}

export function GlassSpeechBubble({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M30 34C30 20 42 10 56 10H184C198 10 210 20 210 34V98C210 112 198 124 184 124H124L74 166V124H56C42 124 30 112 30 98V34Z" fill="rgba(255,255,255,0.52)" stroke="#ffffff" strokeWidth="8" />
      <path d="M72 58H168M72 88H144" stroke="#2d60ff" strokeWidth="10" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function GlossyBook({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 230 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="book-grad" x1="0" y1="0" x2="230" y2="180">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.88" />
          <stop offset="0.55" stopColor="#e5fbac" stopOpacity="0.78" />
          <stop offset="1" stopColor="#8fdcff" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <path d="M24 34C64 20 90 28 114 50V160C90 140 58 134 24 148V34Z" fill="url(#book-grad)" stroke="#ffffff" strokeWidth="8" />
      <path d="M206 34C166 20 140 28 116 50V160C140 140 172 134 206 148V34Z" fill="rgba(255,255,255,0.64)" stroke="#ffffff" strokeWidth="8" />
      <path d="M115 50V160" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export function GlossyPencil({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="pencil-grad" x1="20" y1="20" x2="220" y2="80">
          <stop offset="0" stopColor="#ffba73" />
          <stop offset="0.4" stopColor="#ff6f6c" />
          <stop offset="0.7" stopColor="#ffffff" />
          <stop offset="1" stopColor="#8dcfff" />
        </linearGradient>
      </defs>
      <path d="M20 50L70 20H180L220 50L180 80H70L20 50Z" fill="url(#pencil-grad)" stroke="#ffffff" strokeWidth="8" />
      <path d="M70 20L86 50L70 80" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export function FloatingStar({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M80 12L100 57L148 44L114 80L148 116L100 103L80 148L60 103L12 116L46 80L12 44L60 57L80 12Z" fill="#fff9a6" stroke="#ffffff" strokeWidth="7" />
    </svg>
  );
}

export function TranslucentCloud({ className = "" }: ArtProps) {
  return (
    <div aria-hidden="true" className={className}>
      <div className="translucent-cloud h-full w-full" />
    </div>
  );
}

export function LiquidOrb({ className = "" }: ArtProps) {
  return <div aria-hidden="true" className={`${className} jelly-object`} />;
}

export function TechOverlayArt({ className = "" }: ArtProps) {
  return (
    <svg className={className} viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g opacity="0.34" stroke="#ffffff" strokeWidth="1.5">
        {Array.from({ length: 12 }).map((_, i) => (
          <path key={`h${i}`} d={`M20 ${32 + i * 40}H500`} strokeDasharray="4 12" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={`v${i}`} d={`M40 ${20}V500`} transform={`translate(${i * 56} 0)`} strokeDasharray="3 14" />
        ))}
      </g>
    </svg>
  );
}

export function LensSpark({ className = "" }: ArtProps) {
  return <span aria-hidden="true" className={`${className} lens-flare`} />;
}
