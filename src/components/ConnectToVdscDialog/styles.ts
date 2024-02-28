import { Theme } from '@/themes/theme'
import { css } from '@emotion/react'

const styles = {
  wrapper: () => (theme: Theme) =>
    css({
      maxWidth: 528,
      borderRadius: 10,
      top: '50%',
      transform: 'translateY(-50%)',

      '& .simplize-dialog-header': {
        borderRadius: 10,
        padding: '24px 32px 16px',
        backgroundColor: theme.color.dc056
      },

      '& .simplize-dialog-content': {
        borderRadius: 10,
        backgroundColor: theme.color.dc056
      },

      '& .simplize-dialog-close': {
        margin: '22px 26px',
        fill: theme.color.black300,

        '&:hover': {
          fill: theme.color.dc017
        }
      },

      '& .simplize-dialog-body': {
        overflow: `auto`,
        padding: '0px 32px 32px 32px',

        '&:hover::-webkit-scrollbar-thumb': {
          visibility: 'visible'
        },

        '&::-webkit-scrollbar': {
          width: 8,
          height: 8
        },

        '&::-webkit-scrollbar-track': {
          borderRadius: 0
        },

        '&::-webkit-scrollbar-thumb': {
          borderRadius: 4,
          backgroundColor: theme.color.black400,
          visibility: 'hidden'
        },

        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: theme.color.black300
        }
      },

      '& .simplize-dialog-footer': {
        padding: '0px 32px 32px'
      }
    }),
  btnGroup: () => () =>
    css({
      display: 'flex',
      flexDirection: 'column'
    }),
  btnCreate: () => (theme: Theme) =>
    css({
      padding: '16px 24px',
      background: `linear-gradient(92.88deg, ${theme.color.blue500} 0%, ${theme.color.blue_opacity30} 100%);`,
      borderRadius: 8,
      cursor: 'pointer',
      marginBottom: 24,
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
        background: `linear-gradient(92.88deg, ${theme.color.blue600} 0%, ${theme.color.blue_opacity30} 100%);`
      }
    }),
  btnLink: () => (theme: Theme) =>
    css({
      padding: '16px 24px',
      backgroundColor: theme.color.dc032,
      borderRadius: 8,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      '&:hover': {
        backgroundColor: theme.color.dc038
      }
    })
}

export default styles
