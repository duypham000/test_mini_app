import { Theme } from '@/themes/theme'
import { css } from '@emotion/react'

const styles = {
  wrapper: () => (theme: Theme) =>
    css({
      width: 609,
      display: 'flex',
      justifyContent: 'space-between',
      position: 'relative',
      paddingTop: 23,
      maxWidth: `100%`,

      '&::before': {
        content: "''",
        position: 'absolute',
        height: 2,
        width: '68%',
        left: 'calc(50%)',
        top: 0,
        transform: 'translateX(-50%)',
        backgroundColor: theme.color.dc045
      }
    }),
  step: (params?: { active: boolean }) => (theme: Theme) =>
    css([
      {
        textAlign: 'center',
        position: 'relative',
        '&::before': {
          content: "''",
          position: 'absolute',
          height: 16,
          width: 16,
          borderRadius: '50%',
          left: '50%',
          top: -30,
          transform: 'translateX(-50%)',
          backgroundColor: theme.color.dc001,
          border: `2px solid ${theme.color.dc045}`
        }
      },
      params?.active && {
        '&::after': {
          content: "''",
          position: 'absolute',
          height: 2,
          width: '100%',
          left: 'calc(50% + 6px)',
          top: -23,
          backgroundColor: theme.color.orange500
        }
      }
    ]),
  dot: () => (theme: Theme) =>
    css({
      postition: 'relative',
      '&::before': {
        content: "''",
        position: 'absolute',
        height: 16,
        width: 16,
        borderRadius: '50%',
        left: '50%',
        top: -30,
        transform: 'translateX(-50%)',
        border: `2px solid ${theme.color.orange500}`
      },
      '&::after': {
        content: "''",
        position: 'absolute',
        height: 8,
        width: 8,
        borderRadius: '50%',
        left: '50%',
        top: -26,
        transform: 'translateX(-50%)',
        backgroundColor: theme.color.orange500
      }
    })
}

export default styles
