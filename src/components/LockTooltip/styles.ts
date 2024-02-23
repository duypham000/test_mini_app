import { Theme, ThemeCss } from '@/themes/theme';
import { css } from '@emotion/react';

export const tab = {
  wrapper: (): ThemeCss => () =>
    css({
      display: 'flex',
      // justifyContent: 'space-between',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 360,
      maxWidth: 620,
      padding: 32,
    }),
  overlayWrapper: () => (theme: Theme) =>
    css({
      padding: '8px 16px 16px',
      backgroundColor: theme.color.white_dark100,
      boxShadow: `0px 0px 10px rgba(255, 255, 255, 0.1)`,
      borderRadius: 8,
      maxWidth: 252,
      userSelect: 'none',
    }),
  btnGroupBottom: () => () =>
    css({
      display: 'flex',
      alignItems: 'center',
    }),
  btnSave: () => (theme: Theme) =>
    css({
      outline: 'none',
      border: 'none',
      background: 'none',
      backgroundColor: theme.color.blue500,
      borderRadius: 4,
      padding: '3px 20px',
      marginRight: 8,
      cursor: 'pointer',
      transition: 'all 0.3s',
      '&:hover': {
        backgroundColor: theme.color.blue600,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: theme.color.blue_opacity30,
      },
    }),
};

export default tab;
