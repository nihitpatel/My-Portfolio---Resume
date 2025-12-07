import React from 'react';
import { EXPERIENCE } from '../constants';
import { ChevronRight } from './Icons';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Professional Journey</h2>
            <p className="text-gray-400">My path in Artificial Intelligence & Data Science</p>
          </div>
          <span className="text-cyan-500 font-mono mt-4 md:mt-0">6+ Years Experience</span>
        </div>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-cyan-500 ring-4 ring-black/50 group-hover:ring-cyan-500/20 transition-all duration-300"></div>
              
              <div className="glass-panel p-6 md:p-8 rounded-2xl glass-card-hover transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{job.role}</h3>
                    <p className="text-lg text-gray-300 font-medium">{job.company}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-sm font-mono text-cyan-300 bg-cyan-900/20 px-3 py-1 rounded-full inline-block">{job.period}</p>
                    <p className="text-xs text-gray-500 mt-1">{job.location}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {job.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-400 text-sm md:text-base">
                      <ChevronRight className="h-5 w-5 text-cyan-500/50 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;