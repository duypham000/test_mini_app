import React from 'react'
import styles from './styles'
import Input from '@/ScreenerModule/components/Input'

type Props = React.ComponentPropsWithoutRef<typeof Input>

const NormalInput: React.FC<Props> = (props): JSX.Element => {
  const { ...rest } = props
  return <Input css={styles.input()} {...rest} />
}

export default NormalInput
