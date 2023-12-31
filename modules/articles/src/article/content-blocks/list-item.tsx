/* eslint-disable-next-line */
export interface ListItemProps {
  children?: React.ReactNode;
}

export function ListItem(props: ListItemProps) {
  return <li className="my-[1px] p-[3px_2px]">{props.children}</li>;
}

export default ListItem;
