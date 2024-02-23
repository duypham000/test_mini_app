import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

const styles = {
  switch: (params?: { active: boolean }) => (theme: Theme) =>
    css({
      position: 'relative',
      width: 48,
      height: 24,
      borderRadius: 12,
      backgroundColor: params?.active
        ? theme.color.blue500
        : theme.color.white_opacity10,
      cursor: 'pointer',
      transition: 'all 0.3s',
      '&:hover': {
        backgroundColor: params?.active
          ? theme.color.blue600
          : theme.color.white_opacity5,
      },
      '&::after': {
        position: 'absolute',
        content: '""',
        width: 16,
        height: 16,
        borderRadius: '50%',
        backgroundColor: params?.active
          ? theme.color.white500
          : theme.color.black300,
        top: '50%',
        transition: 'all 0.3s',
        left: params?.active ? '28px' : '4px',
        transform: 'translate(0px, -50%)',
      },
    }),
};

export default styles;
