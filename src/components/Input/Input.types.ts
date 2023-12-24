import { ChangeEventHandler } from "react";
import { GlobalTypeActivate, GlobalTypeStatus } from "../../types";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  placeholder?: string;
  label?: string;
  message?: string;
  status?: GlobalTypeActivate | GlobalTypeStatus;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
