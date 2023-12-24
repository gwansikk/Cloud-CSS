import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { InputProps } from "./Input.types";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Components/Input",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Label: Story = (args: InputProps) => <Input data-testId="InputField-id" {...args} />;
Label.args = {
  label: "Label",
};

export const Success: Story = (args: InputProps) => <Input data-testId="InputField-id" {...args} />;
Success.args = {
  label: "Success",
  message: "Success Message",
  status: "success",
};

export const Error: Story = (args: InputProps) => <Input data-testId="InputField-id" {...args} />;
Error.args = {
  label: "Error",
  message: "Error Message",
  status: "error",
};

export const Disabled: Story = (args: InputProps) => (
  <Input data-testId="InputField-id" {...args} />
);
Disabled.args = {
  label: "Disabled",
  status: "disabled",
};
