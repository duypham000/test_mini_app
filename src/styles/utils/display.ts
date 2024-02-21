import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

const display = (type: 'desktop' | 'mobile') => (theme: Theme) =>
  css([
    type === 'desktop' && {
      display: 'block',
      [theme.mediaQuery.mobile]: {
        display: 'none',
      },
    },
    type === 'mobile' && {
      display: 'none',
      [theme.mediaQuery.mobile]: {
        display: 'block',
      },
    },
  ]);

export default display;
