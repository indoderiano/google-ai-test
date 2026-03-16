/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Music, 
  Hotel as HotelIcon, 
  MessageCircle, 
  ChevronDown,
  Star
} from 'lucide-react';
import { EVENT_DETAILS, SCHEDULE, PERFORMERS, HOTELS } from './constants';

const Section = ({ title, children, id, className = "" }: { title?: string, children: React.ReactNode, id: string, className?: string }) => (
  <section id={id} className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
    {title && (
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-black mb-12 tracking-tighter uppercase italic border-l-8 border-emerald-500 pl-6"
      >
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

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen font-sans selection:bg-emerald-500 selection:text-zinc-950">
      {/* Hero Section / Flyer */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://picsum.photos/seed/event-hero/1920/1080" 
            alt="Event Flyer" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-emerald-500 font-mono tracking-[0.3em] uppercase mb-4"
          >
            {EVENT_DETAILS.date}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-8 italic"
          >
            {EVENT_DETAILS.name.split(' ').map((word, i) => (
              <span key={i} className={i % 2 === 0 ? "text-white" : "text-emerald-500"}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 text-zinc-400"
          >
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-emerald-500" />
              <span>{EVENT_DETAILS.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} className="text-emerald-500" />
              <span>DOORS AT 18:00</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Schedule Section */}
      <Section title="The Schedule" id="schedule">
        <div className="space-y-8">
          {SCHEDULE.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-4 md:gap-12 pb-8 border-b border-zinc-800 group hover:border-emerald-500/50 transition-colors"
            >
              <div className="text-3xl font-mono text-emerald-500 font-bold min-w-[120px]">
                {item.time}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{item.activity}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Performers Section */}
      <Section title="The Lineup" id="performers" className="bg-zinc-900/50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PERFORMERS.map((performer, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-800"
            >
              <img 
                src={performer.image} 
                alt={performer.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-emerald-500 text-xs font-mono uppercase tracking-widest mb-1">{performer.role}</p>
                <h3 className="text-xl font-black italic">{performer.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Hotels Section */}
      <Section title="Stay Nearby" id="hotels">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOTELS.map((hotel, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-emerald-500/30 transition-all group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{hotel.name}</h3>
                  <div className="flex items-center gap-1 text-emerald-500">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm font-bold">{hotel.rating}</span>
                  </div>
                </div>
                <div className="space-y-2 text-zinc-400 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{hotel.distance} from venue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HotelIcon size={14} />
                    <span>Starting at {hotel.price}</span>
                  </div>
                </div>
                <button className="w-full py-3 rounded-xl border border-zinc-700 hover:bg-zinc-800 transition-colors font-bold">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Venue Section */}
      <Section title="The Venue" id="venue" className="bg-zinc-900/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-zinc-800 p-8 rounded-3xl border border-zinc-700">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <MapPin className="text-emerald-500" />
                Cyber Hub
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Located in the heart of Neo Tokyo, Cyber Hub is a state-of-the-art multi-purpose venue featuring world-class acoustics and immersive lighting systems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase font-mono">Main Entrance</p>
                    <p className="font-bold">Gate 4, Level 2</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center">
                    <Music size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase font-mono">Capacity</p>
                    <p className="font-bold">5,000 People</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] bg-zinc-800 rounded-3xl overflow-hidden relative border border-zinc-700">
            {/* Placeholder for Map */}
            <img 
              src="https://picsum.photos/seed/map/800/600" 
              alt="Map Location" 
              className="w-full h-full object-cover opacity-50 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-emerald-500 p-4 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.5)] animate-pulse">
                <MapPin size={32} className="text-zinc-950" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center bg-emerald-500 text-zinc-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8">
            Ready for the night?
          </h2>
          <p className="text-xl font-medium mb-12 opacity-80">
            Join thousands of others for the most immersive electronic music experience of the year.
          </p>
          <button 
            onClick={handleRegister}
            className="group relative inline-flex items-center gap-4 bg-zinc-950 text-white px-12 py-6 rounded-full text-2xl font-black uppercase italic tracking-tighter hover:scale-105 transition-transform shadow-2xl"
          >
            <MessageCircle size={32} />
            Register via WhatsApp
            <div className="absolute -inset-1 bg-white/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900 text-center text-zinc-600 text-sm font-mono uppercase tracking-widest">
        <p>© 2026 NEON NIGHTS. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
