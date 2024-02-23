import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

const styles = {
  wrapper: () => () => css({}),
  optionList: () => (theme: Theme) =>
    css({
      height: 470,
      [theme.mediaQuery.mobile]: {
        height: '100%',
      },
    }),
  optionItem: () => (theme: Theme) =>
    css({
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 8,
      [theme.mediaQuery.mobile]: {
        flexDirection: 'column',
      },
    }),
  optionWrapper: () => (theme: Theme) =>
    css({
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      [theme.mediaQuery.mobile]: {
        marginTop: 16,
        justifyContent: 'flex-start',
      },
    }),
  option: () => () =>
    css({
      marginLeft: 8,
      marginBottom: 8,
    }),
};

export default styles;
