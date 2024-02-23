import { DatePickerIcon } from '@/icons/DatePickerIcon'
import React from 'react'
import ReactDatePicker from 'react-datepicker'
import styles from './styles'

type Props = React.ComponentPropsWithoutRef<typeof ReactDatePicker>

const DatePicker: React.FC<Props> = (props): JSX.Element => {
  const { dateFormat = `dd/MM/yyyy`, ...rest } = props

  return (
    <div css={styles.datePickerWrapper()}>
      <ReactDatePicker
        dateFormat={dateFormat}
        css={styles.datePicker()}
        {...rest}
      />
      <div css={{ position: 'relative', width: '100%', height: 0 }}>
        <DatePickerIcon css={styles.datePickerIcon()} />
      </div>
    </div>
  )
}

export default DatePicker
