import { Theme } from '@/themes/theme'
import { css } from '@emotion/react'

const styles = {
  wrapper: () => () => css({}),
  btn: () => (theme: Theme) =>
    css({
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.color.dc023,
      cursor: 'pointer',
      borderRadius: 10,
      userSelect: 'none'
    }),
  flexCenter: () => (theme: Theme) =>
    css({
      padding: '16px 0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: `1px solid ${theme.color.white_opacity5}`,
      borderTop: 'none'
    })
}

export default styles
