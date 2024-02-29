import { Theme } from '@/themes/theme'
import { css } from '@emotion/react'
import React from 'react'

export type STYLE_TYPE = 'primary' | 'secondary' | 'default' | 'link'
export type SIZE = 'large' | 'regular' | 'small'
export type TYPE = 'button' | 'submit' | 'reset' | undefined
interface BorderCornerProps {
  children?: React.ReactNode | string
  borderWidth?: number
  borderColor?: any
  cornorLength?: number
  cssCustom?: any
}

const BorderCorner: React.FC<BorderCornerProps> = (props): JSX.Element => {
  const {
    children,
    borderColor,
    borderWidth = 12,
    cornorLength = 1,
    cssCustom,
    ...customProps
  } = props

  return (
    <div
      css={() => (theme: Theme) => [
        css({
          background: `
          linear-gradient(to right, ${borderColor || theme.color.dc003} ${cornorLength}px, transparent ${cornorLength}px) 0 0,
          linear-gradient(to right, ${borderColor || theme.color.dc003} ${cornorLength}px, transparent ${cornorLength}px) 0 100%,
          linear-gradient(to left, ${borderColor || theme.color.dc003} ${cornorLength}px, transparent ${cornorLength}px) 100% 0,
          linear-gradient(to left, ${borderColor || theme.color.dc003} ${cornorLength}px, transparent ${cornorLength}px) 100% 100%,
          linear-gradient(to bottom, ${borderColor || theme.color.dc003} ${cornorLength}px, transparent ${cornorLength}px) 0 0,
          linear-gradient(to bottom, ${borderColor || theme.color.dc003} ${cornorLength}px, transparent ${cornorLength}px) 100% 0,
          linear-gradient(to top, ${borderColor || theme.color.dc003} ${cornorLength}px, transparent ${cornorLength}px) 0 100%,
          linear-gradient(to top, ${borderColor || theme.color.dc003} ${cornorLength}px, transparent ${cornorLength}px) 100% 100%;
        `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${borderWidth}px ${borderWidth}px`
        }),
        cssCustom
      ]}
      {...customProps}
    >
      {children}
    </div>
  )
}

export default BorderCorner
