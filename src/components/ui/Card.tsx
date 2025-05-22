import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = true
}) => {
  const hoverAnimation = hover
    ? {
        hover: {
          y: -10,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          transition: { type: 'spring', stiffness: 300 }
        }
      }
    : {};

  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${className}`}
      onClick={onClick}
      whileHover={hover ? 'hover' : undefined}
      variants={hoverAnimation}
    >
      {children}
    </motion.div>
  );
};

export default Card;