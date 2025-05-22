export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
  githubLink?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'project1',
    title: 'Sistema de Precificação Imobiliária',
    description: 'Sistema inovador que revolucionou o processo de precificação imobiliária, reduzindo o tempo de definição de preços de 15 dias para apenas 4 horas. Implementação de algoritmos avançados e automação de processos para análise de mercado em tempo real.',
    technologies: [ 'TypeScript', 'JavaScript', 'React', 'Python', 'Django', 'Docker', 'PostgreSQL', 'Google Cloud'],
    imageUrl: '/assets/images/pricing_2.png',
    featured: true
  },
  {
    id: 'project2',
    title: 'Aplicativo de Delivery para Condomínio',
    description: 'Desenvolvimento de uma solução completa de delivery que resultou em um aumento de 15% na receita de um restaurante em condomínio privado. O aplicativo oferece uma experiência personalizada para pedidos e entregas.',
    technologies: ['React Native', 'FastAPI', 'Python', 'Docker', 'PostgreSQL', 'Google Cloud'],
    imageUrl: '/assets/images/delivery.png',
    featured: true
  }
];