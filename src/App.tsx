import React, { useState, useEffect } from 'react';
import { ActivePage } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import BookingCalendar from './components/BookingCalendar';

// Page components
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

import { ArrowUp, Sparkles, X, Phone, Calendar } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [initialPackageId, setInitialPackageId] = useState<string>('backyard');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to conditionally render Scroll-to-Top trigger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleOpenQuote = (packageId?: string) => {
    if (packageId) {
      setInitialPackageId(packageId);
    } else {
      setInitialPackageId('backyard');
    }
    setIsQuoteOpen(true);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} onOpenQuote={handleOpenQuote} />;
      case 'services':
        return <Services onOpenQuote={handleOpenQuote} />;
      case 'gallery':
        return <Gallery />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} onOpenQuote={handleOpenQuote} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans relative selection:bg-red-600 selection:text-white">
      {/* Background ambient design matrix elements matching requested Geometric Balance */}
      <div className="absolute top-[10%] left-[-150px] w-[500px] h-[550px] rounded-full bg-blue-950/20 blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-150px] w-[450px] h-[450px] rounded-full bg-red-950/20 blur-[130px] pointer-events-none z-0"></div>
      
      {/* Elegant line alignment separators */}
      <div className="absolute left-[3%] top-0 bottom-0 w-[1px] bg-white/[0.01] pointer-events-none z-0"></div>
      <div className="absolute right-[3%] top-0 bottom-0 w-[1px] bg-white/[0.01] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky luxury Navigation Header */}
        <Header 
          activePage={activePage} 
          setActivePage={setActivePage} 
          onOpenQuote={() => handleOpenQuote('backyard')} 
        />

        {/* Dynamic page content view slot */}
        <main className="flex-grow">
          {renderActivePage()}
        </main>

        {/* Global professional Footer with required Developed by iWebNext hyperlink */}
        <Footer 
          setActivePage={setActivePage} 
          onOpenQuote={() => handleOpenQuote('backyard')} 
        />
      </div>

      {/* Floating 24/7 AI Chatbot Assistant (Connected using safe server proxy endpoints) */}
      <Chatbot />

      {/* Interactive Floating "Scroll to Top" button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          id="scroll-to-top-btn"
          className="fixed bottom-24 right-6 z-50 w-11 h-11 bg-neutral-900/90 hover:bg-red-600 text-white border border-white/10 hover:border-red-500/50 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:shadow-[0_0_15px_rgba(234,29,44,0.4)] hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      {/* Interactive Booking & Quote Estimation Modal overlay */}
      {isQuoteOpen && (
        <div 
          id="quote-modal-overlay" 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
        >
          <div className="max-w-xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl scrollbar-thin">
            <BookingCalendar 
              initialPackageId={initialPackageId} 
              onClose={() => setIsQuoteOpen(false)} 
            />
          </div>
        </div>
      )}
    </div>
  );
}
