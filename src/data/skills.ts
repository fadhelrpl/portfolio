export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'PHP', 'Dart'],
  },
  {
    name: 'Frameworks',
    skills: ['Next.js 14', 'Laravel', 'Flutter', 'Tailwind CSS'],
  },
  {
    name: 'Backend & Database',
    skills: ['REST API', 'JWT Auth', 'Supabase', 'PostgreSQL', 'MySQL', 'SQLite', 'Firebase'],
  },
  {
    name: 'Architecture & Tools',
    skills: ['MVC Pattern', 'Responsive Web Design', 'Git', 'GitHub', 'Vercel', 'Figma'],
  },
];
