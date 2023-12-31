import { ImageBlockDto } from '@blog/data/server';
import NextImage from 'next/image';

/* eslint-disable-next-line */
export interface ImageProps extends ImageBlockDto {}

export function Image(props: ImageProps) {
  return (
    <div className="relative my-8 rounded-lg overflow-hidden">
      <div className="pt-[56.25%]" />
      <NextImage
        src={props.image.url}
        alt={props.image.alternativeText || ''}
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 672px) 100vw, 672px"
      />
    </div>
  );
}

export default Image;
