import { Project, Experience, Skill } from '../models/portfolio.models';

export const PROJECTS: Project[] = [
  {
    id: 'saas-asset-manager',
    title: 'SaaS Asset Manager',
    description:
      'Plataforma escalable para la gestión centralizada de licencias corporativas. API RESTful con seguridad JWT en Render y base de datos gestionada en Aiven. \n\n🔑 Credenciales Demo:\n• Admin: admin@saasmanager.com / admin123\n• User: carlos.martinez@empresa.com / user123',
    tech: ['Spring Boot', 'Angular', 'MySQL', 'Render', 'Aiven', 'Vercel'],
    githubUrl: 'https://github.com/Yohan-Melendrez/saasmanager-BackEnd',
    demoUrl: 'https://saasmanager.vercel.app',
    category: ['java', 'angular'],
  },
  {
    id: 'rifando-ando',
    title: 'Rifando-ando',
    description:
      'Sistema de gestión de sorteos basado en roles que incrementa la seguridad en transacciones entre compradores y vendedores. Consultas optimizadas en PostgreSQL mediante Prisma ORM e interfaz responsiva con Angular.',
    tech: ['NestJS', 'PostgreSQL', 'Prisma', 'Angular', 'Tailwind CSS'],
    category: ['nodejs', 'angular'],
  },
  {
    id: 'itson-market',
    title: 'Itson Market',
    description:
      'Plataforma de comercio estudiantil con arquitectura desacoplada MVC usando Node.js. Middleware de validación personalizado para asegurar transacciones e integridad de datos entre usuarios de la comunidad estudiantil.',
    tech: ['Node.js', 'Express', 'JavaScript', 'MVC', 'Middleware'],
    githubUrl: 'https://github.com/Yohan-Melendrez/ItsonMarket',
    category: ['nodejs'],
  },
  {
    id: 'inventario-erp',
    title: 'InventarioERP',
    description:
      'Sistema web mobile-first para gestión de inventario en múltiples bodegas. Generación automática de SKU y código de barras Code128, escáner por cámara y reportes. \n\n🔑 Demo: demo@inventarioerp.com / Demo1234',
    tech: ['Angular 18', 'ASP.NET Core', 'PostgreSQL', 'EF Core', 'JWT', 'PWA'],
    category: ['angular', 'dotnet'],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Wrap-up',
    role: 'Desarrollador Frontend',
    period: 'Abril 2026 – Presente',
    description: [
      'Lideré el desarrollo frontend de "Wrap-up Connect", creando funcionalidades clave como flujo de registro en varios pasos, páginas de documentación y componentes de landing page de alto impacto usando Angular 21, Tailwind CSS y AWS.',
      'Colaboré en la arquitectura e implementación de un panel administrativo con Angular Material para optimizar las operaciones del sistema.',
      'Aseguré la calidad del código mediante refactorizaciones periódicas y hotfixes, optimizando el rendimiento frontend.',
    ],
    type: 'work',
  },
  {
    company: 'Subsecretaría de Gobierno Digital del Estado de Sonora',
    role: 'Desarrollador Frontend (Prácticas Profesionales)',
    period: 'Agosto 2025 – Diciembre 2025',
    description: [
      'Lideré la digitalización de funciones críticas para el sistema "Agenda Digital de Comunicaciones" dentro de un equipo Agile.',
      'Optimicé interfaces de usuario con TypeScript y HTML5, logrando integración eficiente con servicios backend en .NET.',
      'Aseguré la estabilidad de módulos críticos mediante pruebas unitarias rigurosas antes del despliegue en producción.',
      'Gestioné el control de versiones y flujos de trabajo con Git, garantizando lanzamientos continuos sin conflictos técnicos.',
    ],
    type: 'work',
  },
  {
    company: 'Instituto Tecnológico de Sonora (ITSON)',
    role: 'Ingeniería en Software',
    period: 'Agosto 2022 – Mayo 2026',
    description: [
      'Título en trámite. Formación integral en desarrollo de software, arquitectura de sistemas y metodologías ágiles.',
    ],
    type: 'education',
  },
  {
    company: 'Ceneval EGEL',
    role: 'Testimonio de Desempeño Satisfactorio',
    period: 'Enero 2026',
    description: [
      'Examen General para el Egreso de la Licenciatura en Ingeniería de Software. Desempeño satisfactorio a nivel nacional.',
    ],
    type: 'certification',
  },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg', category: 'frontend' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg', category: 'frontend' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg', category: 'frontend' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg', category: 'frontend' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg', category: 'frontend' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: 'frontend' },
  // Backend
  { name: 'C# / .NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg', category: 'backend' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-plain.svg', category: 'backend' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg', category: 'backend' },
  { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg', category: 'backend' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg', category: 'backend' },
  // Databases
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg', category: 'database' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg', category: 'database' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg', category: 'database' },
  // DevOps / Tools
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg', category: 'devops' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg', category: 'devops' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', category: 'devops' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', category: 'devops' },
  { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg', category: 'devops' },
];
