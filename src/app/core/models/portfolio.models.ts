export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  type: 'work' | 'education' | 'certification';
  logo?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'devops';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
