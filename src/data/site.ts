import type { NavItem } from "./types";

export const site = {
  name: "Obed Mathias Gaiya",
  shortName: "Obed Gaiya",
  /** Post-nominal letters, shown after the full name. */
  designations: ["BSC", "ACIPM", "CPMP", "Dip.FM"],
  title: "Senior Full-Stack Engineer | Backend & Fintech Systems Engineer",
  eyebrow: "SOFTWARE ENGINEER · SYSTEMS ARCHITECTURE · FINTECH",
  headline: ["Engineering Scalable Systems.", "Building Products That Matter."],
  heroDescription:
    "I build reliable backend systems, fintech infrastructure, and modern digital products that help businesses scale.",
  intro:
    "I design and build scalable software systems that solve real business problems. From high-performance backend architectures and fintech infrastructure to modern web and mobile applications, I turn complex ideas into reliable, production-ready products.",
  tagline:
    "I don't just build applications. I engineer scalable systems that power businesses.",
  siteUrl: "https://gaiyaobed.com.ng",
  // What a hiring manager should take away in five seconds.
  proofPoints: [
    "Fintech: wallets, ledgers, payments, and open banking in Nigeria and the UAE",
    "Scale: 100K+ requests per second at 99.9% uptime",
    "Delivery: backend, web, and mobile, concept to production",
  ],
  location: "Abuja, Nigeria | Working Globally",
  availability: "Available for opportunities",
  email: "gaiyaobed94@gmail.com",
  whatsapp: "https://wa.me/2347058149795",
  phone: "+234 705 814 9795",
  links: {
    github: "https://github.com/gaiyadev",
    linkedin: "https://www.linkedin.com/in/obed-m-gaiya-128467180",
    /** Set to your profile URL (e.g. 'https://x.com/handle') to show an X icon. Hidden while undefined. */
    x: undefined as string | undefined,
    blog: "https://gaiyaobed.hashnode.dev",
  },
  /** Optional: path in /public, e.g. '/portrait.webp'. Placeholder shown when undefined. */
  portrait: "/portrait.jpg" as string | undefined,
  /** Set VITE_FORM_ENDPOINT (Formspree, Getform...). Falls back to opening the visitor's mail client. */
  formEndpoint:
    (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) || undefined,
};

export const nav: NavItem[] = [
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Fintech", href: "#fintech" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/** Facts taken directly from the CV. Do not add numbers that are not in your own records. */
export const credibility = [
  { value: "9+", label: "Years building software" },
  { value: "100K+", label: "Requests/sec scaled at WorkNation" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "NG + UAE", label: "Fintech delivered in two markets" },
];
