import RcSelect from '@/components/RcSelect'
import React from 'react'
import styles from './styles'

type Props = React.ComponentPropsWithoutRef<typeof RcSelect>

const Select: React.FC<Props> = (props): JSX.Element => {
  const { value, onChange, showSearch, options, ...rest } = props

  return (
    <RcSelect
      value={value}
      onChange={onChange}
      showSearch={showSearch}
      css={styles.select()}
      dropdownMatchSelectWidth={false}
      dropdownRender={(menu) => <div css={styles.optionsWrapper()}>{menu}</div>}
      menuItemSelectedIcon={null}
      dropdownStyle={{
        padding: 0,
        background: `transparent`
      }}
      options={options}
      {...rest}
    />
  )
}

export default Select
