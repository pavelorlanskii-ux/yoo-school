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
