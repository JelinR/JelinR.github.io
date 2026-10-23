export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Jelin Raphael Akkara",
  title: "PhD Researcher in Embodied AI",
  institution: "University of Padua / Fondazione Bruno Kessler",
  description:
    "<p>I am pursuing a PhD in Brain, Mind, and Computer Science at the University of Padua, in collaboration with Fondazione Bruno Kessler. My research in Embodied AI explores how autonomous agents ground human goals in complex environments and adapt when actions fail. My interests include fine-grained object navigation, personalized spatial reasoning, and memory-guided adaptation, with a growing focus on failure understanding and recovery.</p><p>My current work investigates how agents can use multimodal reasoning and memory to diagnose failures, reason about alternative actions, and retrieve past experiences to guide recovery. I am also interested in how causal reasoning and world models can help agents anticipate failures and evaluate the consequences of their actions.</p>",
  email: "jelinraphael.akkara@phd.unipd.it",
  imageUrl: "/images/personal_pic_4.png",
  googleScholarUrl: "https://scholar.google.com/citations?hl=en&user=Rc_MHbsAAAAJ",
  githubUsername: "JelinR",
  linkedinUsername: "jelin-raphael-akkara",
  cvUrl: "/JR_Resume.pdf",
  institutionUrl: "https://www.unipd.it/",
  secretDescription: "Researching reliable, personalized embodied agents.",
};
