export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  featured?: boolean;
  category: 'web' | 'mobile';
}

export const projects: Project[] = [
  {
    title: 'Sellerra POS System',
    description:
      'Full-featured Point of Sale web application for small retail businesses with JWT authentication, real-time transactions, and multi-category inventory tracking.',
    image: '/images/projects/sellerra.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/fadhelrpl/sellerra',
    featured: true,
    category: 'web',
  },
  {
    title: 'Pions (OSIS) Website',
    description:
      'School organization website built with Laravel Filament featuring role-based access, authentication, and full CRUD for student council information and activities.',
    image: '/images/projects/pions.png',
    technologies: ['Laravel', 'Filament', 'Tailwind CSS', 'HTML'],
    github: 'https://github.com/fadhelrpl/final-project-pions',
    featured: true,
    category: 'web',
  },
  {
    title: 'Payroll Service Website',
    description:
      'Payroll management web application with a dark yellow-themed admin dashboard, role-based access control, authentication, and CRUD operations.',
    image: '/images/projects/payroll-service.png',
    technologies: ['Laravel', 'Filament', 'Tailwind CSS', 'HTML'],
    github: 'https://github.com/fadhelrpl',
    featured: true,
    category: 'web',
  },
  {
    title: 'e-Library Website',
    description:
      'Digital library platform with book borrowing, user authentication, and catalog CRUD. Fully responsive across mobile, tablet, and desktop.',
    image: '/images/projects/e-library.png',
    technologies: ['Laravel', 'Tailwind CSS', 'HTML'],
    github: 'https://github.com/fadhelrpl',
    category: 'web',
  },
  {
    title: 'e-Commerce Website',
    description:
      'Home decoration e-commerce storefront with product search, hover effects, buy functionality, and a dedicated contact page.',
    image: '/images/projects/web-ecommerce.png',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/fadhelrpl',
    category: 'web',
  },
  {
    title: 'Schedule Gemini App',
    description:
      'AI-powered schedule generator with CRUD operations, local database, user authentication, and dark mode support.',
    image: '/images/projects/schedule-gemini.png',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    github: 'https://github.com/fadhelrpl/schedule_gemini_app',
    featured: true,
    category: 'mobile',
  },
  {
    title: 'QR Ticket Scanner App',
    description:
      'Elegant QR ticket scanner with authentication, dark mode, and ticket API integration for event management.',
    image: '/images/projects/qr-scanner.png',
    technologies: ['Flutter', 'Dart', 'REST API'],
    github: 'https://github.com/fadhelrpl',
    category: 'mobile',
  },
  {
    title: 'e-Commerce App',
    description:
      'Cross-platform shopping app with product catalog, cart, real-time chat, and user profile management.',
    image: '/images/projects/ecommerce.png',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/fadhelrpl',
    category: 'mobile',
  },
  {
    title: 'Attendance App',
    description:
      'Smart attendance system with face recognition ML, Firebase backend, history tracking, and data export.',
    image: '/images/projects/attendance.png',
    technologies: ['Flutter', 'Dart', 'Firebase', 'ML Kit'],
    github: 'https://github.com/fadhelrpl',
    category: 'mobile',
  },
  {
    title: 'News App',
    description:
      'News reader with API integration, search, favorites system, and full dark mode support.',
    image: '/images/projects/news.png',
    technologies: ['Flutter', 'Dart', 'News API'],
    github: 'https://github.com/fadhelrpl',
    category: 'mobile',
  },
  {
    title: 'To-Do App',
    description:
      'Daily notes app with SQLite storage, CRUD operations, login, and image attachment for tasks.',
    image: '/images/projects/todo.png',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    github: 'https://github.com/fadhelrpl',
    category: 'mobile',
  },
];
