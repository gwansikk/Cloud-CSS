import React, { FC } from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.style';

const Button: FC<ButtonProps> = ({ status, children, ...rest }) => {
  return (
    <StyledButton type="button" disabled={status === 'disabled'} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
