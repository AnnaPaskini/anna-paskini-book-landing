type Props = {
  className?: string;
  style?: React.CSSProperties;
  "aria-hidden"?: boolean;
};

/**
 * Style C - Linear / outline only.
 * Single weight stroke, like a tattoo or line drawing.
 */
export default function ForgetMeNotLinear({
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
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Single confident stem */}
      <path d="M100 310 L 100 30" />

      {/* Side branches */}
      <path d="M100 195 L 60 178" />
      <path d="M100 148 L 142 128" />

      {/* Simplified leaves - single curves */}
      <path d="M100 240 Q 78 244 60 264" />
      <path d="M100 168 Q 124 168 144 188" />
      <path d="M100 102 Q 82 102 68 118" />

      {/* Flowers - even, uniform */}
      <LinearFlower cx={102} cy={28} r={10} />
      <LinearFlower cx={78} cy={44} r={9} />
      <LinearFlower cx={124} cy={44} r={9} />
      <LinearFlower cx={92} cy={62} r={8} />
      <LinearFlower cx={114} cy={64} r={8} />

      <LinearFlower cx={50} cy={172} r={8} />
      <LinearFlower cx={64} cy={158} r={7} />

      <LinearFlower cx={152} cy={118} r={8} />
      <LinearFlower cx={140} cy={104} r={7} />
    </svg>
  );
}

function LinearFlower({
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
    return <circle key={deg} cx={px} cy={py} r={r * 0.55} />;
  });
  return (
    <g>
      {petals}
      <circle cx={cx} cy={cy} r={1.8} fill="currentColor" />
    </g>
  );
}
