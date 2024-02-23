import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

const styles = {
  optionBtn: (params?: { active: boolean }) => (theme: Theme) =>
    css({
      outline: 'none',
      border: 'none',
      background: 'none',
      padding: '7px 16px',
      borderRadius: 16,
      backgroundColor: params?.active
        ? theme.color.blue_opacity10
        : theme.color.dc044,
      transition: 'all 0.3s',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      paddingRight: params?.active ? 40 : 16,
      '&:hover': {
        backgroundColor: params?.active
          ? theme.color.blue_opacity5
          : theme.color.dc038,
      },
    }),
  overlayWrapper: () => (theme: Theme) =>
    css({
      padding: '16px',
      backgroundColor: theme.color.dc022,
      borderRadius: 8,
      maxWidth: 350,
      userSelect: 'none',
      animation: '0.3s opac',
    }),
  recommendList: () => () =>
    css({
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: 8,
    }),
  btn: (params?: { active: boolean }) => (theme: Theme) =>
    css({
      outline: 'none',
      border: 'none',
      background: 'none',
      backgroundColor: params?.active ? theme.color.dc042 : theme.color.dc038,
      borderRadius: 16,
      padding: '7px 16px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      marginRight: 8,
      marginBottom: 8,
      '&:hover': {
        backgroundColor: params?.active ? theme.color.dc042 : theme.color.dc032,
      },
    }),
  btnText: (params?: { active: boolean }) => (theme: Theme) =>
    css({
      color: params?.active ? theme.color.dc011 : theme.color.dc014,
    }),
  btnGroupBottom: () => () =>
    css({
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    }),
  btnSave: () => (theme: Theme) =>
    css({
      outline: 'none',
      border: 'none',
      background: 'none',
      backgroundColor: theme.color.blue500,
      borderRadius: 8,
      padding: '7px 16px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      marginLeft: 8,
      '&:hover': {
        backgroundColor: theme.color.blue600,
      },
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: theme.color.dc042,
      },
    }),
};

export default styles;
