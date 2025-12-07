import React from 'react';
import { SKILLS } from '../constants';
import * as Icons from './Icons';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">The tools and technologies I use to build the future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category) => {
            // Dynamically get icon
            const IconComponent = (Icons as any)[category.icon] || Icons.Code2;
            
            return (
              <div key={category.name} className="glass-panel p-6 rounded-2xl glass-card-hover transition-all duration-300 group">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                    <IconComponent className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-100">{category.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;