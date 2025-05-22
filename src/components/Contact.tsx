import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import Button from './ui/Button';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <Section id="contact" title="Contato" className="bg-gray-50 dark:bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Vamos Conversar
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades de trabalho.
            Entre em contato através do formulário ou usando minhas informações de contato.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Email</h4>
                {/* Edite seu email aqui */}
                <a href="mailto:SEU_EMAIL@exemplo.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  henrique.saviczki@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Telefone</h4>
                {/* Edite seu telefone aqui */}
                <a href="tel:SEU_TELEFONE" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  +55 (66) 99901-2564
                </a>
              </div>
            </div>
            
            {/* <div className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">Localização</h4>
                
                <p className="text-gray-600 dark:text-gray-300">
                  SUA_CIDADE, ESTADO
                </p>
              </div>
            </div> */}
          </div>
        </div>
        
        <div>
          <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 md:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <div className="flex justify-center mb-4">
                  <CheckCircle size={48} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Obrigado pelo contato!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Recebi sua mensagem e responderei o mais breve possível.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full py-3"
                  icon={<Send size={18} />}
                >
                  Enviar Mensagem
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;