import React from 'react';
import { ActivePage } from '../types';
import { Play, Sparkles, Shield, Compass, BadgePercent, Check, Radio, Popcorn, Laptop, Music, Volume2, ShieldAlert } from 'lucide-react';

interface ServicesProps {
  onOpenQuote: (packageId?: string) => void;
}

export default function Services({ onOpenQuote }: ServicesProps) {
  const serviceCategories = [
    {
      id: 'backyard',
      title: 'Backyard Movie Nights',
      description: 'The absolute neighborhood gold standard. Transform your lawn into a luxurious, warm outdoor cinema. Perfect for family movies, anniversary screenings, seasonal holidays, or intimate block sessions with close friends.',
      specs: ['16-Foot Premium Inflatable Screen', 'Vibrant HD Laser Projector', 'Active High-Fidelity 1000W Stereo Tower Speakers', 'Complete 1.5 Hour Setup & Pack Down', 'On-Site Host Tech Assistant'],
      bestFor: 'Intimate groups, parents wanting peaceful kids distraction, friendly block screenings.',
      price: 'From $299'
    },
    {
      id: 'school',
      title: 'School Festivals & Field Days',
      description: 'Massive crowd-pleasing projection layouts. Perfect for end-of-year celebrations, family fun nights, sports team appreciations, or high-definition console tournament assemblies on the sports field.',
      specs: ['24-Foot Giant Outdoor Screen (Wind Resistant)', 'High-Intensity 6000 Lumens Laser Projection', 'Dual Dual-Headed Stereo Sound Arrays', 'On-Stage AV Technician', 'Wired/Wireless Microphone for field announcements'],
      bestFor: 'Parent Teacher Student Associations (PTSAs), school court activities, local field days.',
      price: 'From $499'
    },
    {
      id: 'church',
      title: 'Church Gatherings & Screenings',
      description: 'Warm, spiritual outreach activities. Excellent for movie-based sermon illustrations, holy week evening films, family game nights, or youth groups gathering on the church lawns.',
      specs: ['16ft or 24ft Giant Screens', 'Vibrant setup visible even during low twilight', 'Professional layout with safe, hidden power cable tracks', 'Dedicated media integration technician', 'Weather-friendly free scheduling protection'],
      bestFor: 'Faith congregations, youth group socials, outdoor praise gatherings.',
      price: 'From $349'
    },
    {
      id: 'corporate',
      title: 'Corporate Events & Advertising',
      description: 'Pristine professional presentation screens. Host product launch trailers, marketing slides, active team appreciation outdoor movie slots, or high-contrast ad spaces for public viewers.',
      specs: ['32-Foot Colossal Screen Structure', 'Ultra-high Contrast Laser Projector (4K optional)', 'FM transmitter routing to employee vehicle stereos', 'Corporate laptop and slideshow integration desks', 'Professional AV site-manager crew'],
      bestFor: 'Agencies, brand activations, developer pitches, employee appreciation.',
      price: 'From $699'
    },
    {
      id: 'community',
      title: 'Community Movie Nights',
      description: 'Unify your whole town or neighborhood! Perfect for Park & Recreation departments, Homeowners Associations (HOAs), town squares, community pools, or local country club special nights.',
      specs: ['24-Foot or 32-Foot massive screens', 'Massive active audio layout for whole-field coverage', 'Double subwoofers for true theater rumble', 'Setup safe alignment with park sprinkler networks', 'Full weather insurance included'],
      bestFor: 'HOA boards, municipal event planners, community pools, gated club groups.',
      price: 'From $499'
    },
    {
      id: 'birthday',
      title: 'Birthday Parties & Gaming Tournaments',
      description: 'The cool birthday award! Connect PlayStation 5, Xbox Series X, or Nintendo Switch for gigantic local split-screen multiplayer matches or Mario Kart speed runs, followed by a double feature film.',
      specs: ['16-Foot Quick-Setup Screen', 'Low Latency high-speed digital projection', 'Active dual input gaming hookup board', 'Silent Disco Headphone system upgrades available', 'Fun color-changing uplights and laser stars'],
      bestFor: 'Kids, teenagers, local gaming clans, nostalgic adult cartoon screenings.',
      price: 'From $349'
    },
    {
      id: 'fundraiser',
      title: 'Non-Profit & Charity Fundraisers',
      description: 'High turn-out events that make money! We help charities, youth sports clubs, and neighborhood groups host block-buster movies. Sell popcorn, drinks, or ticket admissions to fundraise easily.',
      specs: ['Massive screens visible from standard stadium lawn', 'Event mic for sponsor call-outs and raffle draws', 'Digital banner slide display for local sponsors logos', 'Sponsorship-friendly event design support', 'Painless scheduling adjustment'],
      bestFor: 'Little league baseball clubs, animal shelters, local church initiatives.',
      price: 'From $399'
    },
    {
      id: 'rental',
      title: 'Premium Equipment Add-On Rentals',
      description: 'Want a little extra flavor? Elevate any outdoor cinema block with active cinema concessions, cozy lounge chairs, or silent-audio accessories to keep event neighbors absolutely happy.',
      specs: ['🍿 Popcorn Machine: Vintage look, kettle heated, complete with supplies for 100 bags (+$50)', '🛋️ Outdoor Loungers: Comfortable floor beanbags & soft carpets (+$75 for 10 set)', '🎧 Silent Disco Headphones: High quality wireless headphones with 3 audio channels (+$120/30ct)', '💡 Ambient Uplighting: Warm LED wash bars for visual atmosphere on trees/fences (+$40)'],
      bestFor: 'Extending cozy duration, high neighborhood density, premium high-ticket guest events.',
      price: 'Add-on rates'
    }
  ];

  return (
    <div id="services-page-root" className="bg-[#050505] text-white min-h-[90vh] py-16 md:py-24 relative overflow-hidden">
      {/* Visual background glow elements */}
      <div className="absolute top-[20%] right-[-50px] w-[350px] h-[350px] bg-red-950/10 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-[20%] left-[-50px] w-[400px] h-[400px] bg-blue-950/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Banner header resembling Geometric Balance concept style */}
        <div className="flex flex-col gap-4 mb-20 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-8 bg-[#ea1d2c]"></span>
            <span className="text-red-500 uppercase tracking-[0.3em] text-xs font-black flex items-center gap-1.5">
              <Sparkles className="w-3 text-yellow-500 fill-yellow-500" />
              Custom AV Coordinate Options
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-4 font-display">
            Outdoor Cinema <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Experiences</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed italic">
            At Movie Night Outdoor Theater, we represent Missouri's premiere standard for outdoor entertainment. Check out our diverse service options and let Mike & the crew assemble your next memory under the stars.
          </p>
        </div>

        {/* Big visual service block listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="services-grid-block">
          {serviceCategories.map((service, idx) => (
            <div 
              key={service.id}
              id={`service-block-item-${service.id}`}
              className="bg-neutral-900/40 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#ea1d2c]/20 hover:bg-neutral-900/60"
            >
              <div>
                {/* Header indicators */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] text-gray-500 font-black tracking-widest font-mono">SERVICE REF: 0{idx+1}</span>
                  <span className="text-[#ea1d2c] font-mono text-xs font-black bg-red-600/10 px-2.5 py-1 rounded border border-red-500/20">{service.price}</span>
                </div>

                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3 font-display">{service.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-sans">{service.description}</p>

                {/* Scope specifics */}
                <div className="border-t border-white/5 pt-5 space-y-3">
                  <p className="text-[9px] uppercase tracking-widest text-[#ea1d2c] font-black">Included Rig Specifics:</p>
                  <ul className="space-y-2.5">
                    {service.specs.map((spec, sidx) => (
                      <li key={sidx} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="leading-tight">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom detail action */}
              <div className="pt-8 mt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[10px] text-gray-400 font-medium italic max-w-xs leading-snug">
                  <strong>Best for:</strong> {service.bestFor}
                </div>
                <button
                  onClick={() => onOpenQuote(service.id)}
                  className="w-full sm:w-auto bg-white hover:bg-[#ea1d2c] hover:text-white text-black font-black uppercase text-[10px] tracking-widest px-5 py-3 rounded transition-all shrink-0 cursor-pointer"
                >
                  Book Event
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Value Prop banner - weather and technician info */}
        <div className="bg-gradient-to-r from-red-600/5 via-blue-900/5 to-black border border-white/10 rounded-2xl p-6 md:p-10 mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-3">
            <span className="inline-block bg-[#ea1d2c]/20 text-[#ea1d2c] border border-red-500/20 px-3 py-1 rounded-full text-[9px] uppercase font-black tracking-widest leading-none">
              Painless Scheduling Pledge
            </span>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white font-display">
              Missouri Weather-Friendly Policy
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-sans">
              We understand that Missouri weather can occasionally draft unexpected storms. If rain, high wind speeds (&gt;15mph), or lightning threaten your booked event block, we coordinate with you to reschedule of charge. We look after your guests safety and comfort as a priority.
            </p>
          </div>
          <div className="md:col-span-4 lg:text-right shrink-0">
            <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center">
              <span className="block text-2xl font-black text-white italic">0$ Fee</span>
              <p className="text-[9px] uppercase tracking-widest text-[#ea1d2c] font-black mt-1">Weather Reschedule Protection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
