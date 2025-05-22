export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
  color: string;
}

export const skills: Skill[] = [
  {
    name: 'React',
    icon: 'react',
    level: 4,
    category: 'frontend',
    color: '#61DAFB'
  },
  {
    name: 'TypeScript',
    icon: 'file-type',
    level: 4,
    category: 'frontend',
    color: '#3178C6'
  },
  {
    name: 'JavaScript',
    icon: 'file-json',
    level: 4,
    category: 'frontend',
    color: '#F7DF1E'
  },
  {
    name: 'Python',
    icon: 'file-code',
    level: 4,
    category: 'backend',
    color: '#3776AB'
  },
  {
    name: 'Node.js',
    icon: 'server',
    level: 3,
    category: 'backend',
    color: '#339933'
  },
  {
    name: 'Django',
    icon: 'box',
    level: 4,
    category: 'backend',
    color: '#092E20'
  },
  {
    name: 'FastAPI',
    icon: 'zap',
    level: 4,
    category: 'backend',
    color: '#009688'
  },
  {
    name: 'PostgreSQL',
    icon: 'database',
    level: 3,
    category: 'database',
    color: '#336791'
  },
  {
    name: 'MySQL',
    icon: 'database',
    level: 3,
    category: 'database',
    color: '#4479A1'
  },
  {
    name: 'Docker',
    icon: 'container',
    level: 3,
    category: 'devops',
    color: '#2496ED'
  },
  {
    name: 'GitHub',
    icon: 'github',
    level: 4,
    category: 'devops',
    color: '#181717'
  }
];

export const categories = [
  { id: 'all', name: 'Todas as Habilidades' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'database', name: 'Banco de Dados' },
  { id: 'devops', name: 'DevOps' }
];