import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 md:p-16 overflow-hidden relative border border-white/10 shadow-2xl">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="space-y-8">
               <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Let's Work Together</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6"></div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm currently available for senior AI roles. If you're looking for expertise in Agentic AI, RAG pipelines, or Enterprise GenAI, I'd love to chat.
                </p>
               </div>
               
               <div className="space-y-6">
                 <a href="mailto:patelnihitn1@gmail.com" className="flex items-center space-x-5 group p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                   <div className="p-4 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
                     <Mail className="w-6 h-6 text-cyan-400" />
                   </div>
                   <div>
                     <p className="text-sm text-gray-400 font-medium mb-1">Email Me</p>
                     <p className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">patelnihitn1@gmail.com</p>
                   </div>
                 </a>

                 <a href="tel:+917990624044" className="flex items-center space-x-5 group p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                   <div className="p-4 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                     <Phone className="w-6 h-6 text-purple-400" />
                   </div>
                   <div>
                     <p className="text-sm text-gray-400 font-medium mb-1">Call Me</p>
                     <p className="text-lg md:text-xl font-bold text-white group-hover:text-purple-400 transition-colors">+91 79906 24044</p>
                   </div>
                 </a>
                 
                  <div className="flex items-center space-x-5 p-4">
                   <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                     <MapPin className="w-6 h-6 text-emerald-400" />
                   </div>
                   <div>
                     <p className="text-sm text-gray-400 font-medium mb-1">Location</p>
                     <p className="text-lg md:text-xl font-bold text-white">Ahmedabad / Bengaluru, IN</p>
                   </div>
                 </div>
               </div>

               <div className="pt-6 flex space-x-4">
                 <SocialBtn href="https://www.linkedin.com/in/nihit-patel" icon={<Linkedin />} label="LinkedIn" />
                 <SocialBtn href="https://github.com/nihitpatel" icon={<Github />} label="GitHub" />
               </div>
             </div>

             <div className="relative">
               {/* Decorative simulated form */}
               <div className="glass-panel p-8 rounded-2xl border border-white/10 bg-black/40 shadow-xl">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Send className="w-5 h-5 mr-2 text-cyan-400" />
                    Send a message
                  </h3>
                  <form className="space-y-4" action="mailto:patelnihitn1@gmail.com" method="post" encType="text/plain">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium">Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium">Email</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all" placeholder="your@email.com" />
                    </div>
                     <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium">Message</label>
                      <textarea className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white h-32 focus:outline-none focus:border-cyan-500 focus:bg-white/10 transition-all resize-none" placeholder="Let's discuss a project..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300">
                      Send Message
                    </button>
                  </form>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  )
}

const SocialBtn = ({ href, icon, label }: { href: string; icon: React.ReactNode, label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 text-gray-400 hover:text-white group relative"
    aria-label={label}
  >
    {icon}
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      {label}
    </span>
  </a>
)

export default Contact;