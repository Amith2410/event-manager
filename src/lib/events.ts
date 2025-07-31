import type { Event } from './types';

const events: Event[] = [
  {
    id: '1',
    name: 'Hubballi Music Festival',
    description: `A vibrant music festival featuring local and national artists across various genres. 
Enjoy live performances, food stalls, and a lively atmosphere.`,
    date: '2024-11-15',
    time: '05:00 PM - 11:00 PM',
    location: 'Urban Green Park',
    city: 'Hubballi',
    category: 'Music',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '2',
    name: 'Tech Innovators Conference',
    description: `A must-attend event for tech enthusiasts, developers, and entrepreneurs. 
Listen to inspiring keynotes from industry leaders, participate in hands-on workshops, and network with peers. 
Topics include AI, blockchain, cloud computing, and more.`,
    date: '2024-10-05',
    time: '09:00 AM - 05:00 PM',
    location: 'Hubballi Tech Park',
    city: 'Hubballi',
    category: 'Tech',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '3',
    name: 'State Level Football Championship',
    description: `Witness the thrilling finals of the state-level football championship. 
The top two teams battle it out for the coveted trophy. Expect high-octane action and a nail-biting finish. 
Get your tickets now and support your favorite team!`,
    date: '2024-09-28',
    time: '04:00 PM',
    location: 'Nehru Stadium',
    city: 'Hubballi',
    category: 'Sports',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '4',
    name: 'Hubballi Food and Culture Fest',
    description: `Explore the rich culinary heritage and cultural diversity of Hubballi. 
Taste local delicacies, enjoy traditional performances, and shop for handicrafts.`,
    date: '2024-12-02',
    time: '11:00 AM - 09:00 PM',
    location: 'Gandhi Chowk',
    city: 'Hubballi',
    category: 'Food',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '5',
    name: 'Art Exhibition: Colors of Hubballi',
    description: `Discover the artistic talent of Hubballi's local artists. 
View a diverse collection of paintings, sculptures, and other artworks.`,
    date: '2024-11-20',
    time: '10:00 AM - 06:00 PM',
    location: 'Hubballi Art Gallery',
    city: 'Hubballi',
    category: 'Art',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '6',
    name: 'Hubballi Marathon',
    description: `Participate in or cheer on the runners in the annual Hubballi Marathon. 
Choose from different race categories and enjoy a healthy and energetic day.`,
    date: '2025-01-10',
    time: '06:00 AM',
    location: 'Railway Stadium',
    city: 'Hubballi',
    category: 'Sports',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '7',
    name: 'Theater Play: The Story of Hubballi',
    description: `Watch a captivating theater performance that tells the historical and cultural story of Hubballi. 
A must-see for history and theater lovers.`,
    date: '2024-12-10',
    time: '07:00 PM',
    location: 'Town Hall',
    city: 'Hubballi',
    category: 'Theater',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '8',
    name: 'Science Fair for Kids',
    description: `An interactive and educational science fair for children of all ages. 
Engage in fun experiments, learn about scientific principles, and spark curiosity.`,
    date: '2025-01-25',
    time: '10:00 AM - 04:00 PM',
    location: 'Lal Bahadur Shastri School',
    city: 'Hubballi',
    category: 'Education',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '9',
    name: 'Yoga and Wellness Workshop',
    description: `A rejuvenating workshop focusing on yoga, meditation, and overall wellness. 
Learn techniques to de-stress and improve your physical and mental health.`,
    date: '2024-11-05',
    time: '08:00 AM - 12:00 PM',
    location: 'Serene Yoga Studio',
    city: 'Hubballi',
    category: 'Wellness',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '10',
    name: 'Photography Exhibition: Hubballi Through the Lens',
    description: `Explore the beauty of Hubballi captured by talented photographers. 
View stunning images showcasing the city's landmarks, people, and culture.`,
    date: '2024-12-18',
    time: '10:00 AM - 05:00 PM',
    location: 'Hubballi Exhibition Center',
    city: 'Hubballi',
    category: 'Art',
    image: 'https://placehold.co/600x400.png',
  },
];

export function getEvents() {
  return events;
}

export function getEventById(id: string) {
  return events.find(event => event.id === id);
}