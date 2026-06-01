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
      'Designed and delivered 5+ responsive landing pages for client campaigns using Tailwind CSS and vanilla JavaScript.',
      'Collaborated directly with clients to gather requirements and translated them into pixel-accurate UI components.',
      'Improved mobile responsiveness by auditing and refactoring layouts for screen sizes from 320px to 1440px.',
    ],
    type: 'work',
  },
  {
    title: 'Technical Trainer — Basic Web Development',
    company: 'Sahabat Ilmu Islamic School',
    period: 'Aug 2024',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    description: [
      'Delivered a structured web development curriculum covering HTML, CSS, and JavaScript to 25+ high school students.',
      'Guided participants through building their first responsive web pages with hands-on practice exercises.',
      'Strengthened public speaking and technical communication through live mentoring and real-time Q&A.',
    ],
    type: 'work',
  },
  {
    title: 'Head of Worship — Student Council',
    company: 'SMK IDN Boarding School',
    period: '2024 – Present',
    description: [
      'Led and coordinated a team of 6 members in planning and executing 10+ religious and community events per semester.',
      'Introduced a structured weekly coordination system that improved division planning efficiency.',
      'Worship Division rated top-performing in the 2024 school student council evaluation.',
    ],
    type: 'organization',
  },
];
