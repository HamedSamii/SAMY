/** Remote sources — cached by scripts/download-case-covers.mjs → public/cases/covers/{id}.jpg */
const picsum = (id) => `https://picsum.photos/id/${id}/1200/675`;

export const CASE_COVER_IMAGES = {
  "blue-arrow": picsum(164),
  itshare: picsum(356),
  givari: picsum(338),
  waseem: picsum(180),
  sultan: picsum(111),
  "rz-estate": picsum(283),
  mimi: picsum(192),
  "dr-ihab": picsum(117),
  panda: picsum(1),
  villa: picsum(26),
  noor: picsum(20),
  fofa: picsum(64),
  amcupcakes: picsum(292),
  noorart: picsum(30),
  areef: picsum(199),
  mina: picsum(155),
  zain: picsum(119),
  hayat: picsum(449),
  bloom: picsum(37),
  sama: picsum(376),
};
