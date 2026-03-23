import { ScheduleItem, Performer, Hotel } from './types';

export const EVENT_DETAILS = {
  name: "JAKARTA TANGO MARATHON",
  date: "5, 6, 7 NOVEMBER 2026",
  location: "Elisse Lounge, Sutasoma Hotel, Jakarta",
  doorsOpen: "6 PM",
  whatsappNumber: "1234567890",
  adminMessage: "Hi! I'd like to book tickets for Jakarta Tango Marathon 2026.",
  venueDescription: "Located in the prestigious Sutasoma Hotel, Elisse Lounge offers a sophisticated atmosphere with premium service and elegant design.",
  venueEntrance: "from Tribrata entrance, behind Sutasoma Hotel",
};

export const PERFORMERS: Performer[] = [
  { name: "Constanza Vieyto y Ricardo Astrada", role: "THE ARTISTS", image: "https://picsum.photos/seed/tango1/400/500" },
  { name: "Constanza Vieyto y Ricardo Astrada", role: "THE ARTISTS", image: "https://picsum.photos/seed/tango2/400/500" },
  { name: "Punto y Branca", role: "DJS", image: "https://picsum.photos/seed/tango3/400/500" },
  { name: "Randa Pramasha", role: "DJS", image: "https://picsum.photos/seed/tango4/400/500" },
];

export const HOTELS: Hotel[] = [
  { name: "Sutasoma Hotel", distance: "0.2 km", price: "$150/night", image: "https://picsum.photos/seed/sutasoma/400/300", rating: 4.5 },
  { name: "The 101 Sedayu Darmawangsa", distance: "0.5 km", price: "$100/night", image: "https://picsum.photos/seed/sedayu/400/300", rating: 4.2 },
  { name: "Hotel Dharmawangsa", distance: "1.2 km", price: "$250/night", image: "https://picsum.photos/seed/dharmawangsa/400/300", rating: 4.8 },
];
