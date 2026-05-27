import React from 'react';
import { ActivePage } from '../types';
import { Mail, Phone, MapPin, Instagram, Facebook, Calendar, Clock, Film } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  onOpenQuote: () => void;
}

export default function Footer({ setActivePage, onOpenQuote }: FooterProps) {
  const handlePageChange = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative bg-[#050505] border-t border-white/10 text-gray-300 font-sans mt-auto">
      {/* Subtle bottom grid design */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-5">
          <div 
            className="flex items-center gap-3 cursor-pointer group select-none"
            onClick={() => handlePageChange('home')}
          >
            <div className="w-9 h-9 bg-red-600 rounded flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.4)]">
              <Film className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="font-sans font-black text-lg tracking-tighter uppercase text-white">
              Movie Night<span className="text-red-600"> Outdoor</span>
            </span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed italic">
            "Bringing the screen and cinema magic directly to your lawn, park, school court, or venue under the stars."
          </p>
          <div className="flex items-center gap-3">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs hover:border-[#ea1d2c] hover:bg-[#ea1d2c]/10 text-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#ea1d2c]/20 flex items-center justify-center text-xs hover:border-[#ea1d2c] hover:bg-[#ea1d2c]/10 text-[#ea1d2c] hover:text-white transition-all cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white flex items-center gap-1.5">
            <span className="h-[1px] w-4 bg-red-600"></span>
            <span>Discover</span>
          </h4>
          <div className="flex flex-col gap-2.5 text-xs text-gray-400 font-bold">
            <button onClick={() => handlePageChange('home')} className="hover:text-white transition-colors text-left cursor-pointer">🍿 Home</button>
            <button onClick={() => handlePageChange('services')} className="hover:text-white transition-colors text-left cursor-pointer">🎟️ Event Services</button>
            <button onClick={() => handlePageChange('gallery')} className="hover:text-white transition-colors text-left cursor-pointer">🖼️ Screen Gallery</button>
            <button onClick={() => handlePageChange('about')} className="hover:text-white transition-colors text-left cursor-pointer">📖 About Our Crew</button>
            <button onClick={() => handlePageChange('contact')} className="hover:text-white transition-colors text-left cursor-pointer">📞 Contact Details</button>
          </div>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white flex items-center gap-1.5">
            <span className="h-[1px] w-4 bg-red-600"></span>
            <span>Hotline Support</span>
          </h4>
          <div className="flex flex-col gap-3.5 text-xs">
            <a href="tel:8166210299" className="flex items-center gap-2 text-gray-300 hover:text-white transition-all group cursor-pointer">
              <Phone className="w-4 h-4 text-red-600 shrink-0 select-none" />
              <span className="font-bold font-sans">816-621-0299 (Call)</span>
            </a>
            <a href="mailto:mike.rentie63@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-all group cursor-pointer">
              <Mail className="w-4 h-4 text-blue-400 shrink-0 select-none" />
              <span className="break-all font-mono text-[11px]">mike.rentie63@gmail.com</span>
            </a>
            <div className="flex items-start gap-2 text-gray-400">
              <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5 select-none" />
              <span>Kansas City Metro and surrounding Missouri (MO) locations</span>
            </div>
          </div>
        </div>

        {/* Service Core Times Column */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-black uppercase tracking-[0.25em] text-white flex items-center gap-1.5">
            <span className="h-[1px] w-4 bg-red-600"></span>
            <span>Availability</span>
          </h4>
          <div className="flex flex-col gap-3 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-green-500 shrink-0 select-none" />
              <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
            </div>
            <p className="text-[11px] leading-relaxed text-gray-400">
              *Rescheduling options available for weather conditions or rainy nights. Your safety is our #1 absolute priority!
            </p>
            <button
              onClick={onOpenQuote}
              className="mt-1 bg-white/5 border border-white/10 hover:border-red-600/50 hover:bg-red-600/10 text-white rounded py-2 px-4 font-black uppercase text-[10px] tracking-wider transition-all cursor-pointer"
            >
              📅 Calculate Event Price
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom copyright & Developer mention as required */}
      <div className="border-t border-white/5 bg-[#030303]/90 relative z-10 px-6 py-6 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col items-center md:items-start">
            <p>© {new Date().getFullYear()} Movie Night Outdoor Theater. All rights reserved.</p>
            <p className="text-[11px] text-gray-600 mt-1">Missouri premium outdoor cinematic screen rentals and laser setups.</p>
          </div>
          <div className="flex items-center gap-6 font-bold tracking-tight">
            {/* Required hyperlink statement with "iWebNext" linked to https://iwebnext.com */}
            <span className="text-gray-400 text-xs">
              Developed by <a 
                href="https://iwebnext.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                id="iwebnext-link-credits"
                className="text-red-500 hover:text-white hover:underline uppercase tracking-widest font-black transition-all"
              >
                iWebNext
              </a>
            </span>
            <div className="hidden sm:flex items-center gap-1.5 text-green-500 text-[10px] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span>Fully Secure Event System</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
