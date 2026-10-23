export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "IROS",
    title:
      "IMPRINT: Image-Conditioned Query Enrichment for Long-Tail Object Goal Navigation",
    authors:
      "Jelin Raphael Akkara, Filippo Ziliotto, Luciano Serafini, Lamberto Ballan, Tommaso Campari",
    projectUrl: "https://jelinr.github.io/IMPRINT/",
    paperUrl: "https://arxiv.org/abs/2607.25106",
    codeUrl: "https://github.com/JelinR/IMPRINT",
    imageUrl: "/images/publications/imprint-teaser.png",
  },
  {
    year: "2026",
    conference: "IJCV",
    title: "Personal-3D: A Comprehensive Benchmark for Personalized Embodied AI Agents",
    authors:
      "Filippo Ziliotto, Jelin Raphael Akkara, Alessandro Daniele, Lamberto Ballan, Luciano Serafini, Tommaso Campari",
    paperUrl: "https://doi.org/10.1007/s11263-026-02922-z",
    imageUrl: "/images/publications/personal-3d-system.png",
  },
  {
    year: "2026",
    conference: "ICRA",
    title: "PersONAL: Towards a Comprehensive Benchmark for Personalized Embodied Agents",
    authors:
      "Filippo Ziliotto, Jelin Raphael Akkara, Alessandro Daniele, Lamberto Ballan, Luciano Serafini, Tommaso Campari",
    paperUrl: "https://arxiv.org/abs/2509.19843",
    codeUrl: "https://github.com/ZiliottoFilippoDev/PersONAL",
    imageUrl: "/images/publications/personal-teaser.png",
  },
];
