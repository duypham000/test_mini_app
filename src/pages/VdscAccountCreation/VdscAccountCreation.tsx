import moment from 'moment'
import React from 'react'
import AutoInput from './AutoInput'
import AuthenticationMethodModal from './components/AuthenticationMethodModal'
import ConfirmOTPModal from './components/ConfirmOTPModal'
import EkycAuthentication from './EkycAuthentication'
import ChooseAccountAuthenticationMethod from './ChooseAccountAuthenticationMethod'
import { css } from '@emotion/react'
import { Theme } from '@/themes/theme'
import vdscApi from '@/apis/vdsc-api'
import NativeMethod from '@/NativeMethod'

const {
  ekycFaceLiveVideo,
  ekycOcr,
  generateClientId,
  getBankList,
  getIssuePlaceList,
  getOpenAccountRequestId,
  getProvinceList,
  sendOtp,
  verifyOtp
} = vdscApi

enum TYPE_DISPLAY {
  CHOOSE_ACCOUNT_AUTHENTICATION_METHOD,
  AUTO_INPUT,
  EKYC_AUTHENTICATION
}

const VdscAccountCreation: React.FC = (): JSX.Element => {
  const [typeDisplay, setTypeDisplay] = React.useState<TYPE_DISPLAY>(
    TYPE_DISPLAY.CHOOSE_ACCOUNT_AUTHENTICATION_METHOD
  )
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
  const [infrontImage, setInfrontImage] = React.useState<any>()
  const [behindImage, setBehindImage] = React.useState<any>()
  const [profileVideo, setProfileVideo] = React.useState<any>()
  const [visibleAuthMethodModal, setVisibleAuthMethodModal] =
    React.useState(false)
  const [visibleConfirmOTPModal, setVisibleConfirmOTPModal] =
    React.useState(false)
  const [currentStepAutoInput, setCurrentStepAutoInput] = React.useState(0)
  const [currentStepEkycAuthentication, setCurrentStepEkycAuthentication] =
    React.useState(0)
  const [
    subCurrentStepEkycAuthentication,
    setSubCurrentStepEkycAuthentication
  ] = React.useState(0)
  const [isSpinningEKYC, setIsSpinningEKYC] = React.useState(false)
  const [isSpinningManual, setIsSpinningManual] = React.useState(false)
  const [issuePlaceList, setIssuePlaceList] = React.useState([])
  const [provinceList, setProvinceList] = React.useState([])
  const [bankList, setBankList] = React.useState([])
  const [loadingGoNextEkyc, setLoadingGoNextEkyc] = React.useState(false)
  const [spinningChooseTypeOtp, setSpinningChooseTypeOtp] =
    React.useState(false)
  const [spinningConfirmOTPModal, setSpinningConfirmOTPModal] =
    React.useState(false)
  const [errorCount, setErrorCount] = React.useState(0)

  React.useEffect(() => {
    if (
      !dataOpenStockAccount.clientId &&
      (currentStepAutoInput === 1 || currentStepEkycAuthentication === 1)
    ) {
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
  }, [
    currentStepAutoInput,
    currentStepEkycAuthentication,
    dataOpenStockAccount.clientId
  ])

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
    getProvinceList()
      .then((res: any) => {
        setProvinceList(res?.data)
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

  const iOS = React.useMemo(() => {
    const WINDOW: any = window
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !WINDOW.MSStream
    return isIOS
  }, [])

  //* Choose OTP
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

  const handleSubmitOtp = (value: string) => {
    if (spinningConfirmOTPModal) return

    setSpinningConfirmOTPModal(true)
    verifyOtp({
      otp: value
    })
      .then(() => {
        setVisibleConfirmOTPModal(false)
        switch (typeDisplay) {
          case TYPE_DISPLAY.AUTO_INPUT:
            setCurrentStepAutoInput(currentStepAutoInput + 1)
            return
          case TYPE_DISPLAY.EKYC_AUTHENTICATION:
            setCurrentStepEkycAuthentication(currentStepEkycAuthentication + 1)
            return
          default:
            break
        }
      })
      .catch((error: any) => {
        NativeMethod.toast(error?.response?.data.message)
      })
      .finally(() => {
        setSpinningConfirmOTPModal(false)
      })
  }

  //* Display
  const handleChooseEkycAuthentication = () => {
    if (isSpinningEKYC) return
    setIsSpinningEKYC(true)

    NativeMethod.toast('Đang chọn hình thức...')

    getOpenAccountRequestId('EKYC')
      .then(() => {
        setTypeDisplay(TYPE_DISPLAY.EKYC_AUTHENTICATION)
      })
      .catch((error: any) => {
        NativeMethod.toast(error?.response?.data.message)
      })
      .finally(() => {
        setIsSpinningEKYC(false)
        // toast.dismiss()
      })
  }

  const handleChooseAutoInput = () => {
    if (isSpinningManual) return
    setIsSpinningManual(true)

    NativeMethod.toast('Đang chọn hình thức...')

    getOpenAccountRequestId('MANUAL')
      .then(() => {
        setTypeDisplay(TYPE_DISPLAY.AUTO_INPUT)
      })
      .catch((error: any) => {
        NativeMethod.toast(error?.response?.data.message)
      })
      .finally(() => {
        setIsSpinningManual(false)
        // toast.dismiss()
      })
  }

  //* AutoInput
  const handleGoBackAutoInput = () => {
    if (currentStepAutoInput === 0) {
      setTypeDisplay(TYPE_DISPLAY.CHOOSE_ACCOUNT_AUTHENTICATION_METHOD)
      return
    }

    setCurrentStepAutoInput(currentStepAutoInput - 1)
  }

  const handleGoForwardAutoInput = () => {
    if (!(currentStepAutoInput < 2)) {
      return
    }

    if (currentStepAutoInput === 0) {
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

    if (currentStepAutoInput === 1) {
      setVisibleAuthMethodModal(true)
      return
    }

    setCurrentStepAutoInput(currentStepAutoInput + 1)
  }

  const handleCancelConfirmOTPModal = () => {
    setVisibleConfirmOTPModal(false)
  }

  const handleCancelAuthenticationMethodModal = () => {
    setVisibleAuthMethodModal(false)
  }

  const handleGoBackEkycAuthentication = () => {
    if (currentStepEkycAuthentication > 0) {
      setCurrentStepEkycAuthentication(currentStepEkycAuthentication - 1)
      return
    }

    if (subCurrentStepEkycAuthentication > 0) {
      setSubCurrentStepEkycAuthentication(subCurrentStepEkycAuthentication - 1)
      return
    }

    setTypeDisplay(TYPE_DISPLAY.CHOOSE_ACCOUNT_AUTHENTICATION_METHOD)
  }

  const handleGoNextEkycAuthentication = () => {
    if (loadingGoNextEkyc) return

    if (subCurrentStepEkycAuthentication === 0) {
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
          setSubCurrentStepEkycAuthentication(
            subCurrentStepEkycAuthentication + 1
          )
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

    if (subCurrentStepEkycAuthentication === 1) {
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
          setSubCurrentStepEkycAuthentication(
            subCurrentStepEkycAuthentication + 1
          )
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

    if (subCurrentStepEkycAuthentication < 2) {
      setSubCurrentStepEkycAuthentication(subCurrentStepEkycAuthentication + 1)
      return
    }

    if (
      subCurrentStepEkycAuthentication === 2 &&
      currentStepEkycAuthentication === 0
    ) {
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

    if (currentStepEkycAuthentication === 2) {
      return
    }

    if (currentStepEkycAuthentication === 1) {
      setVisibleAuthMethodModal(true)
      return
    }

    setCurrentStepEkycAuthentication(currentStepEkycAuthentication + 1)
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

  return (
    <div css={{ marginTop: 28, minHeight: '100vh', paddingBottom: 40 }}>
      <div
        css={(theme: Theme) =>
          css({
            [theme.mediaQuery.mobile]: { paddingBottom: 48 }
          })
        }
      >
        {typeDisplay === TYPE_DISPLAY.CHOOSE_ACCOUNT_AUTHENTICATION_METHOD && (
          <ChooseAccountAuthenticationMethod
            onChooseEkycAuthentication={handleChooseEkycAuthentication}
            onChooseAutoInput={handleChooseAutoInput}
          />
        )}

        {typeDisplay === TYPE_DISPLAY.AUTO_INPUT && (
          <AutoInput
            dataOpenStockAccount={dataOpenStockAccount}
            setDataOpenStockAccount={setDataOpenStockAccount}
            currentStepAutoInput={currentStepAutoInput}
            onGoBack={handleGoBackAutoInput}
            onGoForward={handleGoForwardAutoInput}
            issuePlaceList={issuePlaceList}
            provinceList={provinceList}
            bankList={bankList}
            onRefreshClientId={handleRefreshClientId}
          />
        )}

        {typeDisplay === TYPE_DISPLAY.EKYC_AUTHENTICATION && (
          <EkycAuthentication
            dataOpenStockAccount={dataOpenStockAccount}
            setDataOpenStockAccount={setDataOpenStockAccount}
            currentStep={currentStepEkycAuthentication}
            subCurrentStep={subCurrentStepEkycAuthentication}
            onGoBack={handleGoBackEkycAuthentication}
            onGoNext={handleGoNextEkycAuthentication}
            onRefreshClientId={handleRefreshClientId}
            infrontImage={infrontImage}
            setInfrontImage={setInfrontImage}
            behindImage={behindImage}
            setBehindImage={setBehindImage}
            profileVideo={profileVideo}
            setProfileVideo={setProfileVideo}
            issuePlaceList={issuePlaceList}
            provinceList={provinceList}
            bankList={bankList}
            loadingGoNext={loadingGoNextEkyc}
          />
        )}

        {/* portal elements */}
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
      </div>
    </div>
  )
}

export default VdscAccountCreation
