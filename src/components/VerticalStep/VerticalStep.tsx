import { CheckIcon } from '@/icons/CheckIcon'
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
import React from 'react'
import styles from './styles'

interface Props {
  step?: number
}

const VerticalStep: React.FC<Props> = (props): JSX.Element => {
  const { step: propStep = 0 } = props

  const step = React.useMemo(() => propStep + 1, [propStep])

  return (
    <div css={styles.wrapper()}>
      <div css={styles.step({ active: step > 1 })}>
        <div
          css={[
            styles.circle(),
            (theme: Theme) => ({
              backgroundColor:
                step < 1 ? theme.color.dc045 : theme.color.orange500
            })
          ]}
        >
          {step === 1 && (
            <Typography
              variant='sub_heading_three'
              cssCustom={(theme: Theme) => ({
                color: theme.color.gray100
              })}
            >{`1`}</Typography>
          )}

          {step > 1 && <CheckIcon />}
        </div>

        <div css={styles.content()}>
          <Typography
            variant='sub_heading_four'
            cssCustom={(theme: Theme) => ({
              color: step >= 1 ? theme.color.dc011 : theme.color.dc014
            })}
          >{`Chụp/tải ảnh CMND/CCCD`}</Typography>
        </div>
      </div>

      <div css={styles.step({ active: step > 2 })}>
        <div
          css={[
            styles.circle(),
            (theme: Theme) => ({
              backgroundColor:
                step < 2 ? theme.color.dc045 : theme.color.orange500
            })
          ]}
        >
          {step === 2 && (
            <Typography
              variant='sub_heading_three'
              cssCustom={(theme: Theme) => ({
                color: theme.color.gray100
              })}
            >{`2`}</Typography>
          )}

          {step > 2 && <CheckIcon />}
        </div>

        <div css={styles.content()}>
          <Typography
            variant='sub_heading_four'
            cssCustom={(theme: Theme) => ({
              color: step >= 2 ? theme.color.dc011 : theme.color.dc014
            })}
          >{`Quay video chân dung`}</Typography>
        </div>
      </div>

      <div css={styles.step()}>
        <div
          css={[
            styles.circle(),
            (theme: Theme) => ({
              backgroundColor:
                step < 3 ? theme.color.dc045 : theme.color.orange500
            })
          ]}
        >
          {step === 3 && (
            <Typography
              variant='sub_heading_three'
              cssCustom={(theme: Theme) => ({
                color: theme.color.gray100
              })}
            >{`3`}</Typography>
          )}

          {step > 3 && <CheckIcon />}
        </div>

        <div css={styles.content()}>
          <Typography
            variant='sub_heading_four'
            cssCustom={(theme: Theme) => ({
              color: step >= 3 ? theme.color.dc011 : theme.color.dc014
            })}
          >{`Nhập thông tin cá nhân`}</Typography>
        </div>
      </div>
    </div>
  )
}

export default VerticalStep
