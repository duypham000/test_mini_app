import React from 'react'
import { Wrapper } from './styles'
import TakePhotoModalInfront from '@/components/TakePhotoModal'
import TakePhotoModalBehind from '@/components/TakePhotoModal'
import PersonalInformation from '@/components/PersonalInformation'
import RegisterService from '@/components/RegisterService'
import ConfirmForm from '@/components/ConfirmForm'
import classNames from 'classnames'
import TakePhotoOfIDModal from '@/components/TakePhotoOfIDModal'
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
import Button from '@/components/Button'
import { Col, Row } from '@/components/GridLayout'
import { css } from '@emotion/react'
import { useAppSelector } from '@/redux/hooks'
import VerticalStep from '@/components/VerticalStep'
import HorizontalStep from '@/components/HorizontalStep'
import NativeMethod from '@/NativeMethod'
import { urltoFile } from '@/NativeMethod/NativeMethod'
import moment from 'moment'
import vdscApi from '@/apis/vdsc-api'
import AuthenticationMethodModal from '@/components/AuthenticationMethodModal'
import ConfirmOTPModal from '@/components/ConfirmOTPModal'
import { UrlInternal } from '@/constants/url-internal'
import { useNavigate } from 'react-router-dom'
import VdscLayout from '@/layouts/VdscLayout'
import { EmptyVideoIcon } from '@/icons/EmptyVideoIcon'
import { colors } from '@/themes/colors'
import BorderCorner from '@/components/BorderCorner'

const {
  ekycFaceLiveVideo,
  ekycOcr,
  getIssuePlaceList,
  getProvinceList,
  sendOtp,
  verifyOtp,
  generateClientId,
  getBankList
} = vdscApi

