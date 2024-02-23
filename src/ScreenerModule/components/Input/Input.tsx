import RcInput from 'rc-input'
import type { InputProps as RcInputProps, InputRef } from 'rc-input'
import React from 'react'
import styles from './styles'

export interface InputProps
  extends Omit<
    RcInputProps,
    | 'wrapperClassName'
    | 'groupClassName'
    | 'inputClassName'
    | 'affixWrapperClassName'
  > {
  size?: 'small' | 'default' | 'large'
  spellCheck?: boolean
}

const Input = React.forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    prefixCls = 'simplize-input',
    spellCheck = false,
    size = `default`,
    ...rest
  } = props

  return (
    <RcInput
      css={styles.getInputCss({ size })}
      ref={ref}
      prefixCls={prefixCls}
      {...rest}
      spellCheck={spellCheck}
    />
  )
})

if (process.env.NODE_ENV !== 'production') {
  Input.displayName = 'Input'
}

export default Input
