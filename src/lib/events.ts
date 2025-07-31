import type { Event } from './types';

const events: Event[] = [
  {
    id: '1',
    name: 'Annual Music Festival 2024',
    description: 'Join us for the biggest music festival in the region! Featuring live bands, solo artists, and DJs from all over the country. \nEnjoy a full day of music, food, and fun. Gates open at 10 AM. Main stage performances start at 12 PM. \nDon\'t miss the spectacular fireworks display at 10 PM to close the event.',
    date: '2024-09-15',
    time: '10:00 AM - 11:00 PM',
    location: 'Lions Community Hall',
    city: 'Hubballi',
    category: 'Music',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '2',
    name: 'Tech Innovators Conference',
    description: 'A must-attend event for tech enthusiasts, developers, and entrepreneurs. \nListen to inspiring keynotes from industry leaders, participate in hands-on workshops, and network with peers. \nTopics include AI, blockchain, cloud computing, and more.',
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
    description: 'Witness the thrilling finals of the state-level football championship. \nThe top two teams battle it out for the coveted trophy. Expect high-octane action and a nail-biting finish. \nGet your tickets now and support your favorite team!',
    date: '2024-09-28',
    time: '04:00 PM',
    location: 'Nehru Stadium',
    city: 'Hubballi',
    category: 'Sports',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '4',
    name: 'Modern Art Exhibition',
    description: 'Explore a stunning collection of modern art from emerging local artists. The exhibition features paintings, sculptures, and digital art installations. \nAn opportunity to appreciate creativity and perhaps buy a unique piece of art.',
    date: '2024-09-20',
    time: '11:00 AM - 07:00 PM',
    location: 'Dharwad Art Gallery',
    city: 'Dharwad',
    category: 'Art',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '5',
    name: 'Street Food Fiesta',
    description: 'A paradise for food lovers! Taste a wide variety of delicious street food from different cuisines. \nFrom spicy chaats to sweet desserts, there\'s something for everyone. Live music and entertainment included.',
    date: '2024-10-12',
    time: '05:00 PM onwards',
    location: 'Urban Oasis Mall',
    city: 'Hubballi',
    category: 'Food',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '6',
    name: 'Community Tree Planting Drive',
    description: 'Join us in making our city greener. We are organizing a tree planting drive and everyone is invited to participate. \nSaplings and tools will be provided. Let\'s work together for a better environment.',
    date: '2024-10-19',
    time: '08:00 AM - 12:00 PM',
    location: 'Unkal Lake Park',
    city: 'Hubballi',
    category: 'Community',
    image: 'https://placehold.co/600x400.png',
  },
];

export function getEvents(): Event[] {
  return events;
}

export function getEventById(id: string): Event | undefined {
  return events.find(event => event.id === id);
}
