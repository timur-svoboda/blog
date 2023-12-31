import { TextBlockDto } from '@blog/data/server';
import { clsx } from 'clsx';

/* eslint-disable-next-line */
export interface TextProps extends TextBlockDto {}

export function Text(props: TextProps) {
  return <span className={clsx(props.bold && 'font-bold')}>{props.text}</span>;
}

export default Text;
