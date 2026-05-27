import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Film, Star, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { ChatMessage } from '../types';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "🍿 Quiet on set! Welcome to Movie Night Outdoor Theater helper. I can recommend outdoor movie event structures, explain setup details, help with weather policies, or list areas we serve in Missouri. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  // Hide badge notification after 8 seconds or when chat opens
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
  };

  const suggestions = [
    "🎥 Backyard Movie Packages",
    "⛈️ What if it rains?",
    "🗺️ What areas do you serve?",
    "⚙️ How does setup work?"
  ];

  const handleSuggestionClick = (text: string) => {
    sendMessage(text);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Structure all messages for context-aware conversation history
      const history = [...messages, userMessage].map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history })
      });

      if (!res.ok) {
        throw new Error("Chat api request issue");
      }

      const data = await res.json();
      
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.text || "I am glad to assist you. Please feel free to call our main line at 816-621-0299 for prompt real-time coordinates!",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (e) {
      console.error(e);
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: "⚠️ Appologies, I had trouble reaching our movie projector network. Please ring us immediately at 816-621-0299 or email mike.rentie63@gmail.com and we'll reply right away!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <div id="ai-chatbot-widget-container" className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Mini notification bubble (ambient hint) */}
      {showNotification && !isOpen && (
        <div 
          onClick={handleOpenToggle}
          className="bg-gradient-to-r from-red-600 to-blue-900 border border-white/10 px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider text-white mb-2 shadow-[0_4px_22px_rgba(234,29,44,0.4)] cursor-pointer animate-bounce max-w-xs text-center"
        >
          🍿 Click to chat! Ask about screen rental packages & dates in MO.
        </div>
      )}

      {/* Floating Widget Button */}
      <button
        onClick={handleOpenToggle}
        id="btn-chatbot-float-launcher"
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white cursor-pointer select-none transition-all duration-300 shadow-[0_0_25px_rgba(234,29,44,0.5)] border border-white/20 ${
          isOpen 
            ? 'bg-neutral-900 rotate-90 hover:bg-neutral-800' 
            : 'bg-gradient-to-tr from-[#ea1d2c] to-[#0b1a30] hover:scale-110'
        }`}
        aria-label="Toggle AI Assistance"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 animate-pulse" />}
      </button>

      {/* Main Chat Panel */}
      {isOpen && (
        <div 
          id="chatbot-window-panel"
          className="absolute bottom-18 right-0 w-[90vw] sm:w-[380px] h-[450px] sm:h-[480px] max-h-[calc(100vh-140px)] bg-[#090a10] border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-[0_8px_35px_rgba(0,0,0,0.8)] z-[60] backdrop-blur-3xl animate-fadeIn"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0b1a30] to-[#1a0e1b] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#ea1d2c] flex items-center justify-center text-white shadow-[0_0_10px_rgba(234,29,44,0.5)]">
                <Film className="w-4 h-4 fill-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black uppercase tracking-widest text-white">Outdoor Cinema AI</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <p className="text-[9px] text-gray-400 font-bold uppercase">24/7 Rental Assistant</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin bg-black/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col max-w-[85%] ${
                  msg.role === 'user' ? 'ml-auto items-end' : 'items-start'
                }`}
              >
                <div
                  className={`p-3 rounded-xl text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#ea1d2c] text-white rounded-tr-none shadow-[0_2px_10px_rgba(234,29,44,0.2)]'
                      : 'bg-white/5 text-gray-200 border border-white/5 rounded-tl-none font-sans'
                  }`}
                >
                  {msg.content}
                </div>
                <span className="text-[8px] text-gray-500 uppercase tracking-widest mt-1 font-mono px-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-start max-w-[85%] gap-2 bg-white/5 p-3 rounded-xl rounded-tl-none border border-white/5">
                <Loader2 className="w-3.5 h-3.5 text-[#ea1d2c] animate-spin mt-0.5" />
                <span className="text-xs text-gray-400 italic">Projector agent is drafting...</span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          {messages.length === 1 && (
            <div className="px-4 py-2 border-t border-white/5 bg-black/60 flex flex-wrap gap-1.5 justify-center">
              {suggestions.map((sug, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestionClick(sug)}
                  className="text-[10px] bg-white/5 hover:bg-white/10 text-gray-300 font-bold tracking-tight rounded-md px-2 py-1 transition-all border border-white/5 hover:border-red-600/30 cursor-pointer"
                >
                  {sug}
                </button>
              ))}
            </div>
          )}

          {/* Input Form */}
          <form 
            onSubmit={handleFormSubmit}
            className="p-3 bg-neutral-950 border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about screens, popcorn, packages..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg py-2 px-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#ea1d2c]/60 transition-colors"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="w-8 h-8 rounded bg-[#ea1d2c] text-white flex items-center justify-center hover:bg-red-700 disabled:opacity-40 disabled:hover:bg-[#ea1d2c] transition-colors cursor-pointer shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
          
          {/* Quick Notice footer */}
          <div className="bg-black/95 px-4 py-1.5 border-t border-white/5 flex items-center justify-between text-[8px] text-gray-500 font-bold tracking-wider uppercase">
            <span>📞 Direct Desk: 816-621-0299</span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-2 h-2 text-yellow-500 animate-pulse" />
              Powered by Gemini 3.5
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
