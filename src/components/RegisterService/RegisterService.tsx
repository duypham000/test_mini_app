import Button from '@/components/Button'
import { Col, Row } from '@/components/GridLayout'
import { RecycleIcon } from '@/icons/RecycleIcon'
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
import { css } from '@emotion/react'
import React from 'react'
import { Wrapper } from './styles'
import { useAppSelector } from '@/redux/hooks'
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

interface Props {
  onGoBack: () => void
  onGoForward: () => void
  dataOpenStockAccount?: any
  setDataOpenStockAccount?: any
  onRefreshClientId: any
}

const RegisterService: React.FC<Props> = (props): JSX.Element => {
  const {
    onGoBack,
    onGoForward,
    dataOpenStockAccount,
    setDataOpenStockAccount,
    onRefreshClientId
  } = props

  const isDark = useAppSelector((state) => state.theme.isDark)

  const [isAgree, setIsAgree] = React.useState(false)

  const isValid = React.useMemo(() => {
    if (dataOpenStockAccount?.openAccountType && isAgree) {
      return true
    }

    return false
  }, [isAgree, dataOpenStockAccount?.openAccountType])

  const isCheckedCS = React.useMemo(() => {
    if (
      dataOpenStockAccount?.openAccountType === 'CS' ||
      dataOpenStockAccount?.openAccountType === 'BOTH'
    ) {
      return true
    }

    return false
  }, [dataOpenStockAccount?.openAccountType])

  const isCheckedPS = React.useMemo(() => {
    if (
      dataOpenStockAccount?.openAccountType === 'PS' ||
      dataOpenStockAccount?.openAccountType === 'BOTH'
    ) {
      return true
    }

    return false
  }, [dataOpenStockAccount?.openAccountType])

  const handleChangeServiceMarginType = (value: any) => {
    if (!value && dataOpenStockAccount.openAccountType === 'BOTH') {
      return
    }

    setDataOpenStockAccount({
      ...dataOpenStockAccount,
      serviceMarginType: value === 0 ? false : true
    })
  }

  const handleChangeServiceOtpMethodCode = (e: any) => {
    setDataOpenStockAccount({
      ...dataOpenStockAccount,
      serviceOtpMethodCode: e.target.value
    })
  }

  const handleCheckedPS = () => {
    switch (dataOpenStockAccount?.openAccountType) {
      case '':
        setDataOpenStockAccount({
          ...dataOpenStockAccount,
          openAccountType: 'PS'
        })
        return
      case 'PS':
        setDataOpenStockAccount({
          ...dataOpenStockAccount,
          openAccountType: ''
        })
        return
      case 'CS':
        setDataOpenStockAccount({
          ...dataOpenStockAccount,
          openAccountType: 'BOTH',
          serviceMarginType: true
        })
        return
      case 'BOTH':
        setDataOpenStockAccount({
          ...dataOpenStockAccount,
          openAccountType: 'CS'
        })
        return
      default:
        break
    }
  }

  const handleChangeIsAgree = (e: any) => {
    setIsAgree(e.target.checked)
  }

  return (
    <Wrapper isDark={isDark}>
      <div
        css={(theme: Theme) =>
          css({
            [theme.mediaQuery.mobile]: {
              paddingBottom: 48
            }
          })
        }
      >
        <div className='container'>
          <div
            css={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 32
            }}
          >
            <Typography
              variant='heading_three'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc011
              })}
            >{`Đăng ký dịch vụ`}</Typography>
          </div>

          <Row className='register_account_group'>
            <Col
              span={24}
              css={(theme: Theme) => ({
                width: '30%',

                [theme.mediaQuery.mobile]: {
                  width: `100%`,
                  marginBottom: 16
                }
              })}
            >
              <Typography
                variant='sub_heading_one'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc011
                })}
              >{`Đăng ký tài khoản`}</Typography>
            </Col>

            <Col span={24} className='register_account_option_list'>
              <div
                css={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}
              >
                <div
                  css={{
                    width: 16,
                    height: 16,
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}
                >
                  <input
                    css={{
                      width: 16,
                      height: 16,
                      outline: 'none',
                      border: 'none'
                    }}
                    type={`checkbox`}
                    checked={isCheckedCS}
                  />
                </div>

                <Typography
                  variant='body_two'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.dc011,
                    marginLeft: 8
                  })}
                >{`Đăng ký tài khoản Chứng khoán cơ sở`}</Typography>
              </div>

              <div css={{ display: 'flex', alignItems: 'center' }}>
                <div
                  css={{
                    width: 16,
                    height: 16,
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}
                >
                  <input
                    css={{
                      width: 16,
                      height: 16,
                      outline: 'none',
                      border: 'none'
                    }}
                    type={`checkbox`}
                    checked={isCheckedPS}
                    onChange={handleCheckedPS}
                  />
                </div>

                <Typography
                  variant='body_two'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.dc011,
                    marginLeft: 8
                  })}
                >{`Đăng ký tài khoản Chứng khoán phái sinh`}</Typography>
              </div>
            </Col>
          </Row>

          <Row className='financial_services_group'>
            <Col
              css={(theme: Theme) => ({
                width: '30%',

                [theme.mediaQuery.mobile]: {
                  width: `100%`,
                  marginBottom: 16
                }
              })}
            >
              <Typography
                variant='sub_heading_one'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc011
                })}
              >{`Dịch vụ tài chính`}</Typography>
            </Col>

            <Col className='financial_services_option'>
              <div css={{ marginBottom: 10 }}>
                <Typography
                  variant='sub_heading_four'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.dc011
                  })}
                >{`Giao dịch ký quỹ`}</Typography>
              </div>

              <div css={{ display: 'flex' }}>
                <div css={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    css={{ width: 16, height: 16 }}
                    type={`radio`}
                    value={1}
                    checked={dataOpenStockAccount?.serviceMarginType === true}
                    onChange={() => handleChangeServiceMarginType(1)}
                  />

                  <Typography
                    variant='body_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.dc011,
                      marginLeft: 8
                    })}
                  >{`Margin Dragon Suit`}</Typography>
                </div>

                <div
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: 30
                  }}
                >
                  <input
                    css={{ width: 16, height: 16 }}
                    type={`radio`}
                    value={0}
                    checked={dataOpenStockAccount?.serviceMarginType === false}
                    onChange={() => handleChangeServiceMarginType(0)}
                  />

                  <Typography
                    variant='body_two'
                    cssCustom={(theme: Theme) => ({
                      color: theme.color.dc011,
                      marginLeft: 8
                    })}
                  >{`Không sử dụng`}</Typography>
                </div>
              </div>
            </Col>
          </Row>

          <Row className='register_account_number_group'>
            <Col
              css={(theme: Theme) => ({
                width: '30%',

                [theme.mediaQuery.mobile]: {
                  width: `100%`,
                  marginBottom: 16
                }
              })}
            >
              <Typography
                variant='sub_heading_one'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc011
                })}
              >{`Đăng ký số tài khoản`}</Typography>
            </Col>

            <Col className='register_account_number_random_group'>
              <Row
                gutter={[6, 4]}
                className='register_account_number_random_input_group'
              >
                <Col>
                  <input
                    value={0}
                    maxLength={1}
                    disabled
                    css={(theme: Theme) =>
                      css({
                        color: `${theme.color.red500} !important`
                      })
                    }
                  />
                </Col>

                <Col>
                  <input
                    css={(theme: Theme) =>
                      css({
                        color: `${theme.color.red500} !important`
                      })
                    }
                    value={3}
                    maxLength={1}
                    disabled
                  />
                </Col>

                <Col>
                  <input
                    css={(theme: Theme) =>
                      css({
                        color: `${theme.color.red500} !important`
                      })
                    }
                    value={3}
                    maxLength={1}
                    disabled
                  />
                </Col>

                {dataOpenStockAccount?.clientId &&
                  dataOpenStockAccount?.clientId
                    ?.split('')
                    ?.map((item: any, index) => (
                      <Col>
                        <input
                          css={(theme: Theme) =>
                            css(
                              index < 2 && {
                                color: `${theme.color.red500} !important`
                              }
                            )
                          }
                          value={item}
                          maxLength={1}
                          disabled
                        />
                      </Col>
                    ))}

                {!dataOpenStockAccount?.clientId && (
                  <>
                    <Col>
                      <input value={`C`} maxLength={1} disabled />
                    </Col>
                    <Col>
                      <input value={6} maxLength={1} disabled />
                    </Col>
                    <Col>
                      <input value={5} maxLength={1} disabled />
                    </Col>
                    <Col>
                      <input value={6} maxLength={1} disabled />
                    </Col>
                    <Col>
                      <input value={7} maxLength={1} disabled />
                    </Col>
                    <Col>
                      <input value={8} maxLength={1} disabled />
                    </Col>
                    <Col>
                      <input value={9} maxLength={1} disabled />
                    </Col>
                  </>
                )}

                <Col
                  css={() => ({
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer'
                  })}
                  onClick={onRefreshClientId}
                >
                  <RecycleIcon />
                </Col>
              </Row>
            </Col>
          </Row>

          <div className='authentication_method_group'>
            <div
              css={(theme: Theme) => ({
                width: '30%',

                [theme.mediaQuery.mobile]: {
                  width: `100%`,
                  marginBottom: 16
                }
              })}
            >
              <Typography
                variant='sub_heading_one'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc011
                })}
              >{`Phương thức xác thực`}</Typography>
            </div>

            <div className='authentication_method_ratio_group'>
              <div
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 8
                }}
              >
                <input
                  css={{ width: 16, height: 16 }}
                  type={`radio`}
                  value={`MAIL`}
                  checked={
                    dataOpenStockAccount?.serviceOtpMethodCode === `MAIL`
                  }
                  onChange={handleChangeServiceOtpMethodCode}
                />

                <Typography
                  variant='body_two'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.dc011,
                    marginLeft: 8
                  })}
                >{`Email (khuyến nghị)`}</Typography>
              </div>

              <div
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 8
                }}
              >
                <input
                  css={{ width: 16, height: 16 }}
                  type={`radio`}
                  value={`CARD`}
                  checked={
                    dataOpenStockAccount?.serviceOtpMethodCode === `CARD`
                  }
                  onChange={handleChangeServiceOtpMethodCode}
                />

                <Typography
                  variant='body_two'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.dc011,
                    marginLeft: 8
                  })}
                >{`Thẻ ma trận (miễn phí cấp lần đầu)`}</Typography>
              </div>

              <div
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 8
                }}
              >
                <input
                  css={{ width: 16, height: 16 }}
                  type={`radio`}
                  value={`SMS`}
                  checked={dataOpenStockAccount?.serviceOtpMethodCode === `SMS`}
                  onChange={handleChangeServiceOtpMethodCode}
                />

                <Typography
                  variant='body_two'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.dc011,
                    marginLeft: 8
                  })}
                >
                  {`Tin nhắn (`}

                  <a
                    href={`https://www.vdsc.com.vn/vn/pages.rv?id=140`}
                    target={`_blank`}
                  >{`Phí dịch vụ`}</a>

                  {`)`}
                </Typography>
              </div>
            </div>
          </div>

          <div className='privacy'>
            <input
              css={{
                width: 16,
                height: 16,
                outline: 'none',
                border: 'none'
              }}
              type={`checkbox`}
              checked={isAgree}
              onChange={handleChangeIsAgree}
            />

            <div css={{ display: 'flex', marginLeft: 8 }}>
              <span>
                <Typography
                  variant='sub_heading_four'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.dc011,
                    display: `inline-block`
                  })}
                >{`Tôi đồng ý với `}</Typography>

                <a
                  css={{
                    margin: '0px 4px',
                    '&:hover': {
                      textDecoration: `underline`
                    }
                  }}
                  href={`https://vdsc.com.vn/vn/terms.rv`}
                  target={`_blank`}
                >{`các điều khoản quy định`}</a>

                <Typography
                  variant='sub_heading_four'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.dc011,
                    display: `inline-block`
                  })}
                >
                  {`về việc mở tài khoản và giao dịch trực tuyến tại Rồng Việt`}
                </Typography>
              </span>
            </div>
          </div>
        </div>

        <div className='register_service_btn_group'>
          <Button
            cssCustom={(theme: Theme) => ({
              width: 102,
              height: 40,
              backgroundColor: theme.color.dc044,
              padding: 0,
              marginRight: 16,

              '&:hover': {
                backgroundColor: theme.color.dc044
              }
            })}
            onClick={onGoBack}
          >
            <Typography
              variant='sub_heading_four'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc014
              })}
            >{`Quay lại`}</Typography>
          </Button>

          <Button
            cssCustom={(theme: Theme) => [
              { width: 112, height: 40, padding: 0 },

              !isValid && {
                cursor: 'not-allowed',
                backgroundColor: theme.color.blue_opacity30,

                '&:hover': {
                  backgroundColor: theme.color.blue_opacity10
                }
              }
            ]}
            onClick={() => (isValid ? onGoForward() : null)}
          >
            <Typography
              variant='sub_heading_four'
              cssCustom={(theme: Theme) => ({
                color: isValid ? theme.color.gray100 : theme.color.dc014
              })}
            >{`Tiếp theo`}</Typography>
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}

export default RegisterService
