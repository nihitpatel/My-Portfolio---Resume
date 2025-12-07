import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Code2 } from './Icons';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Enterprise-grade AI solutions driving real business impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="glass-panel rounded-2xl overflow-hidden flex flex-col h-full group glass-card-hover transition-all duration-500">
              {/* Card Header with Tech Gradient */}
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-purple-500 w-full"></div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <div className="p-2 bg-white/5 rounded-full hover:bg-white/10 cursor-pointer">
                      <ExternalLink size={16} className="text-gray-400 hover:text-white" />
                    </div>
                  </div>
                  <p className="text-sm text-cyan-500 font-medium mb-1">{project.company}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{project.role}</p>
                </div>

                <div className="space-y-4 mb-6 flex-grow">
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-4 hover:line-clamp-none transition-all">
                    {project.description[0]}
                  </p>
                  
                  <div className="p-3 bg-cyan-900/10 rounded-lg border border-cyan-500/10">
                    <p className="text-xs text-cyan-200 font-medium">
                      <span className="font-bold">Impact:</span> {project.impact}
                    </p>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-[10px] font-semibold px-2 py-1 rounded-sm bg-white/5 text-gray-400 border border-white/5 uppercase tracking-wide">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;