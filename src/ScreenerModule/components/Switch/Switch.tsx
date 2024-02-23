import React from 'react'
import styles from './styles'

interface Props {
  active: boolean
  onSwitch: () => void
}

const Switch: React.FC<Props> = (props): JSX.Element => {
  const { active, onSwitch } = props

  return <div css={styles.switch({ active })} onClick={onSwitch} />
}

export default Switch
