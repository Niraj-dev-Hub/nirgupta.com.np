export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
  icon: string; // lucide icon name or emoji representation
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
}

export const PERSONAL_DETAILS = {
  fullName: "Niraj Kumar Gupta",
  shortName: "NirGupta",
  domain: "nirgupta.com.np",
  role: "Computer Engineering Student | Aspiring Software Engineer",
  location: "Nepal",
  quote: "Consistency beats talent when talent doesn’t stay consistent.",
  github: "https://github.com/Niraj-dev-Hub",
  linkedin: "https://www.linkedin.com/in/niraj-gupta-670095292/",
  facebook: "https://www.facebook.com/Nirgupta123",
  currentlyBuildingUrl: "https://github.com/Niraj-dev-Hub/EcoTrack-Nepal",
  currentlyBuildingName: "EcoTrack-Nepal",
};

export const TYPING_WORDS = [
  "DSA with Java",
  "Full Stack Web",
  "Cybersecurity Enthusiast"
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Java", "C", "Python", "JavaScript", "HTML", "CSS"],
    icon: "code",
  },
  {
    category: "Frontend",
    skills: ["React", "Tailwind CSS", "Bootstrap"],
    icon: "layout",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB (basics)"],
    icon: "database",
  },
  {
    category: "Tools",
    skills: ["VS Code", "IntelliJ", "Git", "GitHub", "WordPress", "AI Tools"],
    icon: "wrench",
  },
  {
    category: "Operating Systems",
    skills: ["Windows", "Linux (Ubuntu, Kali, Zorin)"],
    icon: "terminal",
  },
];

export const PROJECTS: Project[] = [
  {
    title: "EcoTrack-Nepal",
    description: "An environmental tracking initiative for Nepal, assisting users in tracking carbon footprints, eco-friendly pathways, or local environment stats. Currently actively developed.",
    tags: ["React", "Tailwind CSS", "Climate Tech"],
    githubUrl: "https://github.com/Niraj-dev-Hub/EcoTrack-Nepal",
  },
  {
    title: "Nir-game-Hub",
    description: "An interactive hub compiling lightweight browser-based arcade, puzzle, and custom interactive games developed in JavaScript.",
    tags: ["HTML5", "Vanilla JS", "Tailwind CSS", "Canvas"],
    githubUrl: "https://github.com/Niraj-dev-Hub/Nir-game-Hub",
  },
  {
    title: "Ausadhi",
    description: "A hyper-local platform that enables citizens to discover medicine availability in nearby pharmacies while helping pharmacy owners manage their inventory digitally.",
    tags: ["MERN Stack", "JWT, Bcrypt", "Axios", "Vite"],
    githubUrl: "https://github.com/anandksri/Ausadhi",
  },
  {
    title: "Spotify Clone",
    description: "A visually styled clone of Spotify's Web Player showcasing responsive listings, custom audio dashboard controls, and sidebars.",
    tags: ["React", "Tailwind CSS", "Lucide Icons", "Audio API"],
    githubUrl: "https://github.com/Niraj-dev-Hub/Spotify",
  },
  {
    title: "Airbnb Clone",
    description: "A structural clone of the Airbnb rental marketplace representing detailed card layouts, reservation portals, and advanced filters.",
    tags: ["React", "Tailwind CSS", "Mock Backend"],
    githubUrl: "https://github.com/Niraj-dev-Hub/Airbnb",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Hack4Impact Participant",
    organization: "Hack4Impact Nepal Initiative",
    date: "2025 - Present",
    description: "Collaborated on designing and engineering community-centered web prototypes for local non-profits, applying Agile sprints.",
  },
  {
    title: "Cybersecurity Exploration",
    organization: "Ethical Hacking & Self-Learning",
    date: "Ongoing",
    description: "Diving deep into Linux administration (Kali, Ubuntu), security patches, web application vulnerabilities, and safe system configuration.",
  },
  {
    title: "Daily Coding Streak & Self Learning",
    organization: "GitHub / SoloLearn Certification",
    date: "Continuous",
    description: "Committing code daily, completing intensive data structures exploration using Java, and earning basic algorithmic credentials.",
  },
];

export const GALLERY_IMAGES = [
  {
    url: "/images/10grade.jpeg",
    title: "Grade 10 Grade Sheets",
    description: "Passed SEE on 2080 with 3.53 GPA",
  },
  // {
  //   url: "/images/12Res.jpeg",
  //   title: "Grade 12 Result",
  //   description: "Passed +2 with Science on 2083 with 3.4 GPA",
  // },
  {
    url: "/images/java.jpeg",
    title: "JAVA basics",
    description: "Java basics certificate from sololearn.",
  },
  {
    url: "/images/python.jpeg",
    title: "Python Basics",
    description: "Python basics certificate from sololearn.",
  },
  // {
  //   url: "/images/hackthon.jpeg",
  //   title: "Hackathon participate",
  //   description: "Participated in Hackathon organized by ICT at COSMOS College.",
  // },
  {
    url: "/images/sigma.jpeg",
    title: "FullStack Devlopment",
    description: "FullStack Development certificate from Apna collge.",
  },
];
