export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  techStack?: string[];
  description: string[];
  type: 'work' | 'organization';
}

export const experiences: ExperienceItem[] = [
  {
    title: 'Web Developer',
    company: 'PT. Perdana Mitra Kencana',
    period: 'Jun 2025 – Aug 2025',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    description: [
      'Designed and delivered 5+ responsive landing pages for client campaigns using Tailwind CSS and vanilla JavaScript, ensuring cross-device compatibility across Chrome, Firefox, and mobile viewports.',
      'Collaborated directly with 3+ clients to gather requirements and translated briefs into pixel-accurate UI components, reducing average revision cycles from 3 to 1 per project.',
      'Improved mobile responsiveness by auditing and refactoring existing layout issues, bringing all pages to a fully fluid grid structure across screen sizes from 320px to 1440px.',
    ],
    type: 'work',
  },
  {
    title: 'Technical Trainer — Basic Web Development',
    company: 'Sahabat Ilmu Islamic School',
    period: 'Aug 2024 · 3 Days',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    description: [
      'Delivered a structured web development curriculum covering HTML, CSS, and JavaScript fundamentals to 25+ high school students, adapting technical concepts to beginner-level understanding.',
      'Guided all participants through building their first responsive web pages — 100% of students successfully completed their first working page by end of program.',
      'Facilitated live mentoring sessions and real-time Q&A, developing practical technical communication skills in a classroom setting.',
    ],
    type: 'work',
  },
  {
    title: 'Head of Worship Division — Student Council',
    company: 'SMK IDN Boarding School',
    period: '2024 – 2025',
    description: [
      'Led and coordinated a team of 6 members in planning and executing 10+ religious and school community events per semester, including weekly assemblies and annual celebration programs.',
      'Introduced a structured weekly coordination system that improved division planning efficiency — rated top-performing division in the 2024 student council evaluation.',
      'Collaborated with 4 other divisions to align event logistics and schedules, maintaining zero scheduling conflicts across all events throughout the semester.',
    ],
    type: 'organization',
  },
];
