import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

const fillIcon = () => (theme: Theme) =>
  css([
    {
      fill: theme.color.dc003,
    },
  ]);

export default fillIcon;
