'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { CalendarIcon, Search, X } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface EventFiltersProps {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  city: string;
  onCityChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  categories: string[];
}

export function EventFilters({
  searchTerm,
  onSearchTermChange,
  city,
  onCityChange,
  category,
  onCategoryChange,
  date,
  onDateChange,
  categories,
}: EventFiltersProps) {
  const clearFilters = () => {
    onSearchTermChange('');
    onCityChange('');
    onCategoryChange('all');
    onDateChange(undefined);
  };
  
  return (
    <Card className="p-4 md:p-6 shadow-md">
       <div className="mb-4">
        <h2 className="text-xl font-headline font-semibold">Find Your Next Event</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        <div className="lg:col-span-2 space-y-2">
          <Label htmlFor="search">Search Events</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Keyword..."
              value={searchTerm}
              onChange={e => onSearchTermChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            placeholder="e.g. Hubballi"
            value={city}
            onChange={e => onCityChange(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select value={category} onValueChange={onCategoryChange}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end gap-2">
            <div className="flex-grow space-y-2">
                <Label>Date</Label>
                <Popover>
                <PopoverTrigger asChild>
                    <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                    >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                    mode="single"
                    selected={date}
                    onSelect={onDateChange}
                    initialFocus
                    />
                </PopoverContent>
                </Popover>
            </div>
            <Button variant="ghost" size="icon" onClick={clearFilters} className="mb-px" aria-label="Clear filters">
                <X className="h-4 w-4" />
            </Button>
        </div>
      </div>
    </Card>
  );
}
