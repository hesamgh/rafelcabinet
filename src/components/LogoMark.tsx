export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="rafelBg" x1="8" y1="2" x2="56" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2C2118" />
          <stop offset="1" stopColor="#120E0B" />
        </linearGradient>
        <linearGradient id="rafelPlank1" x1="12" y1="14" x2="52" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F4E2B8" />
          <stop offset="0.5" stopColor="#D4B078" />
          <stop offset="1" stopColor="#A8875A" />
        </linearGradient>
        <linearGradient id="rafelPlank2" x1="12" y1="28" x2="52" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E2C08A" />
          <stop offset="0.45" stopColor="#B8956C" />
          <stop offset="1" stopColor="#8A6840" />
        </linearGradient>
        <linearGradient id="rafelPlank3" x1="12" y1="42" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C9A36A" />
          <stop offset="0.5" stopColor="#8F6D3F" />
          <stop offset="1" stopColor="#5E472A" />
        </linearGradient>
      </defs>

      <rect width="64" height="64" rx="16" fill="url(#rafelBg)" />

      <rect x="11" y="14" width="42" height="11" rx="3.2" fill="url(#rafelPlank1)" />
      <path
        d="M16 17.2c6 1.8 14 2 26 0M16 20.8c8 1.5 15 1.6 24 0"
        stroke="#6B4E2A"
        strokeWidth="0.85"
        strokeLinecap="round"
        opacity="0.28"
      />
      <circle cx="47.5" cy="19.5" r="1.15" fill="#5A4224" opacity="0.35" />

      <rect x="11" y="26.5" width="42" height="11" rx="3.2" fill="url(#rafelPlank2)" />
      <path
        d="M15 29.6c7 1.7 16 1.9 28 0M17 33.2c7 1.4 14 1.5 23 0"
        stroke="#F8EAC8"
        strokeWidth="0.85"
        strokeLinecap="round"
        opacity="0.22"
      />
      <circle cx="15.8" cy="32" r="1.15" fill="#F0D7A0" opacity="0.45" />

      <rect x="11" y="39" width="42" height="11" rx="3.2" fill="url(#rafelPlank3)" />
      <path
        d="M16 42.2c8 1.6 15 1.8 26 0M18 45.8c6 1.3 13 1.4 21 0"
        stroke="#F8EAC8"
        strokeWidth="0.85"
        strokeLinecap="round"
        opacity="0.18"
      />
      <circle cx="47.5" cy="44.5" r="1.15" fill="#F0D7A0" opacity="0.35" />

      <path d="M13.5 32h37" stroke="#F3E0B5" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
    </svg>
  );
}
