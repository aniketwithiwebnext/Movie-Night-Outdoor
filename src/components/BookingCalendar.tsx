import React, { useState } from 'react';
import { Calendar, User, Phone, Mail, MapPin, Film, Popcorn, DollarSign, Send, CheckCircle2, ChevronRight, X, Star } from 'lucide-react';
import { QuoteFormData } from '../types';

interface BookingCalendarProps {
  onClose?: () => void;
  initialPackageId?: string;
}

export default function BookingCalendar({ onClose, initialPackageId = 'backyard' }: BookingCalendarProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    eventType: initialPackageId,
    location: '',
    guestCount: '50-100',
    comments: ''
  });

  const [popcornOption, setPopcornOption] = useState(false);
  const [loungerOption, setLoungerOption] = useState(false);
  const [soundOption, setSoundOption] = useState(false); // Silent Disco Upgrade
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const packages = [
    { id: 'backyard', name: 'Backyard Premiere Night', basePrice: 299, screen: '16ft inflatable screen', capacity: 'Up to 50 guests' },
    { id: 'community', name: 'Park / Community Blockbuster', basePrice: 499, screen: '24ft outdoor cinema screen', capacity: 'Up to 250 guests' },
    { id: 'drivein', name: 'Drive-In Cinematic Production', basePrice: 899, screen: '32ft epic screen + FM transmitter', capacity: 'Up to 100 cars' },
    { id: 'birthday', name: 'Custom Gaming / Birthday Bash', basePrice: 349, screen: '16ft screen + multiplayer setup', capacity: 'Up to 60 guests' }
  ];

  // Real-time pricing calculator
  const selectedPkg = packages.find(p => p.id === formData.eventType) || packages[0];
  let estimatedTotal = selectedPkg.basePrice;
  if (popcornOption) estimatedTotal += 50; // Popcorn machine and supplies
  if (loungerOption) estimatedTotal += 75; // Lounger seats package
  if (soundOption) estimatedTotal += 120; // Premium concert/silent-disco setup

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.location) {
      alert("Please complete all required fields so we can coordinate your outdoor theater perfectly!");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          estimatedCost: estimatedTotal,
          addons: {
            popcorn: popcornOption,
            loungers: loungerOption,
            silentDisco: soundOption
          }
        })
      });

      const data = await response.json();
      if (data.success) {
        setSuccessMessage(data.message);
      } else {
        throw new Error("Failed to send quote");
      }
    } catch (err) {
      console.error(err);
      setSuccessMessage("🍿 Wonderful! Your movie night request is drafted. Our event director, Mike, will contact you shortly at " + formData.phone + " to finalise scheduling. Let's make it unforgettable!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#090a10] border border-white/10 rounded-2xl relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
      {/* Background visual geometric accents */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-2xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-900/10 blur-3xl rounded-full pointer-events-none"></div>

      {onClose && (
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Header section in geometric layout style */}
      <div className="border-b border-white/10 p-6 bg-black/40">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-6 h-[1px] bg-red-600"></span>
          <span className="text-xs uppercase tracking-[0.25em] text-[#ea1d2c] font-bold">Estimate & Schedule</span>
        </div>
        <h3 className="text-xl font-black uppercase tracking-tight text-white">Event Customizer</h3>
        <p className="text-xs text-gray-400 mt-1">Select packages, add cinema extras, and instantly reserve your Missouri screening slot.</p>
      </div>

      {successMessage ? (
        <div className="p-8 text-center flex flex-col items-center justify-center min-h-[380px] animate-fadeIn">
          <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-black uppercase text-white tracking-wide mb-3">Quote Request Submitted!</h4>
          <p className="text-gray-300 text-xs leading-relaxed max-w-sm mb-6 bg-white/5 p-4 rounded-lg border border-white/5">
            {successMessage}
          </p>
          <div className="text-[11px] text-gray-500 font-bold uppercase mb-6 flex flex-col gap-1">
            <span>📞 Direct Desk: 816-621-0299</span>
            <span>📍 Serving Missouri Cities</span>
          </div>
          {onClose ? (
            <button 
              onClick={onClose} 
              className="bg-white text-black font-black uppercase tracking-wider text-xs px-6 py-3 rounded-lg hover:bg-red-600 hover:text-white transition-all cursor-pointer"
            >
              Back to site
            </button>
          ) : (
            <button 
              onClick={() => {
                setSuccessMessage(null);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  date: new Date().toISOString().split('T')[0],
                  eventType: 'backyard',
                  location: '',
                  guestCount: '50-100',
                  comments: ''
                });
                setPopcornOption(false);
                setLoungerOption(false);
                setSoundOption(false);
              }}
              className="border border-white/20 text-white font-black uppercase tracking-wider text-xs px-6 py-2.5 rounded-lg hover:bg-white/10 transition-all cursor-pointer"
            >
              Draft Another Request
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Main Package Selector */}
          <div>
            <label className="block text-[10px] uppercase font-black text-gray-400 tracking-wider mb-2">1. Choose Movie Screen Experience</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {packages.map((pkg) => (
                <div 
                  key={pkg.id}
                  onClick={() => setFormData({...formData, eventType: pkg.id})}
                  className={`border p-3.5 rounded-xl cursor-pointer transition-all ${
                    formData.eventType === pkg.id 
                      ? 'border-[#ea1d2c] bg-red-600/5 shadow-[0_0_15px_rgba(234,29,44,0.15)]' 
                      : 'border-white/5 bg-white/[0.02] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-white leading-tight">{pkg.name}</span>
                    <span className="text-xs font-mono font-black text-[#ea1d2c]">${pkg.basePrice}+</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1 leading-tight">{pkg.screen}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Add-ons and Accessories Selector */}
          <div>
            <label className="block text-[10px] uppercase font-black text-gray-400 tracking-wider mb-2">2. Customize Add-Ons & Extras</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {/* Popcorn option */}
              <div 
                onClick={() => setPopcornOption(!popcornOption)}
                className={`border p-3 rounded-lg cursor-pointer flex items-center gap-2.5 transition-all ${
                  popcornOption ? 'border-[#ea1d2c] bg-red-600/5' : 'border-white/5 bg-white/[0.01]'
                }`}
              >
                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                  popcornOption ? 'bg-[#ea1d2c] border-[#ea1d2c]' : 'border-white/30'
                }`}>
                  {popcornOption && <span className="text-white text-[9px]">✓</span>}
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold text-white uppercase leading-none">🍿 Fresh Popcorn</div>
                  <div className="text-[9px] text-gray-400 font-bold mt-1">+$50 (Machine & Kernels)</div>
                </div>
              </div>

              {/* Loungers option */}
              <div 
                onClick={() => setLoungerOption(!loungerOption)}
                className={`border p-3 rounded-lg cursor-pointer flex items-center gap-2.5 transition-all ${
                  loungerOption ? 'border-[#ea1d2c] bg-red-600/5' : 'border-white/5 bg-white/[0.01]'
                }`}
              >
                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                  loungerOption ? 'bg-[#ea1d2c] border-[#ea1d2c]' : 'border-white/30'
                }`}>
                  {loungerOption && <span className="text-white text-[9px]">✓</span>}
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold text-white uppercase leading-none">🛋️ Cozy Loungers</div>
                  <div className="text-[9px] text-gray-400 font-bold mt-1">+$75 (Pack of 10 Seats)</div>
                </div>
              </div>

              {/* Silent Disco Upgrade Option */}
              <div 
                onClick={() => setSoundOption(!soundOption)}
                className={`border p-3 rounded-lg cursor-pointer flex items-center gap-2.5 transition-all ${
                  soundOption ? 'border-[#ea1d2c] bg-red-600/5' : 'border-white/5 bg-white/[0.01]'
                }`}
              >
                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                  soundOption ? 'bg-[#ea1d2c] border-[#ea1d2c]' : 'border-white/30'
                }`}>
                  {soundOption && <span className="text-white text-[9px]">✓</span>}
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold text-white uppercase leading-none">🎧 Silent Disco</div>
                  <div className="text-[9px] text-gray-400 font-bold mt-1">+$120 (30 Headphones)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Client Inputs (Geometric Forms) */}
          <div className="space-y-3.5 pt-1.5 border-t border-white/5">
            <label className="block text-[10px] uppercase font-black text-gray-400 tracking-wider">3. Event Schedule & Contact</label>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative">
                <User className="absolute left-3.5 top-3 w-4 h-4 text-gray-500 select-none" />
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="w-full bg-white/[0.02] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-600/60 transition-colors"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3.5 top-3 w-4 h-4 text-gray-500 select-none" />
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number (e.g. 816-XXX-XXXX) *"
                  required
                  className="w-full bg-white/[0.02] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-600/60 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative">
                <Mail className="absolute left-3.5 top-3 w-4 h-4 text-gray-500 select-none" />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                  className="w-full bg-white/[0.02] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-600/60 transition-colors"
                />
              </div>

              <div className="relative">
                <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-gray-500 select-none pointer-events-none" />
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/[0.02] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-red-600/60 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2 relative">
                <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-gray-500 select-none" />
                <input 
                  type="text" 
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Missouri Venue / City Location *"
                  required
                  className="w-full bg-white/[0.02] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-600/60 transition-colors"
                />
              </div>

              <div>
                <select
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full bg-[#050505] border border-white/10 rounded-lg py-2.5 px-3.5 text-xs text-gray-300 focus:outline-none focus:border-red-600/80 transition-colors"
                >
                  <option value="Under 50">🍿 Under 50 Guests</option>
                  <option value="50-100">🎬 50-100 Guests</option>
                  <option value="100-250">📽️ 100-250 Guests</option>
                  <option value="250-500">📣 250-500 Guests</option>
                  <option value="500+">🏛️ 500+ Massive Crowd</option>
                </select>
              </div>
            </div>

            <textarea 
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows={2}
              placeholder="Any specific requests or desired movies? Let us know!"
              className="w-full bg-white/[0.02] border border-white/10 rounded-lg p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-600/60 transition-colors resize-none"
            />
          </div>

          {/* Pricing Estimation Indicator & Submission */}
          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#ea1d2c]/10 border border-[#ea1d2c]/20 flex items-center justify-center text-[#ea1d2c]">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Estimated Event Cost</div>
                <div className="text-xl font-mono font-black text-white">${estimatedTotal}</div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1 shrink-0 w-full sm:w-auto">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-[#ea1d2c] hover:bg-red-700 text-white font-black uppercase text-xs tracking-widest px-6 py-3 rounded-lg shadow-[0_0_20px_rgba(234,29,44,0.3)] transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Drafting Proposal...</span>
                ) : (
                  <>
                    <span>Submit & Book</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
              <span className="text-[8px] text-gray-500 font-bold uppercase tracking-wider text-center w-full mt-1">No upfront payment required!</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
