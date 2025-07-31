import { getEventById } from '@/lib/events';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { getCategoryIcon } from '@/lib/utils';
import { EventSummary } from '@/components/EventSummary';

export async function generateStaticParams() {
  const { getEvents } = await import('@/lib/events');
  const events = getEvents();
 
  return events.map((event) => ({
    id: event.id,
  }));
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id);

  if (!event) {
    notFound();
  }

  const CategoryIcon = getCategoryIcon(event.category);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="bg-card rounded-lg shadow-xl overflow-hidden">
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={event.image}
              alt={event.name}
              fill
              className="object-cover"
              priority
              data-ai-hint="event photo"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
             <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <Badge variant="secondary" className="mb-2">
                    <CategoryIcon className="h-4 w-4 mr-2" />
                    {event.category}
                </Badge>
                <h1 className="font-headline text-3xl md:text-5xl font-bold text-white shadow-lg">{event.name}</h1>
            </div>
          </div>
          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-muted-foreground border-b pb-8">
              <div className="flex items-center">
                <CalendarDays className="h-5 w-5 mr-3 text-primary" />
                <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-primary" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span>{event.location}, {event.city}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2">
                <h2 className="font-headline text-2xl font-semibold mb-4">About this event</h2>
                <div className="space-y-4 text-foreground/90">
                  {event.description.split('\\n').map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
              <div className="space-y-8">
                <EventSummary description={event.description} />
                <div>
                  <h2 className="font-headline text-2xl font-semibold mb-4">Location</h2>
                  <div className="relative h-64 w-full rounded-lg overflow-hidden border">
                    <Image
                      src="https://placehold.co/600x400.png"
                      alt="Map to event"
                      fill
                      className="object-cover"
                      data-ai-hint="city map"
                    />
                  </div>
                   <a
                    href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(event.location + ', ' + event.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-primary hover:underline"
                  >
                    View on OpenStreetMap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
