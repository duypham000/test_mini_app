import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

export const styles = {
  wrapper: () => (theme: Theme) =>
    css({
      top: '50%',
      maxWidth: 528,
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
  cancelBtn: () => (theme: Theme) =>
    css({
      width: 'calc(50% - 12px)',
      outline: 'none',
      border: 'none',
      background: 'none',
      padding: '10px 0px',
      borderRadius: 8,
      backgroundColor: theme.color.dc044,
      transition: 'all 0.3s',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.color.dc038,
      },
    }),
  confirmBtn: () => (theme: Theme) =>
    css({
      width: 'calc(50% - 12px)',
      outline: 'none',
      border: 'none',
      background: 'none',
      padding: '10px 0px',
      borderRadius: 8,
      backgroundColor: theme.color.red500,
      transition: 'all 0.3s',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.color.red600,
      },
    }),
};
