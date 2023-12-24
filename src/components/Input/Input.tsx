import React, { FC } from "react";
import { InputProps } from "./Input.types";
import styled from "@emotion/styled";
import { globalStyleColor, globalStyleRadius } from "../../styles";
import { selectBackgroundColorForStatus, selectColorForStatus } from "../../utils";

const StyledInput = styled.input<InputProps>`
  height: 40px;
  width: 300px;
  padding: 0px 6px;
  border-radius: ${globalStyleRadius};
  border: solid 2px ${({ status }) => selectColorForStatus(status)};
  color: ${({ status }) => selectColorForStatus(status)};
  background-color: ${({ status }) => selectBackgroundColorForStatus(status)};
`;

const StyledLabel = styled.div<InputProps>`
  font-size: small;
  color: ${({ status }) => (status === "disabled" ? globalStyleColor.grey : "#000000")};
  padding-bottom: 6px;
`;

const StyledMessage = styled.div<InputProps>`
  display: ${({ status }) =>
    status === "disabled" ? "none" : status === "error" || status === "success" ? "block" : "none"};
  font-size: small;
  color: #9150b8;
  padding-top: 6px;
`;

const StyledText = styled.p<InputProps>`
  margin: 0px;
  color: ${({ status }) => selectColorForStatus(status)};
`;

const Input: FC<InputProps> = ({ id, label, message, status, onChange, placeholder, ...props }) => {
  return (
    <div>
      <StyledLabel status={status}>
        <StyledText status={status}>{label}</StyledText>
      </StyledLabel>

      <StyledInput
        id={id}
        type="text"
        onChange={onChange}
        disabled={status === "disabled"}
        status={status}
        placeholder={placeholder}
        {...props}
      />

      <StyledMessage status={status}>
        <StyledText status={status}>{message}</StyledText>
      </StyledMessage>
    </div>
  );
};

export default Input;
