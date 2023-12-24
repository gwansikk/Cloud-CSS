import { MouseEventHandler, ReactNode } from "react";
import { GlobalTypeActivate, GlobalTypeColor, GlobalTypeSize } from "../../types";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: GlobalTypeColor;
  status?: GlobalTypeActivate;
  size?: GlobalTypeSize;
  fullWidth?: boolean;
  fullHeight?: boolean;
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}
