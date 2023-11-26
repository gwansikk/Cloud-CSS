import { MouseEventHandler } from "react";

export interface ButtonProps {
  text?: string;
  disabled?: boolean;
  state?: "light" | "dark" | "success" | "error" | "warning";
  size?: "sm" | "md" | "lg" | "full";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
