import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UI/Button",
  argTypes: {},
};
export default meta;

interface ArgsProps {
  disabled: boolean;
  size?: "sm" | "md" | "lg";
  text: string;
}

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args: ArgsProps) => <Button data-testId="InputField-id" {...args} />;
Primary.args = {
  disabled: false,
  size: "sm",
  text: "Primary",
};

export const Disabled: Story = (args: ArgsProps) => <Button data-testId="InputField-id" {...args} />;
Disabled.args = {
  disabled: true,
  text: "Disabled",
};

export const Small: Story = (args: ArgsProps) => <Button data-testId="InputField-id" {...args} />;
Small.args = {
  disabled: false,
  size: "sm",
  text: "Small",
};

export const Medium: Story = (args: ArgsProps) => <Button data-testId="InputField-id" {...args} />;
Medium.args = {
  disabled: false,
  size: "md",
  text: "Medium",
};

export const Large: Story = (args: ArgsProps) => <Button data-testId="InputField-id" {...args} />;
Large.args = {
  disabled: false,
  size: "lg",
  text: "Large",
};
