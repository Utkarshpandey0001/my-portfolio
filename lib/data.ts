import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const SOCIALS = [
  { 
    name: "GitHub (Personal)", 
    icon: Github, 
    href: "https://github.com/Utkarshpandey0001" 
  },
  { 
    name: "LinkedIn", 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/utkarsh-raj-pandey-2a2971286/" 
  },
  { 
    name: "Discord", 
    icon: MessageCircle, 
    href: "https://discord.com/users/utkarshpandey_51691", // Note: Discord links often need a User ID, but this will try to open the user.
    label: "utkarshpandey_51691"
  },
  { 
    name: "Email", 
    icon: Mail, 
    href: "mailto:utkarshrajpandey0001@gmail.com" 
  },
];

export const SKILLS = {
  languages: ["JavaScript", "TypeScript", "C++", "Solidity", "Rust","Python"],
  frontend: ["Next.js", "React", "React Native", "Tailwind CSS", "Redux", "Framer Motion"],
  backend: ["Node.js", "Express.js", "Firebase (Functions/DB)", "Supabase", "PostgreSQL", "MongoDB", "Redis"],
  devops: ["Docker", "Kubernetes (K8s)", "AWS (S3, EC2, ASG)", "Turborepo", "CI/CD", "GitHub Actions"],
  web3: ["Ethereum", "Solana", "Deffi", "IPFS", "Wagmi", "Thirdweb","Foundry"],
  ai_ml: ["RAG Architecture", "Vector Search", "AI Agents", "MCP"],
};

export const EXPERIENCE = [
  {
    company: "Ridevaam (London AI Ride-hailing Startup)",
    role: "Founding Software Engineer",
    duration: "October 2025 - Present",
    link: "https://ridevaam.com/",
    repo: "https://github.com/utkarshraj0001", // Your work repo link
    description:
      "Spearheaded the development of the rider and driver mobile applications using React Native as a Founding Engineer. Architected complex real-time features using Firebase, including custom hooks for trip handling, precise ETA calculation, and intelligent driver matching algorithms. Implemented dynamic pricing logic influenced by weather, traffic, and timing variables. Integrated Stripe payment gateway via Firebase Functions for auto-scaling capability. Executed a complete database migration from Supabase to Firebase and deployed AI agents for automated messaging and scheduling.",
  },
  {
    company: "Crabs",
    role: "Full Stack Developer",
    duration: "3 Months",
    link: "#",
    description:
      "Developed the frontend UI and led a critical database migration from Firebase to PostgreSQL for improved data integrity. Architected a robust Express.js backend API, implementing secure JWT authentication systems and optimizing the request-response lifecycle between client and server interfaces.",
  },
];

export const ACHIEVEMENTS = [
  { title: "Winner", organization: "Hackbangalore" },
  { title: "Winner", organization: "Transfinite" },
  { title: "Winner", organization: "Hedera Builder Forge" },
  { title: "Top Recognition", organization: "Colosseum Hackathon" },
  { title: "Top Leaderboard Ranker", organization: "Advent of Code 2026" },
  {
    title: "Proposed Post-Quantum Wallet",
    organization: "MIT Hackquest",
    details: "Designed for private key management.",
  },
  {
    title: "Participant",
    organization: "ETHGlobal, Cedra, Redacted events",
  },
];

export const OPEN_SOURCE = ["Alby/go", "Alby/hub", "Arklab"];

export const PROJECTS = [
  {
    title: "Second Brain RAG",
    description: "A sophisticated Retrieval-Augmented Generation (RAG) knowledge base application.",
    points: [
      "Developed a system allowing users to ingest and retrieve knowledge from YouTube, X (Twitter), and Instagram links.",
      "Implemented RAG architecture using MongoDB Vector Search for highly efficient semantic search and contextual data retrieval.",
      "Integrated Google Gemini model to generate AI-powered summaries and query-based responses over stored content.",
      "Built on a scalable Express.js backend with a responsive React + Tailwind CSS frontend.",
    ],
    stack: ["Next.js", "Express.js", "MongoDB Vector", "Google Gemini AI", "Tailwind"],
    github: "#", 
    demo: "#",
    imageType: "ai", 
  },
  {
    title: "CedraNexus",
    description: "A decentralized AI art generation and marketplace on the Cedra Network (Web3).",
    points: [
      "AI-Powered Creation: Users generate unique artwork from prompts and mint directly to Cedra blockchain with IPFS metadata.",
      "Key Ring Wallet System: Solves burner wallet issues by encrypting private keys locally for secure asset reselling.",
      "Live Ledger Dashboard: Real-time tracker showing market lifecycle (Listed/Sold states) for sellers and escrow.",
      "Built using Move smart contracts, Next.js 14, and the @cedra-labs/ts-sdk.",
    ],
    stack: ["Next.js 14", "Move (Smart Contracts)", "Cedra Network", "IPFS", "TypeScript"],
    github: "https://github.com/Utkarshpandey0001/CedraMarket", 
    demo: "https://cedra-market.vercel.app/",
    imageType: "blockchain",
  },
  {
    title: "Cloud-Code",
    description: "Real-time collaborative cloud code editor orchestrated via Kubernetes.",
    points: [
      "Engineered a real-time editor enabling instant collaboration using Node.js and Socket.io.",
      "Designed a microservice architecture orchestrated via Kubernetes (K8s) for isolated user execution environments.",
      "Containerized runtime sandboxes using Docker, dynamically provisioned through AWS Auto Scaling Groups (ASGs).",
      "Implemented secure execution backends for running user code in lightweight containers with load-based scheduling.",
    ],
    stack: ["Kubernetes (K8s)", "Docker", "AWS (ASGs)", "Node.js", "Socket.io"],
    github: "https://github.com/Utkarshpandey0001/Cloud-code.git", 
    demo: "#",
    imageType: "cloud",
  },
   {
    title: "Imagera SaaS",
    description: "Full-stack AI image generation SaaS platform allowing personalized model training.",
    points: [
       "Developed application to train personalized image generation models on Fal.ai using user-uploaded datasets stored in AWS S3.",
       "Integrated Fal.ai APIs for automated model training and dynamic prompt-based inference.",
       "Implemented Clerk for secure authentication and Razorpay for handling subscription workflows.",
       "Containerized and modularized using Docker and Turborepo for scalable microservice deployment.",
    ],
    stack: ["Next.js", "Turborepo", "Docker", "AWS S3", "Fal.ai", "Clerk", "Razorpay"],
    github: "https://github.com/Utkarshpandey0001/Ai-image-generator.git", 
    demo: "#",
    imageType: "ai",
  },
];