import { css, keyframes } from '@emotion/react';

const circleLoading = keyframes`
  to {
      transform: rotate(360deg);
    }
  `;

export const cirSize = {
  small: () => () =>
    css({
      width: 20,
      height: 20,
    }),
  default: () => () =>
    css({
      width: 30,
      height: 30,
    }),
  large: () => () =>
    css({
      width: 50,
      height: 50,
    }),
};

export const base = () => () =>
  css({
    borderRadius: '99rem',
    position: 'relative',
    margin: '0 auto',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: 'inherit',
      border: '4px solid transparent',
      borderRightColor: '#ff6bcb',
      borderBottomColor: '#ffa400',
      animation: `${circleLoading} 1s forwards infinite linear`,
    },
  });
