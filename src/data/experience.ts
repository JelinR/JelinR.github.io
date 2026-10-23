export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Oct—Dec 2025",
    title: "Teaching Assistant - Computer Vision and Cognitive Systems",
    company: "University of Padua",
    description:
      "Assisted with lab sessions, guided students on assignments and projects, and facilitated discussions on advanced topics in computer vision and cognitive systems.",
    companyUrl: "https://www.unipd.it/",
  },
  {
    date: "Jul—Oct 2025",
    title: "GenAI Research Intern",
    company: "ViWear",
    description:
      "Enhanced a Stable Diffusion-derived virtual try-on model, improving perceptual metrics by 7-12% and tripling inference speed from 1 fps to 3 fps through architectural improvements and GPU-constrained fine-tuning.",
  },
  {
    date: "Oct 2023—Mar 2024",
    title: "Computer Vision Research Intern",
    company:
      "Fondazione Bruno Kessler / Visual Intelligence and Machine Perception Group, University of Padua",
    advisor: "Prof. Lamberto Ballan and Tommaso Campari",
    description:
      "Enhanced scene mapping with multimodal vision-language features while keeping the pipeline memory-efficient, increasing navigation success by 7.6% and reducing memory usage by 99.75%.",
    companyUrl: "https://www.fbk.eu/en/",
  },
];
