import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

export const styles = {
  base: (): any => (theme: Theme) =>
    css({
      gap: 8,
      borderRadius: 8,
      padding: '8px 16px',
      backgroundColor: theme.color.blue500,
      fontSize: theme.fontSize.body_one,
      fontStyle: 'normal',
      fontWeight: theme.fontWeight.fw500,
      cursor: 'pointer',
      border: 'none',
      userSelect: 'none',
      backgroundPosition: 'center',
      transition: 'background 0.7s',
      width: 'fit-content',

      '& svg': {
        width: '100%',
        height: '100%',
      },

      '& > div': {
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& > span': {
          '& > span': {
            margin: 0,

            '> *': {
              width: '100%',
              height: '100%',
            },
          },
        },
      },

      [theme.mediaQuery.mobile]: {
        // width: `100%`,
      },
    }),
  loading: (): any => () => css({}),
  fullWidth: (): any => () =>
    css({
      width: '100%',

      div: { width: '100%' },
    }),
};

export const types = {
  primary:
    ({ dynamic }: { dynamic: boolean }): any =>
    (theme: Theme) =>
      css({
        '& > div > *': {},

        '&:disabled': {
          backgroundColor: theme.color.gray300,

          '& > div > *': {
            color: theme.color.white_opacity70,
          },
        },

        '&:hover': {
          backgroundColor: dynamic ? theme.color.blue600 : '',
        },

        '&:active': {
          backgroundColor: dynamic ? theme.color.blue600 : '',
        },
      }),
  secondary:
    ({ dynamic }: { dynamic: boolean }): any =>
    (theme: Theme) =>
      css({
        backgroundColor: theme.color.blue_opacity10,

        '&:disabled': {
          backgroundColor: theme.color.blue_opacity5,

          '& > div > *': {
            color: theme.color.gray300,
          },
        },

        '&:hover': {
          backgroundColor: dynamic ? theme.color.blue_opacity30 : '',
        },

        '&:active': {
          backgroundColor: dynamic ? theme.color.blue_opacity30 : '',
        },

        [theme.mediaQuery.mobile]: {
          backgroundColor: theme.color.blue_opacity10,

          '& > div': {
            '& > *': {
              color: theme.color.blue500,
              fontWeight: theme.fontWeight.fw600,
              fontSize: theme.fontSize.caption_three,
              lineHeight: theme.lineHeight.caption_three,
            },
          },
        },
      }),
  default:
    ({ dynamic }: { dynamic: boolean }): any =>
    (theme: Theme) =>
      css({
        backgroundColor: 'transparent',
        border: `1px solid ${theme.color.simplizeBlue}`,
        color: theme.color.simplizeBlue,

        '&:disabled': {
          border: `1px solid ${theme.color.gray200}`,
          '& > div > *': {
            color: theme.color.gray300,
          },
        },
        '&:hover': {
          backgroundColor: dynamic ? theme.color.blue_opacity5 : '',
        },
        '&:active': {
          backgroundColor: dynamic ? theme.color.blue_opacity5 : '',
        },
      }),
  link:
    ({ dynamic }: { dynamic: boolean }): any =>
    (theme: Theme) =>
      css({
        display: `block`,
        backgroundColor: 'transparent',
        '& > div > *': {
          color: theme.color.blue500,
        },
        '&:disabled': {
          '& > div > *': {
            color: theme.color.gray300,
          },
        },
        '&:hover': {
          '& > div > *': {
            color: dynamic ? theme.color.blue500 : '',
            opacity: 0.9,
          },
        },
        '&:active': {},
      }),
};

export const noIcon = {
  large: (): any => (theme: Theme) =>
    css({
      padding: '12px 70px',
      fontSize: theme.fontSize.body_one,
    }),
  regular: (): any => (theme: Theme) =>
    css({
      padding: '8px 70px',
      fontSize: theme.fontSize.body_one,

      [theme.mediaQuery.mobile]: {
        width: `100%`,
        padding: `7px 8px`,
      },
    }),
  small: (): any => (theme: Theme) =>
    css({
      padding: '6px 30px',
      fontSize: theme.fontSize.body_one,
    }),
};

export const sizes = {
  large: (): any => (theme: Theme) =>
    css({
      padding: '12px 54px',
      fontSize: theme.fontSize.body_one,
      'div > div': {
        width: 24,
        height: 24,
      },
    }),
  regular: (): any => (theme: Theme) =>
    css({
      padding: '10px 54px',
      fontSize: theme.fontSize.body_one,
      'div > div': {
        width: 20,
        height: 20,
      },
    }),
  small: (): any => (theme: Theme) =>
    css({
      padding: '8p 30px',
      fontSize: theme.fontSize.body_one,
      'div > div': {
        width: 16,
        height: 16,
      },
    }),
};
