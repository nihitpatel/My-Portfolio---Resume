export interface Project {
  title: string;
  role: string;
  company: string;
  tech: string[];
  description: string[];
  impact: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}