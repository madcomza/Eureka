import React from 'react';

interface EurekaLogoProps {
  className?: string;
  height?: number | string;
  width?: number | string;
  variant?: 'full' | 'compact' | 'white';
}

export const EurekaLogo: React.FC<EurekaLogoProps> = ({
  className = 'h-10 sm:h-12 w-auto',
  height,
  width,
  variant = 'full'
}) => {
  return (
    <svg
      viewBox="0 0 1000 360"
      className={className}
      style={{
        height: height || undefined,
        width: width || undefined,
        display: 'inline-block',
        verticalAlign: 'middle',
        overflow: 'visible'
      }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Eureka Facilities Management Solutions Logo"
    >
      <defs>
        {/* Dynamic Faceted Blue Gradients */}
        <linearGradient id="efmsBlue1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="45%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#0f2b69" />
        </linearGradient>
        <linearGradient id="efmsBlueFacet" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="50%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>
        <linearGradient id="efmsStarRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="35%" stopColor="#ef4444" />
          <stop offset="70%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>
        <linearGradient id="efmsStarCyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="40%" stopColor="#38bdf8" />
          <stop offset="80%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <filter id="logoShadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Main EUREKA Text Group with Italicized Skew */}
      <g transform="skewX(-11)" filter="url(#logoShadow)">
        {/* Letter E */}
        <g transform="translate(65, 185)">
          <path d="M 0,-140 L 78,-140 L 78,-100 L 36,-100 L 36,-80 L 70,-80 L 70,-46 L 36,-46 L 36,-24 L 80,-24 L 80,12 L 0,12 Z" fill="#1e40af" />
          <polygon points="0,-140 78,-140 40,-100 0,-100" fill="#3b82f6" opacity="0.8" />
          <polygon points="0,-60 36,-46 36,-24 0,12" fill="#0f2b69" />
          <polygon points="0,12 80,12 40,-24 0,-24" fill="#172554" opacity="0.9" />
        </g>

        {/* Letter U */}
        <g transform="translate(170, 185)">
          <path d="M 0,-140 L 36,-140 L 36,-46 Q 36,-18 52,-18 Q 68,-18 68,-46 L 68,-140 L 104,-140 L 104,-44 Q 104,15 52,15 Q 0,15 0,-44 Z" fill="#1d4ed8" />
          <polygon points="0,-140 36,-140 36,-70 0,-38" fill="#2563eb" opacity="0.85" />
          <polygon points="0,-44 0,15 52,15 36,-18" fill="#0f2b69" />
          <polygon points="68,-140 104,-140 104,-70 68,-38" fill="#1e3a8a" />
          <polygon points="68,-46 104,-44 104,15 52,15" fill="#172554" />
        </g>

        {/* Letter R */}
        <g transform="translate(295, 185)">
          <path d="M 0,-140 L 70,-140 Q 105,-140 105,-98 Q 105,-68 80,-58 L 110,12 L 70,12 L 44,-54 L 36,-54 L 36,12 L 0,12 Z M 36,-106 L 36,-86 L 64,-86 Q 72,-86 72,-96 Q 72,-106 64,-106 Z" fill="#1e40af" />
          <polygon points="0,-140 70,-140 64,-86 0,-106" fill="#3b82f6" opacity="0.8" />
          <polygon points="44,-54 110,12 70,12 36,-26" fill="#0f2b69" />
          <polygon points="0,-54 36,-54 36,12 0,12" fill="#172554" />
        </g>

        {/* Letter E */}
        <g transform="translate(425, 185)">
          <path d="M 0,-140 L 78,-140 L 78,-100 L 36,-100 L 36,-80 L 70,-80 L 70,-46 L 36,-46 L 36,-24 L 80,-24 L 80,12 L 0,12 Z" fill="#1d4ed8" />
          <polygon points="0,-140 78,-140 40,-100 0,-100" fill="#2563eb" opacity="0.8" />
          <polygon points="0,-60 36,-46 36,-24 0,12" fill="#0f2b69" />
          <polygon points="0,12 80,12 40,-24 0,-24" fill="#172554" />
        </g>

        {/* Letter K */}
        <g transform="translate(530, 185)">
          <path d="M 0,-140 L 36,-140 L 36,-72 L 78,-140 L 120,-140 L 64,-54 L 124,12 L 78,12 L 36,-38 L 36,12 L 0,12 Z" fill="#1e40af" />
          <polygon points="0,-140 36,-140 36,12 0,12" fill="#172554" />
          <polygon points="36,-72 78,-140 120,-140 64,-54" fill="#3b82f6" opacity="0.8" />
          <polygon points="64,-54 124,12 78,12 36,-38" fill="#0f2b69" />
        </g>

        {/* Letter A */}
        <g transform="translate(665, 185)">
          <path d="M 0,12 L 52,-140 L 92,-140 L 144,12 L 102,12 L 90,-24 L 48,-24 L 38,12 Z M 58,-54 L 80,-54 L 69,-98 Z" fill="#1d4ed8" />
          <polygon points="0,12 52,-140 70,-140 48,-24" fill="#2563eb" opacity="0.85" />
          <polygon points="92,-140 144,12 102,12 90,-24" fill="#0f2b69" />
          <polygon points="48,-24 90,-24 102,12 38,12" fill="#172554" />
        </g>
      </g>

      {/* Central Radiating Starburst Effect Across U & R */}
      <g transform="translate(365, 115)">
        {/* Cyan Starburst Spikes */}
        <g fill="url(#efmsStarCyan)">
          <polygon points="0,0 30,-78 0,-16 -30,-78" />
          <polygon points="0,0 78,-30 16,0 78,30" />
          <polygon points="0,0 30,78 0,16 -30,78" />
          <polygon points="0,0 -78,30 -16,0 -78,-30" />
          <polygon points="0,0 125,-12 28,0 125,28" />
          <polygon points="0,0 48,100 12,28 28,100" />
          <polygon points="0,0 -90,70 -22,16 -70,90" />
          <polygon points="0,0 -38,-90 -6,-22 -60,-75" />
        </g>

        {/* Red Primary Dynamic Starburst Spikes */}
        <g fill="url(#efmsStarRed)">
          <polygon points="0,0 -165,-24 -36,-6 -145,-6" />
          <polygon points="0,0 16,-110 0,-32 48,-100" />
          <polygon points="0,0 115,70 32,16 100,90" />
          <polygon points="0,0 -48,105 -14,26 -70,95" />
          <polygon points="0,0 -195,-22 -42,-2 -160,8" />
          <polygon points="0,0 22,-130 6,-38 42,-115" />
        </g>

        {/* Central Brilliant Core */}
        <circle cx="0" cy="0" r="7" fill="#ffffff" />
        <circle cx="0" cy="0" r="3.5" fill="#38bdf8" />
      </g>

      {/* Solid Red Divider Bar Line */}
      <rect x="35" y="200" width="930" height="7.5" fill="#d91b1b" rx="2" />

      {/* Subtitle 1: FACILITIES MANAGEMENT (Red Bold Italic) */}
      <text
        x="500"
        y="265"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Arial Black', sans-serif"
        fontSize="46"
        fontWeight="900"
        fontStyle="italic"
        letterSpacing="2.5"
        textAnchor="middle"
        fill={variant === 'white' ? '#ff6b6b' : '#d91b1b'}
      >
        FACILITIES MANAGEMENT
      </text>

      {/* Blue Underline Line */}
      <line
        x1="35"
        y1="292"
        x2="550"
        y2="292"
        stroke={variant === 'white' ? '#60a5fa' : '#0b3582'}
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Subtitle 2: SOLUTIONS (Blue Bold Italic) */}
      <text
        x="765"
        y="322"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Arial Black', sans-serif"
        fontSize="46"
        fontWeight="900"
        fontStyle="italic"
        letterSpacing="2"
        textAnchor="middle"
        fill={variant === 'white' ? '#93c5fd' : '#0b3582'}
      >
        SOLUTIONS
      </text>
    </svg>
  );
};
