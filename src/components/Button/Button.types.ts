import { MouseEventHandler, ReactNode } from 'react';
import type { GlobalTypeActivate, GlobalTypeColor, GlobalTypeSize } from '@type/index';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: GlobalTypeColor;
  status?: GlobalTypeActivate;
  size?: GlobalTypeSize;
  fullWidth?: boolean;
  fullHeight?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}
