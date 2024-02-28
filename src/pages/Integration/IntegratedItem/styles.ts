import { Theme } from '@/themes/theme'
import { css } from '@emotion/react'

const styles = {
  wrapper: () => (theme: Theme) =>
    css([
      {
        backgroundColor: theme.color.white_opacity5ToBlue100,
        borderRadius: `10px`,
        overflow: `hidden`,
        padding: `16px 24px`
      }
    ]),
  img: () => () =>
    css([
      {
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: `cover`
      }
    ]),
  securitiesCompany: () => (theme: Theme) =>
    css([
      {
        marginLeft: 8,
        color: theme.color.gray100ToGray500
      }
    ]),
  gray100ToGray500: () => (theme: Theme) =>
    css([
      {
        color: theme.color.gray100ToGray500
      }
    ]),
  gray300ToGray400: () => (theme: Theme) =>
    css([
      {
        color: theme.color.gray300ToGray400
      }
    ]),
  status: (status: string) => (theme: Theme) =>
    css([
      {
        color: theme.color.gray100ToGray500
      },
      status === 'WAIT_FOR_APPROVE' && {
        color: theme.color.yellow500
      },
      status === 'ACTIVE' && {
        color: theme.color.green500
      },
      (status === 'REJECT' || status === 'INACTIVE') && {
        color: theme.color.red500
      }
    ]),
  contactHelp: () => (theme: Theme) =>
    css([
      {
        color: theme.color.blue500,
        marginLeft: 8,
        '&:hover': {
          textDecoration: 'underline'
        }
      }
    ]),
  unlink: () => (theme: Theme) =>
    css([
      {
        color: theme.color.red500,
        marginLeft: 8
      }
    ])
}

export const dialog = {
  wrapper: () => (theme: Theme) =>
    css({
      maxWidth: 528,
      borderRadius: 10,
      top: '50%',
      transform: 'translateY(-50%)',
      padding: 0,

      '& .simplize-dialog-header': {
        borderRadius: 10,
        backgroundColor: `transparent`,
        padding: '24px 32px'
      },

      '& .simplize-dialog-content': {
        borderRadius: 10,
        backgroundColor: theme.color.dc056,
        boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.3)`
      },

      '& .simplize-dialog-close': {
        margin: '22px 26px',
        fill: theme.color.black300,

        '&:hover': {
          fill: theme.color.dc017
        }
      },

      '& .simplize-dialog-body': {
        padding: '0px 32px',
        paddingBottom: 32
      },

      [theme.mediaQuery.mobile]: {
        marginLeft: 16,
        marginRight: 16
      }
    }),
  btn: () => (theme: Theme) =>
    css({
      padding: '10px 16px',
      minWidth: 220,
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
      cursor: 'pointer',

      [theme.mediaQuery.mobile]: {
        width: '100%',
        marginBottom: 12
      }
    }),
  btnGray: () => (theme: Theme) =>
    css({
      backgroundColor: theme.color.dc044,
      '&>*': {
        color: theme.color.dc014
      }
    }),
  btnRed: () => (theme: Theme) =>
    css({
      backgroundColor: theme.color.red500,
      '&>*': {
        color: theme.color.gray100
      }
    })
}

export default styles
