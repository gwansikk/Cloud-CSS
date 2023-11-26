import React from "react";
import styled from "@emotion/styled";
import { ButtonProps } from "./Button.types";
import { backgroundColor, padding } from "../../styles";

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 7px;
  display: inline-block;
  color: white;
  background-color: ${({ state }) => backgroundColor[state || "light"]};
  width: ${({ size }) => (size === "full" ? "100%" : "")};
  height: ${({ size }) => (size === "full" ? "100%" : "")};
  padding: ${({ size }) => padding[size || "md"]};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;

const Button: React.FC<ButtonProps> = ({ size, disabled, text, onClick, ...props }) => {
  return (
    <StyledButton type="button" onClick={onClick} disabled={disabled} size={size} {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
