import { LinkBlockDto } from '@blog/data/server';
import NextLink from 'next/link';

/* eslint-disable-next-line */
export interface LinkProps extends Omit<LinkBlockDto, 'children'> {
  children?: React.ReactNode;
}

export function Link(props: LinkProps) {
  return (
    <NextLink
      className="underline text-blue-400"
      href={props.url}
    >
      {props.children}
    </NextLink>
  );
}

export default Link;
