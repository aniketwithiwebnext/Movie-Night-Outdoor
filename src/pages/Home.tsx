import React, { useState } from 'react';
import { ActivePage, EventPackage, Review } from '../types';
import { Play, Sparkles, ChevronRight, MapPin, BadgePercent, Star, Quote, ArrowRight, ShieldCheck, HelpCircle, Calendar, Film } from 'lucide-react';

interface HomeProps {
  setActivePage: (page: ActivePage) => void;
  onOpenQuote: (packageId?: string) => void;
}

export default function Home({ setActivePage, onOpenQuote }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // High fidelity generated asset paths
  const heroImg = '/src/assets/images/outdoor_movie_hero_1779910523527.png';
  const backyardImg = '/src/assets/images/backyard_setup_1779910542258.png';
  const driveInImg = '/src/assets/images/drive_in_setup_1779910562989.png';

  const packages: EventPackage[] = [
    {
      id: 'backyard',
      name: 'Backyard Premiere',
      subtitle: 'Indulgent family & neighbors night',
      screenSize: '16-Foot Premium Screen',
      capacity: 'Ideal for 10 - 60 Guests',
      price: '$299',
      features: [
        'Inflated ultra-flat movie screen',
        '4000 Lumens HD projector setup',
        'High-fidelity outdoor audio',
        'DVD / Blu-Ray / Streaming setup',
        'On-site host technician included'
      ],
      isPopular: true
    },
    {
      id: 'community',
      name: 'Park & School Epic',
      subtitle: 'For huge community crowds',
      screenSize: '24-Foot Mammoth Screen',
      capacity: 'Ideal for 100 - 300 Guests',
      price: '$499',
      features: [
        'Giant wind-resistant screen upgrade',
        'High-power laser projection',
        'Concert-grade active stereo sound',
        '1.5 Hour advance setup & testing',
        'Mic system for crowd announcements'
      ]
    },
    {
      id: 'drivein',
      name: 'Classic Drive-In',
      subtitle: 'Retro radio sound in vehicles',
      screenSize: '32-Foot Colossal Screen',
      capacity: 'Ideal for 30 - 150 Vehicles',
      price: '$899',
      features: [
        'Massive custom structural screen',
        'Ultra-bright venue laser projection',
        'Full FM radio transmitter loop',
        'Direct vehicle stereo audio routing',
        'Complete crowd manager tech crew'
      ]
    }
  ];

  const testimonials: Review[] = [
    {
      id: '1',
      author: 'Sarah Jenkins',
      location: 'Kansas City, MO',
      rating: 5,
      text: 'Mike and his crew made my husband’s milestone birthday absolutely incredible! The screen was massive, and the laser projector was so bright even during twilight. They took care of everything!',
      date: 'May 2026'
    },
    {
      id: '2',
      author: 'Marcus Vance',
      location: 'Lee’s Summit, MO',
      rating: 5,
      text: 'We hired Movie Night Outdoor Theater for our elementary school fundraiser event. They were fully set up before parents arrived, handled the microphone and music, and the pricing was excellent. Highly recommended team!',
      date: 'April 2026'
    },
    {
      id: '3',
      author: 'The HOA Committee',
      location: 'Blue Springs, MO',
      rating: 5,
      text: 'Rescheduling our community movie block due to a flash thunderstorm was seamlessly painless. Their flexible weather commitment saved our budget and the neighbors were thrilled!',
      date: 'May 2026'
    }
  ];

  const faqs = [
    {
      q: "What is included with a standard cinema screen rental?",
      a: "Every rental comes fully loaded as a complete turnkey experience. You get a heavy-duty inflatable screen, a premium high-intensity laser projector (HD or 4K), active high-fidelity venue sound speakers, media adapter links (Apple TV, HDMI, consoles, or players), and an expert on-site AV technician who performs the complete setup, controls the screening, and handles swift teardown."
    },
    {
      q: "What happens if Missouri weather gets stormy or windy?",
      a: "Your satisfaction is protected! We maintain a 100% painless weather policy. If severe wind, rain, or storms threaten your outdoor screening, we let you reschedule your event with zero fees or trouble."
    },
    {
      q: "When does the setup crew arrive at my venue?",
      a: "We generally arrive roughly 1.5 hours before scheduled dusk. This allows ample time to select the perfect grassy orientation, safely inflate the screen, run absolute optical sound checks, and have everything pristine right as twilight turns to starry skies."
    },
    {
      q: "How do we feed the movie signal to the projection desk?",
      a: "We accommodate all modern formats! We can run streaming sticks (Netflix, Disney+, sports events), HDMI laptops, gaming systems, optical Blu-Ray players, or pre-rendered presentations. If you want FM radio stream driving directly to vehicle dashboards for a classic Drive-In theme, we route that feed via our premium FM transmitter."
    }
  ];

  return (
    <div id="homepage-root" className="relative text-white overflow-hidden bg-[#050505]">
      {/* Background neon elements */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-blue-950/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-red-950/20 blur-[100px] pointer-events-none"></div>

      {/* Hero Section */}
      <section id="hero-section" className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-16 py-12 lg:py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-6 z-10">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-[#ea1d2c]"></span>
              <span className="text-[#ea1d2c] uppercase tracking-[0.3em] text-xs font-black flex items-center gap-1.5 animate-pulse">
                <Sparkles className="w-3.5 h-3.5 inline text-yellow-500 fill-yellow-500" />
                Missouri's Premier Outdoor Cinema
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tighter uppercase font-display">
              Bring the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Big Screen</span> <span className="text-[#ea1d2c] glow-text-red">Outdoors</span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg italic font-sans">
              Turn your grassy backyard, neighborhood park, school, or parking lot into a gorgeous high-fidelity cinema. Complete turn-key projection, heavy-duty sound, and flexible scheduling.
            </p>

            <div className="flex flex-wrap gap-4 mt-3">
              <button 
                onClick={() => onOpenQuote('backyard')}
                id="hero-btn-quote"
                className="bg-[#ea1d2c] text-white px-8 py-4 rounded font-black uppercase text-xs tracking-widest shadow-[0_0_30px_rgba(234,29,44,0.4)] hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Get a Quote
              </button>
              <button 
                onClick={() => onOpenQuote('community')}
                id="hero-btn-packages"
                className="border border-white/20 bg-white/5 px-8 py-4 rounded font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-all cursor-pointer"
              >
                View Packages
              </button>
            </div>

            {/* Quick trust counts */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 mt-5">
              <div>
                <p className="text-2xl font-black text-white italic">100%</p>
                <p className="text-[9px] uppercase tracking-widest text-[#ea1d2c] font-black mt-1">Setup Handled</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white italic">Laser</p>
                <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold mt-1">High Intensity</p>
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-yellow-500 italic font-black text-xl">
                  5.0 <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 ml-1 inline" />
                </div>
                <p className="text-[9px] uppercase tracking-widest text-gray-500 font-bold mt-1">Top MO Rated</p>
              </div>
            </div>
          </div>

          {/* Hero right side: Premium 3D-styled lakeside projection render frame */}
          <div className="lg:col-span-6 h-full relative p-2" id="hero-img-showcase-container">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ea1d2c]/10 to-blue-900/10 rounded-2xl blur-xl pointer-events-none"></div>
            
            <div className="relative border border-white/10 rounded-2xl bg-neutral-900/40 p-3 shadow-2xl overflow-hidden aspect-[4/3] group cursor-pointer">
              <img 
                src={heroImg} 
                alt="Movie Night Outdoor Theater lakeside backyard screening under Missouri stars" 
                className="w-full h-full object-cover rounded-xl transition-all duration-700 group-hover:scale-110"
                id="hero-img-render"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              
              {/* Overlay badges */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/80 px-3.5 py-1.5 rounded-full border border-[#ea1d2c]/30">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[9px] font-black uppercase tracking-wider text-white">Lakeside Premiere Setup</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase text-red-500 tracking-wider">Turn-Key Service</p>
                  <p className="text-sm font-black text-white uppercase mt-0.5">We Setup, Run & Pack Up</p>
                </div>
                <button 
                  onClick={() => setActivePage('gallery')}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer select-none shrink-0"
                >
                  <Play className="w-4 h-4 text-[#ea1d2c] fill-[#ea1d2c] ml-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Teaser (Geometric Bento Grid) */}
      <section id="services-teaser" className="py-16 md:py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/5">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[1px] w-6 bg-red-600"></span>
            <span className="text-red-500 uppercase tracking-[0.3em] text-[10px] font-black">Event Packages</span>
            <span className="h-[1px] w-6 bg-red-600"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
            Unforgettable Outdoor Screen Services
          </h2>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-lg">
            Whether a cozy intimate backyard screening or a park gathering with hundreds, we coordinate everything from the visual setup to the popcorn smell.
          </p>
        </div>

        {/* Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              id={`pkg-card-${pkg.id}`}
              className={`relative bg-neutral-900/40 border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/20 ${
                pkg.isPopular ? 'border-red-600/30 ring-1 ring-red-600/10' : 'border-white/5'
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3.5 right-6 bg-red-600 border border-red-500/20 text-white font-black uppercase tracking-widest text-[9px] px-3.5 py-1 rounded-full shadow-lg">
                  ★ Most Popular
                </div>
              )}

              <div>
                <span className="text-[9px] uppercase tracking-widest text-red-500 font-extrabold">{pkg.subtitle}</span>
                <h3 className="text-lg font-black uppercase text-white tracking-tight mt-1.5">{pkg.name}</h3>
                <div className="flex items-baseline gap-1.5 mt-4 mb-5">
                  <span className="text-3xl font-black text-white italic">{pkg.price}</span>
                  <span className="text-xs text-gray-500 font-bold uppercase">/ Screen Night</span>
                </div>

                {/* Specifics */}
                <div className="space-y-3.5 border-t border-white/5 pt-5 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ea1d2c] rounded-full"></span>
                    <span><strong>Display Size: </strong> {pkg.screenSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ea1d2c] rounded-full"></span>
                    <span><strong>Crowd Capacity: </strong> {pkg.capacity}</span>
                  </div>

                  {/* Included bullets */}
                  <div className="space-y-2.5 pt-4">
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-gray-400">
                        <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-white/5 flex flex-col gap-2">
                <button
                  onClick={() => onOpenQuote(pkg.id)}
                  className={`w-full py-3 rounded text-xs font-black uppercase tracking-widest transition-all ${
                    pkg.isPopular 
                      ? 'bg-red-600 text-white shadow-[0_4px_15px_rgba(234,29,44,0.3)] hover:bg-red-700' 
                      : 'border border-white/20 text-white hover:bg-white/5'
                  }`}
                >
                  Book Experience
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              setActivePage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-2 text-xs font-black text-gray-400 hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
          >
            <span>Explore full equipment list & packages</span>
            <ArrowRight className="w-3.5 h-3.5 text-red-600 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* Trust Badges and Stat Showcase */}
      <section className="bg-neutral-950/60 border-y border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 font-bold shrink-0">
              ✓
            </div>
            <div>
              <p className="text-xs font-black uppercase text-white">Full Event Hosting</p>
              <p className="text-[10px] text-gray-400 mt-0.5">We assemble, test, host, clean up.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-900/10 border border-blue-900/30 flex items-center justify-center text-blue-400 font-bold shrink-0">
              4K
            </div>
            <div>
              <p className="text-xs font-black uppercase text-white">Laser Projection</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Stunning contrast even during twilight.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-600/10 border border-orange-600/30 flex items-center justify-center text-orange-500 font-bold shrink-0">
              ⛈️
            </div>
            <div>
              <p className="text-xs font-black uppercase text-white">Weather Guarantee</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Painless, free storm rescheduling.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-600/10 border border-green-600/30 flex items-center justify-center text-green-500 font-bold shrink-0">
              MO
            </div>
            <div>
              <p className="text-xs font-black uppercase text-white">Missouri Local Crew</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Based locally at 816-621-0299.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Picture Splendor Grid (Gallery Teaser) */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-12 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[1px] w-6 bg-red-600"></span>
              <span className="text-red-500 uppercase tracking-[0.3em] text-[10px] font-black">Event Gallery</span>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">
              Capturing the Cinematic Magic
            </h2>
          </div>
          <div className="lg:col-span-6 lg:text-right">
            <button 
              onClick={() => {
                setActivePage('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="border border-white/20 hover:bg-white/5 text-white px-6 py-3 rounded font-black uppercase text-xs tracking-widest transition-all cursor-pointer"
            >
              Explore full gallery
            </button>
          </div>
        </div>

        {/* Masonry-type responsive grid of custom generated photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative border border-white/5 rounded-2xl overflow-hidden aspect-video bg-neutral-900 shadow-2xl group cursor-pointer">
            <img 
              src={backyardImg} 
              alt="Backyard private night projection screen and red retro popcorn machine" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="text-[#ea1d2c] text-[9px] uppercase font-black tracking-widest">Cozy Nights</span>
              <p className="text-sm font-black text-white uppercase mt-0.5">Backyard Movie Birthday</p>
              <p className="text-[11px] text-gray-400 italic">Missouri Private Residence</p>
            </div>
          </div>

          <div className="relative border border-white/5 rounded-2xl overflow-hidden aspect-video bg-neutral-900 shadow-2xl group cursor-pointer">
            <img 
              src={driveInImg} 
              alt="Grand park community drive in event screen in Missouri" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <span className="text-[#ea1d2c] text-[9px] uppercase font-black tracking-widest">Grand Scale</span>
              <p className="text-sm font-black text-white uppercase mt-0.5">Church & School Community Drive-In</p>
              <p className="text-[11px] text-gray-400 italic">Missouri Park Recreation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Google Review Placeholders */}
      <section className="py-16 md:py-24 bg-[#07080d]/80 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-1 mb-1.5 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-wide">
              5-Star Neighborhood Buzz
            </h2>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest">Verified Google Reviews for Mike & the Crew</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div 
                key={test.id}
                className="bg-neutral-900/30 border border-white/5 rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <Quote className="absolute top-6 right-6 w-9 h-9 text-white/[0.02] select-none" />
                <div className="space-y-4">
                  <div className="flex items-center gap-1.5 text-yellow-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed italic">
                    "{test.text}"
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-black text-white uppercase tracking-tight">{test.author}</span>
                    <span className="text-[10px] text-gray-500 font-bold uppercase">{test.location}</span>
                  </div>
                  <span className="text-[9px] text-[#ea1d2c] font-mono tracking-widest uppercase">{test.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 border-b border-white/5">
        <div className="flex flex-col items-center text-center mb-12">
          <HelpCircle className="w-8 h-8 text-[#ea1d2c] mb-3" />
          <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">FAQ Panel</h2>
          <p className="text-xs text-gray-400 mt-1">Answers to common booking and equipment coordinate inquiries.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              id={`faq-item-${index}`}
              className="border border-white/5 bg-neutral-900/20 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-5 text-left flex justify-between items-center text-xs font-black uppercase text-white tracking-wide cursor-pointer focus:outline-none"
              >
                <span>{faq.q}</span>
                <span className="text-red-500 text-lg transition-transform duration-300">
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>
              
              {openFaq === index && (
                <div className="p-5 pt-0 text-xs text-gray-400 leading-relaxed border-t border-white/5 bg-black/40 font-sans">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Localized Bottom Contact CTA Teaser */}
      <section className="py-16 md:py-20 px-6 text-center max-w-4xl mx-auto relative z-10">
        <span className="inline-block bg-[#ea1d2c]/10 text-[#ea1d2c] border border-[#ea1d2c]/20 px-4 py-1.5 rounded-full text-[10px] uppercase font-black tracking-widest mb-4">
          Serving Missouri (MO) Metropolitan Spaces
        </span>
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6">
          Ready to Host an Epic Starry Night?
        </h2>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-lg mx-auto mb-8 italic">
          We bring full active theater rigs anywhere in Missouri. Book early to secure your graduation block, birthday party, school festival, or community fundraiser event!
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => onOpenQuote('backyard')}
            className="bg-[#ea1d2c] text-white font-black uppercase text-xs tracking-widest px-8 py-4 rounded shadow-[0_0_20px_rgba(234,29,44,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Coordinate Event Online
          </button>
          <a
            href="tel:8166210299"
            className="border border-white/20 bg-white/5 text-white font-black uppercase text-xs tracking-widest px-8 py-4 rounded hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <span>Dial Mike: 816-621-0299</span>
          </a>
        </div>
      </section>
    </div>
  );
}
