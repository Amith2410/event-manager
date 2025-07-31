import Link from 'next/link';
import { Header } from '@/components/Header';

export default function NewsPage() {
  const newsSources = [
    {
      name: 'The Hindu',
      url: 'https://www.thehindu.com/news/national/karnataka/hubballi/',
    },
    {
      name: 'Deccan Herald',
      url: 'https://www.deccanherald.com/state/hubballi',
    },
    {
      name: 'Times of India',
      url: 'https://timesofindia.indiatimes.com/city/hubballi',
    },
    // Add more news sources as needed
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <h2 className="text-2xl font-headline font-semibold mb-4">Hubballi Latest News</h2>
        <ul className="space-y-4">
          {newsSources.map((source) => (
            <li key={source.name}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-lg"
              >
                {source.name}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
