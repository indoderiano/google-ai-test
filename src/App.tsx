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
  Star,
  Send,
  Instagram
} from 'lucide-react';
import { EVENT_DETAILS, PERFORMERS, HOTELS, ORGANIZERS } from './constants';
import Logo from "./assets/jtm-icon-onwhite.png";
import LogoTitle from "./assets/jtm-title-header-white.png";
import Mascot from "./assets/jtm26-mascot-yellow.png";
import Elisse from "./assets/elisse.jpeg";
import Background from "./assets/background.jpeg";

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
  const [question, setQuestion] = React.useState('');

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

  const handleSendQuestion = () => {
    const url = `https://wa.me/${EVENT_DETAILS.whatsappNumber}?text=${encodeURIComponent(question)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-[#1a237e] text-white min-h-screen font-sans selection:bg-[#fbbf24] selection:text-[#1a237e]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1b2a]/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
               <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex h-12">
               <img src={LogoTitle} alt="Logo" className="w-full h-full object-contain" />
            </div>
            {/* <span className="font-black tracking-tighter text-sm md:text-base uppercase italic">JAKARTA TANGO MARATHON</span> */}
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest">
            <button onClick={handleRegister} className="hover:text-[#fbbf24] transition-colors">BOOK TICKETS</button>
            <button onClick={() => scrollTo('performers')} className="hover:text-[#fbbf24] transition-colors">PERFORMERS</button>
            <button onClick={() => scrollTo('hotels')} className="hover:text-[#fbbf24] transition-colors">WHERE TO STAY</button>
            <button onClick={() => scrollTo('venue')} className="hover:text-[#fbbf24] transition-colors">VENUE</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={Background}
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
            <div className="relative w-64 h-64 z-20">
               <img src={Mascot} alt="Tango For Life" className="w-full h-full object-contain" />
               {/* Simulating the logo text if image is just placeholder */}
               {/* <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-[#fbbf24] font-black text-4xl italic leading-none">TANGO</span>
                  <span className="text-white font-black text-xl italic leading-none">FOR</span>
                  <span className="text-emerald-500 font-black text-4xl italic leading-none">LIFE</span>
               </div> */}
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
        <Section title="Performers" id="performers">
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
                src={Elisse}
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

      {/* Organizers Section */}
      <section className="py-16 px-6 bg-[#0d1b2a] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-8 italic">EVENT ORGANIZED BY</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {ORGANIZERS.map((org, index) => (
              <motion.a 
                key={index}
                href={org.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 group cursor-pointer"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#fbbf24]/50 transition-all overflow-hidden">
                  <img 
                    src={org.logo} 
                    alt={org.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-xs font-black uppercase italic tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                  {org.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1b2a] pt-20 pb-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center overflow-hidden mb-4 shadow-xl">
              <img src={Logo} alt="Event Logo" className="w-full h-full object-cover" />
            </div>
            <div className="h-12 flex items-center justify-center overflow-hidden mb-4 shadow-xl">
              <img src={LogoTitle} alt="Event Logo" className="w-full h-full object-cover" />
            </div>
            {/* <h3 className="font-black tracking-tighter text-lg uppercase italic leading-tight text-center md:text-left">
              JAKARTA <span className="text-[#ec4899]">TANGO</span> MARATHON
            </h3> */}
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-black uppercase italic mb-2 tracking-tighter">Follow Us</h4>
            <div className="w-12 h-1 bg-[#fbbf24] mb-6"></div>
            <div className="space-y-4">
              {ORGANIZERS.map((org, index) => (
                <a 
                  key={index}
                  href={org.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-400 hover:text-[#fbbf24] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#fbbf24]/20 transition-colors">
                    <Instagram size={16} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wide">{org.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Question Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-black uppercase italic mb-2 tracking-tighter">Question</h4>
            <div className="w-12 h-1 bg-[#fbbf24] mb-6"></div>
            <div className="w-full space-y-4">
              <textarea 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Your message..."
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:border-[#fbbf24]/50 min-h-[100px] transition-colors"
              />
              <button 
                onClick={handleSendQuestion}
                className="w-full bg-[#fbbf24] text-[#1a237e] py-3 rounded-lg font-black uppercase italic tracking-widest text-xs hover:bg-white transition-all flex items-center justify-center gap-2"
              >
                <Send size={14} />
                Send via Whatsapp
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] pt-10 border-t border-white/5">
          <p>Copyright © 2026 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
