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
    skills: ['Next.js', 'Laravel', 'Flutter', 'Tailwind CSS'],
  },
  {
    name: 'Backend & Database',
    skills: ['REST API', 'JWT Auth', 'Supabase', 'SQLite', 'Firebase'],
  },
  {
    name: 'Architecture & Tools',
    skills: ['MVC Pattern', 'Responsive Design', 'Git', 'GitHub', 'Figma', 'VS Code'],
  },
];
