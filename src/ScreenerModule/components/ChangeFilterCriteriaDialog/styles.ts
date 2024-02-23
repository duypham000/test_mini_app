import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

export const styles = {
  wrapper: () => (theme: Theme) =>
    css({
      top: '50%',
      maxWidth: 684,
      borderRadius: 10,
      transform: 'translateY(-50%)',

      '& .simplize-dialog-header': {
        borderRadius: 10,
        padding: '24px 32px 16px',
        backgroundColor: theme.color.dc056,
      },

      '& .simplize-dialog-content': {
        borderRadius: 10,
        backgroundColor: theme.color.dc056,
      },

      '& .simplize-dialog-close': {
        margin: '22px 26px',
        fill: theme.color.black300,

        '&:hover': {
          fill: theme.color.dc017,
        },
      },

      '& .simplize-dialog-body': {
        // minHeight: 200,
        // maxHeight: 428,
        overflow: `auto`,
        padding: '0px 32px 32px',

        '&:hover::-webkit-scrollbar-thumb': {
          visibility: 'visible',
        },

        '&::-webkit-scrollbar': {
          width: 8,
          height: 8,
        },

        '&::-webkit-scrollbar-track': {
          borderRadius: 0,
        },

        '&::-webkit-scrollbar-thumb': {
          borderRadius: 4,
          backgroundColor: theme.color.black400,
          visibility: 'hidden',
        },

        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme.color.black300,
        },
      },

      '& .simplize-dialog-footer': {
        padding: '0px 32px 32px',
      },
    }),
  tabList: () => () =>
    css({
      display: 'flex',
      alignItems: 'center',
    }),
  tabItem: (params?: { active: boolean }) => (theme: Theme) =>
    css([
      {
        padding: '6px 0px',
        position: 'relative',
        cursor: 'pointer',
        marginLeft: 24,
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        '&:first-child': {
          marginLeft: 0,
        },
        '&:hover': {
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: '-4px',
            left: '0px',
            width: '100%',
            height: 4,
            borderRadius: 2,
            backgroundColor: theme.color.blue_opacity30,
            animation: '0.3s opac',
          },
        },
      },
      params?.active && {
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-4px',
          left: '0px',
          width: '100%',
          height: 4,
          borderRadius: 2,
          backgroundColor: theme.color.blue500,
          animation: '0.3s opac',
        },
      },
    ]),
  refreshBtn: () => (theme: Theme) =>
    css({
      outline: 'none',
      border: 'none',
      background: 'none',
      padding: '7px 16px',
      borderRadius: 8,
      backgroundColor: theme.color.dc038,
      transition: 'all 0.3s',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: theme.color.dc032,
      },
    }),
  btn: () => (theme: Theme) =>
    css({
      outline: 'none',
      border: 'none',
      background: 'none',
      backgroundColor: theme.color.white_opacity5,
      borderRadius: 16,
      padding: '7px 16px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      marginRight: 8,
      marginBottom: 8,
      '&:hover': {
        backgroundColor: theme.color.white_opacity10,
      },
    }),
  btnGroupBottom: () => () =>
    css({
      marginTop: 30,
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
      padding: '10px 24px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      marginLeft: 16,
      '&:hover': {
        backgroundColor: theme.color.blue600,
      },
    }),
};
