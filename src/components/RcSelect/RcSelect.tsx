import React from 'react'

import Select, {
  SelectProps,
  useBaseProps,
  Option,
  OptGroup,
  BaseSelect,
  BaseSelectProps,
  BaseSelectRef,
  BaseSelectPropsWithoutPrivate
} from 'rc-select'

const RcSelect = React.forwardRef<BaseSelectRef, any>((props, ref) => (
  <Select prefixCls='simplize-select' ref={ref} {...props} />
))

if (process.env.NODE_ENV !== 'production') {
  RcSelect.displayName = 'RcSelect'
}

export { Option, OptGroup, BaseSelect, useBaseProps }
export type {
  SelectProps,
  BaseSelectProps,
  BaseSelectRef,
  BaseSelectPropsWithoutPrivate
}

export default RcSelect
