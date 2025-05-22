import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Section from './ui/Section';
// import { Github, Linkedin, Mail } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Section id="about" title="Sobre Mim" className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="order-2 lg:order-1"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Henrique Saviczki - Desenvolvedor Full Stack
          </motion.h3>
          
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 mb-4">
            Sou um desenvolvedor full-stack com experiência em construir aplicações web robustas
            usando tecnologias modernas. Minha jornada no desenvolvimento de software me equipou com um
            conjunto versátil de habilidades que abrange tanto desenvolvimento frontend quanto backend.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 mb-4">
            No frontend, me especializo em React e TypeScript, criando interfaces de usuário responsivas e
            intuitivas. Para desenvolvimento backend, trabalho com Node.js, Python, Django e FastAPI para
            construir aplicações escaláveis.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 mb-6">
            Tenho experiência sólida com bancos de dados PostgreSQL e MySQL, além de proficiência
            com Docker para containerização e GitHub para controle de versão e colaboração.
          </motion.p>
          
          {/* <motion.div variants={itemVariants} className="flex space-x-4">
            <a
              href="https://github.com/henriquesaviczki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Perfil do GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/SEU_USUARIO_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Perfil do LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:henrique.saviczki@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div> */}
        </motion.div>
        
        <motion.div
          className="order-1 lg:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <img
                  src="/assets/images/profile.jpg"
                  alt="Foto do Desenvolvedor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;