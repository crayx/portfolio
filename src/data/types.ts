/**
 * Core type definitions for the portfolio
 */

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description?: string;
  points: string[];
  tags?: string[];
}

export interface Project {
  id: string;
  title: string;
  badge: string;
  description: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: 'proficient' | 'comfortable';
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface Achievement {
  tag: string;
  description: string;
}

export interface HeroChip {
  title: string;
  description: string;
  tags: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Contact {
  type: 'email' | 'linkedin' | 'github';
  label: string;
  url: string;
}

export type Theme = 'light' | 'dark';

export interface PortfolioData {
  hero: {
    name: string;
    role: string;
    description: string;
    image?: string;
    socialLinks?: SocialLink[];
    status?: string;
  };
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
  achievements: Achievement[];
  contact: Contact[];
}
