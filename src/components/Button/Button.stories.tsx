import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UI/Button",
  argTypes: {},
};
export default meta;

interface ArgsInterface {
  disabled: boolean;
  state?: "light" | "dark" | "success" | "error" | "warning";
  size?: "sm" | "md" | "lg" | "full";
  text: string;
}

type Story = StoryObj<typeof Button>;

export const Light: Story = (args: ArgsInterface) => <Button data-testId="InputField-id" {...args} />;
Light.args = {
  text: "Light Button",
  disabled: false,
  state: "light",
  size: "md",
};

export const Dark: Story = (args: ArgsInterface) => <Button data-testId="InputField-id" {...args} />;
Dark.args = {
  text: "Light Button",
  disabled: false,
  state: "dark",
  size: "md",
};

export const Disabled: Story = (args: ArgsInterface) => <Button data-testId="InputField-id" {...args} />;
Disabled.args = {
  text: "Disabled Button",
  disabled: true,
  state: "light",
  size: "md",
};

export const Small: Story = (args: ArgsInterface) => <Button data-testId="InputField-id" {...args} />;
Small.args = {
  text: "Small Button",
  disabled: false,
  size: "sm",
};

export const Medium: Story = (args: ArgsInterface) => <Button data-testId="InputField-id" {...args} />;
Medium.args = {
  text: "Medium Button",
  disabled: false,
  size: "md",
};

export const Large: Story = (args: ArgsInterface) => <Button data-testId="InputField-id" {...args} />;
Large.args = {
  text: "Large Button",
  disabled: false,
  size: "lg",
};

export const Full: Story = (args: ArgsInterface) => <Button data-testId="InputField-id" {...args} />;
Full.args = {
  text: "Large Button",
  disabled: false,
  size: "full",
};
