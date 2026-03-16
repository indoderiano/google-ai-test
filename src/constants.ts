import { ScheduleItem, Performer, Hotel } from './types';

export const EVENT_DETAILS = {
  name: "NEON NIGHTS 2026",
  date: "AUGUST 15, 2026",
  location: "Cyber Hub, Neo Tokyo",
  whatsappNumber: "1234567890", // Placeholder
  adminMessage: "Hi! I'd like to register for Neon Nights 2026.",
};

export const SCHEDULE: ScheduleItem[] = [
  { time: "18:00", activity: "Doors Open", description: "Welcome drinks and networking" },
  { time: "19:30", activity: "Opening Act", description: "Local talent showcase" },
  { time: "21:00", activity: "Main Stage: DJ Pulse", description: "High-energy electronic set" },
  { time: "23:00", activity: "Headliner: The Glitch", description: "Immersive audiovisual experience" },
  { time: "01:30", activity: "After Party", description: "Exclusive lounge set" },
];

export const PERFORMERS: Performer[] = [
  { name: "DJ PULSE", role: "Main Stage", image: "https://picsum.photos/seed/djpulse/400/500" },
  { name: "THE GLITCH", role: "Headliner", image: "https://picsum.photos/seed/glitch/400/500" },
  { name: "LUNA RAY", role: "Opening Act", image: "https://picsum.photos/seed/lunaray/400/500" },
  { name: "CYBER PUNK", role: "Visual Artist", image: "https://picsum.photos/seed/cyberpunk/400/500" },
];

export const HOTELS: Hotel[] = [
  { name: "Neo Plaza Hotel", distance: "0.5 km", price: "$150/night", image: "https://picsum.photos/seed/hotel1/400/300", rating: 4.5 },
  { name: "Cyber Suites", distance: "1.2 km", price: "$120/night", image: "https://picsum.photos/seed/hotel2/400/300", rating: 4.2 },
  { name: "The Grid Inn", distance: "2.5 km", price: "$90/night", image: "https://picsum.photos/seed/hotel3/400/300", rating: 3.8 },
];
