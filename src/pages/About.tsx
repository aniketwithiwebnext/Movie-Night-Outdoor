import React from 'react';
import { Film, User, Shield, Sparkles, MapPin, BadgeCheck, CheckCircle2, Award, Heart, Phone } from 'lucide-react';

export default function About() {
  return (
    <div id="about-page-root" className="bg-[#050505] text-white min-h-[90vh] py-16 md:py-24 relative overflow-hidden">
      {/* Dynamic light glows */}
      <div className="absolute top-[30%] left-[-100px] w-[400px] h-[400px] bg-red-950/10 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-[10%] right-[-100px] w-[450px] h-[450px] bg-blue-950/20 blur-[130px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* About Header */}
        <div className="flex flex-col gap-4 mb-20 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-8 bg-[#ea1d2c]"></span>
            <span className="text-red-500 uppercase tracking-[0.3em] text-xs font-black flex items-center gap-1.5 animate-pulse">
              <Sparkles className="w-3 text-yellow-500 fill-yellow-500" />
              Our Cinema Story
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-4 font-display">
            The Crew Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">The Magic</span>
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed italic">
            Movie Night Outdoor Theater brings families, neighborhoods, schools, and organizations together through giant, glowing high-definition theater setups on beautiful grassy lawns.
          </p>
        </div>

        {/* Story Block Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-white/5 pb-20">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">
              Making Unforgettable Outdoor Experiences Easier Than Ever
            </h3>
            
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">
              Founded locally in Missouri (MO) by Mike, our mission has remained centered around one specific core outcome: <strong>pure, high-quality fun</strong>. We noticed that hosting movies at home on small patio screens or wrestling with tiny household projectors was stressful, laggy, and disappointing for kids and friends.
            </p>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans mt-3">
              We decided to engineer a true turnkey solution. Rather than forcing you to lift a finger, run complex auxiliary wiring, or drag heavy projection units, <strong>our AV technician crew handles it all</strong>. We drive to your Missouri backyard or school court, inflate the massive screen safely, route 4000+ lumens HD film projection, align concert-grade stereo speakers, and manage the event feed all night.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                <Shield className="w-5 h-5 text-red-600 shrink-0 select-none mt-0.5" />
                <div>
                  <h4 className="text-xs font-black uppercase text-white tracking-wider">Absolute Reliability</h4>
                  <p className="text-[11px] text-gray-500 font-bold uppercase mt-1">We arrive 1.5 hours early. Tested, safe, and secure.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                <Heart className="w-5 h-5 text-red-600 shrink-0 select-none mt-0.5" />
                <div>
                  <h4 className="text-xs font-black uppercase text-white tracking-wider">Family-Friendly Atmosphere</h4>
                  <p className="text-[11px] text-gray-500 font-bold uppercase mt-1">Clean language helper crew, safe settings, maximum comfort.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Director mike block in geometric borders */}
          <div className="lg:col-span-5 relative" id="director-mike-container">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-blue-900/10 rounded-2xl blur-xl pointer-events-none"></div>
            
            <div className="bg-[#090a10] border border-white/10 rounded-2xl p-6 md:p-8 relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-[#ea1d2c]/30 flex items-center justify-center text-red-500 shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[#ea1d2c] text-[10px] uppercase font-black tracking-widest leading-none">Founder & Owner</span>
                  <h4 className="text-lg font-black uppercase text-white tracking-tight mt-1.5">Mike Rentie</h4>
                </div>
              </div>

              <blockquote className="text-xs text-gray-300 italic leading-relaxed border-l border-[#ea1d2c] pl-4 mb-6">
                "Our business is not just about movie screens and HD projection. It is about the memory of popcorn under the stars, laughing with your neighbors in a dark field, and creating an amazing event that children will look back on for years to come. That is why we treat every client like our closest neighbor."
              </blockquote>

              <div className="space-y-3.5 border-t border-white/5 pt-6 text-[11px] text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0 select-none" />
                  <span>Serving Kansas City Metro & surrounding Missouri areas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 select-none" />
                  <span>Licensed, Insured & Family-Operated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our 5 Core Guarantees to Event Hosts */}
        <div className="pt-20">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-2xl font-black uppercase tracking-tight text-white font-display">
              Why Missouri Trusts Us
            </h2>
            <p className="text-xs text-gray-400 mt-1">The five operational pillars that guide our service desk daily.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="border border-white/5 bg-neutral-900/10 p-5 rounded-xl text-center flex flex-col items-center">
              <Award className="w-7 h-7 text-[#ea1d2c] mb-4" />
              <h4 className="text-xs font-black uppercase text-white mb-2">Laser Clarity</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed font-sans">We exclusively run highly bright laser projector units.</p>
            </div>
            
            <div className="border border-white/5 bg-neutral-900/10 p-5 rounded-xl text-center flex flex-col items-center">
              <BadgeCheck className="w-7 h-7 text-green-500 mb-4" />
              <h4 className="text-xs font-black uppercase text-white mb-2">Technician On Hand</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed font-sans">An AV operator is on-site the whole night supervising signal levels.</p>
            </div>

            <div className="border border-white/5 bg-neutral-900/10 p-5 rounded-xl text-center flex flex-col items-center">
              <Film className="w-7 h-7 text-blue-400 mb-4" />
              <h4 className="text-xs font-black uppercase text-white mb-2">Weather Covered</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed font-sans">We match you with pain-free free rescheduling slots if it rains.</p>
            </div>

            <div className="border border-white/5 bg-neutral-900/10 p-5 rounded-xl text-center flex flex-col items-center">
              <MapPin className="w-7 h-7 text-yellow-500 mb-4" />
              <h4 className="text-xs font-black uppercase text-white mb-2">Missouri Native</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed font-sans">Based right here internally at 816-621-0299.</p>
            </div>

            <div className="border border-white/5 bg-neutral-900/10 p-5 rounded-xl text-center flex flex-col items-center">
              <Heart className="w-7 h-7 text-red-500 mb-4" />
              <h4 className="text-xs font-black uppercase text-white mb-2">Zero Effort Setup</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed font-sans">We inflate, wire, test, screen, and fully sweep pack up.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
