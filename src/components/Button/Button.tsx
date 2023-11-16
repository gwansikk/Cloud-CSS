import React from "react";
import styled from "@emotion/styled";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  border: 0px;
  line-height: 1;
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 7px;
  display: inline-block;
  color: white;
  background-color: #47b5ff;
  padding: ${(props) => (props.size === "sm" ? "7px 25px 8px" : props.size === "md" ? "9px 30px 11px" : "14px 30px 16px")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

const Button: React.FC<ButtonProps> = ({ size = "sm", disabled, text, onClick, ...props }) => {
  return (
    <StyledButton type="button" onClick={onClick} disabled={disabled} size={size} {...props}>
      {text}
    </StyledButton>
  );
};

export default Button;
