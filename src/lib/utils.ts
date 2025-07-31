import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { LucideIcon } from "lucide-react";
import { Music, Medal, Paintbrush, Cpu, Utensils, Users } from 'lucide-react';
import type { EventCategory } from './types';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCategoryIcon(category: EventCategory): LucideIcon {
  switch (category) {
    case 'Music':
      return Music;
    case 'Sports':
      return Medal;
    case 'Art':
      return Paintbrush;
    case 'Tech':
      return Cpu;
    case 'Food':
      return Utensils;
    case 'Community':
      return Users;
    default:
      return Users;
  }
}
