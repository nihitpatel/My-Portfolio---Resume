import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      {/* Global Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-cyan-900/20 blur-[100px]"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;