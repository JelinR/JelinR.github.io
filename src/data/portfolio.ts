export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "IMPRINT",
    description:
      "Image-conditioned query enrichment for long-tail object goal navigation, using visual context to improve open-vocabulary embodied navigation.",
    technologies: ["Python", "PyTorch", "Vision-Language Models"],
    projectUrl: "https://jelinr.github.io/IMPRINT/",
    codeUrl: "https://github.com/JelinR/IMPRINT",
  },
  {
    title: "PersONAL",
    description:
      "A benchmark for evaluating personalized embodied agents and their ability to use user-specific preferences when navigating and interacting with 3D environments.",
    technologies: ["Python", "Embodied AI", "Benchmarking"],
    codeUrl: "https://github.com/Finyon/PersONAL",
  },
  {
    title: "OneMap",
    description:
      "A modular framework for memory-efficient scene mapping in object goal navigation.",
    technologies: ["Python", "Computer Vision", "Object Goal Navigation"],
    codeUrl: "https://github.com/JelinR/OneMap",
  },
];
