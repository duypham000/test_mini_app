import { CloseIconBlue500 } from '@/components/icons/CloseIconBlue500'
import RcTooltip from '@/components/RcTooltip'
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
import React from 'react'
import styles from './styles'

type Value = '' | 'TICH_LUY' | 'TANG_GIA' | 'SUY_YEU' | 'GIAM_GIA' | any

interface Props {
  value: Value
  setValue: (value: Value) => void
  label: string
  recommendList: { label: string; value: Value }[]
}

const SelectMultiOption: React.FC<Props> = (props): JSX.Element => {
  const {
    value: valueProps,
    setValue: setValueProps,
    label,
    recommendList
  } = props

  const [visible, setVisible] = React.useState(false)
  const [value, setValue] = React.useState(valueProps)

  React.useEffect(() => {
    setValue(valueProps)
  }, [valueProps])

  const isValid = React.useMemo(() => value !== '', [value])

  const hasValue = React.useMemo(() => {
    if (valueProps?.length === 0) {
      return false
    }

    return true
  }, [valueProps])

  const handleSubmit = () => {
    setVisible(false)

    setValueProps(value)
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
                  color: theme.color.dc011
                })}
              >
                {label}
              </Typography>
            </div>
            <div css={styles.recommendList()}>
              {recommendList.map((item, index) => (
                <button
                  css={styles.btn({
                    active: value?.includes(item?.value)
                  })}
                  onClick={() => {
                    if (!value[0]) {
                      setValue([item?.value])
                      return
                    }
                    if (value?.includes(item?.value)) {
                      setValue(value?.filter((ele) => ele !== item?.value))
                      return
                    }
                    setValue(value?.concat(item?.value))
                  }}
                  key={index}
                >
                  <Typography
                    variant='caption_two'
                    cssCustom={styles.btnText({
                      active: value?.includes(item?.value)
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
                    color: theme.color.dc014,
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
        <div css={{ position: 'relative', userSelect: 'none' }}>
          <button
            css={styles.optionBtn({
              active: hasValue
            })}
            onClick={() => setVisible(true)}
          >
            <Typography
              variant='caption_two'
              cssCustom={(theme: Theme) => ({
                color: hasValue ? theme.color.blue500 : theme.color.dc014
              })}
            >
              {!hasValue && `${label}`}
              {hasValue &&
                `${label} (${valueProps
                  ?.join(',')
                  ?.replace('low', 'Thấp')
                  ?.replace('medium', 'Trung bình')
                  ?.replace('high', 'Cao')
                  ?.replace('extreme', 'Rất cao')})`}
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
            setValueProps([])
            setValue([])
          }}
        />
      )}
    </div>
  )
}

export default SelectMultiOption
