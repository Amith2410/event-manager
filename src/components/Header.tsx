import { Ticket } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-card border-b shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Ticket className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-headline font-bold text-primary">
            Hubballi Happenings
          </h1>
        </Link>
      </div>
    </header>
  );
}
