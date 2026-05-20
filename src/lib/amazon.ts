export const VOL1_URL =
  process.env.NEXT_PUBLIC_AMAZON_VOL1_URL ||
  "https://www.amazon.com/dp/PLACEHOLDER1";
export const VOL2_URL =
  process.env.NEXT_PUBLIC_AMAZON_VOL2_URL ||
  "https://www.amazon.com/dp/PLACEHOLDER2";

export function amazonLink(base: string, ref: string) {
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}ref=${encodeURIComponent(ref)}`;
}
