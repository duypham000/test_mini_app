import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

const styles = {
  wrapper: () => () =>
    css({
      // background: `rgba(255, 255, 255, 0.05)`,
    }),
  infoWrapper: () => (theme: Theme) =>
    css({
      marginLeft: 200,
      display: `flex`,
      flexDirection: `column`,
      minHeight: `100vh`,
      backgroundColor: theme.color.dc001,
    }),
  childrenWrapper: () => () =>
    css({
      flex: 1,
      paddingTop: 24,
      paddingBottom: 50,
      paddingLeft: 32,
      // backgroundColor: theme.color.dc022,
    }),
};

export default styles;
