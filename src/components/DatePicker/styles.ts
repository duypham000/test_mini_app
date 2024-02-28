import { Theme } from '@/themes/theme'
import { css } from '@emotion/react'

const styles = {
  datePickerWrapper: () => () =>
    css({
      width: '100%'
    }),
  datePicker: () => (theme: Theme) =>
    css({
      width: '100%',
      outline: 'none',
      background: 'none',
      border: `1px solid ${theme.color.dc045}`,
      padding: '14px 16px',
      borderRadius: '8px',
      fontFamily: theme.fontFamily.fontInter,
      fontSize: theme.fontSize.sub_heading_four,
      lineHeight: theme.lineHeight.sub_heading_four,
      fontWeight: theme.fontWeight.fw500,
      color: theme.color.dc011,
      transition: 'all 0.3s',
      '&:hover': {
        borderColor: theme.color.blue500
      },
      '&:focus': {
        borderColor: theme.color.blue500,
        boxShadow: '0 0 0 2px rgba(24, 144, 255, .2)'
      },
      '&::placeholder': {
        color: theme.color.dc014
      }
    }),
  datePickerIcon: () => () =>
    css({
      position: 'absolute',
      right: 16,
      top: -33
    })
}

export default styles
