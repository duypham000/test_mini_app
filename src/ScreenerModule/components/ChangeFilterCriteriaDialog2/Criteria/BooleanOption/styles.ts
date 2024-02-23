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
};

export default styles;
