import { Theme } from '@/themes/theme'
import { css } from '@emotion/react'

const styles = {
  wrapper: () => (theme: Theme) =>
    css({
      position: 'relative',

      '&::before': {
        content: "''",
        position: 'absolute',
        width: 2,
        height: '100%',
        left: 0,
        top: 0,
        backgroundColor: theme.color.dc045
      }
    }),
  step: (params?: { active: boolean }) => (theme: Theme) =>
    css([
      {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        left: -11,
        marginBottom: 40
      },
      params?.active && {
        '&::after': {
          content: "''",
          position: 'absolute',
          width: 2,
          height: '40px',
          left: 11,
          top: 24,
          backgroundColor: theme.color.orange500
        }
      }
    ]),
  circle: () => (theme: Theme) =>
    css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 24,
      height: 24,
      borderRadius: '50%',
      backgroundColor: theme.color.orange500
    }),
  content: () => () =>
    css({
      marginLeft: 16
    })
}

export default styles
