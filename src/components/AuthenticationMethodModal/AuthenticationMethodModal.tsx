import { Col, Row } from '@/components/GridLayout'
import { CloseIconBlack500 } from '@/icons/CloseIconBlack500'
import { SmsIcon } from '@/icons/SmsIcon'
import { ZaloIcon } from '@/icons/ZaloIcon'
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
import DialogWrap from 'rc-dialog'
import React from 'react'
import { styles, Wrapper } from './styles'

interface Props {
  visible: boolean
  onCancel: any
  onSms: any
  onZalo: any
  spinning?: boolean
}

const AuthenticationMethodModal: React.FC<Props> = (props) => {
  const { visible, onCancel, onSms, onZalo } = props

  return (
    <DialogWrap
      prefixCls='simplize-dialog'
      visible={visible}
      title={
        <Typography variant='heading_three'>{`Phương thức xác thực`}</Typography>
      }
      onClose={onCancel}
      closeIcon={<CloseIconBlack500 width={28} height={28} />}
      css={styles.wrapper()}
    >
      <Wrapper>
        <div css={{ marginBottom: 24 }}>
          <Typography
            variant='caption'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc015
            })}
          >{`Bạn vui lòng lựa chọn phương thức xác thực OTP`}</Typography>
        </div>

        <Row className='authentication_method_option_group'>
          <Col
            span={24}
            css={(theme: Theme) => ({
              padding: '16px',
              backgroundColor: theme.color.dc044,
              display: 'flex',
              width: 'calc(50% - 8px)',
              cursor: 'pointer',
              borderRadius: 10,
              transition: 'all 0.3s',

              '&:hover': {
                backgroundColor: theme.color.dc044
              },

              [theme.mediaQuery.mobile]: {
                width: `100%`
              }
            })}
            onClick={onSms}
          >
            <div css={{ marginRight: 8 }}>
              <SmsIcon />
            </div>

            <div>
              <Typography
                variant='sub_heading_one'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc011,
                  marginBottom: 4
                })}
              >{`Tin nhắn (SMS)`}</Typography>

              <Typography
                variant='caption'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc015
                })}
              >{`Mã OTP sẽ gửi về số điện thoại của bạn`}</Typography>
            </div>
          </Col>

          <Col
            span={24}
            css={(theme: Theme) => ({
              padding: '16px',
              backgroundColor: theme.color.dc044,
              display: 'flex',
              width: 'calc(50% - 8px)',
              cursor: 'pointer',
              borderRadius: 10,
              transition: 'all 0.3s',

              '&:hover': {
                backgroundColor: theme.color.dc044
              },

              [theme.mediaQuery.mobile]: {
                width: `100%`,
                marginTop: 16
              }
            })}
            onClick={onZalo}
          >
            <div css={{ marginRight: 8 }}>
              <ZaloIcon />
            </div>

            <div>
              <Typography
                variant='sub_heading_one'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc011,
                  marginBottom: 4
                })}
              >{`Zalo`}</Typography>

              <Typography
                variant='caption'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc015
                })}
              >{`Mã OTP sẽ gửi vào phần chat trong Zalo của bạn`}</Typography>
            </div>
          </Col>
        </Row>
      </Wrapper>
    </DialogWrap>
  )
}

export default AuthenticationMethodModal
