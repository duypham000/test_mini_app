import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

const styles = {
  wrapper: () => () => css({}),
  optionList: () => (theme: Theme) =>
    css({
      height: 470,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.mediaQuery.mobile]: {
        height: '100%',
      },
    }),
  optionItem: () => () =>
    css({
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8,
    }),
  optionWrapper: () => () =>
    css({
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
    }),
  option: () => () =>
    css({
      marginLeft: 8,
      marginBottom: 8,
    }),
};

export default styles;
