export const site = {
  name: 'Raden Mohamad Fadhel Suradipraja',
  shortName: 'Fadhel',
  role: 'Software Engineer',
  description:
    'Passionate Software Engineer with experience in web development, modern technologies, and building scalable applications.',
  email: 'mohamadfadhelrpl@gmail.com',
  phone: '+62 851-7500-2096',
  location: 'Bogor, West Java, Indonesia',
  github: 'https://github.com/fadhelrpl',
  linkedin: 'https://linkedin.com/in/fadhelrpl',
  cvPath: '/cv/CV-ATS-Fadhel.pdf',
  navLinks: [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' },
  ],
} as const;

export const about = {
  summary:
    'Software Engineering student at SMK IDN Boarding School with hands-on experience building web and mobile applications using Laravel, Next.js, Flutter, and Tailwind CSS. Co-developed a full-featured POS system and led web development training for high school students.',
  highlights: [
    'Full-stack web & mobile development',
    'JWT authentication & REST API design',
    'Responsive UI with Tailwind CSS',
    'Team leadership & technical mentoring',
  ],
  education: {
    degree: 'Software Engineering (RPL)',
    school: 'SMK IDN Boarding School',
    location: 'Bogor, Indonesia',
    period: '2024 – Present',
    details:
      'Relevant coursework: OOP, Database Systems, Web Development, Mobile Application Development, and Software Engineering Fundamentals.',
  },
} as const;
