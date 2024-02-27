import Button from '@/components/Button'
import { CloseIconBlack500 } from '@/icons/CloseIconBlack500'
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
import DialogWrap from 'rc-dialog'
import React from 'react'
import OtpInput from 'react18-input-otp'
import { styles, Wrapper } from './styles'

interface Props {
  visible: boolean
  onCancel: any
  onSubmit: any
  spinning?: boolean
  onReSend?: any
}

const ConfirmOTPModal: React.FC<Props> = (props) => {
  const { visible, onCancel, onSubmit, onReSend = () => null } = props

  const [otp, setOtp] = React.useState('')

  const [minutes, setMinutes] = React.useState(1)
  const [seconds, setSeconds] = React.useState(0)

  React.useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)

    return () => {
      clearInterval(myInterval)
    }
  })

  const isReSubmit = React.useMemo(() => {
    if (minutes === 0 && seconds === 0) {
      return true
    }
    return false
  }, [minutes, seconds])

  const isValid = React.useMemo(() => {
    if (otp) {
      return true
    }
    return false
  }, [otp])

  const handleSubmit = () => {
    onSubmit(otp)
  }

  const handleReSubmit = () => {
    onReSend()
    handleReset()
  }

  const handleReset = () => {
    setOtp('')
    setMinutes(1)
    setSeconds(0)
  }

  const handleCancel = () => {
    onCancel()
    handleReset()
  }

  const handleChangeOtp = (otp: any) => {
    setOtp(otp)
  }

  return (
    <DialogWrap
      prefixCls='simplize-dialog'
      visible={visible}
      title={
        <Typography variant='heading_three'>{`Xác nhận mã OTP`}</Typography>
      }
      onClose={handleCancel}
      closeIcon={<CloseIconBlack500 width={28} height={28} />}
      css={styles.wrapper()}
    >
      <Wrapper>
        <div css={{ marginBottom: 16 }}>
          <Typography
            variant='caption'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc015
            })}
          >
            {`Vui lòng nhập mã OTP (gồm 4 chữ số) đã được gửi vào `}
            <span
              css={(theme: Theme) => ({ color: theme.color.dc011 })}
            >{`số điện thoại`}</span>
            {` hoặc `}
            <span
              css={(theme: Theme) => ({ color: theme.color.dc011 })}
            >{`Zalo`}</span>
            {` của bạn để xác thực.`}
          </Typography>
        </div>
        <OtpInput
          onChange={handleChangeOtp}
          numInputs={4}
          value={otp}
          containerStyle={`group_otp`}
        />
        <div
          css={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}
        >
          <Typography
            variant='caption'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc014
            })}
          >
            {`Mã hết hạn sau: `}
            <span
              css={(theme: Theme) => ({
                color: theme.color.red500
              })}
            >{`${minutes === 0 ? '00' : minutes}:${
              seconds === 0 ? '00' : seconds
            }`}</span>
          </Typography>
        </div>
        <div css={{ marginBottom: 16 }}>
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
            onClick={() => (isValid ? handleSubmit() : null)}
            isFullWidth={true}
          >
            <Typography
              variant='sub_heading_four'
              cssCustom={(theme: Theme) => ({
                color: isValid ? theme.color.gray100 : theme.color.gray300
              })}
            >{`Xác nhận mã OTP`}</Typography>
          </Button>
        </div>
        <div className='resend_code'>
          <Typography
            variant='caption'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc014
            })}
          >
            {`Bạn không nhận được mã? `}
            <span
              css={(theme: Theme) => ({
                color: theme.color.blue500,
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline'
                }
              })}
              onClick={isReSubmit ? handleReSubmit : () => null}
            >{`Gửi lại mã`}</span>
          </Typography>
        </div>
      </Wrapper>
    </DialogWrap>
  )
}

export default ConfirmOTPModal
