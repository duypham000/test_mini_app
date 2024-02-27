import Button from '@/components/Button'
import { CloseIconBlack500 } from '@/icons/CloseIconBlack500'
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
import DialogWrap from 'rc-dialog'
import React from 'react'
import { styles, Wrapper } from './styles'
import vdscApi from '@/apis/vdsc-api'
import NormalInput from '@/components/NormalInput'

interface Props {
  onCancel: any
  visible: boolean
  dataOpenStockAccount?: any
}

const SupportSystem: React.FC<Props> = (props) => {
  const { visible, onCancel, dataOpenStockAccount } = props

  const [content, setContent] = React.useState(
    'Tôi chưa nhận được mail xác nhận thông tin'
  )

  const isValid = React.useMemo(() => {
    if (content.trim()) {
      return true
    }

    return false
  }, [content])

  const handleClick = () => {
    vdscApi
      .contactFormSupport({
        clientId: dataOpenStockAccount?.clientId,
        fullName: dataOpenStockAccount?.fullName,
        type: 'VDSC_ACCOUNT',
        email: dataOpenStockAccount?.emailContact,
        mobileNumber: dataOpenStockAccount?.mobileNumberContact,
        content: content.trim()
      })
      .then(() => null)
      .catch((error: any) => {
        console.log(error?.response?.data.message)
      })
      .finally(() => {
        onCancel()
      })
  }

  return (
    <DialogWrap
      prefixCls='simplize-dialog'
      visible={visible}
      title={
        <Typography
          variant='heading_three'
          cssCustom={(theme: Theme) => ({
            color: theme.color.dc011
          })}
        >{`Liên hệ hỗ trợ`}</Typography>
      }
      onClose={onCancel}
      closeIcon={<CloseIconBlack500 width={28} height={28} />}
      css={styles.wrapper()}
    >
      <Wrapper>
        <div css={{ marginBottom: 16 }}>
          <Typography
            variant='sub_heading_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc011
            })}
          >{`Thông tin của bạn`}</Typography>
        </div>
        <div className='support_system_input_group'>
          <div className='support_system_input_item'>
            <Typography
              variant='body_two'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc015
              })}
            >{`Họ và tên`}</Typography>
            <NormalInput
              value={`${dataOpenStockAccount?.fullName}`}
              disabled={true}
            />
          </div>
          <div className='support_system_input_item'>
            <Typography
              variant='body_two'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc015
              })}
            >{`Tài khoản RV`}</Typography>
            <NormalInput
              value={`${dataOpenStockAccount?.clientId}`}
              disabled={true}
            />
          </div>
          <div className='support_system_input_item'>
            <Typography
              variant='body_two'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc015
              })}
            >{`Email`}</Typography>
            <NormalInput
              value={`${dataOpenStockAccount?.emailContact}`}
              disabled={true}
            />
          </div>
          <div className='support_system_input_item'>
            <Typography
              variant='body_two'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc015
              })}
            >{`Số điện thoại`}</Typography>
            <NormalInput
              value={`${dataOpenStockAccount?.mobileNumberContact}`}
              disabled={true}
            />
          </div>
        </div>
        <div css={{ marginBottom: 16 }}>
          <Typography
            variant='sub_heading_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc011
            })}
          >{`Nội dung yêu cầu hỗ trợ`}</Typography>
        </div>
        <textarea
          value={content}
          onChange={(e: any) => setContent(e.target.value)}
          className='support_system_textarea'
          placeholder='Tôi cần hỗ trợ...'
        />
        <div css={{ marginBottom: 16 }}>
          <Typography
            variant='caption'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc015
            })}
          >{`Hoặc bạn có thể liên hệ hỗ trợ trực tiếp thông qua Hotline: `}</Typography>
          <Typography
            variant='caption'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc011
            })}
          >{`0913242569 (Mr. Đông) - 0946769696 (Ms. My)`}</Typography>
        </div>
        <div className='support_system_btn_group'>
          <Button
            cssCustom={(theme: Theme) =>
              isValid
                ? {}
                : {
                    cursor: 'not-allowed',
                    backgroundColor: theme.color.blue_opacity30,
                    '&:hover': {
                      backgroundColor: theme.color.blue_opacity30
                    }
                  }
            }
            onClick={() => (isValid ? handleClick() : null)}
          >
            <Typography
              variant='sub_heading_four'
              cssCustom={(theme: Theme) => ({
                color: isValid ? theme.color.gray100 : theme.color.gray300
              })}
            >{`Xác nhận gửi`}</Typography>
          </Button>
        </div>
      </Wrapper>
    </DialogWrap>
  )
}

export default SupportSystem
