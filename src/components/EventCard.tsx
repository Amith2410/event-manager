'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, MapPin, ArrowRight } from 'lucide-react';
import type { Event } from '@/lib/types';
import { getCategoryIcon } from '@/lib/utils';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const CategoryIcon = getCategoryIcon(event.category);

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={event.image}
            alt={event.name}
            fill
            className="object-cover"
            data-ai-hint="event photo"
          />
        </div>
        <div className="p-6">
          <Badge variant="outline" className="mb-2">
            <CategoryIcon className="h-4 w-4 mr-2" />
            {event.category}
          </Badge>
          <CardTitle className="font-headline text-xl leading-tight">
            <Link href={`/events/${event.id}`} className="hover:text-primary transition-colors">
              {event.name}
            </Link>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-6 space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4 mr-2" />
          <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-2" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{event.location}, {event.city}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 bg-secondary/30">
        <Link href={`/events/${event.id}`} passHref className="w-full">
          <Button className="w-full bg-primary hover:bg-primary/90">
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
