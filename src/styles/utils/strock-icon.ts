import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

const strockIcon = () => (theme: Theme) =>
  css([
    {
      stroke: theme.color.dc003,
    },
  ]);

export default strockIcon;
