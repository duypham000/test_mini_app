import { Row } from '@/components/GridLayout'
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
import React from 'react'
import styles from './styles'

interface Props {
  step?: number
}

const HorizontalStep: React.FC<Props> = (props): JSX.Element => {
  const { step: propStep = 0 } = props

  const step = React.useMemo(() => propStep + 1, [propStep])

  return (
    <div css={styles.wrapper()}>
      <div css={{ width: '33%' }}>
        <Row justify='center' css={styles.step({ active: step > 1 })}>
          {step >= 1 && <div css={styles.dot()} />}

          <Typography
            variant={`sub_heading_two`}
            variantMobile={`sub_heading_four`}
            cssCustom={(theme: Theme) => ({
              color: step >= 1 ? theme.color.dc011 : theme.color.dc014,

              [theme.mediaQuery.mobile]: {
                maxWidth: 64
              }
            })}
          >{`Thông tin cá nhân`}</Typography>
        </Row>
      </div>

      <div css={{ width: '33%' }}>
        <Row justify='center' css={styles.step({ active: step > 2 })}>
          {step >= 2 && <div css={styles.dot()} />}

          <Typography
            variant={`sub_heading_two`}
            variantMobile={`sub_heading_four`}
            cssCustom={(theme: Theme) => ({
              color: step >= 2 ? theme.color.dc011 : theme.color.dc014,

              [theme.mediaQuery.mobile]: {
                maxWidth: 55
              }
            })}
          >{`Đăng ký dịch vụ`}</Typography>
        </Row>
      </div>

      <div css={{ width: '33%' }}>
        <Row justify='center' css={styles.step({ active: false })}>
          {step >= 3 && <div css={styles.dot()} />}

          <Typography
            variant={`sub_heading_two`}
            variantMobile={`sub_heading_four`}
            cssCustom={(theme: Theme) => ({
              color: step >= 3 ? theme.color.dc011 : theme.color.dc014,

              [theme.mediaQuery.mobile]: {
                maxWidth: 84
              }
            })}
          >{`Xác nhận & ký hợp đồng`}</Typography>
        </Row>
      </div>
    </div>
  )
}

export default HorizontalStep
