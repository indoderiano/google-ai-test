import { ScheduleItem, Performer, Hotel } from './types';
import RicardoYConstanza from './assets/ricardoyconstanza.jpg';
import DJMasha from './assets/jtm26-dj-masha.png';
import DJPunto from './assets/puntoybranca.jpeg';
import Sutasoma from './assets/sutasoma1.jpg';
import Darmawangsa from './assets/101-2.jpeg';
import Grandhika from './assets/grandhika-2.jpeg';
import Tangolicious from './assets/logo-tangolicious.jpg';
import Urban from './assets/logo-urban.jpg';


export const EVENT_DETAILS = {
  name: "JAKARTA TANGO MARATHON",
  date: "5, 6, 7 NOVEMBER 2026",
  location: "Elisse Lounge, Sutasoma Hotel, Jakarta",
  doorsOpen: "6 PM",
  whatsappNumber: "+6287811021160",
  adminMessage: "Hi! I'd like to book tickets for Jakarta Tango Marathon 2026.",
  venueDescription: "Located in the prestigious Sutasoma Hotel, Elisse Lounge offers a sophisticated atmosphere with premium service and elegant design.",
  venueEntrance: "from Tribrata entrance, behind Sutasoma Hotel",
};

export const PERFORMERS: Performer[] = [
  { name: "Constanza Vieyto y Ricardo Astrada", role: "THE ARTISTS", image: RicardoYConstanza },
  { name: "Punto y Branca", role: "DJS", image: DJPunto },
  { name: "Randa Pramasha", role: "DJS", image: DJMasha },
];

export const HOTELS: Hotel[] = [
  { name: "Sutasoma Hotel", distance: "0.2 km", price: "$65/night", image: Sutasoma, rating: 4.5 },
  { name: "Hotel Dharmawangsa", distance: "0.5 km", price: "$39/night", image: Darmawangsa, rating: 4.7 },
  { name: "Grandhika", distance: "2 km", price: "$40/night", image: Grandhika, rating: 4.5 },
];

export const ORGANIZERS = [
  { name: "Tangolicious Jakarta", logo: Tangolicious, instagramUrl: "https://www.instagram.com/tangolicious.jakarta" },
  { name: "Urban Tango" , logo: Urban, instagramUrl: "https://www.instagram.com/urban_tango.jkt" },
];