/* eslint-disable-next-line */
export interface ParagraphProps {
  children?: React.ReactNode;
}

export function Paragraph(props: ParagraphProps) {
  return <p className="my-[1px] p-[3px_2px] text-base">{props.children}</p>;
}

export default Paragraph;
