import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Light: Story = (args: ButtonProps) => <Button {...args}>Light Button</Button>;
Light.args = {
  color: 'light',
};

export const Dark: Story = (args: ButtonProps) => <Button {...args}>Dark Button</Button>;
Dark.args = {
  color: 'dark',
};

export const Disabled: Story = (args: ButtonProps) => <Button {...args}>Disabled Button</Button>;
Disabled.args = {
  status: 'disabled',
};

export const Small: Story = (args: ButtonProps) => <Button {...args}>Small Button</Button>;
Small.args = {
  size: 'sm',
};

export const Medium: Story = (args: ButtonProps) => <Button {...args}>Medium Button</Button>;
Medium.args = {
  size: 'md',
};

export const Large: Story = (args: ButtonProps) => <Button {...args}>Large Button</Button>;
Large.args = {
  size: 'lg',
};

export const FullWidth: Story = (args: ButtonProps) => <Button {...args}>FullWidth Button</Button>;
FullWidth.args = {
  fullWidth: true,
};

export const FullHeight: Story = (args: ButtonProps) => (
  <div style={{ height: '100px' }}>
    <Button {...args}>FullHeight Button</Button>
  </div>
);
FullHeight.args = {
  fullHeight: true,
};
