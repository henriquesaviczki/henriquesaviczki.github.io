import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Desenvolvedor Full Stack";
  const roles = ['Desenvolvedor React', 'Desenvolvedor Python', 'Especialista TypeScript', 'Engenheiro Backend'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
        setCurrentRole(roles[(roleIndex + 1) % roles.length]);
        setTypingSpeed(150);
      } else {
        setText(currentRole.substring(0, isDeleting ? text.length - 1 : text.length + 1));
        setTypingSpeed(isDeleting ? 100 : 150);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentRole, roleIndex, typingSpeed, roles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            Olá, sou <span className="text-blue-600 dark:text-blue-400">Henrique Saviczki</span>
          </motion.h1>
          
          <motion.div 
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 dark:text-gray-300 mb-8 h-12 flex justify-center items-center"
            variants={itemVariants}
          >
            <span>{fullText}</span>
            <span className="text-blue-600 dark:text-blue-400 ml-2 inline-block min-w-[12rem] text-left">
              {text}
              <span className="animate-blink">|</span>
            </span>
          </motion.div>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Especializado em criar experiências digitais excepcionais com tecnologias web modernas.
            Apaixonado por desenvolver aplicações robustas e escaláveis que resolvem problemas reais.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            variants={itemVariants}
          >
            <Button variant="primary" className="px-8 py-3 text-lg">Ver Projetos</Button>
            <Button variant="outline" className="px-8 py-3 text-lg">Contato</Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a 
          href="#about" 
          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 animate-bounce"
          aria-label="Rolar para seção Sobre"
        >
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;