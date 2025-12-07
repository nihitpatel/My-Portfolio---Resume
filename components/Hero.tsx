import React from 'react';
import { Download, Github, Linkedin, Mail } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-cyan-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-cyan-300 text-sm font-medium tracking-wide">Available for Senior AI Roles</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Nihit Patel</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
            AI Specialist @ Accenture | GenAI & Agentic AI Expert
          </p>
          
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I architect enterprise-grade AI systems. Specialized in <span className="text-cyan-400">Agentic AI</span>, <span className="text-purple-400">Knowledge Graphs</span>, and <span className="text-blue-400">RAG Pipelines</span>. 
            I bridge the gap between cutting-edge LLMs and scalable production environments.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#projects"
              className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
            >
              View My Work
            </a>
            <a 
              href="/resume.pdf" // Placeholder path
              className="px-8 py-3.5 rounded-lg glass-panel border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-6">
            <SocialLink href="https://github.com/nihitpatel" icon={<Github />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/nihit-patel" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="mailto:patelnihitn1@gmail.com" icon={<Mail />} label="Email" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full glass-panel text-gray-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Hero;