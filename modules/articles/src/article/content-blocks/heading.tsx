import { HeadingBlockDto } from '@blog/data/server';

/* eslint-disable-next-line */
export interface HeadingProps extends Omit<HeadingBlockDto, 'children'> {
  id: string;
  children?: React.ReactNode;
}

export function Heading(props: HeadingProps) {
  switch (props.level) {
    case 1:
      return (
        <h2
          id={props.id}
          className="mt-8 mb-1 p-[3px_2px] font-title text-3xl"
        >
          {props.children}
        </h2>
      );
    case 2:
      return (
        <h3
          id={props.id}
          className="mt-6 mb-[1px] p-[3px_2px] font-title text-2xl"
        >
          {props.children}
        </h3>
      );
    case 3:
      return (
        <h4
          id={props.id}
          className="mt-4 mb-0 p-[3px_2px] font-title text-lg"
        >
          {props.children}
        </h4>
      );
  }
}

export default Heading;
