import type { Event } from './types';

const events: Event[] = [
  {
    id: '2',
    name: 'Tech Innovators Conference',
    description: 'A must-attend event for tech enthusiasts, developers, and entrepreneurs. 
Listen to inspiring keynotes from industry leaders, participate in hands-on workshops, and network with peers. 
Topics include AI, blockchain, cloud computing, and more.',
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
    description: 'Witness the thrilling finals of the state-level football championship. 
The top two teams battle it out for the coveted trophy. Expect high-octane action and a nail-biting finish. 
Get your tickets now and support your favorite team!',
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
    description: 'Explore a stunning collection of modern art from emerging local artists. The exhibition features paintings, sculptures, and digital art installations. 
An opportunity to appreciate creativity and perhaps buy a unique piece of art.',
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
    description: 'A paradise for food lovers! Taste a wide variety of delicious street food from different cuisines. 
From spicy chaats to sweet desserts, there's something for everyone. Live music and entertainment included.',
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
    description: 'Join us in making our city greener. We are organizing a tree planting drive and everyone is invited to participate. 
Saplings and tools will be provided. Let's work together for a better environment.',
    date: '2024-10-19',
    time: '08:00 AM - 12:00 PM',
    location: 'Unkal Lake Park',
    city: 'Hubballi',
    category: 'Community',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '7',
    name: 'Book Reading Club Meeting',
    description: 'Discuss this month's book club selection. Open to new members.',
    date: '2024-10-26',
    time: '03:00 PM - 05:00 PM',
    location: 'City Library',
    city: 'Bengaluru',
    category: 'Community',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '8',
    name: 'Yoga and Wellness Workshop',
    description: 'Learn various yoga poses and meditation techniques.',
    date: '2024-11-02',
    time: '09:00 AM - 11:00 AM',
    location: 'Peaceful Mind Studio',
    city: 'Mysuru',
    category: 'Health',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '9',
    name: 'Children's Storytelling Hour',
    description: 'Engaging stories for children of all ages.',
    date: '2024-11-09',
    time: '11:00 AM - 12:00 PM',
    location: 'Kids Zone',
    city: 'Mangaluru',
    category: 'Community',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '10',
    name: 'Photography Exhibition: Wildlife',
    description: 'Stunning photographs of wildlife from around the world.',
    date: '2024-11-16',
    time: '10:00 AM - 06:00 PM',
    location: 'City Art Gallery',
    city: 'Belagavi',
    category: 'Art',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '11',
    name: 'Cooking Class: Italian Cuisine',
    description: 'Learn to make authentic Italian dishes from a professional chef.',
    date: '2024-11-23',
    time: '06:00 PM - 09:00 PM',
    location: 'Culinary Studio',
    city: 'Davanagere',
    category: 'Food',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '12',
    name: 'Chess Tournament',
    description: 'Friendly chess tournament for players of all levels.',
    date: '2024-11-30',
    time: '10:00 AM - 04:00 PM',
    location: 'Community Center',
    city: 'Ballari',
    category: 'Sports',
    image: 'https://placehold.co/600x400.png',
  },
  {
    id: '13',
    name: 'Gardening Workshop',
    description: 'Tips and tricks for a successful home garden.',
    date: '2024-12-07',
    time: '02:00 PM - 04:00 PM',
    location: 'Green Thumb Garden Center',
    city: 'Vijayapura',
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
