import { css } from '@emotion/react';

const styles = {
  wrapper: () => () => css({}),
  optionList: () => () =>
    css({
      height: 470,
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
