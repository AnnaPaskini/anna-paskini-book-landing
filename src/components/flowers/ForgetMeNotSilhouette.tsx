type Props = {
  className?: string;
  style?: React.CSSProperties;
  "aria-hidden"?: boolean;
};

/**
 * Style B - Modern silhouette.
 * Solid fill, minimalist, graphic. Like an ink stamp.
 */
export default function ForgetMeNotSilhouette({
  className,
  style,
  ...rest
}: Props) {
  return (
    <svg
      viewBox="0 0 200 320"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      role="img"
      aria-label={rest["aria-hidden"] ? undefined : "Forget-me-not"}
      aria-hidden={rest["aria-hidden"]}
      fill="currentColor"
    >
      {/* Stem */}
      <path
        d="M99 310 Q 96 250 100 195 Q 104 140 99 80 Q 97 50 100 30 L 102 30 Q 105 50 103 80 Q 99 140 103 195 Q 99 250 102 310 Z"
      />

      {/* Leaves */}
      <path d="M100 235 Q 78 230 60 248 Q 80 252 95 244 Q 100 240 100 235 Z" />
      <path d="M100 165 Q 124 158 144 178 Q 122 184 105 174 Q 100 170 100 165 Z" />
      <path d="M100 105 Q 80 100 66 118 Q 88 124 96 114 Q 100 110 100 105 Z" />

      {/* Side stem branches (subtle) */}
      <path d="M100 200 Q 80 192 62 184 L 60 186 Q 80 196 100 204 Z" />
      <path d="M100 150 Q 120 142 138 132 L 140 134 Q 120 144 102 154 Z" />

      {/* Top cluster - five filled flowers, each with white center hole */}
      <SilhouetteFlower cx={102} cy={28} r={10} />
      <SilhouetteFlower cx={76} cy={42} r={9} />
      <SilhouetteFlower cx={124} cy={42} r={9} />
      <SilhouetteFlower cx={90} cy={60} r={8} />
      <SilhouetteFlower cx={114} cy={64} r={8} />

      <SilhouetteFlower cx={48} cy={176} r={8} />
      <SilhouetteFlower cx={62} cy={162} r={7} />

      <SilhouetteFlower cx={152} cy={120} r={8} />
      <SilhouetteFlower cx={140} cy={106} r={7} />
    </svg>
  );
}

function SilhouetteFlower({
  cx,
  cy,
  r,
}: {
  cx: number;
  cy: number;
  r: number;
}) {
  const petals = [0, 72, 144, 216, 288].map((deg) => {
    const rad = (deg * Math.PI) / 180;
    const px = cx + Math.cos(rad - Math.PI / 2) * r;
    const py = cy + Math.sin(rad - Math.PI / 2) * r;
    return <circle key={deg} cx={px} cy={py} r={r * 0.6} />;
  });
  return (
    <g>
      {petals}
      {/* Center hole - punched out using surface color */}
      <circle
        cx={cx}
        cy={cy}
        r={r * 0.45}
        fill="var(--color-surface)"
      />
      <circle cx={cx} cy={cy} r={r * 0.18} />
    </g>
  );
}
