import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

const styles = {
  wrapper: () => () => css({}),
  followBtn: () => (theme: Theme) =>
    css({
      outline: 'none',
      background: 'none',
      border: 'none',
      padding: '6px 12px',
      backgroundColor: theme.color.blue500,
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      marginLeft: 8,
      transition: 'all 0.3s',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.color.blue600,
      },
    }),
  followingBtn: () => (theme: Theme) =>
    css({
      outline: 'none',
      background: 'none',
      border: 'none',
      padding: '6px 12px',
      backgroundColor: theme.color.dc032,
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      marginLeft: 8,
      transition: 'all 0.3s',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.color.dc038,
      },
    }),
};

export default styles;
