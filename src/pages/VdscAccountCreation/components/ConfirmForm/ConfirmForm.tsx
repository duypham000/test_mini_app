import Button from '@/components/Button'
import { MailCheckIcon } from '@/icons/MailCheckIcon'
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
import { css } from '@emotion/react'
import React from 'react'
import { Wrapper } from './styles'
import SupportSystem from './SupportSystem'
import { useAppSelector } from '@/redux/hooks'
import { Link } from 'react-router-dom'

interface Props {
  dataOpenStockAccount?: any
  setDataOpenStockAccount?: any
}

const ConfirmForm: React.FC<Props> = (props): JSX.Element => {
  const { dataOpenStockAccount } = props

  const isDark = useAppSelector((state) => state.theme.isDark)

  const [visibleSupportSystem, setVisibleSupportSystem] = React.useState(false)

  return (
    <Wrapper isDark={isDark}>
      <div className='container'>
        <div
          css={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}
        >
          <Typography
            variant='heading_three'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc067
            })}
          >{`Xác nhận & Ký hợp đồng`}</Typography>
        </div>

        <div className='confỉm_form_icon'>
          <MailCheckIcon />
        </div>

        <div
          css={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}
        >
          <Typography
            variant='body_one'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc011
            })}
          >{`Thông tin mở tài khoản đã được gửi đến email:`}</Typography>
        </div>

        <div className='confirm_form_input_group'>
          <input
            css={(theme: Theme) => ({
              [theme.mediaQuery.mobile]: {
                width: `100% !important`
              }
            })}
            placeholder='nguyenvana@gmail.com'
            value={dataOpenStockAccount?.emailContact}
          />
        </div>

        <div
          css={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}
        >
          <span
            css={(theme: Theme) =>
              css({
                [theme.mediaQuery.mobile]: {
                  textAlign: `center`
                }
              })
            }
          >
            <Typography
              variant='body_one'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc015
              })}
            >{`Bạn vui lòng`}</Typography>

            <Typography
              variant='body_one'
              cssCustom={(theme: Theme) => ({
                color: theme.color.green500,
                margin: '0px 4px'
              })}
            >{`kiểm tra email và xác nhận thông tin`}</Typography>

            <Typography
              variant='body_one'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc015
              })}
            >{`nhé!`}</Typography>
          </span>
        </div>

        <div
          css={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}
        >
          <Typography
            variant='body_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc015,
              textAlign: `center`
            })}
          >{`Hãy kiểm tra thư rác nếu email không xuất hiện trong hộp thư đến của bạn.`}</Typography>
        </div>

        <div
          css={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}
        >
          <Typography
            variant='sub_heading_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc067
            })}
          >{`Bạn không nhận được Email?`}</Typography>
        </div>

        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 24
          }}
        >
          <div
            css={{ cursor: 'pointer' }}
            onClick={() => setVisibleSupportSystem(true)}
          >
            <Typography
              variant='sub_heading_three'
              cssCustom={(theme: Theme) => ({
                color: theme.color.blue500
              })}
            >{`Liên hệ hỗ trợ`}</Typography>
          </div>
        </div>

        <div
          css={(theme: Theme) => ({
            display: 'flex',
            justifyContent: 'center',

            [theme.mediaQuery.mobile]: {
              width: `100%`
            }
          })}
        >
          <Link
            to={'/portfolio'}
            css={(theme: Theme) =>
              css({
                [theme.mediaQuery.mobile]: {
                  width: `100%`
                }
              })
            }
          >
            <Button
              cssCustom={(theme: Theme) => ({
                width: 240,
                paddingLeft: 0,
                paddingRight: 0,

                [theme.mediaQuery.mobile]: {
                  width: `100%`
                }
              })}
              variant='sub_heading_four'
            >{`Đi đến Danh mục đầu tư`}</Button>
          </Link>
        </div>

        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 24
          }}
        >
          <Typography
            variant='body_two'
            css={(theme: Theme) => ({
              color: theme.color.dc011
            })}
          >
            {`Tham gia nhóm Zalo của Simplize và Rồng Việt`}
            <Link
              to={`https://zalo.me/g/rimokc313`}
              target={`_blank`}
              css={{
                margin: '0px 4px',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >{`tại đây`}</Link>
            {`để được hỗ trợ giao dịch trên app Rồng Việt.`}
          </Typography>
        </div>
      </div>

      <SupportSystem
        visible={visibleSupportSystem}
        onCancel={() => setVisibleSupportSystem(false)}
        dataOpenStockAccount={dataOpenStockAccount}
      />
    </Wrapper>
  )
}

export default ConfirmForm
