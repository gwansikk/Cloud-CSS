import styled from '@emotion/styled';
import { ButtonProps } from './Button.types';

export const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 7px;
  display: inline-block;
  color: white;
  background-color: ${({ color = 'light', theme }) => theme.color[color]};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  height: ${({ fullHeight }) => (fullHeight ? '100%' : 'auto')};
  padding: ${({ size = 'md', theme }) => theme.padding[size]};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;
