import React, { useState } from 'react';
import { Play, Sparkles, X, ChevronLeft, ChevronRight, Eye, Film, MapPin, Calendar } from 'lucide-react';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Asset setups with real custom generated images
  const galleryImages = [
    {
      url: '/src/assets/images/outdoor_movie_hero_1779910523527.png',
      title: 'Lakeside Cinema Premiere Night',
      category: 'Backyard Cinema',
      location: 'Lake Lotawana, Missouri',
      description: 'Host coordinate with custom floor lanterns, soft blankets, and ambient warm light lines reflecting over the lake ripples.'
    },
    {
      url: '/src/assets/images/backyard_setup_1779910542258.png',
      title: 'Cozy Twilight Birthday Setup',
      category: 'Birthday Event',
      location: 'Lee’s Summit, Missouri',
      description: 'Stunning premium deep-seating outdoor lounge chairs situated right before the giant inflatable movie screen, glowing warm popcorn cart.'
    },
    {
      url: '/src/assets/images/drive_in_setup_1779910562989.png',
      title: 'Mammoth Drive-In Recreation Block',
      category: 'Drive-In Cinema / Parks',
      location: 'Independence, Missouri',
      description: 'Giant 32ft colossal screen arrangement showing at sunset with FM radio signal routed straight to long rows of local vehicle dashboards.'
    },
    {
      url: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
      title: 'Retro Cinema Reels & Pre-Show Buzz',
      category: 'Equipment Rental',
      location: 'Kansas City Metro, Missouri',
      description: 'High-intensity laser film projection testing right as twilight starts settling over the event lawns.'
    },
    {
      url: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop',
      title: 'Kids Gaming Tournament Blast',
      category: 'Birthday Event',
      location: 'Blue Springs, Missouri',
      description: 'Epic Nintendo Switch Mario Kart speed tournaments running before the main feature evening film starts.'
    },
    {
      url: 'https://images.unsplash.com/photo-1478720568477-151d9b1472ae?q=80&w=800&auto=format&fit=crop',
      title: 'Church Family Under the Stars',
      category: 'Church Gathering',
      location: 'Liberty, Missouri',
      description: 'More than 200 congregants enjoying an outdoor family movie night and local charity sponsor raffle highlights.'
    }
  ];

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div id="gallery-page-root" className="bg-[#050505] text-white min-h-[90vh] py-16 md:py-24 relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-[10%] left-[-100px] w-[450px] h-[450px] bg-blue-950/10 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-[15%] right-[-100px] w-[350px] h-[350px] bg-red-950/10 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Gallery header banner */}
        <div className="flex flex-col gap-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-8 bg-[#ea1d2c]"></span>
            <span className="text-red-500 uppercase tracking-[0.3em] text-xs font-black flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              Real Missouri (MO) Events
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-4 font-display">
            Outdoor Cinema <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Visual Gallery</span>
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans italic">
            See our high-definition laser screen rentals, vintage movie setups, and crowds enjoying blockbusters under the beautiful sky. Hover or click over any tile to preview setup structure details close-up.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="lightbox-masonry-grid">
          {galleryImages.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              id={`gallery-tile-${idx}`}
              className="bg-neutral-900/40 border border-white/5 rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative group cursor-pointer transition-all duration-300 hover:border-[#ea1d2c]/30 hover:shadow-2xl"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Floating Magnify Badge */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/80 border border-white/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300">
                <Eye className="w-4 h-4 text-red-500" />
              </div>

              {/* Caption overlays inside the masonry grid as concept layouts */}
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-red-500 font-mono text-[9px] uppercase font-black leading-none bg-red-600/10 px-2.5 py-1 rounded border border-red-500/20">{img.category}</span>
                <h3 className="text-sm font-black text-white uppercase mt-2.5 leading-snug">{img.title}</h3>
                <div className="flex items-center gap-1.5 text-gray-400 text-[10px] uppercase font-bold mt-1">
                  <MapPin className="w-3 h-3 text-[#ea1d2c]" />
                  <span>{img.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video / Pre-Show visual concept widget card */}
        <div className="mt-20 border border-white/10 rounded-2xl p-6 md:p-12 bg-neutral-900/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div className="lg:col-span-7 space-y-4">
            <span className="bg-[#ea1d2c]/10 text-[#ea1d2c] border border-red-500/10 px-3.5 py-1.5 rounded-full text-[9px] uppercase font-black tracking-widest leading-none">
              High Definition Sound System Demo
            </span>
            <h3 className="text-2xl font-black uppercase tracking-tight text-white font-display">
              The True Cinematic Event Audio Rumble
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              Our active concert-grade loudspeakers ensure that every piece of direct movie dialog is fully pristine, while our floor subwoofers supply that rich film-score bass you get at public high-end theaters. If event volume concerns are a factor, upgrade to our premium silent wireless headphones setup!
            </p>
            <div className="flex items-center gap-6 pt-2 text-[11px] text-gray-400 font-bold uppercase tracking-wide">
              <span>🔊 Active Stereos</span>
              <span>📻 Car FM Transmitters</span>
              <span>🎧 Interactive Silent Audio</span>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center">
            {/* Mock video player wrapper */}
            <div className="relative border border-white/5 rounded-xl aspect-video bg-black w-full flex items-center justify-center overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=600&auto=format&fit=crop" 
                alt="Cinema sound projection pre-show play demo details"
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(234,29,44,0.6)] group-hover:scale-110 transition-all z-10 select-none">
                <Play className="w-6 h-6 fill-white ml-1" />
              </div>
              <span className="absolute bottom-3 text-[9px] uppercase tracking-widest font-black text-gray-400 hover:text-white mt-1 z-10 leading-none">Click to watch setup demo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal overlay - Immersive viewer */}
      {lightboxIndex !== null && (
        <div 
          id="lightbox-popup-overlay"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center p-4 md:p-10 select-none animate-fadeIn"
        >
          {/* Close button */}
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-gray-400 hover:text-white hover:rotate-90 transition-all cursor-pointer bg-white/5 border border-white/10 p-2.5 rounded-full z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Quick header indicator */}
          <div className="absolute top-6 left-6 text-xs text-gray-500 font-black tracking-widest font-mono uppercase">
            <span>EVENT SNAPSHOT: {lightboxIndex + 1} / {galleryImages.length}</span>
          </div>

          <div className="relative max-w-5xl w-full flex flex-col justify-center items-center">
            {/* Left selector */}
            <button 
              onClick={handlePrev}
              className="absolute left-1 md:left-[-60px] w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-neutral-900 transition-all cursor-pointer z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Core Image view */}
            <div className="border border-white/10 rounded-2xl bg-[#090a10] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] max-h-[70vh] flex items-center justify-center">
              <img 
                src={galleryImages[lightboxIndex].url}
                alt={galleryImages[lightboxIndex].title}
                className="max-h-[70vh] object-contain"
                id="lightbox-main-img"
              />
            </div>

            {/* Right selector */}
            <button 
              onClick={handleNext}
              className="absolute right-1 md:right-[-60px] w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-neutral-900 transition-all cursor-pointer z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Captions wrapper */}
          <div className="text-center mt-6 max-w-xl px-4 animate-slideUp">
            <span className="text-[#ea1d2c] text-[9px] uppercase font-black tracking-[0.2em] bg-red-600/10 px-3 py-1.5 rounded">{galleryImages[lightboxIndex].category}</span>
            <h2 className="text-lg md:text-xl font-black uppercase text-white tracking-wide mt-3.5">{galleryImages[lightboxIndex].title}</h2>
            <div className="flex items-center gap-1.5 text-gray-400 text-xs uppercase font-bold justify-center mt-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#ea1d2c]" />
              <span>{galleryImages[lightboxIndex].location}</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed font-sans max-w-md mx-auto mt-3.5 border-t border-white/5 pt-3">
              {galleryImages[lightboxIndex].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
