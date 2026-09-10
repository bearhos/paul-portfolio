export const profile = {
  name: "Phạm Hải Phước",
  shortName: "Phước",
  role: "Senior React Native Engineer",
  company: "SCEX",
  email: "phamhaiphuoc15@gmail.com",
  linkedin: "https://www.linkedin.com/in/phuoc-pham-804624254/",
  cv: "/cv/pham-hai-phuoc-cv.pdf",
  location: "Ho Chi Minh City, Vietnam",
};

export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  overview?: string;
  role: string;
  technologies: string[];
  contributions: string[];
  icon?: string;
  screenshot?: string;
  url?: string;
  linkLabel?: string;
  cardLinkLabel?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    id: "scex",
    name: "SCEX",
    category: "Crypto asset trading",
    description: "Spot crypto trading designed for Vietnamese investors.",
    overview:
      "SCEX is a crypto asset trading platform developed by SACOM Crypto Asset Exchange, designed to offer a user-friendly, secure spot trading experience for Vietnamese investors. The app supports deposits and withdrawals, buy and sell orders, and real-time portfolio and transaction-history tracking, with multi-layer security and rigorous compliance processes.",
    role: "Senior React Native Engineer",
    technologies: ["React Native"],
    contributions: [],
    screenshot: "/images/scex-store-preview.webp",
    url: "https://apps.apple.com/vn/app/scex-trading-simulator/id6763202537",
    cardLinkLabel: "Simulator on App Store",
    note: "The public App Store link opens SCEX Trading Simulator, an educational version using simulated assets, not real-money trading. The preview is from that listing; the overview above describes the broader SCEX platform.",
  },
  {
    id: "doxa-web",
    name: "Doxa Website",
    category: "Web development · Philodox",
    description:
      "A platform for philosophical questions and thoughtful discussions.",
    role: "Software Engineer & Team Lead at Philodox",
    technologies: ["Next.js", "Payments", "Social authentication"],
    contributions: [
      "Built the Next.js codebase and connected backend APIs.",
      "Integrated payment gateways and social sign-in.",
      "Led a four-member team and collaborated with Product on the backlog.",
    ],
    screenshot: "/images/doxa-website-preview.webp",
    url: "https://doxa.cafe",
    linkLabel: "Visit website",
    note: "Preview captured from Doxa's public sign-in page. The live website may reflect changes made after my involvement.",
  },
  {
    id: "sync",
    name: "Sync Super App",
    category: "Communication",
    description: "Bringing people closer, one conversation at a time.",
    role: "Senior Software Engineer & Team Lead",
    technologies: ["React Native", "LiveKit", "Firebase", "Fastlane"],
    contributions: [
      "Built the React Native CLI codebase for real-time messaging and voice calls.",
      "Integrated sockets, LiveKit, Firebase, APNs, and Alchemy with backend services.",
      "Set up CI/CD with Fastlane and worked with Product on features and backlogs.",
      "Led a four-person team and mentored three fellow developers.",
    ],
    icon: "/images/sync-icon.webp",
    screenshot: "/images/sync-preview.webp",
    url: "https://apps.apple.com/vn/app/sync-secure-chat-private-ai/id6747809379",
    note: "Public App Store imagery may reflect updates released after my involvement.",
  },
  {
    id: "acb",
    name: "ACB ONE",
    category: "Mobile banking",
    description: "Everyday banking, built on careful engineering.",
    role: "Senior Software Engineer at CMC Global, onsite ACB Bank",
    technologies: [
      "React Native",
      "Redux",
      "MobX-State-Tree",
      "SDK integration",
    ],
    contributions: [
      "Contributed to Visa Collection, Mutual Funds, and New Core eKYC modules.",
      "Developed features within the existing banking application architecture.",
      "Extended shared components for compatibility and reuse across modules.",
      "Integrated partner SDKs and collaborated with ACB's internal development team.",
    ],
    screenshot: "/images/acb-one-store-preview.webp",
    url: "https://apps.apple.com/vn/app/acb-one/id950141024",
    cardLinkLabel: "View on App Store",
    note: "This overview describes my contribution through CMC Global. The public App Store preview may reflect updates released after my involvement. Internal interfaces, source code, and implementation details are not included.",
  },
  {
    id: "oki",
    name: "OKI Chat",
    category: "Private communication",
    description: "A little more connection. A lot more privacy.",
    role: "Freelance Senior Software Engineer",
    technologies: ["Expo", "Zustand", "LiveKit", "Firebase"],
    contributions: [
      "Developed a React Native Expo application for real-time messaging and voice calls.",
      "Used Zustand to keep application state organized and maintainable.",
      "Connected backend APIs and integrated Firebase, APNs, sockets, and LiveKit.",
      "Worked on a communication product described in my CV as supporting end-to-end encryption.",
    ],
    icon: "/images/oki-icon.webp",
    screenshot: "/images/oki-preview.webp",
    url: "https://apps.apple.com/us/app/oki-chat-platform/id6758304434",
    note: "Public App Store imagery may reflect updates released after my involvement.",
  },
  {
    id: "danz",
    name: "Danz People",
    category: "Dance & classes",
    description:
      "Discover dance classes and connect with the Danz People community.",
    role: "React Native Developer at Vinova",
    technologies: ["React Native", "Firebase", "Styled Components"],
    contributions: [
      "Built features and maintained the React Native application.",
      "Implemented Firebase authentication and data synchronization.",
      "Created responsive UI with Styled Components and improved render cycles.",
      "Contributed to testing, bug fixes, and code reviews.",
    ],
    screenshot: "/images/danz-preview.png",
  },
];

