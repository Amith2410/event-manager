'use client';

import { useState, useMemo } from 'react';
import type { Event } from '@/lib/types';
import { EventFilters } from './EventFilters';
import { EventCard } from './EventCard';

interface EventListProps {
  events: Event[];
}

export function EventList({ events }: EventListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [date, setDate] = useState<Date | undefined>(undefined);

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      const filterDate = date ? new Date(date.toDateString()) : null;

      return (
        (searchTerm === '' ||
          event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (category === 'all' || event.category === category) &&
        (!filterDate || eventDate.getTime() === filterDate.getTime())
      );
    });
  }, [events, searchTerm, category, date]);

  const categories = useMemo(() => ['all', ...Array.from(new Set(events.map(e => e.category)))], [events]);

  return (
    <div className="space-y-8">
      <EventFilters
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        category={category}
        onCategoryChange={setCategory}
        date={date}
        onDateChange={setDate}
        categories={categories}
      />
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-card rounded-lg shadow-sm">
          <p className="text-xl text-muted-foreground font-headline">No events found</p>
          <p className="text-muted-foreground mt-2">Try adjusting your filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
}
