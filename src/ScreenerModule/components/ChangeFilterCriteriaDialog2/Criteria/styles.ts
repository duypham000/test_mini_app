import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

const styles = {
  wrapper: () => () => css({}),
  optionList: () => (theme: Theme) =>
    css({
      maxHeight: 414,
      [theme.mediaQuery.mobile]: {
        maxHeight: '100%',
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
  lockWrapper: () => (theme: Theme) =>
    css({
      padding: '7px 16px',
      backgroundColor: theme.color.dc038,
      borderRadius: 16,
      display: 'flex',
      alignItems: 'center',
      userSelect: 'none',
    }),
};

export default styles;
