type Props = {
  className?: string;
  style?: React.CSSProperties;
  "aria-hidden"?: boolean;
};

/**
 * Style A - Botanical / pressed herbarium.
 * Fine pencil-style lines, slight imperfection, Victorian feel.
 */
export default function ForgetMeNotBotanical({
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
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Main stem */}
      <path d="M100 310 C 96 260, 104 210, 100 160 C 96 110, 110 70, 102 28" />

      {/* Side branch */}
      <path d="M100 200 C 88 188, 78 184, 64 178" />
      <path d="M100 150 C 114 138, 124 132, 138 122" />

      {/* Leaves - long, slender, with central vein */}
      <g>
        <path d="M100 240 C 80 234, 66 246, 58 264 C 78 264, 92 256, 100 240 Z" />
        <path d="M64 254 L 88 250" />
      </g>
      <g>
        <path d="M100 170 C 122 164, 138 176, 146 192 C 124 192, 108 184, 100 170 Z" />
        <path d="M138 182 L 114 178" />
      </g>
      <g>
        <path d="M100 100 C 84 96, 72 106, 66 122 C 84 122, 96 116, 100 100 Z" />
      </g>

      {/* Top flower cluster - 5 small forget-me-nots */}
      {/* Each flower: 5 rounded petals around a center dot */}
      <Flower cx={102} cy={28} r={9} centerR={1.6} />
      <Flower cx={78} cy={40} r={8} centerR={1.5} />
      <Flower cx={122} cy={42} r={8} centerR={1.5} />
      <Flower cx={92} cy={56} r={7.5} centerR={1.4} />
      <Flower cx={114} cy={62} r={7} centerR={1.4} />

      {/* Side branch flowers */}
      <Flower cx={50} cy={172} r={7} centerR={1.4} />
      <Flower cx={62} cy={160} r={6.5} centerR={1.3} />

      <Flower cx={150} cy={116} r={7} centerR={1.4} />
      <Flower cx={140} cy={104} r={6.5} centerR={1.3} />
    </svg>
  );
}

function Flower({
  cx,
  cy,
  r,
  centerR,
}: {
  cx: number;
  cy: number;
  r: number;
  centerR: number;
}) {
  // 5 rounded petals around the center
  const petals = [0, 72, 144, 216, 288].map((deg) => {
    const rad = (deg * Math.PI) / 180;
    const px = cx + Math.cos(rad - Math.PI / 2) * r;
    const py = cy + Math.sin(rad - Math.PI / 2) * r;
    return (
      <circle
        key={deg}
        cx={px}
        cy={py}
        r={r * 0.55}
        fill="none"
      />
    );
  });
  return (
    <g>
      {petals}
      <circle cx={cx} cy={cy} r={centerR} fill="currentColor" stroke="none" />
    </g>
  );
}