const EkycAuthentication: React.FC = (): JSX.Element => {
  const isDark = useAppSelector((state) => state.theme.isDark)
  const navigate = useNavigate()

  const [dataOpenStockAccount, setDataOpenStockAccount] = React.useState({
    otpSendingMethod: '',
    fullName: '',
    gender: 'M',
    emailContact: '',
    mobileNumberContact: '',
    birthDay: '',
    idNumberCard: '',
    idIssuePlaceCode: '',
    idIssueDate: '',
    adrResidenceDetail: '',
    adrResidenceCityCode: '',
    clientRemark: 'Note',
    serviceOtpMethodCode: 'MAIL',
    serviceETA: false,
    serviceMarginType: false,
    clientId: '',
    openAccountType: 'CS',
    bankAccounts: [
      {
        accountMode: 'BANK',
        accountNo: '',
        bankCode: '',
        bankBranchCityCode: ''
      }
    ],
    serviceCallPwd: ''
  })
  const [visibleTakePhotoModalInfront, setVisibleTakePhotoModalInfront] =
    React.useState(false)
  const [visibleTakePhotoModalBehind, setVisibleTakePhotoModalBehind] =
    React.useState(false)
  // const [visibleTakePhotoModalProfile, setVisibleTakePhotoModalProfile] =
  //   React.useState(false)
  const [visibleTakePhotoOfIDModal, setVisibleTakePhotoOfIDModal] =
    React.useState(false)
  const [loadingGoNextEkyc, setLoadingGoNextEkyc] = React.useState(false)
  // const [profileImage, setProfileImage] = React.useState()
  const [errorCount, setErrorCount] = React.useState(0)
  const [currentStep, setCurrentStep] = React.useState(1)
  const [subCurrentStep, setSubCurrentStep] = React.useState(0)
  const [infrontImage, setInfrontImage] = React.useState<any>()
  const [behindImage, setBehindImage] = React.useState<any>()
  const [profileVideo, setProfileVideo] = React.useState<any>()
  const [provinceList, setProvinceList] = React.useState([])
  const [issuePlaceList, setIssuePlaceList] = React.useState([])

  const [currentStepEkycAuthentication, setCurrentStepEkycAuthentication] =
    React.useState(0)
  const [visibleAuthMethodModal, setVisibleAuthMethodModal] =
    React.useState(false)
  const [spinningChooseTypeOtp, setSpinningChooseTypeOtp] =
    React.useState(false)
  const [visibleConfirmOTPModal, setVisibleConfirmOTPModal] =
    React.useState(false)
  const [spinningConfirmOTPModal, setSpinningConfirmOTPModal] =
    React.useState(false)
  const [bankList, setBankList] = React.useState([])

  React.useEffect(() => {
    if (!dataOpenStockAccount.clientId) {
      generateClientId()
        .then((res: any) => {
          setDataOpenStockAccount({
            ...dataOpenStockAccount,
            clientId: res.data.clientId
          })
        })
        .catch((error: any) => {
          console.log(error?.response?.data.message)
        })
    }
  }, [currentStepEkycAuthentication, dataOpenStockAccount.clientId])

  const iOS = React.useMemo(() => {
    const WINDOW: any = window
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !WINDOW.MSStream
    return isIOS
  }, [])

  React.useEffect(() => {
    getProvinceList()
      .then((res: any) => {
        setProvinceList(res?.data)
      })
      .catch((error: any) => {
        console.log(error?.response?.data.message)
      })
  }, [])
  React.useEffect(() => {
    getIssuePlaceList()
      .then((res: any) => {
        setIssuePlaceList(res?.data)
      })
      .catch((error: any) => {
        console.log(error?.response?.data.message)
      })
  }, [])

  React.useEffect(() => {
    getBankList()
      .then((res: any) => {
        setBankList(res?.data)
      })
      .catch((error: any) => {
        console.log(error?.response?.data.message)
      })
  }, [])

  const getImage = (callback) => {
    NativeMethod.getImage({
      callback: (file) => {
        const mineType =
          'image/' + file.name.split('.')[file.name.split('.').length - 1]
        urltoFile(file.base64, file.name, mineType).then((e) => {
          callback(e)
        })
      }
    })
  }

  const takeImage = (callback) => {
    NativeMethod.takeImage({
      callback: (file) => {
        const mineType =
          'image/' + file.name.split('.')[file.name.split('.').length - 1]
        urltoFile(file.base64, file.name, mineType).then((e) => {
          callback(e)
        })
      }
    })
  }

  const handleUploadInfrontImage = () => {
    getImage(setInfrontImage)
    // setInfrontImage(fileImage)
  }

  const handletakeInfrontImage = () => {
    takeImage(setInfrontImage)
    // setBehindImage(fileImage)
  }

  const handleRecordVideo = () => {
    NativeMethod.recordVideo({
      callback: (file) => {
        const mineType =
          'video/' + file.name.split('.')[file.name.split('.').length - 1]
        urltoFile(file.base64, file.name, mineType).then((e) => {
          setProfileVideo(e)
        })
      }
    })
  }

  const handleUploadBehindImage = () => {
    getImage(setBehindImage)
    // setBehindImage(fileImage)
  }

  const handletakeBehindImage = () => {
    takeImage(setBehindImage)
    // setBehindImage(fileImage)
  }

  const handleUseImageFileInfront = (imageFile: any) => {
    setInfrontImage(imageFile)
  }

  const handleUseImageFileBehind = (imageFile: any) => {
    setBehindImage(imageFile)
  }

  const handleCancelTakePhotoOfIDModal = () => {
    setVisibleTakePhotoOfIDModal(false)
  }

  const handleVisibleTakePhotoOfIDModal = () => {
    setVisibleTakePhotoOfIDModal(true)
  }

  // const handleUseImageFileProfile = (imageFile: any) => {
  //   setProfileImage(imageFile)
  // }

  const handleCancelAuthenticationMethodModal = () => {
    setVisibleAuthMethodModal(false)
  }

  const handleChooseTypeOtpSms = () => {
    if (spinningChooseTypeOtp) return

    setSpinningChooseTypeOtp(true)
    sendOtp({
      ...dataOpenStockAccount,
      otpSendingMethod: 'SMS'
    })
      .then(() => {
        setDataOpenStockAccount({
          ...dataOpenStockAccount,
          otpSendingMethod: 'SMS'
        })
        setVisibleAuthMethodModal(false)
        setVisibleConfirmOTPModal(true)
      })
      .catch((error: any) => {
        NativeMethod.toast(error?.response?.data.message)
        // enqueueSnackbar(error?.response?.data.message, {
        //   variant: 'error',
        //   autoHideDuration: 4000,
        // });
      })
      .finally(() => {
        setSpinningChooseTypeOtp(false)
      })
  }

  const handleChooseTypeOtpZalo = () => {
    if (spinningChooseTypeOtp) return

    setSpinningChooseTypeOtp(true)
    sendOtp({
      ...dataOpenStockAccount,
      otpSendingMethod: 'ZALO'
    })
      .then(() => {
        setDataOpenStockAccount({
          ...dataOpenStockAccount,
          otpSendingMethod: 'ZALO'
        })
        setVisibleAuthMethodModal(false)
        setVisibleConfirmOTPModal(true)
      })
      .catch((error: any) => {
        NativeMethod.toast(error?.response?.data.message)
        // enqueueSnackbar(error?.response?.data.message, {
        //   variant: 'error',
        //   autoHideDuration: 4000,
        // });
      })
      .finally(() => {
        setSpinningChooseTypeOtp(false)
      })
  }

  const handleCancelConfirmOTPModal = () => {
    setVisibleConfirmOTPModal(false)
  }

  const handleSubmitOtp = (value: string) => {
    if (spinningConfirmOTPModal) return

    setSpinningConfirmOTPModal(true)
    verifyOtp({
      otp: value
    })
      .then(() => {
        setVisibleConfirmOTPModal(false)
        setCurrentStepEkycAuthentication(currentStepEkycAuthentication + 1)
      })
      .catch((error: any) => {
        NativeMethod.toast(error?.response?.data.message)
      })
      .finally(() => {
        setSpinningConfirmOTPModal(false)
      })
  }

  const handleReSendOtp = () => {
    switch (dataOpenStockAccount?.otpSendingMethod) {
      case 'SMS':
        handleChooseTypeOtpSms()
        return
      case 'ZALO':
        handleChooseTypeOtpZalo()
        return
      default:
        break
    }
  }

  const handleRefreshClientId = () => {
    generateClientId()
      .then((res: any) => {
        setDataOpenStockAccount({
          ...dataOpenStockAccount,
          clientId: res.data.clientId
        })
      })
      .catch((error: any) => {
        NativeMethod.toast(error?.response?.data.message)
        // enqueueSnackbar(error?.response?.data.message, {
        //   variant: 'error',
        //   autoHideDuration: 4000,
        // });
      })
  }

  const onGoBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      return
    }

    if (subCurrentStep > 0) {
      setSubCurrentStep(subCurrentStep - 1)
      return
    }

    // setTypeDisplay(TYPE_DISPLAY.CHOOSE_ACCOUNT_AUTHENTICATION_METHOD)
    navigate(UrlInternal.HOME_PAGE)
  }
  const onGoNext = () => {
    if (loadingGoNextEkyc) return

    if (subCurrentStep === 0) {
      if (!infrontImage || !behindImage) {
        NativeMethod.toast(
          'Bạn phải chụp đầy đủ ảnh mặt trước và mặt sau CMND/CCCD'
        )
        // enqueueSnackbar(
        //   'Bạn phải chụp đầy đủ ảnh mặt trước và mặt sau CMND/CCCD',
        //   {
        //     variant: 'error',
        //     autoHideDuration: 4000,
        //   }
        // );
        return
      }
      if (errorCount >= 2) {
        NativeMethod.toast(
          'Bạn có thể chọn hình thức nhập liệu trong trường hợp không sử dụng được eKYC để xác thực.'
        )
      }

      const formData = new FormData()
      formData.append('frontCard', infrontImage)
      formData.append('backCard', behindImage)
      setLoadingGoNextEkyc(true)
      ekycOcr(formData)
        .then(() => {
          setSubCurrentStep(subCurrentStep + 1)
        })
        .catch((error: any) => {
          NativeMethod.toast(error?.response?.data.message)
          setErrorCount((errCount) => errCount + 1)
          // enqueueSnackbar(error?.response?.data.message, {
          //   variant: 'error',
          //   autoHideDuration: 4000,
          // });
        })
        .finally(() => {
          setLoadingGoNextEkyc(false)
        })
      return
    }

    if (subCurrentStep === 1) {
      if (!profileVideo) {
        NativeMethod.toast('Bạn phải quay video chân dung')
        // enqueueSnackbar('Bạn phải quay video chân dung', {
        //   variant: 'error',
        //   autoHideDuration: 4000,
        // });
        return
      }
      const formData = new FormData()
      formData.append('faceLiveVideo', profileVideo)
      formData.append('rotate', iOS ? 'left' : 'normal')
      setLoadingGoNextEkyc(true)
      ekycFaceLiveVideo(formData)
        .then((res: any) => {
          const {
            adrResidenceCity,
            adrResidenceDetail,
            birthDay,
            emailContact,
            fullName,
            gender,
            idIssueDate,
            idIssuePlace,
            idNumberCard,
            mobileNumberContact,
            serviceETA,
            serviceMarginType
          } = res.data

          const adrResidence: any = provinceList.find(
            (item: any) => item.name == adrResidenceCity
          )

          const idIssue: any = issuePlaceList.find(
            (item: any) => item.name == idIssuePlace
          )

          setDataOpenStockAccount({
            ...dataOpenStockAccount,
            adrResidenceCityCode: adrResidence?.code || '',
            adrResidenceDetail: adrResidenceDetail,
            birthDay: birthDay,
            emailContact: emailContact,
            fullName: fullName,
            gender: gender,
            idIssueDate: idIssueDate,
            idIssuePlaceCode: idIssue?.code || '',
            idNumberCard: idNumberCard,
            mobileNumberContact: mobileNumberContact,
            serviceETA: serviceETA,
            serviceMarginType: serviceMarginType,
            bankAccounts: [
              {
                accountMode: 'BANK',
                accountNo: '',
                bankCode: '',
                bankBranchCityCode: ''
              }
            ]
          })
          setSubCurrentStep(subCurrentStep + 1)
        })
        .catch((error: any) => {
          NativeMethod.toast(error?.response?.data.message)
          // enqueueSnackbar(error?.response?.data.message, {
          //   variant: 'error',
          //   autoHideDuration: 4000,
          // });
        })
        .finally(() => {
          setLoadingGoNextEkyc(false)
        })
      return
    }

    if (subCurrentStep < 2) {
      setSubCurrentStep(subCurrentStep + 1)
      return
    }

    if (subCurrentStep === 2 && currentStep === 0) {
      if (moment(dataOpenStockAccount?.birthDay, 'DD/MM/YYYY') > moment()) {
        NativeMethod.toast('Ngày sinh lớn hơn ngày hiện tại')
        // enqueueSnackbar('Ngày sinh lớn hơn ngày hiện tại', {
        //   variant: 'error',
        //   autoHideDuration: 4000,
        // });
        return
      }

      if (
        moment(dataOpenStockAccount?.birthDay, 'DD/MM/YYYY') >
        moment().subtract(16, 'years')
      ) {
        NativeMethod.toast(
          'Người từ 16 tuổi trở lên mới được mở tài khoản chứng khoán'
        )
        // enqueueSnackbar(
        //   'Người từ 16 tuổi trở lên mới được mở tài khoản chứng khoán',
        //   {
        //     variant: 'error',
        //     autoHideDuration: 4000,
        //   }
        // );
        return
      }

      if (dataOpenStockAccount.idNumberCard.length !== 9) {
        if (dataOpenStockAccount.idNumberCard.length !== 12) {
          NativeMethod.toast(
            'Số CMND/CCCD không đúng định dạng, không phải 9 hoặc 12 số'
          )
          // enqueueSnackbar(
          //   'Số CMND/CCCD không đúng định dạng, không phải 9 hoặc 12 số',
          //   {
          //     variant: 'error',
          //     autoHideDuration: 4000,
          //   }
          // );
          return
        }
      }

      if (moment(dataOpenStockAccount?.idIssueDate, 'DD/MM/YYYY') > moment()) {
        NativeMethod.toast('Ngày cấp lớn hơn ngày hiện tại')
        // enqueueSnackbar('Ngày cấp lớn hơn ngày hiện tại', {
        //   variant: 'error',
        //   autoHideDuration: 4000,
        // });
        return
      }

      if (
        moment(dataOpenStockAccount?.idIssueDate, 'DD/MM/YYYY') <
        moment(dataOpenStockAccount?.birthDay, 'DD/MM/YYYY')
      ) {
        NativeMethod.toast('Ngày cấp nhỏ hơn ngày sinh')
        // enqueueSnackbar('Ngày cấp nhỏ hơn ngày sinh', {
        //   variant: 'error',
        //   autoHideDuration: 4000,
        // });
        return
      }

      if (dataOpenStockAccount.mobileNumberContact.length !== 10) {
        NativeMethod.toast('Số điện thoại không đúng định dạng')
        // enqueueSnackbar('Số điện thoại không đúng định dạng', {
        //   variant: 'error',
        //   autoHideDuration: 4000,
        // });
        return
      }

      if (dataOpenStockAccount.adrResidenceDetail.length <= 15) {
        NativeMethod.toast('Địa chỉ liên hệ phải lớn hơn 15 ký tự')
        // enqueueSnackbar('Địa chỉ liên hệ phải lớn hơn 15 ký tự', {
        //   variant: 'error',
        //   autoHideDuration: 4000,
        // });
        return
      }

      if (!dataOpenStockAccount.emailContact.includes('@')) {
        NativeMethod.toast('Email không đúng định dạng')
        // enqueueSnackbar('Email không đúng định dạng', {
        //   variant: 'error',
        //   autoHideDuration: 4000,
        // });
        return
      }
    }

    if (currentStep === 2) {
      return
    }

    if (currentStep === 1) {
      setVisibleAuthMethodModal(true)
      return
    }

    setCurrentStep(currentStep + 1)
  }

  return (
    <VdscLayout>
      <Wrapper isDark={isDark}>
        {/* === 0 */}
        {currentStep === 0 && (
          <div className='container flex'>
            <div className='ekyc_authentication_left_steps'>
              <VerticalStep step={subCurrentStep} />
            </div>

            <div
              css={{
                width: '100%',
                height: '100%'
              }}
            >
              <div className='auto_input_steps'>
                <HorizontalStep step={currentStep} />
              </div>

              <div
                className={classNames('ekyc_authentication_content', {
                  hasbg: subCurrentStep !== 2
                })}
              >
                {subCurrentStep === 0 && (
                  <React.Fragment>
                    <div
                      css={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: 8
                      }}
                    >
                      <Typography
                        variant='heading_three'
                        cssCustom={(theme: Theme) => ({
                          color: theme.color.dc011
                        })}
                      >{`Chụp/tải ảnh CMND/CCCD`}</Typography>
                    </div>

                    <div
                      css={{
                        textAlign: 'center',
                        maxWidth: 636,
                        margin: '0 auto 4px'
                      }}
                    >
                      <Typography
                        variant='body_two'
                        cssCustom={(theme: Theme) => ({
                          color: theme.color.dc015
                        })}
                      >{`Bạn vui lòng sử dụng CMND, thẻ căn cước gốc chính phủ. Hãy đảm bảo thông tin trên ảnh chụp được hiển thị rõ nét, không bị mờ hoặc chói sáng, không mất góc hay cắt xén, chỉnh sửa`}</Typography>
                    </div>

                    <div
                      css={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: 16
                      }}
                    >
                      <div onClick={handleVisibleTakePhotoOfIDModal}>
                        <Typography
                          variant='sub_heading_four'
                          cssCustom={(theme: Theme) => ({
                            color: theme.color.blue500,
                            cursor: 'pointer',

                            '&:hover': {
                              textDecoration: 'underline'
                            }
                          })}
                        >{`Xem hướng dẫn chi tiết`}</Typography>
                      </div>
                    </div>

                    <Row gutter={16} className='take_photo_group'>
                      <Col span={12} className='take_photo_item'>
                        <div
                          css={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: 8
                          }}
                        >
                          <Typography
                            variant='sub_heading_four'
                            cssCustom={(theme: Theme) => ({
                              color: theme.color.dc014
                            })}
                          >{`Mặt trước`}</Typography>
                        </div>

                        <div
                          css={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <div
                            css={{
                              display: 'flex',
                              flexDirection: 'column'
                            }}
                          >
                            {!infrontImage ? (
                              <div
                                css={(theme: Theme) =>
                                  css({
                                    padding: 10,
                                    backgroundColor: theme.color.dc038,
                                    borderRadius: 8,
                                    marginBottom: 16
                                  })
                                }
                              >
                                <BorderCorner
                                  cssCustom={() =>
                                    css({
                                      width: 136,
                                      height: 94,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center'
                                    })
                                  }
                                >
                                  <img
                                    width={112}
                                    height={62}
                                    src={`https://cdn.simplize.vn/simplizevn/community/images/1679561684069-Group_708.png`}
                                  />
                                </BorderCorner>
                              </div>
                            ) : (
                              <img
                                width={156}
                                height={114}
                                css={{
                                  borderRadius: 8,
                                  marginBottom: 16
                                }}
                                src={URL.createObjectURL(infrontImage)}
                              />
                            )}

                            <label
                              htmlFor={`take_in_front_image`}
                              css={(theme: Theme) => ({
                                width: `100%`,
                                textAlign: 'center',
                                color: theme.color.gray100,
                                backgroundColor: theme.color.blue500,
                                padding: '9px 50px',
                                borderRadius: 8,
                                marginBottom: 8
                              })}
                            >
                              <Typography variant='caption_three'>{`Chụp ảnh`}</Typography>
                            </label>

                            <input
                              css={{ display: 'none' }}
                              type={`button`}
                              id={`take_in_front_image`}
                              onClick={() => {
                                handletakeInfrontImage()
                              }}
                              accept={`image/*`}
                            />
                            <label
                              css={(theme: Theme) => ({
                                width: `100%`,
                                textAlign: 'center',
                                color: theme.color.blue500,
                                backgroundColor: 'transparent',
                                padding: '9px 50px',
                                borderRadius: 8
                              })}
                              htmlFor={`in_front_image`}
                            >
                              {`Tải ảnh`}
                            </label>

                            <input
                              css={{ display: 'none' }}
                              type={`button`}
                              id={`in_front_image`}
                              onClick={() => {
                                handleUploadInfrontImage()
                              }}
                              accept={`image/*`}
                            />
                          </div>
                        </div>
                      </Col>

                      <Col span={12} className='take_photo_item'>
                        <div
                          css={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: 8
                          }}
                        >
                          <Typography
                            variant='sub_heading_four'
                            cssCustom={(theme: Theme) => ({
                              color: theme.color.dc014
                            })}
                          >{`Mặt sau`}</Typography>
                        </div>

                        <div
                          css={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <div
                            css={{
                              display: 'flex',
                              flexDirection: 'column'
                            }}
                          >
                            {!behindImage ? (
                              <div
                                css={(theme: Theme) =>
                                  css({
                                    padding: 10,
                                    backgroundColor: theme.color.dc038,
                                    borderRadius: 8,
                                    marginBottom: 16
                                  })
                                }
                              >
                                <BorderCorner
                                  cssCustom={() =>
                                    css({
                                      width: 136,
                                      height: 94,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center'
                                    })
                                  }
                                >
                                  <img
                                    width={112}
                                    height={62}
                                    src={`https://cdn.simplize.vn/simplizevn/community/images/1679561684069-Group_708.png`}
                                  />
                                </BorderCorner>
                              </div>
                            ) : (
                              <img
                                width={156}
                                height={114}
                                css={{
                                  borderRadius: 8,
                                  marginBottom: 16
                                }}
                                src={URL.createObjectURL(behindImage)}
                              />
                            )}

                            <label
                              htmlFor={`take_behind_image`}
                              css={(theme: Theme) => ({
                                width: `100%`,
                                textAlign: 'center',
                                color: theme.color.gray100,
                                backgroundColor: theme.color.blue500,
                                padding: '9px 50px',
                                borderRadius: 8,
                                marginBottom: 8
                              })}
                            >
                              <Typography variant='caption_three'>{`Chụp ảnh`}</Typography>
                            </label>

                            <input
                              css={{ display: 'none' }}
                              type={`button`}
                              id={`take_behind_image`}
                              onClick={() => {
                                handletakeBehindImage()
                              }}
                              accept={`image/*`}
                            />
                            <label
                              css={(theme: Theme) => ({
                                width: `100%`,
                                textAlign: 'center',
                                color: theme.color.blue500,
                                backgroundColor: 'transparent',
                                padding: '9px 50px',
                                borderRadius: 8
                              })}
                              htmlFor={`behind_image`}
                            >
                              {`Tải ảnh`}
                            </label>
                            <input
                              css={{ display: 'none' }}
                              type={`button`}
                              id={`behind_image`}
                              onClick={() => {
                                handleUploadBehindImage()
                              }}
                              accept={`image/*`}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </React.Fragment>
                )}

                {subCurrentStep === 1 && (
                  <React.Fragment>
                    <div
                      css={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: 8
                      }}
                    >
                      <Typography
                        variant='heading_three'
                        cssCustom={(theme: Theme) => ({
                          color: theme.color.dc011
                        })}
                      >
                        {`Quay video chân dung`}
                      </Typography>
                    </div>

                    <div
                      css={{
                        textAlign: 'center',
                        maxWidth: 636,
                        margin: '0 auto 16px'
                      }}
                    >
                      <Typography
                        variant='body_two'
                        cssCustom={(theme: Theme) => ({
                          color: theme.color.dc015
                        })}
                      >{`Bạn vui lòng quay video xác thực chân dung. Video sẽ được quay trong 05 giây và cần thấy đầy đủ rõ nét toàn bộ cử động tự nhiên của khuôn mặt`}</Typography>
                    </div>

                    <div className='take_photo_group center'>
                      <div
                        className='take_photo_item'
                        css={{
                          display: 'flex',
                          alignItems: 'center',
                          flexDirection: 'column'
                        }}
                      >
                        <div
                          css={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: 8
                          }}
                        >
                          <Typography
                            variant='sub_heading_four'
                            cssCustom={(theme: Theme) => ({
                              color: theme.color.dc014
                            })}
                          >{`Video chân dung`}</Typography>
                        </div>

                        <div
                          css={() => (theme: Theme) =>
                            css({
                              flexDirection: 'column',
                              width: 156,
                              height: 'auto !important',
                              padding: 10,
                              display: 'flex',
                              alignItems: 'center',
                              backgroundColor: theme.color.white_opacity10,
                              borderRadius: 8,
                              marginBottom: 16
                            })
                          }
                        >
                          <BorderCorner
                            cssCustom={() =>
                              css({
                                padding: '22px 18px'
                              })
                            }
                          >
                            {profileVideo ? (
                              <video
                                width='100'
                                height='150'
                                css={{
                                  borderRadius: 8
                                }}
                                src={URL.createObjectURL(profileVideo)}
                              >
                                Your phone does not support the video tag.
                              </video>
                            ) : (
                              <div
                                css={{
                                  padding: '43px 18px',
                                  background: colors.black400,
                                  borderRadius: 8,
                                  width: 100,
                                  height: 150
                                }}
                              >
                                <EmptyVideoIcon />
                              </div>
                            )}
                          </BorderCorner>
                        </div>
                        <div className='take_photo_item_content_btn_group'>
                          <Button
                            cssCustom={{
                              padding: '7px 27px'
                            }}
                            onClick={() => handleRecordVideo()}
                          >
                            <Typography
                              variant='sub_heading_four'
                              cssCustom={(theme: Theme) => ({
                                color: theme.color.gray100
                              })}
                            >{`Quay video`}</Typography>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )}

                {subCurrentStep === 2 && (
                  <PersonalInformation
                    visible_type={`EKYC`}
                    dataOpenStockAccount={dataOpenStockAccount}
                    setDataOpenStockAccount={setDataOpenStockAccount}
                    onGoBack={onGoBack}
                    onGoForward={onGoNext}
                    issuePlaceList={issuePlaceList}
                    provinceList={provinceList}
                    bankList={bankList}
                  />
                )}
              </div>

              {subCurrentStep !== 2 && (
                <div
                  css={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 'auto'
                  }}
                >
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
                    cssCustom={{ width: 112, height: 40, padding: 0 }}
                    onClick={onGoNext}
                  >
                    <Typography
                      variant='sub_heading_four'
                      cssCustom={(theme: Theme) => ({
                        color: theme.color.gray100
                      })}
                    >{`Tiếp theo`}</Typography>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* !== 0 */}
        {currentStep !== 0 && (
          <>
            <div className='auto_input_steps'>
              <HorizontalStep step={currentStep} />
            </div>

            {currentStep === 1 && (
              <div className='register_service'>
                <RegisterService
                  onGoBack={onGoBack}
                  onGoForward={onGoNext}
                  onRefreshClientId={handleRefreshClientId}
                  dataOpenStockAccount={dataOpenStockAccount}
                  setDataOpenStockAccount={setDataOpenStockAccount}
                />
              </div>
            )}

            {currentStep === 2 && (
              <div className='confirm_form'>
                <ConfirmForm
                  dataOpenStockAccount={dataOpenStockAccount}
                  setDataOpenStockAccount={setDataOpenStockAccount}
                />
              </div>
            )}
          </>
        )}

        {visibleTakePhotoModalInfront && (
          <TakePhotoModalInfront
            visible={visibleTakePhotoModalInfront}
            onCancel={() => setVisibleTakePhotoModalInfront(false)}
            onUseImageFile={handleUseImageFileInfront}
            onVisibleTakePhotoOfIDModal={handleVisibleTakePhotoOfIDModal}
          />
        )}

        {visibleTakePhotoModalBehind && (
          <TakePhotoModalBehind
            visible={visibleTakePhotoModalBehind}
            onCancel={() => setVisibleTakePhotoModalBehind(false)}
            onUseImageFile={handleUseImageFileBehind}
            onVisibleTakePhotoOfIDModal={handleVisibleTakePhotoOfIDModal}
          />
        )}

        {/* {visibleTakePhotoModalProfile && (
          <RecordVideoModal
            visible={visibleTakePhotoModalProfile}
            onCancel={() => setVisibleTakePhotoModalProfile(false)}
            onUseVideoFile={() => {
              return
            }}
            onUseImageFile={handleUseImageFileProfile}
          />
        )} */}

        <TakePhotoOfIDModal
          visible={visibleTakePhotoOfIDModal}
          onCancel={handleCancelTakePhotoOfIDModal}
        />

        <>
          <AuthenticationMethodModal
            visible={visibleAuthMethodModal}
            onCancel={handleCancelAuthenticationMethodModal}
            onSms={handleChooseTypeOtpSms}
            onZalo={handleChooseTypeOtpZalo}
            spinning={spinningChooseTypeOtp}
          />

          <ConfirmOTPModal
            visible={visibleConfirmOTPModal}
            onCancel={handleCancelConfirmOTPModal}
            onSubmit={handleSubmitOtp}
            spinning={spinningConfirmOTPModal}
            onReSend={handleReSendOtp}
          />
        </>
      </Wrapper>
    </VdscLayout>
  )
}

export default EkycAuthentication
