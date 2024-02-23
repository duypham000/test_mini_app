import React from 'react'
import { noIcon, sizes, styles, types } from './styles'
import Typography from '../Typography'
import { Theme } from '@/themes/theme'
import { rem } from '@/themes/rem'

export type STYLE_TYPE = 'primary' | 'secondary' | 'default' | 'link'
export type SIZE = 'large' | 'regular' | 'small'
export type TYPE = 'button' | 'submit' | 'reset' | undefined
interface ButtonProps {
  isFullWidth?: boolean
  type?: TYPE
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  href?: string
  size?: SIZE
  styleType?: STYLE_TYPE
  disable?: boolean
  loading?: boolean
  cssCustom?: any
  children?: React.ReactNode | string
  onClick?: () => void
  // false khi muốn tắt style default của trạng thái hover và active
  dynamic?: boolean
  variant?:
    | 'heading_one'
    | 'heading_two'
    | 'heading_three'
    | 'heading_fourth'
    | 'heading_fifth'
    | 'heading_six'
    | 'sub_heading_one'
    | 'sub_heading_two'
    | 'sub_heading_three'
    | 'sub_heading_four'
    | 'body_one'
    | 'body_two'
    | 'caption'
    | 'caption_two'
    | 'caption_three'
  variantMobile?:
    | 'heading_one'
    | 'heading_two'
    | 'heading_three'
    | 'heading_fourth'
    | 'heading_fifth'
    | 'heading_six'
    | 'sub_heading_one'
    | 'sub_heading_two'
    | 'sub_heading_three'
    | 'sub_heading_four'
    | 'body_one'
    | 'body_two'
    | 'caption'
    | 'caption_two'
    | 'caption_three'
}

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  const {
    children,
    onClick,
    styleType = 'primary',
    loading,
    leftIcon,
    rightIcon,
    type = 'button',
    cssCustom,
    size = 'regular',
    disable,
    isFullWidth = false,
    variant = 'sub_heading_two',
    dynamic = true,
    variantMobile
  } = props

  const [cusVariant, setCusVariant] = React.useState(variant)

  React.useEffect(() => {
    size === 'small' && variant === undefined
      ? setCusVariant('sub_heading_three')
      : ''
  }, [variant, size])

  return styleType === 'link' ? (
    <button
      css={[
        styles.base(),
        types.link({ dynamic: dynamic }),
        loading ? styles.loading() : null,
        // isFullWidth ? styles.fullWidth() : null,
        size == 'small' ? { fontSize: rem(14) } : '',
        sizes[size],
        disable || loading ? { pointerEvents: 'none' } : '',
        leftIcon || rightIcon ? '' : noIcon[size],
        { padding: '8px 0' },
        cssCustom
      ]}
      onClick={onClick}
      disabled={disable || loading}
    >
      {loading ? (
        'loading...'
      ) : (
        <div>
          {leftIcon && <div css={{ marginRight: 8 }}>{leftIcon}</div>}
          <Typography
            variant={cusVariant}
            cssCustom={(theme: Theme) => ({
              color: theme.color.white500
            })}
            variantMobile={variantMobile}
          >
            {children}
          </Typography>
          {rightIcon && <div css={{ marginLeft: 8 }}>{rightIcon}</div>}
        </div>
      )}
    </button>
  ) : (
    <button
      type={type}
      css={[
        styles.base(),
        types[styleType]({ dynamic: dynamic }),
        sizes[size],
        loading ? styles.loading() : null,
        isFullWidth ? styles.fullWidth() : null,
        disable || loading ? { pointerEvents: 'none' } : '',
        leftIcon || rightIcon ? '' : noIcon[size],
        cssCustom
      ]}
      onClick={onClick}
      disabled={disable || loading}
    >
      {loading ? (
        'loading...'
      ) : (
        <div>
          {leftIcon && <div css={{ marginRight: 8 }}>{leftIcon}</div>}

          <Typography
            variant={cusVariant}
            cssCustom={(theme: Theme) => ({
              color:
                styleType === 'secondary' || styleType === 'default'
                  ? theme.color.blue500
                  : theme.color.white500
            })}
            variantMobile={variantMobile}
          >
            {children}
          </Typography>

          {rightIcon && <div css={{ marginLeft: 8 }}>{rightIcon}</div>}
        </div>
      )}
    </button>
  )
}

export default Button
