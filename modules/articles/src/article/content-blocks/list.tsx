import { ListBlockDto } from "@blog/data/server";

/* eslint-disable-next-line */
export interface ListProps extends Omit<ListBlockDto, 'children'> {
  children?: React.ReactNode;
}

export function List(props: ListProps) {
  switch (props.format) {
    case 'ordered':
      return <ol className="list-decimal pl-6 my-3">{props.children}</ol>;
    case 'unordered':
      return <ul className="list-disc pl-6 my-3">{props.children}</ul>;
  }
}

export default List;
