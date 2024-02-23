import { CloseIconBlue500 } from '@/components/icons/CloseIconBlue500'
import RcTooltip from '@/components/RcTooltip'
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
import React from 'react'
import NormalInput from '../NormalInput'
import styles from './styles'

type Value = {
  label?: string
  start: string
  end: string
}

interface Props {
  value: Value
  setValue: (value: Value) => void
  suffix?: string
  label: string
  recommendList: { label: string; value: { start: string; end: string } }[]
}

const OptionItem: React.FC<Props> = (props): JSX.Element => {
  const {
    value: valueProps,
    setValue: setValueProps,
    suffix = ``,
    label,
    recommendList
  } = props

  const [visible, setVisible] = React.useState(false)
  const [value, setValue] = React.useState(valueProps)

  const isValid = React.useMemo(() => value.start || value.end, [value])

  const hasValue = React.useMemo(() => {
    if (valueProps.start === '' && valueProps.end === '') {
      return false
    }

    return true
  }, [valueProps])

  const selectedValue = React.useMemo(
    () =>
      recommendList.filter(
        (item) =>
          item.value.start === value.start && item.value.end === value.end
      ),
    [value]
  )

  const handleSubmit = () => {
    setVisible(false)

    if (selectedValue.length) {
      setValueProps({ ...value, label: selectedValue[0]?.label })
      return
    }

    setValueProps({ ...value, label: '' })
  }

  return (
    <div css={{ position: 'relative' }}>
      <RcTooltip
        visible={visible}
        onVisibleChange={(visible) => setVisible(visible)}
        trigger={['click']}
        showArrow={false}
        placement={`bottom`}
        overlayStyle={{
          backgroundColor: `transparent`,
          minWidth: 'fit-content'
        }}
        overlay={
          <div css={styles.overlayWrapper()}>
            <div css={{ marginBottom: 8 }}>
              <Typography
                variant='caption_two'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.gray100
                })}
              >
                {label}
              </Typography>
            </div>
            <div css={styles.inputGroup()}>
              <Typography
                variant='caption'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.gray100
                })}
              >{`Từ`}</Typography>
              <div css={{ maxWidth: 118, marginLeft: 10 }}>
                <NormalInput
                  placeholder='tối thiểu'
                  value={value.start}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setValue({ ...value, start: event.target.value })
                  }}
                  type={`number`}
                  suffix={suffix}
                />
              </div>
              <Typography
                variant='caption'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.gray100,
                  marginLeft: 10
                })}
              >{`Đến`}</Typography>
              <div css={{ maxWidth: 118, marginLeft: 10 }}>
                <NormalInput
                  placeholder='tối đa'
                  value={value.end}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setValue({ ...value, end: event.target.value })
                  }}
                  type={`number`}
                  suffix={suffix}
                />
              </div>
            </div>
            <div css={{ marginBottom: 8 }}>
              <Typography
                variant='caption'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc014
                })}
              >{`Hoặc chọn các khoảng gợi ý:`}</Typography>
            </div>
            <div css={styles.recommendList()}>
              {recommendList.map((item, index) => (
                <button
                  css={styles.btn({
                    active:
                      value.start === item.value.start &&
                      value.end === item.value.end
                  })}
                  onClick={() => setValue(item.value)}
                  key={index}
                >
                  <Typography
                    variant='caption_two'
                    cssCustom={styles.btnText({
                      active:
                        value.start === item.value.start &&
                        value.end === item.value.end
                    })}
                  >
                    {item.label}
                  </Typography>
                </button>
              ))}
            </div>
            <div css={styles.btnGroupBottom()}>
              <div onClick={() => setVisible(false)}>
                <Typography
                  variant='caption_two'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.gray300,
                    cursor: 'pointer',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  })}
                >{`Hủy`}</Typography>
              </div>
              <button
                disabled={!isValid}
                css={styles.btnSave()}
                onClick={handleSubmit}
              >
                <Typography
                  variant='caption_two'
                  cssCustom={(theme: Theme) => ({
                    color: isValid ? theme.color.gray100 : theme.color.gray300
                  })}
                >{`Lưu lại`}</Typography>
              </button>
            </div>
          </div>
        }
        overlayInnerStyle={{
          backgroundColor: `transparent`,
          minWidth: 'fit-content'
        }}
      >
        <div css={{ userSelect: 'none' }}>
          <button
            css={styles.optionBtn({
              active: hasValue
            })}
            onClick={() => setVisible(true)}
          >
            <Typography
              variant='caption_two'
              cssCustom={(theme: Theme) => ({
                color: hasValue ? theme.color.blue500 : theme.color.gray300
              })}
            >
              {!hasValue && `${label}`}
              {valueProps.label && hasValue && `${label} (${valueProps.label})`}
              {!valueProps.label &&
                hasValue &&
                valueProps.start === '' &&
                `${label} (< ${valueProps.end}${suffix})`}
              {!valueProps.label &&
                hasValue &&
                valueProps.end === '' &&
                `${label} (> ${valueProps.start}${suffix})`}
              {!valueProps.label &&
                hasValue &&
                valueProps.start !== '' &&
                valueProps.end !== '' &&
                `${label} (${valueProps.start}${suffix} - ${valueProps.end}${suffix})`}
            </Typography>
          </button>
        </div>
      </RcTooltip>
      {hasValue && (
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
            setValueProps({ start: '', end: '', label: '' })
            setValue({ start: '', end: '', label: '' })
          }}
        />
      )}
    </div>
  )
}

export default OptionItem
