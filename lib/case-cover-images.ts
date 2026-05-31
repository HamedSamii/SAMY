/** Remote fallbacks when /public/cases/covers/{id}.jpg is missing */
export const caseCoverRemoteUrl: Record<string, string> = {
  "blue-arrow": "https://picsum.photos/id/164/1200/675",
  itshare: "https://picsum.photos/id/356/1200/675",
  givari: "https://picsum.photos/id/338/1200/675",
  waseem: "https://picsum.photos/id/180/1200/675",
  sultan: "https://picsum.photos/id/111/1200/675",
  "rz-estate": "https://picsum.photos/id/283/1200/675",
  mimi: "https://picsum.photos/id/192/1200/675",
  "dr-ihab": "https://picsum.photos/id/117/1200/675",
  panda: "https://picsum.photos/id/1/1200/675",
  villa: "https://picsum.photos/id/26/1200/675",
  noor: "https://picsum.photos/id/20/1200/675",
  fofa: "https://picsum.photos/id/64/1200/675",
  amcupcakes: "https://picsum.photos/id/292/1200/675",
  noorart: "https://picsum.photos/id/30/1200/675",
  areef: "https://picsum.photos/id/199/1200/675",
  mina: "https://picsum.photos/id/155/1200/675",
  zain: "https://picsum.photos/id/119/1200/675",
  hayat: "https://picsum.photos/id/449/1200/675",
  bloom: "https://picsum.photos/id/37/1200/675",
  sama: "https://picsum.photos/id/376/1200/675",
};

export function getCaseCoverSrc(id: string): string {
  return `/cases/covers/${id}.jpg`;
}
