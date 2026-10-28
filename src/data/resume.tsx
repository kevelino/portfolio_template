import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Alex Carter",
  initials: "AC",
  url: "https://your-portfolio.vercel.app",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/san-francisco",
  description:
    "Transforming ideas into products.",
  summary:
    "Full-Stack Developer specialized in Saas Building, transforming complex ideas into clean, fast, and scalable digital products.",
  avatarUrl: "/me.svg",
  skills: [
    "Python",
    "Javascript",
    "Typescript",
    "Node.js",
    "Postgres",
    "MongoDB",
    "MySQL",
    "Prisma",
    "AWS",
    "VPS",
    "Docker",
    "Linux",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "alex.carter@example.com",
    tel: "+1 (555) 123-4567",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/your-username",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/your-username",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/your_username",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@your_username",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:alex.carter@example.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  projects: [
    {
      title: "Nimbus",
      href: "https://nimbus-demo.vercel.app",
      dates: "2025 - 2026",
      active: false,
      description:
        "AI-powered content pipeline that turns raw notes into structured documentation.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "OpenAI",
        "Supabase",
      ],
      links: [
        {
          type: "Website",
          href: "https://nimbus-demo.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Pulse",
      href: "https://pulse-demo.vercel.app",
      dates: "2025 - Present",
      active: true,
      description:
        "Real-time product analytics dashboard that turns raw events into live insights.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "ClickHouse",
        "WebSockets",
      ],
      links: [
        {
          type: "Website",
          href: "https://pulse-demo.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Foundry",
      href: "https://foundry-demo.vercel.app",
      dates: "2026 - Present",
      active: true,
      description:
        "Internal developer platform to provision services and manage feature flags.",
      technologies: [
        "React",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Postgres",
        "Flagsmith",
      ],
      links: [
        {
          type: "Website",
          href: "https://foundry-demo.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
