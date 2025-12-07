import React from 'react';
import { Github, Linkedin, Mail, Phone, Code2 } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative pt-20 pb-10 border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">Let's Build Something Intelligent.</h2>
            <p className="text-gray-400 max-w-md mb-8">
              Open to opportunities in Agentic AI, GenAI Engineering, and Cloud Architecture. 
              Let's discuss how I can bring 6+ years of expertise to your team.
            </p>
            <a 
              href="mailto:patelnihitn1@gmail.com"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-white text-black font-bold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Mail size={18} />
              <span>Say Hello</span>
            </a>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:patelnihitn1@gmail.com" className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Mail size={16} />
                  <span>patelnihitn1@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+917990624044" className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Phone size={16} />
                  <span>+91 79906 24044</span>
                </a>
              </li>
              <li>
                <span className="flex items-center space-x-3 text-gray-500">
                  <span className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center text-[10px]">IN</span>
                  <span>Ahmedabad / Bengaluru</span>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/nihit-patel" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500 hover:text-white text-gray-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/nihitpatel" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500 hover:text-white text-gray-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500 hover:text-white text-gray-400 transition-colors">
                <Code2 size={20} /> {/* Kaggle placeholder */}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Nihit Patel. All rights reserved.</p>
          <p className="text-gray-600 text-sm mt-2 md:mt-0 flex items-center">
            Built with React, Tailwind & <span className="text-cyan-500 mx-1">Gemini AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;