import { ArticleService } from '@blog/data/server';
import Image from 'next/image';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface ArticleListingProps {}

export async function ArticleListing(props: ArticleListingProps) {
  const articles = await ArticleService.find();

  return (
    <div className="phablet:grid-cols-2 grid w-full grid-cols-1 gap-8 tablet:grid-cols-3 desktop:grid-cols-3">
      {articles.data?.map((article) => {
        const thumbnail = article.attributes.thumbnail.data;

        return (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="flex flex-col text-lg font-semibold no-underline hover:underline"
          >
            {thumbnail && (
              <div className="relative overflow-hidden rounded-lg">
                <div className="pt-[56.25%]" />
                <Image
                  src={thumbnail.attributes.url}
                  alt={thumbnail.attributes.alternativeText || ''}
                  fill
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 50vw, 33.33vw"
                />
              </div>
            )}

            <div className="mt-2">{article.attributes.title}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default ArticleListing;
