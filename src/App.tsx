/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Clock, 
  MessageCircle, 
  ChevronDown,
  Star
} from 'lucide-react';
import { EVENT_DETAILS, PERFORMERS, HOTELS } from './constants';

const Section = ({ title, children, id, className = "" }: { title?: string, children: React.ReactNode, id: string, className?: string }) => (
  <section id={id} className={`py-16 px-6 max-w-7xl mx-auto ${className}`}>
    {title && (
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-black mb-10 tracking-tighter uppercase italic flex items-center gap-4"
      >
        <span className="w-1.5 h-10 bg-[#ec4899] block"></span>
        {title}
      </motion.h2>
    )}
    {children}
  </section>
);

export default function App() {
  const handleRegister = () => {
    const url = `https://wa.me/${EVENT_DETAILS.whatsappNumber}?text=${encodeURIComponent(EVENT_DETAILS.adminMessage)}`;
    window.open(url, '_blank');
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#1a237e] text-white min-h-screen font-sans selection:bg-[#fbbf24] selection:text-[#1a237e]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1b2a]/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
               <img src="https://picsum.photos/seed/logo/100/100" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-black tracking-tighter text-sm md:text-base uppercase italic">JAKARTA TANGO MARATHON</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest">
            <button onClick={() => scrollTo('hero')} className="hover:text-[#fbbf24] transition-colors">BOOK TICKETS</button>
            <button onClick={() => scrollTo('performers')} className="hover:text-[#fbbf24] transition-colors">PERFORMERS</button>
            <button onClick={() => scrollTo('hotels')} className="hover:text-[#fbbf24] transition-colors">WHERE TO STAY</button>
            <button onClick={() => scrollTo('venue')} className="hover:text-[#fbbf24] transition-colors">VENUE</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://picsum.photos/seed/tango-hero/1920/1080" 
            alt="Tango Dancers" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a237e]/50 via-[#1a237e]/80 to-[#1a237e]" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-48 h-48">
               <img src="https://picsum.photos/seed/tango-logo/400/400" alt="Tango For Life" className="w-full h-full object-contain" />
               {/* Simulating the logo text if image is just placeholder */}
               <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-[#fbbf24] font-black text-4xl italic leading-none">TANGO</span>
                  <span className="text-white font-black text-xl italic leading-none">FOR</span>
                  <span className="text-emerald-500 font-black text-4xl italic leading-none">LIFE</span>
               </div>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[#fbbf24] font-bold tracking-[0.2em] uppercase mb-6 text-sm"
          >
            {EVENT_DETAILS.date}
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-10 italic uppercase"
          >
            EARLY <span className="text-[#ec4899]">BIRD</span> TICKETS <span className="text-[#ec4899]">ON</span> SALE
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-zinc-300 text-xs font-bold mb-12"
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#ec4899]" />
              <span className="uppercase tracking-wider">{EVENT_DETAILS.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#ec4899]" />
              <span className="uppercase tracking-wider">DOORS AT {EVENT_DETAILS.doorsOpen}</span>
            </div>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={handleRegister}
            className="bg-[#fbbf24] text-[#1a237e] px-10 py-4 rounded-full text-lg font-black uppercase italic tracking-tighter hover:bg-white transition-all shadow-xl"
          >
            BOOK TICKETS NOW
          </motion.button>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Performers Section */}
      <div className="bg-[#0d1b2a]/40">
        <Section title="THE LINEUP" id="performers">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERFORMERS.map((performer, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-[#1a237e]/50 border border-white/5"
              >
                <img 
                  src={performer.image} 
                  alt={performer.name}
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <p className="text-[#fbbf24] text-[10px] font-bold uppercase tracking-[0.2em] mb-1">{performer.role}</p>
                  <h3 className="text-base font-black italic uppercase leading-tight">{performer.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* Hotels Section */}
      <Section title="STAY NEARBY" id="hotels">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOTELS.map((hotel, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0d1b2a] rounded-xl overflow-hidden border border-white/5 hover:border-[#fbbf24]/30 transition-all group"
            >
              <div className="h-44 overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-sm font-black uppercase italic">{hotel.name}</h3>
                  <div className="flex items-center gap-1 text-[#fbbf24]">
                    <Star size={12} fill="currentColor" />
                    <span className="text-xs font-bold">{hotel.rating}</span>
                  </div>
                </div>
                <div className="space-y-1.5 text-zinc-400 text-[10px] font-bold uppercase tracking-wider mb-5">
                  <div className="flex items-center gap-2">
                    <MapPin size={12} />
                    <span>{hotel.distance} from venue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={12} />
                    <span>Starting at {hotel.price}</span>
                  </div>
                </div>
                <button className="w-full py-2.5 rounded-md border border-white/10 hover:bg-white hover:text-[#1a237e] transition-all text-[10px] font-black uppercase tracking-widest">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Venue Section */}
      <div className="bg-[#0d1b2a]/40">
        <Section title="THE VENUE" id="venue">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="bg-[#1a237e]/40 p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-black italic uppercase mb-4 flex items-center gap-3">
                  <MapPin className="text-[#ec4899]" />
                  Elisse Lounge
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed mb-8 font-medium">
                  {EVENT_DETAILS.venueDescription}
                </p>
                <div className="flex items-start gap-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#ec4899]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Main Entrance</p>
                    <p className="text-xs font-bold uppercase">{EVENT_DETAILS.venueEntrance}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[350px] bg-[#0d1b2a] rounded-2xl overflow-hidden relative border border-white/5 group">
              <img 
                src="https://picsum.photos/seed/venue-interior/800/600" 
                alt="Venue Interior" 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#ec4899] p-4 rounded-full shadow-[0_0_30px_rgba(236,72,153,0.5)] animate-pulse">
                  <MapPin size={24} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Final CTA Section */}
      <section className="py-24 px-6 text-center bg-[#3949ab]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-6">
            READY FOR THE NIGHT?
          </h2>
          <p className="text-sm md:text-base font-bold mb-10 opacity-80 uppercase tracking-wide">
            Be part of Argentinian tango x Betawi culture mash up and enjoy the night
          </p>
          <button 
            onClick={handleRegister}
            className="bg-[#fbbf24] text-[#1a237e] px-12 py-5 rounded-full text-xl font-black uppercase italic tracking-tighter hover:bg-white transition-all shadow-2xl"
          >
            BOOK TICKETS NOW
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-[#0d1b2a] text-center text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">
        <p>© 2026 JAKARTA TANGO MARATHON. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
