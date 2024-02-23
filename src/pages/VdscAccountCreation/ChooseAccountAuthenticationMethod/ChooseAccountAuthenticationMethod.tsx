import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
import React from 'react'
import styles from './styles'

interface Props {
  onChooseEkycAuthentication: any
  onChooseAutoInput: any
}

const ChooseAccountAuthenticationMethod: React.FC<Props> = (
  props
): JSX.Element => {
  const { onChooseEkycAuthentication, onChooseAutoInput } = props

  return (
    <>
      <div css={styles.wrapper()}>
        {/* <Container> */}
        <div
          css={(theme: Theme) => ({
            margin: '28px 0px 16px',

            [theme.mediaQuery.mobile]: {
              margin: `0px 0px 16px`
            }
          })}
        >
          <Typography
            variant={'heading_two'}
            variantMobile='heading_three'
          >{`Mở tài khoản chứng khoán Rồng Việt`}</Typography>
        </div>

        <div css={{ marginBottom: 8 }}>
          <Typography
            variant={'sub_heading_one'}
            variantMobile='sub_heading_four'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc013
            })}
          >{`Bạn vui lòng chuẩn bị:`}</Typography>
        </div>

        <div
          css={{ marginBottom: 32, display: 'flex', flexDirection: 'column' }}
        >
          <Typography
            variant={'sub_heading_four'}
            variantMobile='body_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc015
            })}
          >{`1. CMND hoặc CCCD còn hiệu lực theo quy định`}</Typography>

          <Typography
            variant={'sub_heading_four'}
            variantMobile='body_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc015
            })}
          >{`2. Điện thoại di động để nhận mật khẩu OTP xác nhận hợp đồng`}</Typography>
        </div>

        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 24
          }}
        >
          <Typography
            variant={'heading_three'}
            variantMobile='heading_fourth'
          >{`Chọn hình thức xác thực tài khoản`}</Typography>
        </div>

        <div css={{ display: 'flex', flexDirection: 'column' }}>
          <div css={styles.btn()} onClick={onChooseEkycAuthentication}>
            <div
              css={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                aspectRatio: '1.88'
              }}
            >
              <img
                css={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                src={`https://cdn.simplize.vn/simplizevn/community/images/1655366507626-1.png`}
              />
            </div>

            <div css={styles.flexCenter()}>
              <Typography
                variant={'heading_three'}
                variantMobile='heading_fourth'
                cssCustom={(theme: Theme) => ({
                  marginBottom: 2,

                  [theme.mediaQuery.mobile]: {
                    padding: `0px 16px`
                  }
                })}
              >
                {`Xác thực bằng công nghệ eKYC`}
              </Typography>

              <Typography
                variant={'body_two'}
                variantMobile='caption'
                cssCustom={(theme: Theme) => ({
                  [theme.mediaQuery.mobile]: {
                    padding: `0px 16px`
                  }
                })}
              >{`Nếu thiết bị của bạn có camera (khuyên dùng)`}</Typography>
            </div>
          </div>

          <div css={styles.btn()} onClick={onChooseAutoInput}>
            <div
              css={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1.88',
                overflow: 'hidden'
              }}
            >
              <img
                css={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                src={`https://cdn.simplize.vn/simplizevn/community/images/1655366526961-2.png`}
              />
            </div>

            <div css={styles.flexCenter()}>
              <Typography
                variant={'heading_three'}
                variantMobile='heading_fourth'
                cssCustom={{ marginBottom: 2 }}
              >{`Tự nhập liệu`}</Typography>

              <Typography
                variant={'body_two'}
                variantMobile='caption'
              >{`Nếu thiết bị của bạn không có camera`}</Typography>
            </div>
          </div>
        </div>
        {/* </Container> */}
      </div>
    </>
  )
}

export default ChooseAccountAuthenticationMethod
