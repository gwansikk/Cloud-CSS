import styled from '@emotion/styled';
import theme from '@styles/theme';
import { InputProps } from './Input.types';
import { selectBackgroundColorForStatus, selectColorForStatus } from '@utils/color';

export const StyledInput = styled.input<InputProps>`
  height: 40px;
  width: 300px;
  padding: 0px 6px;
  border-radius: ${ theme.radius};
  border: solid 2px ${({ status }) => selectColorForStatus(status)};
  color: ${({ status }) => selectColorForStatus(status)};
  background-color: ${({ status }) => selectBackgroundColorForStatus(status)};
`;

export const StyledLabel = styled.div<InputProps>`
  font-size: small;
  padding-bottom: 6px;
  color: ${({ status }) => (status === 'disabled' ? theme.color.grey : 'black')};
`;

export const StyledMessage = styled.div<InputProps>`
  font-size: small;
  padding-top: 6px;
  color: ${  theme.color.purple};
  display: ${({ status }) =>
    status === 'disabled' ? 'none' : status === 'error' || status === 'success' ? 'block' : 'none'};
`;

export const StyledText = styled.p<InputProps>`
  margin: 0px;
  color: ${({ status }) => selectColorForStatus(status)};
`;
