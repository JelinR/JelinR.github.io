export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  gpa?: string;
  focus?: string;
  honors?: string;
}

export const educationData: Education[] = [
  {
    year: "2025—Present",
    institution: "University of Padua / Fondazione Bruno Kessler",
    degree: "PhD in Brain, Mind, and Computer Science (BMCS)",
    focus:
      "Building embodied agents that use multimodal reasoning and memory to understand their environments, adapt to users, and learn to anticipate and recover from failures.",
  },
  {
    year: "2022—2025",
    institution: "University of Padua, Italy",
    degree: "MSc in Physics of Data",
    thesis: "Zero-Shot Object Goal Navigation using Online Image Retrieval",
    gpa: "110 / 110",
  },
  {
    year: "2018—2022",
    institution: "National Institute of Technology, Calicut, India",
    degree: "B.Tech in Engineering Physics",
    honors: "First Class with Distinction",
  },
];
