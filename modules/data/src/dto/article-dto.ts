import { ResourceDto } from './resource-dto';

export interface TextBlockDto {
  type: 'text';
  text: string;
  bold?: boolean;
}

export interface LinkBlockDto {
  type: 'link';
  url: string;
  children: Array<TextBlockDto>;
}

export interface ParagraphBlockDto {
  type: 'paragraph';
  children: Array<TextBlockDto | LinkBlockDto>;
}

export interface HeadingBlockDto {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: Array<TextBlockDto | LinkBlockDto>;
}

export interface ListBlockDto {
  type: 'list';
  format: 'ordered' | 'unordered';
  children: Array<ListItemBlockDto>;
}

export interface ListItemBlockDto {
  type: 'list-item';
  children: Array<TextBlockDto | LinkBlockDto>;
}
export interface ImageDto {
  id: 2;
  attributes: {
    name: string;
    alternativeText: string | null;
    url: string;
    caption: string | null;
    width: number | null;
    height: number | null;
    formats: Record<
      string,
      {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        path: null;
        width: number;
        height: number;
        size: number;
        url: string;
      }
    > | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ImageBlockDto {
  type: 'image';
  image: ImageDto['attributes'];
  children: TextBlockDto[];
}

export interface ArticleDto {
  id: number;
  attributes: {
    title: string;
    content: Array<
      ParagraphBlockDto | HeadingBlockDto | ListBlockDto | ImageBlockDto
    >;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    thumbnail: ResourceDto<ImageDto>;
    keywords: string;
    description: string;
  };
}
