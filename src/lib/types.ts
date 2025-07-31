export type EventCategory = 'Music' | 'Sports' | 'Art' | 'Tech' | 'Food' | 'Community';

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  city: string;
  category: EventCategory;
  image: string;
}
