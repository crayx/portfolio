import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  hero: {
    name: 'Meghna Yadav',
    role:  'Frontend Engineer',
    description: 'Designing digital products that are clear, usable, and conversion focused.',
    image: '/images/Hero.png',
    socialLinks: [
      {
        label: 'Email',
        url: 'mailto:meghnayadava2909@gmail.com',
      },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/meghna-y-85b34599/',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/crayx/',
      },
      { label: "Spotify", url: "https://open.spotify.com/user/pu39sb3tw5hfufipxicubp2xf?si=UUw2bayWScGyelgIjxN1mg",}
    ],
  },
  experience: [
    {
      id: 'comeon',
      role: 'Senior Frontend Engineer',
      company: 'ComeOn Group',
      period: 'Sep 2025 – Present',
      tags: ['TypeScript', 'Next.js', 'Animation Systems'],
      points: [
        'Architected the migration of my domain codebase to TypeScript and Next.js — defining typed module boundaries and an incremental adoption plan that kept the product shippable throughout the migration.',
        'Engineered a category-driven animation CRM that gives non-engineering stakeholders direct control over UI motion parameters while enforcing brand-consistent defaults at the schema level.',
        'Implemented a remote-configurable "Big Win" celebration system so Live-Ops can dynamically adjust intensity and animation assets via CRM without client-side releases.',
        'Owned the frontend performance budget for the domain — profiled render hotspots and introduced route-level code splitting, lazy hydration, and image policies that lifted LCP and TTI on key conversion flows.',
        'Set the frontend quality bar with typed API clients, structured error boundaries, and client-side observability; mentored mid-level engineers through code review and pair programming.',
      ],
    },
    {
      id: 'nielsen',
      role: 'Member of Technical Staff 2',
      company: 'Nielsen',
      period: 'Mar 2025 – Aug 2025',
      tags: ['Nielsen Media'],
      points: [
        'Delivered an internal solution that replaced a costly external tool, saving the organization an estimated USD $20M — recognized by the CTO.',
        'Led the design and logic phases through intensive whiteboarding sessions and cross-functional collaboration with the SVP and VP of Engineering and product owners.',
      ],
    },
    {
      id: 'interviewbit',
      role: 'SDE 2',
      company: 'InterviewBit / Scaler',
      period: 'Sep 2020 – Feb 2025',
      tags: ['Core Product', 'Multiple pods'],
      points: [
        'Enhanced the in‑house video call product with dynamic quality control and screen sharing, significantly improving assessment performance and reducing proctoring costs.',
        'Led "App‑to‑Module" migrations, extracting reusable components into the design system and systematically paying down frontend tech debt.',
        'Spearheaded the frontend for a CMS website builder enabling instant hosting of custom JavaScript pages, cutting deployment cycles from days to minutes.',
        'Proposed and implemented Cypress for E2E testing, which later became the company‑wide standard for regression safety.',
        'Built a vanilla JavaScript alumni directory with QA functionality, generating over 1,500 monthly engagements.',
        'Mentored juniors and interns via code reviews, pair programming, and internal workshops, raising the overall frontend bar.',
      ],
    },
  ],
  projects: [
    {
      id: 'hackathon-chatbot',
      title: 'Scaler Hackathon Chatbot (Team Lead)',
      badge: 'Real‑time support',
      description:
        'Led the development of a persona‑based real‑time chat widget integrated with the video platform using ChatGPT‑3.5, reducing support tickets by approximately 15%.',
      tags: ['ChatGPT‑3.5', 'Real‑time UI', 'Widget integration'],
    },
    {
      id: 'seekify',
      title: 'Seekify · 1‑Minute Learning App',
      badge: 'React Native',
      description:
        'Contributed to the frontend of a one‑minute video learning mobile app for Seekify, focusing on responsive layouts and seamless video experiences.',
      tags: ['React Native', 'Mobile UX'],
    },
    {
      id: 'momentum',
      title: 'Momentum India · COVID‑19 App',
      badge: 'Social impact',
      description:
        'Built the frontend of a React Native mobile app used to help prevent the spread of COVID‑19, with a focus on clarity and usability under constraints.',
      tags: ['React Native', 'Health', 'Performance'],
    },
  ],
  skills: [
    {
      category: 'Proficient',
      skills: [
        { name: 'JavaScript', level: 'proficient' },
        { name: 'TypeScript', level: 'proficient' },
        { name: 'React', level: 'proficient' },
        { name: 'Next.js', level: 'proficient' },
        { name: 'Redux', level: 'proficient' },
        { name: 'HTML', level: 'proficient' },
        { name: 'CSS', level: 'proficient' },
        { name: 'Webpack', level: 'proficient' },
        { name: 'Git', level: 'proficient' },
        { name: 'ES6+', level: 'proficient' },
        { name: 'Cypress', level: 'proficient' },
      ],
    },
    {
      category: 'Comfortable',
      skills: [
        { name: 'C++', level: 'comfortable' },
        { name: 'Node.js', level: 'comfortable' },
        { name: 'React Native', level: 'comfortable' },
        { name: 'Jest', level: 'comfortable' },
      ],
    },
  ],
  education: [
    {
      institution: 'JSS Academy of Technical Education',
      degree: 'Bachelor of Technology',
      period: '2016 – 2020',
      location: 'Noida',
    },
  ],
  achievements: [
    {
      tag: 'Badminton · Dr. A.P.J. Abdul Kalam Sports Fest',
      description:
        '2019 Zonal Team Gold · 2018 Zonal Team Gold · 2017 Zonal Singles Silver · 2017 Zonal Doubles Gold.',
    },
    {
      tag: 'Fine Arts · CBSE',
      description:
        'Certificate of Merit for outstanding performance in painting, awarded to the top 0.1% of successful candidates.',
    },
    {
      tag: 'Classical Dance · Bharatanatyam',
      description:
        'Senior Diploma (First Division) & Junior Diploma (First Division) from Prayag Sangeet Samiti.',
    },
  ],
  contact: [
    {
      type: 'email',
      label: 'Email',
      url: 'mailto:meghnayadava2909@gmail.com',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/meghna-y-85b34599/',
    },
    {
      type: 'github',
      label: 'GitHub',
      url: 'https://github.com/crayx/',
    },
  ],
};
