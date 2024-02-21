import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

const scrollBarMobile =
  (props?: { height?: number; width?: number; borderRadius?: number }) =>
  (theme: Theme) =>
    css({
      overflow: 'auto',

      '&:hover::-webkit-scrollbar-thumb': {
        visibility: 'visible',
      },

      '&::-webkit-scrollbar': {
        display: 'none',
        width: props?.width || 8,
        height: props?.height || 8,
      },

      '&::-webkit-scrollbar-track': {
        borderRadius: 0,
      },

      '&::-webkit-scrollbar-thumb': {
        borderRadius: props?.borderRadius || 4,
        backgroundColor: theme.color.black400,
        visibility: 'hidden',
      },

      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: theme.color.black300,
      },
    });

export default scrollBarMobile;
