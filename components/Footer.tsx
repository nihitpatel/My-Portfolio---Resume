import React from 'react';
import { Github, Linkedin, Mail } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-10 pb-10 border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Nihit.AI</h3>
            <p className="text-gray-500 text-sm mt-1">AI Specialist • Agentic AI • RAG Pipelines</p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
             <a href="https://www.linkedin.com/in/nihit-patel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
               <Linkedin size={20} />
             </a>
             <a href="https://github.com/nihitpatel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
               <Github size={20} />
             </a>
             <a href="mailto:patelnihitn1@gmail.com" className="text-gray-400 hover:text-white transition-colors">
               <Mail size={20} />
             </a>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Nihit Patel. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Designed with <span className="text-cyan-500 mx-1">Gemini</span> & React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;