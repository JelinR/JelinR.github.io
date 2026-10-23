export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "September 2026",
    title: "Presenting IMPRINT at IROS 2026",
    description:
      "Sharing our work on image-conditioned query enrichment for long-tail object goal navigation.",
    link: "https://jelinr.github.io/IMPRINT/",
  },
  {
    date: "September 2026",
    title: "Organizing Committee Member for ICANN 2026",
    description:
      "Serving on the organizing committee for ICANN 2026 in Padua, Italy.",
    link: "https://eucognition.org/icann2026/",
  },
  {
    date: "July 2026",
    title: "PersONAL presented at ICRA 2026",
    description:
      "Presented our benchmark for personalized embodied agents.",
    link: "https://arxiv.org/abs/2509.19843",
  },
  {
    date: "July 2026",
    title: "PersONAL-3D published in IJCV",
    description:
      "Personal-3D is now published in the International Journal of Computer Vision.",
    link: "https://doi.org/10.1007/s11263-026-02922-z",
  },
];
