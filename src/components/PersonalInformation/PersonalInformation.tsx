/* eslint-disable no-unsafe-optional-chaining */
import Button from '@/components/Button'
import { PlusIcon } from '@/icons/PlusIcon'
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
import moment from 'moment'
import React from 'react'
import { styles } from './styles'
import NormalInput from '@/components/NormalInput'
import DatePicker from '@/components/DatePicker'
import Select from '@/components/Select'
import { css } from '@emotion/react'
import { Col, Row } from '../GridLayout'

interface Props {
  dataOpenStockAccount: any
  setDataOpenStockAccount: any
  onGoBack: () => void
  onGoForward: () => void
  visible_type?: 'EKYC' | 'AUTO_INPUT'
  issuePlaceList?: any
  provinceList?: any
  bankList?: any
}

const PersonalInformation: React.FC<Props> = (props): JSX.Element => {
  const {
    visible_type = 'AUTO_INPUT',
    dataOpenStockAccount,
    setDataOpenStockAccount,
    onGoBack,
    onGoForward,
    issuePlaceList = [],
    provinceList = [],
    bankList = []
  } = props

  const issuePlaceListFilter = React.useMemo(() => {
    switch (dataOpenStockAccount?.idNumberCard?.length) {
      case 12:
        return issuePlaceList?.filter(
          (item: any) =>
            item.code === 'CCS-QLHC' || item.code === 'CCS-ĐKQL-DLQG'
        )
      case 9:
        return issuePlaceList?.filter(
          (item: any) =>
            !(item.code === 'CCS-QLHC' || item.code === 'CCS-ĐKQL-DLQG')
        )
      default:
        return issuePlaceList
    }
  }, [issuePlaceList, dataOpenStockAccount?.idNumberCard])

  const provinceListFilter = React.useMemo(() => {
    return provinceList?.filter(
      (item: any) =>
        !(
          item.code === 'CCS-QLHC' ||
          item.code === 'CCS-ĐKQL-DLQG' ||
          item.code === 'CQLBQP' ||
          item.code === 'QL' ||
          item.code === 'SKH' ||
          item.code === 'UBCK'
        )
    )
  }, [provinceList])

  const isValid = React.useMemo(() => {
    const {
      fullName,
      birthDay,
      idNumberCard,
      idIssuePlaceCode,
      idIssueDate,
      mobileNumberContact,
      adrResidenceDetail,
      adrResidenceCityCode,
      emailContact,
      gender,
      bankAccounts
    } = dataOpenStockAccount
    if (
      fullName &&
      birthDay &&
      idNumberCard &&
      idIssuePlaceCode &&
      idIssueDate &&
      mobileNumberContact &&
      adrResidenceDetail &&
      adrResidenceCityCode &&
      emailContact &&
      gender &&
      bankAccounts[0]?.accountNo &&
      bankAccounts[0]?.bankCode &&
      bankAccounts[0]?.bankBranchCityCode
    ) {
      return true
    }

    return false
  }, [dataOpenStockAccount])

  const handleChangeFullName = (e: any) => {
    setDataOpenStockAccount({
      ...dataOpenStockAccount,
      fullName: e.target.value
    })
  }

  const handleChangeGender = (e: any) => {
    setDataOpenStockAccount({
      ...dataOpenStockAccount,
      gender: e.target.value
    })
  }

  const handleChangeBirthday = (date: any) => {
    setDataOpenStockAccount({
      ...dataOpenStockAccount,
      birthDay: date ? date.format('DD/MM/YYYY') : ''
    })
  }

  const handleChangeIdNumberCard = (e: any) => {
    setDataOpenStockAccount({
      ...dataOpenStockAccount,
      idNumberCard: e.target.value
    })
  }

  const handleChangeIdIssuePlaceCode = (value: any) => {
    setDataOpenStockAccount({
      ...dataOpenStockAccount,
      idIssuePlaceCode: value
    })
  }

  const handleChangeIdIssueDate = (date: any) => {
    setDataOpenStockAccount({
      ...dataOpenStockAccount,
      idIssueDate: date ? date.format('DD/MM/YYYY') : ''
    })
  }

  const handleChangeMobileNumberContact = (e: any) => {
    setDataOpenStockAccount({
      ...dataOpenStockAccount,
      mobileNumberContact: e.target.value
    })
  }

  const handleChangeAdrResidenceDetail = (e: any) => {
    setDataOpenStockAccount({
      ...dataOpenStockAccount,
      adrResidenceDetail: e.target.value
    })
  }

  const handleChangeAdrResidenceCityCode = (value: any) => {
    setDataOpenStockAccount({
      ...dataOpenStockAccount,
      adrResidenceCityCode: value
    })
  }

  const handleChangeEmailContact = (e: any) => {
    setDataOpenStockAccount({
      ...dataOpenStockAccount,
      emailContact: e.target.value
    })
  }

  const handleChangeAccountNo = (index: any) => {
    return (e: any) => {
      const newBankAccounts = [...dataOpenStockAccount?.bankAccounts]
      newBankAccounts[index].accountNo = e.target.value

      setDataOpenStockAccount({
        ...dataOpenStockAccount,
        bankAccounts: newBankAccounts
      })
    }
  }

  const handleChangeBankCode = (index: any) => {
    return (value: any) => {
      const newBankAccounts = [...dataOpenStockAccount?.bankAccounts]
      newBankAccounts[index].bankCode = value

      setDataOpenStockAccount({
        ...dataOpenStockAccount,
        bankAccounts: newBankAccounts
      })
    }
  }

  const handleChangeBankBranchCityCode = (index: any) => {
    return (value: any) => {
      const newBankAccounts = [...dataOpenStockAccount?.bankAccounts]
      newBankAccounts[index].bankBranchCityCode = value

      setDataOpenStockAccount({
        ...dataOpenStockAccount,
        bankAccounts: newBankAccounts
      })
    }
  }

  const handleAddMoreBankAccount = () => {
    setDataOpenStockAccount({
      ...dataOpenStockAccount,
      bankAccounts: [
        ...dataOpenStockAccount?.bankAccounts,
        {
          accountMode: 'BANK',
          accountNo: '',
          bankCode: '',
          bankBranchCityCode: ''
        }
      ]
    })
  }

  return (
    <div
      css={(theme: Theme) => ({
        [theme.mediaQuery.mobile]: {
          paddingBottom: 48
        }
      })}
    >
      <div>
        <div
          css={{ marginBottom: 8, display: 'flex', justifyContent: 'center' }}
        >
          <Typography
            variant='heading_three'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc011
            })}
          >
            {visible_type === 'AUTO_INPUT' && `Nhập thông tin cá nhân`}
            {visible_type === 'EKYC' && `Bổ sung thông tin cá nhân`}
          </Typography>
        </div>

        <div
          css={() =>
            css({
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 24
            })
          }
        >
          <Typography
            variant='body_two'
            cssCustom={(theme: Theme) =>
              css({
                color: theme.color.dc015,
                textAlign: 'center'
              })
            }
          >
            {visible_type === 'AUTO_INPUT' &&
              `Bạn vui lòng nhập đầy đủ các thông tin bên dưới.`}

            {visible_type === 'EKYC' &&
              `Hệ thống đã tự động trích xuất thông tin trên CMND/CCCD của bạn. Bạn vui lòng kiểm tra lại và điều chỉnh nếu cần.`}
          </Typography>
        </div>

        <div css={{ marginBottom: 16 }}>
          <Typography
            variant='sub_heading_one'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc011
            })}
          >{`Thông tin cá nhân`}</Typography>
        </div>

        <div css={styles.inputWrapper}>
          <div>
            <Typography
              variant='caption'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc011
              })}
            >{`Họ và tên`}</Typography>
          </div>

          <div>
            <NormalInput
              placeholder={`Nhập họ và tên...`}
              value={dataOpenStockAccount?.fullName}
              onChange={handleChangeFullName}
            />
          </div>
        </div>

        <div css={styles.gender}>
          <div>
            <Typography
              variant='caption'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc011
              })}
            >{`Giới tính`}</Typography>
          </div>
          <div css={{ display: 'flex' }}>
            <div
              css={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() =>
                setDataOpenStockAccount({
                  ...dataOpenStockAccount,
                  gender: 'M'
                })
              }
            >
              <input
                type={`radio`}
                value={`M`}
                checked={dataOpenStockAccount?.gender === `M`}
                onChange={handleChangeGender}
              />

              <Typography
                variant='body_two'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc011,
                  marginLeft: 8
                })}
              >{`Nam`}</Typography>
            </div>

            <div
              css={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                marginLeft: 30
              }}
              onClick={() =>
                setDataOpenStockAccount({
                  ...dataOpenStockAccount,
                  gender: 'F'
                })
              }
            >
              <input
                type={`radio`}
                value={`F`}
                checked={dataOpenStockAccount?.gender === `F`}
                onChange={handleChangeGender}
              />

              <Typography
                variant='body_two'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.dc011,
                  marginLeft: 8
                })}
              >{`Nữ`}</Typography>
            </div>
          </div>
        </div>
        <div css={styles.inputWrapper}>
          <div>
            <Typography
              variant='caption'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc011
              })}
            >{`Ngày sinh`}</Typography>
          </div>

          <div>
            <DatePicker
              placeholderText='Chọn ngày sinh...'
              selected={
                dataOpenStockAccount?.birthDay
                  ? moment(
                      dataOpenStockAccount?.birthDay,
                      'DD/MM/YYYY'
                    ).toDate()
                  : null
              }
              onChange={(date: Date) =>
                handleChangeBirthday(date ? moment(date) : null)
              }
            />
          </div>
        </div>

        <div css={styles.inputWrapper}>
          <div>
            <Typography
              variant='caption'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc011
              })}
            >{`Số CMND/CCCD`}</Typography>
          </div>

          <div>
            <NormalInput
              placeholder={`Nhập số CMND/CCCD...`}
              value={dataOpenStockAccount?.idNumberCard}
              onChange={handleChangeIdNumberCard}
              type={`number`}
            />
          </div>
        </div>

        <Row gutter={16} css={{ marginBottom: 16 }}>
          <Col span={12}>
            <div css={styles.inputSide}>
              <div>
                <Typography
                  variant='caption'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.dc011
                  })}
                >{`Nơi cấp`}</Typography>
              </div>

              <div>
                <Select
                  showSearch={true}
                  value={dataOpenStockAccount?.idIssuePlaceCode}
                  onChange={handleChangeIdIssuePlaceCode}
                  options={issuePlaceListFilter
                    ?.sort((a: any, b: any) => {
                      const codeA = a.name.toUpperCase()
                      const codeB = b.name.toUpperCase()
                      if (codeA < codeB) {
                        return -1
                      }
                      if (codeA > codeB) {
                        return 1
                      }

                      return 0
                    })
                    ?.map((item: any) => ({
                      value: item?.code,
                      label: item?.name
                    }))}
                />
              </div>
            </div>
          </Col>

          <Col span={12}>
            <div css={styles.inputSide}>
              <div>
                <Typography
                  variant='caption'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.dc011
                  })}
                >{`Ngày cấp`}</Typography>
              </div>

              <div className='personal_information_column_third_input'>
                <DatePicker
                  placeholderText='Chọn ngày...'
                  selected={
                    dataOpenStockAccount?.idIssueDate
                      ? moment(
                          dataOpenStockAccount?.idIssueDate,
                          'DD/MM/YYYY'
                        ).toDate()
                      : null
                  }
                  onChange={(date: Date) =>
                    handleChangeIdIssueDate(date ? moment(date) : null)
                  }
                />
              </div>
            </div>
          </Col>
        </Row>

        <div css={styles.inputWrapper}>
          <div>
            <Typography
              variant='caption'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc011
              })}
            >{`Số điện thoại`}</Typography>
          </div>

          <div>
            <NormalInput
              placeholder={`Nhập số điện thoại...`}
              value={dataOpenStockAccount?.mobileNumberContact}
              onChange={handleChangeMobileNumberContact}
              type={`number`}
            />
          </div>
        </div>

        <div css={styles.inputWrapper}>
          <div>
            <Typography
              variant='caption'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc011
              })}
            >{`Địa chỉ liên hệ`}</Typography>
          </div>

          <div>
            <NormalInput
              placeholder={`Nhập địa chỉ...`}
              value={dataOpenStockAccount?.adrResidenceDetail}
              onChange={handleChangeAdrResidenceDetail}
            />
          </div>
        </div>

        <div css={styles.inputWrapper}>
          <div>
            <Typography
              variant='caption'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc011
              })}
            >{`Tỉnh/TP`}</Typography>
          </div>

          <div>
            <Select
              showSearch={true}
              value={dataOpenStockAccount?.adrResidenceCityCode}
              onChange={handleChangeAdrResidenceCityCode}
              options={provinceListFilter
                ?.sort((a: any, b: any) => {
                  const codeA = a.name.toUpperCase()
                  const codeB = b.name.toUpperCase()
                  if (codeA < codeB) {
                    return -1
                  }
                  if (codeA > codeB) {
                    return 1
                  }

                  return 0
                })
                ?.map((item: any) => ({
                  value: item?.code,
                  label: item?.name
                }))}
            />
          </div>
        </div>
        <div css={styles.inputWrapper}>
          <div>
            <Typography
              variant='caption'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc011
              })}
            >{`Email`}</Typography>
          </div>

          <div>
            <NormalInput
              placeholder={`Nhập email...`}
              value={dataOpenStockAccount?.emailContact}
              onChange={handleChangeEmailContact}
            />
          </div>
        </div>

        <div
          css={(theme: Theme) => ({
            width: '100%',
            height: `1px`,
            backgroundColor: theme.color.white_opacity10,
            margin: '16px 0px 24px'
          })}
        />
        <div>
          {dataOpenStockAccount?.bankAccounts?.map(
            (item: any, index: number) => (
              <div css={styles.backGroup} key={index}>
                <Typography
                  variant='sub_heading_one'
                  cssCustom={(theme: Theme) =>
                    css({
                      color: theme.color.dc011,
                      marginBottom: 16
                    })
                  }
                >{`Tài khoản ngân hàng ${index + 1}`}</Typography>

                <div css={styles.inputWrapper}>
                  <div>
                    <Typography
                      variant='caption'
                      cssCustom={(theme: Theme) => ({
                        color: theme.color.dc011
                      })}
                    >{`Số tài khoản`}</Typography>
                  </div>

                  <div>
                    <NormalInput
                      placeholder={`Nhập số tài khoản...`}
                      value={item?.accountNo}
                      onChange={handleChangeAccountNo(index)}
                    />
                  </div>
                </div>

                <div css={styles.inputWrapper}>
                  <div>
                    <Typography
                      variant='caption'
                      cssCustom={(theme: Theme) => ({
                        color: theme.color.dc011
                      })}
                    >{`Ngân hàng`}</Typography>
                  </div>

                  <div>
                    <Select
                      showSearch={true}
                      value={item?.bankCode}
                      onChange={handleChangeBankCode(index)}
                      options={bankList
                        ?.sort((a: any, b: any) => {
                          const codeA = a.code.toUpperCase()
                          const codeB = b.code.toUpperCase()
                          if (codeA < codeB) {
                            return -1
                          }
                          if (codeA > codeB) {
                            return 1
                          }

                          return 0
                        })
                        ?.map((bankItem: any) => ({
                          value: bankItem.code,
                          label: `${bankItem?.code} - ${bankItem?.name}`
                        }))}
                    />
                  </div>
                </div>
                <div css={styles.inputWrapper}>
                  <div>
                    <Typography
                      variant='caption'
                      cssCustom={(theme: Theme) => ({
                        color: theme.color.dc011
                      })}
                    >{`Tỉnh/TP`}</Typography>
                  </div>
                  <div>
                    <Select
                      showSearch={true}
                      value={item?.bankBranchCityCode}
                      onChange={handleChangeBankBranchCityCode(index)}
                      options={provinceListFilter
                        ?.sort((a: any, b: any) => {
                          const codeA = a.name.toUpperCase()
                          const codeB = b.name.toUpperCase()
                          if (codeA < codeB) {
                            return -1
                          }
                          if (codeA > codeB) {
                            return 1
                          }

                          return 0
                        })
                        ?.map((item: any) => ({
                          value: item?.code,
                          label: item?.name
                        }))}
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {dataOpenStockAccount?.bankAccounts?.length < 3 && (
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 24,
              marginBottom: 24
            }}
          >
            <PlusIcon
              css={(theme: Theme) => ({
                stroke: theme.color.blue500
              })}
            />

            <div onClick={handleAddMoreBankAccount}>
              <Typography
                variant='sub_heading_four'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.blue500,
                  marginLeft: 4,
                  cursor: 'pointer'
                })}
              >
                {`Thêm tài khoản ngân hàng`}
                <span
                  css={(theme: Theme) =>
                    css({
                      color: theme.color.dc015
                    })
                  }
                >
                  {' '}
                  {`(tối đa 2 tài khoản)`}
                </span>
              </Typography>
            </div>
          </div>
        )}
        <Row gutter={16}>
          <Col span={12}>
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
                  color: theme.color.dc015
                })}
              >{`Quay lại`}</Typography>
            </Button>
          </Col>
          <Col span={12}>
            <Button
              cssCustom={(theme: Theme) => [
                { width: 112, height: 40, padding: 0 },

                !isValid && {
                  cursor: 'not-allowed',
                  backgroundColor: theme.color.blue_opacity30,

                  '&:hover': {
                    backgroundColor: theme.color.blue_opacity30
                  }
                }
              ]}
              onClick={() => (isValid ? onGoForward() : null)}
            >
              <Typography
                variant='sub_heading_four'
                cssCustom={(theme: Theme) => ({
                  color: isValid ? theme.color.gray100 : theme.color.dc015
                })}
              >{`Tiếp theo`}</Typography>
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default PersonalInformation
