import { Header } from '@/components/Header';
import { EventList } from '@/components/EventList';
import { getEvents } from '@/lib/events';

export default function Home() {
  const events = getEvents();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <EventList events={events} />
      </main>
    </div>
  );
}
