import { CloseIconBlue500 } from '@/components/icons/CloseIconBlue500'
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
import React from 'react'
import styles from './styles'

interface Props {
  value: boolean
  setValue: (value: boolean) => void
  label: string
}

const BooleanOption: React.FC<Props> = (props): JSX.Element => {
  const { value, setValue, label } = props

  return (
    <div css={{ position: 'relative', userSelect: 'none' }}>
      <button
        css={styles.optionBtn({
          active: value
        })}
        onClick={() => setValue(true)}
      >
        <Typography
          variant='caption_two'
          cssCustom={(theme: Theme) => ({
            color: value ? theme.color.blue500 : theme.color.dc014
          })}
        >
          {label}
        </Typography>
      </button>
      {value && (
        <CloseIconBlue500
          css={{
            marginLeft: 8,
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            animation: '0.3s opac'
          }}
          onClick={() => {
            setValue(false)
          }}
        />
      )}
    </div>
  )
}

export default BooleanOption
