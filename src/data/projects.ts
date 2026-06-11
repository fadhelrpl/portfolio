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
      'Co-developed a production-ready Point of Sale web app for small retail businesses. Solely built 3 of 4 core modules: JWT authentication, real-time transaction recording, and multi-category inventory tracking. Built on Next.js 14 + TypeScript with a Supabase PostgreSQL backend — currently in active user testing with early retail clients.',
    image: '/images/projects/sellerra.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/fadhelrpl/sellerra',
    featured: true,
    category: 'web',
  },
  {
    title: 'Pions — Student Representative Platform',
    description:
      'Built a responsive school organization platform using Laravel to centralize student council information, announcements, and activity records for SMK IDN Boarding School. Structured with MVC architecture across models, controllers, and Blade views — actively used by 200+ students and council members daily.',
    image: '/images/projects/pions.png',
    technologies: ['Laravel', 'Filament', 'Tailwind CSS', 'HTML'],
    github: 'https://github.com/fadhelrpl/final-project-pions',
    featured: true,
    category: 'web',
  },
  {
    title: 'Payroll Service Website',
    description:
      'Payroll management web application with a dark-themed admin dashboard, role-based access control, authentication, and full CRUD operations for employee salary data management.',
    image: '/images/projects/payroll-service.png',
    technologies: ['Laravel', 'Filament', 'Tailwind CSS', 'HTML'],
    github: 'https://github.com/fadhelrpl',
    featured: true,
    category: 'web',
  },
  {
    title: 'e-Library Website',
    description:
      'Digital library platform featuring book borrowing workflows, user authentication, and catalog management with CRUD operations. Fully responsive across mobile, tablet, and desktop viewports.',
    image: '/images/projects/e-library.png',
    technologies: ['Laravel', 'Tailwind CSS', 'HTML'],
    github: 'https://github.com/fadhelrpl',
    category: 'web',
  },
  {
    title: 'e-Commerce Website',
    description:
      'Home decoration storefront with product search, hover effects, buy functionality, and a dedicated contact page — built with vanilla HTML, CSS, and JavaScript.',
    image: '/images/projects/web-ecommerce.png',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/fadhelrpl',
    category: 'web',
  },
  {
    title: 'Schedule Gemini App',
    description:
      'Cross-platform daily scheduling app built to solve the lack of a lightweight, offline-first task manager for students. Features persistent local storage, multi-category activity management, multi-screen navigation, and dark mode — functional on Android and iOS.',
    image: '/images/projects/schedule-gemini.png',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    github: 'https://github.com/fadhelrpl/schedule_gemini_app',
    featured: true,
    category: 'mobile',
  },
  {
    title: 'QR Ticket Scanner App',
    description:
      'QR ticket scanner with user authentication, dark mode support, and ticket API integration for event check-in and management workflows.',
    image: '/images/projects/qr-scanner.png',
    technologies: ['Flutter', 'Dart', 'REST API'],
    github: 'https://github.com/fadhelrpl',
    category: 'mobile',
  },
  {
    title: 'e-Commerce App',
    description:
      'Cross-platform shopping app with product catalog, cart management, real-time chat, and user profile — built with Flutter and Firebase for live data sync.',
    image: '/images/projects/ecommerce.png',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    github: 'https://github.com/fadhelrpl',
    category: 'mobile',
  },
  {
    title: 'Attendance App',
    description:
      'Smart attendance system with face recognition using ML Kit, Firebase backend, attendance history tracking, and data export — built to automate manual attendance recording.',
    image: '/images/projects/attendance.png',
    technologies: ['Flutter', 'Dart', 'Firebase', 'ML Kit'],
    github: 'https://github.com/fadhelrpl',
    category: 'mobile',
  },
  {
    title: 'News App',
    description:
      'News reader with live API integration, keyword search, favorites system, and full dark mode support — designed for fast, distraction-free reading.',
    image: '/images/projects/news.png',
    technologies: ['Flutter', 'Dart', 'News API'],
    github: 'https://github.com/fadhelrpl',
    category: 'mobile',
  },
  {
    title: 'To-Do App',
    description:
      'Daily task manager with SQLite local storage, full CRUD operations, user authentication, and image attachment support for task context.',
    image: '/images/projects/todo.png',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    github: 'https://github.com/fadhelrpl',
    category: 'mobile',
  },
];
