import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section 
      id={id}
      ref={ref}
      className={`py-20 ${className}`}
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
          {title}
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-600"></span>
        </h2>
        {children}
      </motion.div>
    </section>
  );
};

export default Section;