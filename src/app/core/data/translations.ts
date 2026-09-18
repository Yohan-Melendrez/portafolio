import { PROJECTS, EXPERIENCES } from './portfolio.data';
import { Project, Experience } from '../models/portfolio.models';

export const TRANSLATIONS = {
  es: {
    nav: { about: 'Sobre mí', experience: 'Experiencia', projects: 'Proyectos', contact: 'Contacto' },
    hero: {
      greeting: 'Yohan Meléndrez',
      role: 'Software Engineer.',
      subtitle: 'Especializado en transformar problemas complejos en soluciones digitales simples, rápidas y escalables con Angular y .NET.',
      btnProjects: 'Ver Proyectos',
      btnCV: 'Descargar CV',
      cvLink: '/assets/cv.pdf'
    },
    about: {
      title: 'Sobre mí',
      p1: 'Soy un ingeniero de software apasionado por la calidad técnica y la experiencia de usuario. Disfruto construyendo sistemas desde cero, asegurando que cada línea de código tenga un propósito claro y aporte valor real.',
      p2: 'A lo largo de mi carrera profesional he tenido la oportunidad de digitalizar procesos críticos para el <strong>Gobierno del Estado de Sonora</strong> y desarrollar plataformas comerciales B2B y B2C, lo que me ha dado una visión integral del ciclo de vida del software.',
      p3: 'Mi enfoque principal está en el ecosistema <strong>Angular</strong> para crear interfaces limpias e intuitivas, respaldadas por arquitecturas backend sólidas construidas con <strong>.NET (C#)</strong> y <strong>Spring Boot</strong>.',
      exp: 'Años de experiencia',
      proj: 'Proyectos destacados',
      tech: 'Tecnologías dominadas',
      egel: 'Ceneval — Satisfactorio'
    },
    experience: {
      title: 'Experiencia'
    },
    projects: {
      title: 'Proyectos Destacados',
      filterAll: 'Todos',
      repo: 'Ver Repositorio',
      demo: 'Ver Demo'
    },
    skills: {
      title: 'Habilidades Técnicas'
    },
    contact: {
      title: 'Trabajemos ',
      titleSpan: 'Juntos',
      text: 'Actualmente estoy abierto a nuevas oportunidades. Si tienes una pregunta, una propuesta, o simplemente quieres saludar, mi bandeja de entrada siempre está abierta.'
    },
    data: {
      projects: PROJECTS,
      experiences: EXPERIENCES
    }
  },
  en: {
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    hero: {
      greeting: 'Yohan Meléndrez',
      role: 'Software Engineer.',
      subtitle: 'Specialized in transforming complex problems into simple, fast, and scalable digital solutions with Angular and .NET.',
      btnProjects: 'View Projects',
      btnCV: 'Download CV',
      cvLink: 'assets/cv en.pdf'
    },
    about: {
      title: 'About me',
      p1: 'I am a software engineer passionate about technical quality and user experience. I enjoy building systems from scratch, ensuring that every line of code has a clear purpose and adds real value.',
      p2: 'Throughout my professional career, I have had the opportunity to digitize critical processes for the <strong>Government of Sonora</strong> and develop B2B and B2C commercial platforms, giving me a comprehensive view of the software lifecycle.',
      p3: 'My main focus is on the <strong>Angular</strong> ecosystem to create clean and intuitive interfaces, backed by solid backend architectures built with <strong>.NET (C#)</strong> and <strong>Spring Boot</strong>.',
      exp: 'Years of experience',
      proj: 'Highlighted projects',
      tech: 'Mastered technologies',
      egel: 'Ceneval — Satisfactory'
    },
    experience: {
      title: 'Experience'
    },
    projects: {
      title: 'Featured Projects',
      filterAll: 'All',
      repo: 'View Repository',
      demo: 'View Demo'
    },
    skills: {
      title: 'Technical Skills'
    },
    contact: {
      title: 'Let\'s Work ',
      titleSpan: 'Together',
      text: 'I am currently open to new opportunities. If you have a question, a proposal, or just want to say hi, my inbox is always open.'
    },
    data: {
      projects: [
        {
          ...PROJECTS[0],
          description: 'Scalable platform for centralized corporate license management. RESTful API with JWT security on Render and managed database on Aiven. \n\n🔑 Demo Credentials:\n• Admin: admin@saasmanager.com / admin123\n• User: carlos.martinez@empresa.com / user123'
        },
        {
          ...PROJECTS[1],
          description: 'Role-based raffle management system that increases security in transactions between buyers and sellers. Optimized queries in PostgreSQL using Prisma ORM and responsive interface with Angular.'
        },
        {
          ...PROJECTS[2],
          description: 'Student commerce platform with decoupled MVC architecture using Node.js. Custom validation middleware to ensure transactions and data integrity between users of the student community.'
        },
        {
          ...PROJECTS[3],
          description: 'Mobile-first web system for multi-warehouse inventory management. Automatic generation of SKU and Code128 barcodes, camera scanner and reports. \n\n🔑 Demo: demo@inventarioerp.com / Demo1234'
        }
      ],
      experiences: [
        {
          ...EXPERIENCES[0],
          role: 'Frontend Developer',
          period: 'April 2026 – Present',
          description: [
            'Led the frontend development of "Wrap-up Connect", creating key features such as multi-step registration flow, documentation pages, and high-impact landing page components using Angular 21, Tailwind CSS, and AWS.',
            'Collaborated on the architecture and implementation of an administrative panel with Angular Material to optimize system operations.',
            'Ensured code quality through periodic refactoring and hotfixes, optimizing frontend performance.'
          ]
        },
        {
          ...EXPERIENCES[1],
          role: 'Frontend Developer (Internship)',
          period: 'August 2025 – December 2025',
          company: 'Digital Government of the State of Sonora',
          description: [
            'Led the digitization of critical functions for the "Digital Communications Agenda" system within an Agile team.',
            'Optimized user interfaces with TypeScript and HTML5, achieving efficient integration with backend services in .NET.',
            'Ensured the stability of critical modules through rigorous unit testing before deployment to production.',
            'Managed version control and workflows with Git, ensuring continuous releases without technical conflicts.'
          ]
        },
        {
          ...EXPERIENCES[2],
          role: 'Software Engineering',
          company: 'Sonora Institute of Technology (ITSON)',
          period: 'August 2022 – May 2026',
          description: [
            'Degree in process. Comprehensive training in software development, system architecture, and agile methodologies.'
          ]
        },
        {
          ...EXPERIENCES[3],
          role: 'Testimony of Satisfactory Performance',
          period: 'January 2026',
          description: [
            'General Exam for the Graduation of the Bachelor of Software Engineering. Satisfactory performance nationwide.'
          ]
        }
      ]
    }
  }
};
