import { ActivePage } from '../types';
import { Phone, Calendar, Film, Menu, X } from 'lucide-react';
import React, { useState } from 'react';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onOpenQuote: () => void;
}

export default function Header({ activePage, setActivePage, onOpenQuote }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  const handleNavClick = (pageId: ActivePage) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-white/10 px-4 lg:px-10 flex items-center justify-between backdrop-blur-xl bg-[#050505]/80 select-none">
      {/* Brand logo & cinematic mark */}
      <div 
        className="flex items-center gap-3 cursor-pointer group" 
        onClick={() => handleNavClick('home')}
        id="logo-brand-container"
      >
        <div className="w-10 h-10 bg-[#ea1d2c] rounded flex items-center justify-center shadow-[0_0_20px_rgba(234,29,44,0.6)] transition-all duration-300 group-hover:scale-105">
          <Film className="w-5 h-5 text-white fill-white" />
        </div>
        <div className="flex flex-col">
          <span className="font-sans font-black text-lg md:text-xl tracking-tighter uppercase leading-none">
            Movie Night<span className="text-[#ea1d2c]"> Outdoor</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 font-bold mt-1">
            Theater Experience
          </span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav id="desktop-nav" className="hidden lg:flex gap-10 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
        {navItems.map((item) => (
          <button
            key={item.id}
            id={`nav-btn-${item.id}`}
            onClick={() => handleNavClick(item.id)}
            className={`transition-colors duration-200 hover:text-white cursor-pointer relative py-2 ${
              activePage === item.id ? 'text-white font-extrabold' : ''
            }`}
          >
            {item.label}
            {activePage === item.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ea1d2c] shadow-[0_0_8px_rgba(234,29,44,0.8)]" />
            )}
          </button>
        ))}
      </nav>

      {/* Action panel & interactive badges */}
      <div className="flex items-center gap-4">
        {/* Availability Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-green-400">Booking Open</span>
        </div>

        {/* Dynamic CTA */}
        <a 
          href="tel:8166210299" 
          id="btn-click-to-call-header"
          className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-[#ea1d2c]" />
          <span>816-621-0299</span>
        </a>

        <button 
          onClick={onOpenQuote}
          id="btn-book-tour-header"
          className="bg-[#ea1d2c] text-white px-5 py-2.5 rounded text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(234,29,44,0.3)] hover:scale-105 transition-all duration-300 flex items-center gap-1.5"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </button>

        {/* Mobile Navigation Trigger */}
        <button 
          id="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div id="mobile-menu-overlay" className="absolute top-20 left-0 w-full bg-[#050505] border-b border-white/10 z-40 lg:hidden px-6 py-8 flex flex-col gap-6 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-btn-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm font-black uppercase tracking-widest py-3 border-b border-white/5 ${
                  activePage === item.id ? 'text-[#ea1d2c]' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <a 
              href="tel:8166210299"
              className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white py-3.5 rounded font-bold uppercase text-xs tracking-wider"
            >
              <Phone className="w-4 h-4 text-[#ea1d2c]" />
              Call 816-621-0299
            </a>
            <div className="flex items-center justify-center gap-2 text-center text-[10px] uppercase text-gray-500 font-bold pt-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Serving Kansas City & surrounding areas in Missouri</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
