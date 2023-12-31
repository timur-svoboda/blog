import {
  ArticleService,
  HeadingBlockDto,
  LinkBlockDto,
  TextBlockDto,
} from '@blog/data/server';
import clsx from 'clsx';
import NextImage from 'next/image';
import Heading from './content-blocks/heading';
import Image from './content-blocks/image';
import Link from './content-blocks/link';
import List from './content-blocks/list';
import ListItem from './content-blocks/list-item';
import Paragraph from './content-blocks/paragraph';
import Text from './content-blocks/text';

/* eslint-disable-next-line */
export interface ArticleProps {
  id: number;
}

export const getHeadingText = (block: HeadingBlockDto) => {
  return block.children
    .map((block) => {
      if (block.type === 'text') {
        return block.text;
      }

      return block.children
        .map((block) => {
          return block.text;
        })
        .join('');
    })
    .join('');
};

export const getHeadingId = (block: HeadingBlockDto) => {
  return getHeadingText(block)
    .replace(/\W/g, '')
    .replace(/\s/g, '-')
    .toLocaleLowerCase();
};

const renderTextOrLink = (
  block: TextBlockDto | LinkBlockDto,
  index: number,
): React.ReactNode => {
  switch (block.type) {
    case 'text':
      return <Text key={index} {...block} />;
    default:
      return (
        <Link key={index} {...block}>
          {block.children.map((block, index) => {
            return <Text key={index} {...block} />;
          })}
        </Link>
      );
  }
};

export async function Article(props: ArticleProps) {
  const article = await ArticleService.findOne(props.id);

  if (!article.data) {
    return null;
  }

  const thumbnail = article.data.attributes.thumbnail.data;

  return (
    <article className="flex w-full justify-center">
      <div className="w-full max-w-2xl">
        <h1 className="mb-6 font-title text-4xl">
          {article.data.attributes.title}
        </h1>

        {thumbnail && (
          <div className="relative mb-8 rounded-lg overflow-hidden">
            <div className="pt-[56.25%]" />
            <NextImage
              src={thumbnail.attributes.url || ''}
              alt={thumbnail.attributes.alternativeText || ''}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 672px) 100vw, 672px"
              priority
            />
          </div>
        )}

        <nav className="mb-6 flex flex-col">
          {article.data.attributes.content.map((block) => {
            if (block.type !== 'heading') {
              return null;
            }

            return (
              <a
                href={`#${getHeadingId(block)}`}
                className={clsx(
                  'my-[1px] p-[3px_2px] text-blue-400 underline',
                  block.level === 2 && 'pl-5',
                  block.level === 3 && 'pl-10',
                )}
              >
                {getHeadingText(block)}
              </a>
            );
          })}
        </nav>

        <div>
          {article.data.attributes.content.map((block, index) => {
            switch (block.type) {
              case 'heading':
                return (
                  <Heading id={getHeadingId(block)} key={index} {...block}>
                    {block.children.map(renderTextOrLink)}
                  </Heading>
                );
              case 'image':
                return <Image key={index} {...block} />;
              case 'list':
                return (
                  <List key={index} {...block}>
                    {block.children.map((block, index) => {
                      return (
                        <ListItem key={index}>
                          {block.children.map(renderTextOrLink)}
                        </ListItem>
                      );
                    })}
                  </List>
                );
              default:
                return (
                  <Paragraph key={index}>
                    {block.children.map(renderTextOrLink)}
                  </Paragraph>
                );
            }
          })}
        </div>
      </div>
    </article>
  );
}

export default Article;
