import { Article } from '@blog/articles/server';
import { ArticleService } from '@blog/data/server';
import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft';
import { Metadata } from 'next';
import Link from 'next/link';

export interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(
  props: PageProps,
): Promise<Metadata> {
  const article = await ArticleService.findOne(+props.params.id);
 
  return article.data?.attributes || {};
}

export default function Page(props: PageProps) {
  return (
    <main className="py-16 px-4">
      <div className="mx-auto w-full max-w-2xl">
        <Link href="/" className="mb-8 flex gap-4 text-xl items-center">
          <FaArrowLeft size="24px" />
          Home
        </Link>
      </div>

      <Article id={+props.params.id} />
    </main>
  );
}
