import { ArticleListing } from '@blog/articles/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Timur Svoboda',
  description:
    "Check out Timur Svoboda's latest articles on artificial intelligence.",
  keywords: ['Artificial Intelligence', 'Machine learning', 'Math', 'Future', 'Articles'],
};

export default async function Index() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="mb-12 text-center text-6xl">Latest articles</h1>
      <ArticleListing />
    </main>
  );
}
