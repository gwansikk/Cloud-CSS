import { ChangeEventHandler } from 'react';
import type { GlobalTypeActivate, GlobalTypeStatus } from '@type/index';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  placeholder?: string;
  label?: string;
  message?: string;
  status?: GlobalTypeActivate | GlobalTypeStatus;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
