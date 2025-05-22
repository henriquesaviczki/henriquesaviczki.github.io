import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            {/* Edite o título do seu portfólio aqui */}
            <a href="#home" className="text-2xl font-bold text-white">
              Henrique Saviczki <span className="text-blue-400">Portfolio</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Especializado em construir experiências digitais excepcionais com tecnologias web modernas.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            {/* <div className="flex space-x-4 mb-4">
           
              <a
                href="https://github.com/SEU_USUARIO_GITHUB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/SEU_USUARIO_LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/SEU_USUARIO_TWITTER"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div> */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center justify-center p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Henrique Saviczki. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;