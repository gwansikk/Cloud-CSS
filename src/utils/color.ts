import theme from '@styles/theme';
import type { GlobalTypeActivate, GlobalTypeStatus } from '@type/index';

export const selectBackgroundColorForStatus = (
  status?: GlobalTypeActivate | GlobalTypeStatus,
): string => {
  switch (status) {
    case 'disabled':
      return '#e4e3ea';

    case 'error':
      return theme.backgroundColor.red;

    case 'success':
      return theme.backgroundColor.green;

    default:
      return theme.backgroundColor.grey;
  }
};

export const selectColorForStatus = (status?: GlobalTypeActivate | GlobalTypeStatus): string => {
  switch (status) {
    case 'disabled':
      return '#e4e3ea';

    case 'error':
      return theme.color.red;

    case 'success':
      return theme.color.green;

    default:
      return theme.color.default;
  }
};
