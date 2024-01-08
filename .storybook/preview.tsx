import { Global, ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
import React from 'react';

import theme from '../src/styles/theme';
import { globalStyle } from '../src/styles/globalStyle';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Story />
    </ThemeProvider>
  ),
];