export const additionalWork: Project[] = [
  {
    id: "doxa-mobile",
    name: "Doxa App",
    category: "Mobile development",
    description: "Taking philosophical conversations from the web to mobile.",
    role: "React Native Engineer & Team Lead",
    technologies: ["React Native", "Firebase", "Fastlane"],
    contributions: [
      "Built the React Native codebase and connected backend services.",
      "Integrated Firebase, APNs, and Fastlane CI/CD.",
      "Led a four-member team and planned features with Product.",
    ],
  },
];

export const experience = [
  {
    company: "SCEX",
    role: "Senior React Native Engineer",
    period: "Current",
    summary:
      "Building mobile experiences for SCEX's crypto asset trading platform.",
    current: true,
  },
  {
    company: "CMC Global",
    role: "Senior Software Engineer",
    period: "Sep 2025 - Aug 2026",
    summary:
      "Onsite at ACB Bank. Banking modules, shared components, and partner SDK integrations.",
  },
  {
    company: "Freelance",
    role: "Senior Software Engineer",
    period: "Sep 2025 - Feb 2026",
    summary:
      "A concurrent engagement building OKI Chat with React Native Expo.",
  },
  {
    company: "Super Nova Technologies",
    role: "Middle / Senior Software Engineer",
    period: "May 2024 - Sep 2025",
    summary:
      "Led mobile development and mentored teammates on a real-time communication product.",
  },
  {
    company: "Philodox",
    role: "React Native Developer",
    period: "Sep 2022 - May 2024",
    summary:
      "Developed the Doxa mobile app and expanded into web development with its Next.js website.",
  },
  {
    company: "Vinova",
    role: "Junior React Native Developer",
    period: "Mar 2021 - Aug 2022",
    summary:
      "Built features, fixed bugs, and improved application performance.",
  },
];

export const stackGroups = [
  {
    title: "The foundation",
    items: ["React Native", "Expo", "React", "Next.js"],
  },
  {
    title: "State & services",
    items: ["Redux", "Zustand", "MobX-State-Tree", "Axios"],
  },
  {
    title: "Connected experiences",
    items: ["Firebase", "LiveKit", "WebSockets", "Push notifications"],
  },
  {
    title: "From build to release",
    items: ["Fastlane", "Git", "CI/CD", "SDK integration"],
  },
];
