import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

const styles = {
  input: () => (theme: Theme) =>
    // base
    css({
      display: 'flex',
      outline: 'none',
      background: 'none',
      padding: '14.5px 16px',
      fontFamily: theme.fontFamily.fontInter,
      fontSize: theme.fontSize.body_two,
      lineHeight: theme.fontSize.body_two,
      fontWeight: theme.fontWeight.fw400,
      border: `1px solid ${theme.color.dc045}`,
      borderRadius: '8px',
      color: theme.color.dc011,

      '::placeholder': {
        color: theme.color.dc014,
      },

      '&.simplize-input': {
        '&-disabled': {
          // backgroundColor: '#d9d9d9',
        },

        '&:hover:not([disabled])': {
          borderColor: theme.color.simplizeBlue,
        },

        '&:focus:not([disabled])': {
          borderColor: theme.color.simplizeBlue,
          boxShadow: '0 0 0 2px rgba(24, 144, 255, .2)',
        },
      },

      '&.simplize-input-affix-wrapper': {
        '&-disabled': {
          opacity: 0.7,
          borderColor: theme.color.black400,
          // backgroundColor: '#d9d9d9',
        },

        '&:hover:not(&-disabled)': {
          borderColor: theme.color.simplizeBlue,
        },

        '&-focused': {
          borderColor: theme.color.simplizeBlue,
          boxShadow: '0 0 0 2px rgba(24, 144, 255, .2)',
        },

        '& .simplize-input': {
          color: theme.color.dc011,
          outline: 'none',
          background: 'none',
          border: 'none',
          fontFamily: theme.fontFamily.fontInter,
          fontSize: theme.fontSize.sub_heading_four,
          lineHeight: theme.fontSize.sub_heading_four,
          fontWeight: theme.fontWeight.fw500,

          '::placeholder': {
            color: theme.color.dc014,
          },

          '&-suffix': {
            cursor: 'pointer',
            marginLeft: '10px',
            display: 'flex',
            alignItems: 'center',
          },

          '&-prefix': {
            marginRight: '10px',
            display: 'flex',
            alignItems: 'center',
          },
        },
      },

      '& .simplize-input-clear-icon': {
        color: theme.color.dc011,
      },
    }),
};

export default styles;
