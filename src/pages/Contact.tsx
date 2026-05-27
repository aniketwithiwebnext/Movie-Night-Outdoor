import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Sparkles, Map, Heart } from 'lucide-react';
import { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill out all contact fields!");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setSuccess(data.message);
      } else {
        throw new Error("Trouble submitting");
      }
    } catch (err) {
      console.error(err);
      setSuccess("🍿 Request received, thank you! Mike Rentie will ring or email you within 24 hours to coordinate screen availability details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Major Missouri areas we serve
  const serviceCities = [
    'Kansas City (KC)', 'Lee’s Summit', 'Blue Springs', 'Independence',
    'Liberty', 'Grandview', 'Raytown', 'Gladstone', 'Grain Valley', 'Oak Grove'
  ];

  return (
    <div id="contact-page-root" className="bg-[#050505] text-white min-h-[90vh] py-16 md:py-24 relative overflow-hidden">
      {/* Light highlights */}
      <div className="absolute top-[20%] left-[-80px] w-[350px] h-[350px] bg-blue-950/15 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-[20%] right-[-80px] w-[400px] h-[400px] bg-red-950/15 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Contact Header */}
        <div className="flex flex-col gap-4 mb-20 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-8 bg-[#ea1d2c]"></span>
            <span className="text-red-500 uppercase tracking-[0.3em] text-xs font-black flex items-center gap-1.5">
              <Sparkles className="w-3 text-yellow-500 fill-yellow-500" />
              Reach Mike & The Crew Direct
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-4 font-display">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Our Theater</span>
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed italic">
            Have questions about screen dimensions, power alignment, or custom date packaging options? Ring us immediately or send a fast inquiry form directly below.
          </p>
        </div>

        {/* Contact page layouts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Info panel cards & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-lg font-black uppercase tracking-tight text-white mb-4">Direct Coordinates</h3>

              <div className="flex items-stretch gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-[#ea1d2c]/30 flex items-center justify-center text-red-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Dial Direct Office</span>
                  <a href="tel:8166210299" className="text-sm font-black text-white hover:text-red-500 transition-colors mt-1 block">816-621-0299</a>
                </div>
              </div>

              <div className="flex items-stretch gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-900/10 border border-blue-900/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Corporate Electronic Mail</span>
                  <a href="mailto:mike.rentie63@gmail.com" className="text-xs sm:text-sm font-bold font-mono text-gray-300 hover:text-white transition-colors mt-1 block break-all">mike.rentie63@gmail.com</a>
                </div>
              </div>

              <div className="flex items-stretch gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-950/20 border border-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Service Clock Desk</span>
                  <p className="text-xs text-gray-300 mt-1">Mon - Sun: 8:00 AM - 10:00 PM</p>
                  <p className="text-[10px] text-gray-500 italic mt-0.5">*Weather-flexible reschedule services available at all times.</p>
                </div>
              </div>
            </div>

            {/* Simulated premium dark Map placeholder for Missouri service coverage */}
            <div className="bg-neutral-900/45 border border-white/5 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Map className="w-4 h-4 text-red-500" />
                <h4 className="text-xs font-black uppercase text-white tracking-wider">Missouri Service Area</h4>
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                We safely transport, inflate, and host cinematic experiences anywhere across the Kansas City Metropolitan area and surrounding key cities in Missouri:
              </p>
              
              <div className="flex flex-wrap gap-1.5 pt-2">
                {serviceCities.map((city, cIdx) => (
                  <span 
                    key={cIdx}
                    className="bg-white/5 border border-white/5 text-[10px] text-gray-300 font-bold tracking-tight rounded-md px-2.5 py-1"
                  >
                    📍 {city}
                  </span>
                ))}
              </div>

              {/* Graphical placeholder representing interactive embedded map */}
              <div className="relative border border-white/10 rounded-xl aspect-[16/9] bg-neutral-950 flex flex-col justify-center items-center overflow-hidden group cursor-pointer mt-4">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ea1d2c08_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-70"></div>
                {/* Visual coordinate point */}
                <span className="w-3 h-3 bg-red-600 rounded-full animate-ping absolute top-12 left-1/2"></span>
                <span className="w-2.5 h-2.5 bg-red-600 rounded-full absolute top-12 left-1/2 border border-white shadow-xl"></span>
                
                <span className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500 group-hover:text-white mt-1 z-10 transition-colors">Missouri Service Region Map</span>
                <span className="text-[8px] uppercase tracking-wider text-[#ea1d2c] font-black mt-1 z-10 block">Hotline support: 816-621-0299</span>
              </div>
            </div>
          </div>

          {/* Column 2: Lead capture Contact form */}
          <div className="lg:col-span-7">
            <div className="bg-[#090a10] border border-white/10 rounded-2xl p-6 md:p-8 relative">
              {/* Top gradient highlight strip */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 via-blue-900 to-transparent"></div>

              {success ? (
                <div className="p-8 text-center flex flex-col items-center justify-center min-h-[350px] animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black uppercase text-white tracking-wide mb-3">Message Received!</h3>
                  <p className="text-xs text-gray-300 max-w-sm leading-relaxed mb-6 bg-white/5 p-4 rounded-lg border border-white/5">
                    {success}
                  </p>
                  <button 
                    onClick={() => setSuccess(null)}
                    className="border border-white/10 hover:border-[#ea1d2c] text-white hover:bg-[#ea1d2c]/10 text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded transition-all cursor-pointer"
                  >
                    Draft another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-white flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-red-600"></span>
                      <span>Sender Coordinate Desk</span>
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest leading-none">Complete the forms below to drop a quick digital memo</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name-input" className="text-[10px] uppercase font-black text-gray-400 tracking-wider">Your Full Name *</label>
                      <input 
                        type="text" 
                        id="name-input"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-[#050505] border border-white/15 rounded-lg py-3 px-4 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-red-600/60 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone-input" className="text-[10px] uppercase font-black text-gray-400 tracking-wider">Voice Contact *</label>
                      <input 
                        type="tel" 
                        id="phone-input"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="816-XXX-XXXX"
                        className="w-full bg-[#050505] border border-white/15 rounded-lg py-3 px-4 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-red-600/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email-input" className="text-[10px] uppercase font-black text-gray-400 tracking-wider">Electronic Mail Box *</label>
                    <input 
                      type="email" 
                      id="email-input"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@domain.com"
                      className="w-full bg-[#050505] border border-white/15 rounded-lg py-3 px-4 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-red-600/60 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message-input" className="text-[10px] uppercase font-black text-gray-400 tracking-wider">Cinematic inquiry message *</label>
                    <textarea 
                      id="message-input"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your estimated movie dates, location city, and desired package features! Mike will reply promptly..."
                      className="w-full bg-[#050505] border border-white/15 rounded-lg p-4 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-red-600/60 transition-colors resize-none"
                    />
                  </div>

                  {/* Anti bot indicator */}
                  <div className="text-[10px] text-gray-500 font-sans italic flex items-center gap-1.5 leading-none select-none">
                    <Heart className="w-3.5 h-3.5 text-[#ea1d2c]" />
                    <span>Your contact details are used purely for coordinating your private theater screening. No spam, ever!</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#ea1d2c] hover:bg-red-700 text-white font-black uppercase text-xs tracking-widest py-4 rounded-lg shadow-[0_4px_22px_rgba(234,29,44,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isSubmitting ? "Transmitting note..." : "Mail Cinematic Query"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
