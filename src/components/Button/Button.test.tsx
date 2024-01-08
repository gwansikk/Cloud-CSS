import React, { ReactNode } from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from './Button';
import theme from '../../styles/theme';
import GooreumProvider from '../../GooreumProvider';

const customRender = (children: ReactNode) => {
  return render(<GooreumProvider>{children}</GooreumProvider>);
};

const paddingSm = `padding: ${theme.padding.sm}`;
const paddingMd = `padding: ${theme.padding.md}`;
const paddingLg = `padding: ${theme.padding.lg}`;

describe('Running Test for Button', () => {
  describe('when disabled', () => {
    it('should be disabled', () => {
      customRender(<Button status="disabled">Button</Button>);
      expect(screen.getByRole('button', { name: 'Button' })).toBeDisabled();
      expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle('opacity: 0.6');
    });
  });

  describe('when enabled', () => {
    it('should not be disabled', () => {
      customRender(<Button>Button</Button>);
      expect(screen.getByRole('button', { name: 'Button' })).not.toBeDisabled();
      expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle(paddingMd);
    });
  });

  describe('when size is small', () => {
    it('should have small padding', () => {
      customRender(<Button size="sm">Button</Button>);
      expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle(paddingSm);
    });
  });

  describe('when size is medium', () => {
    it('should have medium padding', () => {
      customRender(<Button size="md">Button</Button>);
      expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle(paddingMd);
    });
  });

  describe('when size is large', () => {
    it('should have large padding', () => {
      customRender(<Button size="lg">Button</Button>);
      expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle(paddingLg);
    });
  });

  describe('when size is full width', () => {
    it('should have full width padding', () => {
      customRender(<Button fullWidth>Button</Button>);
      expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle('width: 100%');
      expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle(paddingMd);
    });
  });

  describe('when size is full height', () => {
    it('should have full height padding', () => {
      customRender(<Button fullHeight>Button</Button>);
      expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle('height: 100%');
      expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle(paddingMd);
    });
  });
});
