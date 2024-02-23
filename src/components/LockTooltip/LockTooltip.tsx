import Typography from '@/components/Typography'
import React from 'react'
import { Theme } from '@/themes/theme'
import RcTooltip from '../RcTooltip'
import styles from './styles'
import { LockFeatureIcon } from '../icons/LockFeatureIcon'
import { useNavigate } from 'react-router-dom'

interface Props {
  message?: string
}

const LockTooltip: React.FC<Props> = (props): JSX.Element => {
  const {
    message = `Bạn cần nâng cấp Hội viên hoặc đổi khoai để xem được số liệu này!`
  } = props

  const navigate = useNavigate()

  return (
    <RcTooltip
      trigger={['hover']}
      showArrow={true}
      placement={`top`}
      overlayStyle={{
        backgroundColor: `transparent`,
        padding: 0,
        minWidth: 'fit-content'
      }}
      overlayInnerStyle={{
        backgroundColor: `transparent`,
        padding: 0,
        minWidth: 'fit-content'
      }}
      overlay={
        <div css={styles.overlayWrapper()}>
          <div>
            <Typography
              variant='caption'
              cssCustom={(theme: Theme) => ({
                color: theme.color.gray100,
                marginBottom: 8,
                display: 'block'
              })}
            >
              {message}
            </Typography>
          </div>

          <div css={styles.btnGroupBottom()}>
            <button css={styles.btnSave()} onClick={() => navigate('/pricing')}>
              <Typography
                variant='caption_two'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.gray100,
                  cursor: 'pointer'
                })}
              >{`Nâng cấp Hội viên`}</Typography>
            </button>
            <button
              css={{
                backgroundColor: 'transparent',
                outline: 'none',
                border: 'none'
              }}
              onClick={() => navigate('/profile/reward')}
            >
              <Typography
                variant='caption_two'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.blue500,
                  cursor: 'pointer',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                })}
              >{`Đổi khoai`}</Typography>
            </button>
          </div>
        </div>
      }
    >
      <LockFeatureIcon />
    </RcTooltip>
  )
}

export default LockTooltip
