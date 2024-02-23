import { Theme } from '@/themes/theme';
import { css } from '@emotion/react';

const styles = {
  select: () => (theme: Theme) =>
    css({
      '&.simplize-select': {
        width: '100%',
        padding: '0px 8px',
        backgroundColor: theme.color.white_opacity5,
        // border: `1px solid ${theme.color.dc045}`,
        borderRadius: 8,
        '&-disabled': {
          opacity: 0.7,
        },
      },

      '&.simplize-select:not(.simplize-select-customize-input) .simplize-select-selector':
        {
          backgroundColor: 'transparent',
          border: `none !important`,
          boxShadow: `none !important`,
          borderRadius: 8,
          fontFamily: theme.fontFamily.fontInter,
          fontSize: theme.fontSize.caption,
          lineHeight: theme.lineHeight.caption,
          color: theme.color.gray100,
        },

      '&.simplize-select-show-search.simplize-select:not(.simplize-select-customize-input) .simplize-select-selector input':
        {
          color: theme.color.gray100,
        },

      '&.simplize-select-single.simplize-select-open .simplize-select-selection-item':
        {
          color: theme.color.gray100,
        },
    }),
  optionsWrapper: () => (theme: Theme) =>
    css({
      backgroundColor: theme.color.white_dark100,
      // boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.3)`,
      padding: '4px 8px',
      borderRadius: 4,

      '& .simplize-select-item-option-selected:not(.simplize-select-item-option-disabled)':
        {
          backgroundColor: `${theme.color.white_opacity5}`,
          color: theme.color.gray100,
        },

      '& .simplize-select-item-option-active:not(.simplize-select-item-option-disabled)':
        {
          backgroundColor: `${theme.color.white_opacity5}`,
        },

      '& .simplize-select-item-option': {
        padding: '6px 16px',
        color: theme.color.gray100,
        borderRadius: 4,
        fontSize: theme.fontSize.sub_heading_four,
        lineHeight: theme.lineHeight.sub_heading_four,
        fontWeight: theme.fontWeight.fw500,
        margin: '4px 0px',
      },

      '& .rc-virtual-list-holder': {
        overflow: 'auto',

        '&:hover::-webkit-scrollbar-thumb': {
          visibility: 'visible',
        },

        '&::-webkit-scrollbar': {
          width: 4,
          height: 4,
        },

        '&::-webkit-scrollbar-track': {
          borderRadius: 0,
        },

        '&::-webkit-scrollbar-thumb': {
          borderRadius: 4,
          backgroundColor: theme.color.black400,
          visibility: 'hidden',
        },

        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme.color.black300,
        },
      },
    }),
};

export default styles;
