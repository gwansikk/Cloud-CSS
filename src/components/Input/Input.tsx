import React, { FC } from 'react';
import { InputProps } from './Input.types';
import { StyledInput, StyledLabel, StyledMessage, StyledText } from './Input.style';

const Input: FC<InputProps> = ({ label, message, status, ...rest }) => {
  return (
    <div>
      <StyledLabel status={status}>
        <StyledText status={status}>{label}</StyledText>
      </StyledLabel>

      <StyledInput type="text" disabled={status === 'disabled'} status={status} {...rest} />

      <StyledMessage status={status}>
        <StyledText status={status}>{message}</StyledText>
      </StyledMessage>
    </div>
  );
};

export default Input;
