export type Project = {
  title: string;
  description: string;
  images: string[];
  category: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "This is the first project.",
    images: [
      "https://img.heroui.chat/image/ai?w=800&h=600&u=1",
      "https://img.heroui.chat/image/ai?w=800&h=600&u=2",
      "https://img.heroui.chat/image/ai?w=800&h=600&u=3",
    ],
    category: "Web",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online shopping experience with cart, payments, and user accounts.",
    images: [
      "https://img.heroui.chat/image/ai?w=800&h=600&u=9",
      "https://img.heroui.chat/image/ai?w=800&h=600&u=5",
    ],
    category: "Web",
  },
  {
    title: "Mobile Fitness App",
    description:
      "Track workouts, set goals, and monitor progress with this comprehensive fitness solution.",
    images: [
      "https://img.heroui.chat/image/ai?w=800&h=600&u=w",
      "https://img.heroui.chat/image/ai?w=800&h=600&u=2",
      "https://img.heroui.chat/image/ai?w=800&h=600&u=3",
    ],
    category: "Mobile",
  },
  {
    title: "Data Visualization ai",
    description:
      "Interactive charts and graphs to present complex data in an accessible format.",
    images: ["https://img.heroui.chat/image/ai?w=800&h=600&u=90"],
    category: "Data",
  },
  {
    title: "AI Image Generator",
    description:
      "Uses machine learning algorithms to create unique images based on text prompts.",
    images: [
      "https://img.heroui.chat/image/ai?w=800&h=600&u=63",
      "https://img.heroui.chat/image/ai?w=800&h=600&u=2",
    ],
    category: "AI",
  },
];
