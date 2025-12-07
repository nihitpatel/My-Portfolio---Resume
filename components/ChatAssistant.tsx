import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles } from './Icons';
import { Message } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Nihit's AI Assistant. Ask me anything about his experience with Agentic AI, RAG pipelines, or his projects!", timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: inputText, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text, messages);
      const botMsg: Message = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="glass-panel w-80 sm:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col mb-4 animate-in slide-in-from-bottom-10 fade-in duration-300 border border-cyan-500/30">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 p-4 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="bg-cyan-500/20 p-1.5 rounded-full">
                <Sparkles size={16} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Nihit's AI Agent</h3>
                <span className="text-xs text-cyan-300 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-none' 
                      : 'glass-panel text-gray-200 rounded-tl-none border-0 bg-white/10'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="glass-panel px-4 py-2 rounded-2xl rounded-tl-none flex space-x-1 items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-slate-900/80 border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my RAG experience..."
                className="w-full bg-black/30 text-white placeholder-gray-500 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 border border-white/5"
              />
              <button
                onClick={handleSend}
                disabled={!inputText.trim() || isLoading}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 rounded-full bg-cyan-600 text-white hover:bg-cyan-500 disabled:opacity-50 disabled:hover:bg-cyan-600 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-4 rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
        >
          <Bot size={28} />
          <span className="hidden md:block font-medium pr-2">Chat with AI Nihit</span>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0f172a] animate-ping"></div>
        </button>
      )}
    </div>
  );
};

export default ChatAssistant;