export default function HeroAgentsIllustration() {
  const filterPrefix = "hero-agents";
  return (
    <div className="tw-relative tw-mt-10 tw-max-w-5xl tw-mx-auto">
      {/* Main hexagon/agents illustration */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="304"
        height="281"
        fill="none"
        viewBox="0 0 304 281"
        className="tw-w-full tw-h-auto tw-min-h-[280px] tw-max-h-[380px] md:tw-max-h-[480px]"
        aria-hidden
      >
        <path
          fill="rgba(255,255,255,0.06)"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="0.75"
          d="M148.534 1.068a7.75 7.75 0 0 1 6.932 0l50.211 25.106a3.75 3.75 0 0 1 2.073 3.354v125.056c0 1.42-.803 2.718-2.073 3.354l-50.211 25.105a7.75 7.75 0 0 1-6.932 0l-50.21-25.105a3.75 3.75 0 0 1-2.074-3.354V29.528a3.75 3.75 0 0 1 2.073-3.354z"
        />
        <path stroke="rgba(255,255,255,0.4)" strokeLinecap="round" strokeWidth="0.75" d="m102 30.056 46.422 23.21a8 8 0 0 0 7.156 0L202 30.057" />
        <g strokeWidth="0.75" filter={`url(#${filterPrefix}-shadow)`}>
          <path fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.4)" d="M84.534 139.068a7.76 7.76 0 0 1 6.932 0l50.211 25.106a3.75 3.75 0 0 1 2.073 3.353v19.057c0 1.42-.803 2.718-2.073 3.354l-50.211 25.105a7.75 7.75 0 0 1-6.932 0l-50.21-25.105a3.75 3.75 0 0 1-2.074-3.354v-19.057a3.75 3.75 0 0 1 2.073-3.353z" />
          <path stroke="rgba(255,255,255,0.4)" strokeLinecap="round" d="m38 168.056 46.422 23.211a8 8 0 0 0 7.156 0L138 168.056" />
        </g>
        <g filter={`url(#${filterPrefix}-shadow)`}>
          <path fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.75" d="M84.534 53.069a7.75 7.75 0 0 1 6.932 0l50.211 25.105a3.75 3.75 0 0 1 2.073 3.353v73.057c0 1.42-.803 2.718-2.073 3.354l-50.211 25.105a7.75 7.75 0 0 1-6.932 0l-50.21-25.105a3.75 3.75 0 0 1-2.074-3.354V81.528a3.75 3.75 0 0 1 2.073-3.354z" />
          <path stroke="rgba(255,255,255,0.4)" strokeLinecap="round" strokeWidth="0.75" d="m38 82.056 46.422 23.211a8 8 0 0 0 7.156 0L138 82.056" />
        </g>
        <g strokeWidth="0.75" filter={`url(#${filterPrefix}-shadow)`}>
          <path fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.5)" d="M212.534 97.069a7.75 7.75 0 0 1 6.932 0l50.211 25.105a3.75 3.75 0 0 1 2.073 3.353v61.057c0 1.42-.803 2.718-2.073 3.354l-50.211 25.105a7.75 7.75 0 0 1-6.932 0l-50.211-25.105a3.75 3.75 0 0 1-2.073-3.354v-61.057a3.75 3.75 0 0 1 2.073-3.353z" />
          <path stroke="rgba(255,255,255,0.4)" strokeLinecap="round" d="m166 126.056 46.422 23.211a8 8 0 0 0 7.156 0L266 126.056" />
        </g>
        <g strokeWidth="0.75" filter={`url(#${filterPrefix}-shadow)`}>
          <path fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.45)" d="M212.534 64.069a7.75 7.75 0 0 1 6.932 0l50.211 25.105a3.75 3.75 0 0 1 2.073 3.353v19.057c0 1.42-.803 2.718-2.073 3.354l-50.211 25.105a7.75 7.75 0 0 1-6.932 0l-50.211-25.105a3.75 3.75 0 0 1-2.073-3.354V92.528a3.75 3.75 0 0 1 2.073-3.354z" />
          <path stroke="rgba(255,255,255,0.4)" strokeLinecap="round" d="m166 93.056 46.422 23.211a8 8 0 0 0 7.156 0L266 93.056" />
        </g>
        <g filter={`url(#${filterPrefix}-shadow)`}>
          <path fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.75" d="M148.534 145.068a7.76 7.76 0 0 1 6.932 0l50.211 25.106a3.75 3.75 0 0 1 2.073 3.353v45.057c0 1.42-.803 2.718-2.073 3.354l-50.211 25.105a7.75 7.75 0 0 1-6.932 0l-50.21-25.105a3.75 3.75 0 0 1-2.074-3.354v-45.057a3.75 3.75 0 0 1 2.073-3.353z" />
          <path stroke="rgba(255,255,255,0.4)" strokeLinecap="round" strokeWidth="0.75" d="m102 174.056 46.422 23.211a8 8 0 0 0 7.156 0L202 174.056" />
        </g>
        <defs>
          <filter id={`${filterPrefix}-shadow`} width="200%" height="200%" x="-50%" y="-50%" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset />
            <feGaussianBlur stdDeviation="16" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0.03 0 0 0 0 0.035 0 0 0 0 0.04 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
