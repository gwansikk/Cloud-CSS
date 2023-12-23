import React, { FC } from "react";
import styled from "@emotion/styled";
import { ButtonProps } from "./Button.types";
import { globalStyleColor, globalStylePadding } from "../../styles";

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 7px;
  display: inline-block;
  color: white;
  background-color: ${({ color = "light" }) => globalStyleColor[color]};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "")};
  height: ${({ fullHeight }) => (fullHeight ? "100%" : "")};
  padding: ${({ size = "md" }) => globalStylePadding[size]};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const Button: FC<ButtonProps> = ({ size, status, text, onClick, children, ...props }) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      disabled={status === "disabled"}
      size={size}
      {...props}
    >
      {text || children}
    </StyledButton>
  );
};

export default Button;
