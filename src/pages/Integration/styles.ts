import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

const styles = {
  wrapper: () => () =>
    css([
      {
        height: `100%`,
        display: `flex`,
        flexDirection: `column`,
      },
    ]),
  heading: () => (theme: Theme) => css([{ color: theme.color.dc011 }]),
  contentWrapper: () => (theme: Theme) =>
    css([
      {
        flex: 1,
        flexDirection: `column`,

        [theme.mediaQuery.mobile]: {
          paddingTop: 153,
        },
      },
    ]),
  body: () => (theme: Theme) =>
    css([
      {
        color: theme.color.dc014,
        display: `block`,
        marginTop: 16,
      },
    ]),
  button: () => () =>
    css([
      {
        marginTop: 24,
        padding: `8px 32px !important`,
      },
    ]),
};

export default styles;
