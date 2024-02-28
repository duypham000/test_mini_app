import { Theme } from '@/themes/theme'
import { css } from '@emotion/react'

const styles = {
  getInputCss:
    (props: { size?: 'small' | 'default' | 'large' }): any =>
    (theme: Theme) =>
      css([
        // base
        {
          display: 'flex',
          outline: 'none',
          background: 'none',
          padding: '4px 11px',
          fontFamily: theme.fontFamily.fontInter,
          fontSize: theme.fontSize.body_two,
          lineHeight: theme.fontSize.body_two,
          fontWeight: theme.fontWeight.fw400,
          border: `1px solid ${theme.color.dc045}`,
          borderRadius: '2px',
          color: theme.color.gray100ToGray500,

          '&.simplize-input': {
            '&-disabled': {
              backgroundColor: `${theme.color.black400}`
            },

            '&:hover:not([disabled])': {
              borderColor: theme.color.blue500
            },

            '&:focus:not([disabled])': {
              borderColor: theme.color.blue500,
              boxShadow: '0 0 0 2px rgba(24, 144, 255, .2)'
            }
          },

          '&.simplize-input-affix-wrapper': {
            '&-disabled': {
              borderColor: '${theme.color.black400}',
              backgroundColor: '${theme.color.black400}'
            },

            '&:hover:not(&-disabled)': {
              borderColor: theme.color.blue500
            },

            '&-focused': {
              borderColor: theme.color.blue500,
              boxShadow: '0 0 0 2px rgba(24, 144, 255, .2)'
            },

            '& .simplize-input': {
              outline: 'none',
              background: 'none',
              border: 'none',

              '&-suffix': {
                cursor: 'pointer',
                marginLeft: '10px',
                display: 'flex',
                alignItems: 'center'
              },

              '&-prefix': {
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center'
              }
            }
          }
        },

        // size
        props.size === 'small' && {
          padding: '0px 7px'
        },
        props.size === 'large' && {
          padding: '6.5px 11px',
          fontSize: theme.fontSize.body_one,
          lineHeight: theme.lineHeight.body_one
        }
      ])
}

export default styles
