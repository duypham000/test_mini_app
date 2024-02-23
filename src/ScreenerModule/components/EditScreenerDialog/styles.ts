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
        padding: '24px 32px',
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
        minHeight: 200,
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
  toggleSwitchWrapper: (isActive: boolean | undefined) => (theme: Theme) =>
    css([
      {
        position: `relative`,
        width: 48,
        height: 24,
        backgroundColor: theme.color.dc031,
        borderRadius: 12,
        cursor: `pointer`,
        transition: `all 0.3s`,
        marginTop: 2,
      },
      isActive && {
        backgroundColor: theme.color.blue500,
      },
    ]),
  circle: (isActive: boolean | undefined) => (theme: Theme) =>
    css([
      {
        position: `absolute`,
        top: 3,
        left: 3,
        right: `unset`,
        width: 16,
        height: 16,
        backgroundColor: theme.color.black300,
        borderRadius: `50%`,
        transition: `all 0.3s`,
      },
      isActive && {
        left: `unset`,
        right: 3,
        backgroundColor: theme.color.white500,
      },
    ]),
  publicItem: () => () =>
    css([
      {
        marginTop: 24,
      },
    ]),
  nameInput: () => (theme: Theme) =>
    css([
      {
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 8,
        padding: `14px 16px`,
        color: theme.color.dc011,
        backgroundColor: theme.color.dc056,

        '::placeholder': {
          color: theme.color.dc014,
        },
      },
    ]),
  descriptionInput: () => () =>
    css([
      {
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 8,
        padding: `14px 16px`,
      },
    ]),
  textArea: () => (theme: Theme) =>
    css([
      {
        minHeight: 96,
        marginTop: 8,
        width: `100%`,
        marginBottom: 8,
        borderRadius: 8,
        padding: `14px 16px`,
        color: theme.color.dc011,
        fontSize: theme.fontSize.body_two,
        fontWeight: theme.fontWeight.fw400,
        lineHeight: theme.lineHeight.body_two,
        fontFamily: theme.fontFamily.fontInter,
        backgroundColor: theme.color.dc056,
        border: `1px solid ${theme.color.dc045}`,
        resize: 'none',

        '::placeholder': {
          color: theme.color.dc014,
        },

        '&:hover': {
          border: `1px solid ${theme.color.blue500}`,
          outline: `none`,
        },

        '&:focus-visible': {
          border: `1px solid ${theme.color.blue500}`,
          outline: `none`,
          boxShadow: '0 0 0 2px rgba(24, 144, 255, .2)',
        },
      },
    ]),
  earthIcon: () => () =>
    css([
      {
        marginTop: 2,
        marginRight: 8,
      },
    ]),
  activeTitle: () => (theme: Theme) =>
    css([
      {
        color: theme.color.gray200,
      },
    ]),
  activeSubTitle: () => (theme: Theme) =>
    css([
      {
        color: theme.color.gray300,
        marginTop: 4,
      },
    ]),
  btnGroup: () => () =>
    css({
      marginTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }),
  cancelBtn: () => (theme: Theme) =>
    css({
      background: 'none',
      outline: 'none',
      border: 'none',
      width: 'calc(50% - 12px)',
      padding: '10px 0px',
      borderRadius: 8,
      backgroundColor: theme.color.dc044,
      cursor: 'pointer',
      transition: 'all 0.3s',
      '&:hover': {
        backgroundColor: theme.color.dc038,
      },
    }),
  submitBtn: () => (theme: Theme) =>
    css({
      background: 'none',
      outline: 'none',
      border: 'none',
      width: 'calc(50% - 12px)',
      padding: '10px 0px',
      borderRadius: 8,
      backgroundColor: theme.color.blue500,
      cursor: 'pointer',
      transition: 'all 0.3s',
      '&:hover': {
        backgroundColor: theme.color.blue600,
      },
      '&:disabled': {
        backgroundColor: theme.color.blue_opacity10,
        cursor: 'not-allowed',
        '&:hover': {
          backgroundColor: theme.color.blue_opacity10,
        },
      },
    }),
  publicSection: () => () =>
    css({
      marginTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
    }),
  publicGroup: () => () =>
    css({
      display: 'flex',
    }),
};
