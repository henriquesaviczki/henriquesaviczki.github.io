import React, { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'Developer Portfolio';
    
    // Add grid pattern for hero section
    const style = document.createElement('style');
    style.textContent = `
      .bg-grid-pattern {
        background-size: 40px 40px;
        background-image: 
          linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
      }
      
      .dark .bg-grid-pattern {
        background-image: 
          linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
      }
      
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      
      .animate-blink {
        animation: blink 1s infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </MainLayout>
  );
}

export default App;