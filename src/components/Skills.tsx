import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './ui/Section';
import { skills, categories, Skill } from '../data/skills';
import { CheckCircle, CircleSlash, DivideIcon as LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const Skills: React.FC = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as unknown as Record<string, LucideIcon>)[
      iconName.charAt(0).toUpperCase() + iconName.slice(1)
    ] || LucideIcons.Code;
    return <Icon size={24} />;
  };

  const skillLevelText = (level: number) => {
    switch(level) {
      case 5: return 'Especialista';
      case 4: return 'Avançado';
      case 3: return 'Intermediário';
      case 2: return 'Básico';
      default: return 'Iniciante';
    }
  };

  return (
    <Section id="skills" title="Minhas Habilidades" className="bg-gray-50 dark:bg-gray-800">
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <AnimatePresence>
          {filteredSkills.map(skill => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedSkill(skill)}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${skill.color}20` }}
              >
                <span style={{ color: skill.color }}>{renderIcon(skill.icon)}</span>
              </div>
              <h3 className="font-medium text-gray-800 dark:text-white text-center">{skill.name}</h3>
              <div className="mt-4 w-full">
                <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level * 20}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal de detalhes da habilidade */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-md w-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${selectedSkill.color}20` }}
                  >
                    <span style={{ color: selectedSkill.color }}>{renderIcon(selectedSkill.icon)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{selectedSkill.name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedSkill(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <CircleSlash size={24} />
                </button>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Nível de Proficiência: <span className="font-semibold">{skillLevelText(selectedSkill.level)}</span>
                </p>
                <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden mb-6">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedSkill.level * 20}%` }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: selectedSkill.color }}
                  ></motion.div>
                </div>
                
                <h4 className="font-medium text-gray-800 dark:text-white mb-3">Principais Capacidades:</h4>
                <ul className="space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mr-2 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {selectedSkill.name === 'React' && i === 0 && 'Construção de interfaces complexas e interativas'}
                        {selectedSkill.name === 'React' && i === 1 && 'Gerenciamento de estado com hooks e context'}
                        {selectedSkill.name === 'React' && i === 2 && 'Técnicas de otimização de performance'}
                        
                        {selectedSkill.name === 'TypeScript' && i === 0 && 'Desenvolvimento de aplicações type-safe'}
                        {selectedSkill.name === 'TypeScript' && i === 1 && 'Recursos avançados do sistema de tipos'}
                        {selectedSkill.name === 'TypeScript' && i === 2 && 'Integração com React e Node.js'}
                        
                        {selectedSkill.name === 'JavaScript' && i === 0 && 'Recursos e padrões ES6+'}
                        {selectedSkill.name === 'JavaScript' && i === 1 && 'Programação assíncrona com Promises'}
                        {selectedSkill.name === 'JavaScript' && i === 2 && 'Manipulação do DOM e tratamento de eventos'}
                        
                        {selectedSkill.name === 'Python' && i === 0 && 'Análise e processamento de dados'}
                        {selectedSkill.name === 'Python' && i === 1 && 'Desenvolvimento de APIs com frameworks Python'}
                        {selectedSkill.name === 'Python' && i === 2 && 'Automação e scripts'}
                        
                        {selectedSkill.name === 'Node.js' && i === 0 && 'Desenvolvimento de APIs RESTful'}
                        {selectedSkill.name === 'Node.js' && i === 1 && 'Autenticação e autorização'}
                        {selectedSkill.name === 'Node.js' && i === 2 && 'Otimização de performance'}
                        
                        {selectedSkill.name === 'Django' && i === 0 && 'Desenvolvimento de aplicações web full-stack'}
                        {selectedSkill.name === 'Django' && i === 1 && 'Interfaces administrativas e autenticação'}
                        {selectedSkill.name === 'Django' && i === 2 && 'ORM e integração com banco de dados'}
                        
                        {selectedSkill.name === 'FastAPI' && i === 0 && 'Desenvolvimento de APIs de alta performance'}
                        {selectedSkill.name === 'FastAPI' && i === 1 && 'Geração automática de documentação'}
                        {selectedSkill.name === 'FastAPI' && i === 2 && 'Validação de tipos com Pydantic'}
                        
                        {selectedSkill.name === 'PostgreSQL' && i === 0 && 'Otimização de queries complexas'}
                        {selectedSkill.name === 'PostgreSQL' && i === 1 && 'Design de esquema de banco de dados'}
                        {selectedSkill.name === 'PostgreSQL' && i === 2 && 'Ajuste de performance e indexação'}
                        
                        {selectedSkill.name === 'MySQL' && i === 0 && 'Design de banco de dados relacional'}
                        {selectedSkill.name === 'MySQL' && i === 1 && 'Otimização de queries'}
                        {selectedSkill.name === 'MySQL' && i === 2 && 'Integridade e segurança dos dados'}
                        
                        {selectedSkill.name === 'Docker' && i === 0 && 'Containerização de aplicações'}
                        {selectedSkill.name === 'Docker' && i === 1 && 'Docker Compose para apps multi-container'}
                        {selectedSkill.name === 'Docker' && i === 2 && 'Integração com pipeline CI/CD'}
                        
                        {selectedSkill.name === 'GitHub' && i === 0 && 'Fluxos de trabalho colaborativos'}
                        {selectedSkill.name === 'GitHub' && i === 1 && 'CI/CD com GitHub Actions'}
                        {selectedSkill.name === 'GitHub' && i === 2 && 'Code reviews e pull requests'}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button
                onClick={() => setSelectedSkill(null)}
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
              >
                Fechar
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Skills;