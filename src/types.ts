export interface ScheduleItem {
  time: string;
  activity: string;
  description?: string;
}

export interface Performer {
  name: string;
  role: string;
  image: string;
}

export interface Hotel {
  name: string;
  distance: string;
  price: string;
  image: string;
  rating: number;
}
