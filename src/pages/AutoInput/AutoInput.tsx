import React from 'react'
import ConfirmForm from '@/components/ConfirmForm'
import PersonalInformation from '@/components/PersonalInformation'
import RegisterService from '@/components/RegisterService'
import { Wrapper } from './styles'
import HorizontalStep from '@/components/HorizontalStep'
import vdscApi from '@/apis/vdsc-api'
import moment from 'moment'
import NativeMethod from '@/NativeMethod'
import { useNavigate } from 'react-router-dom'
import { UrlInternal } from '@/constants/url-internal'
import AuthenticationMethodModal from '@/components/AuthenticationMethodModal'
import ConfirmOTPModal from '@/components/ConfirmOTPModal'
import VdscLayout from '@/layouts/VdscLayout'

// interface Props {
//   dataOpenStockAccount: any
//   setDataOpenStockAccount: any
//   currentStepAutoInput: number
//   onGoBack: any
//   onGoForward: any
//   issuePlaceList: any
//   provinceList: any
//   bankList: any
//   onRefreshClientId: any
// }

const {
  generateClientId,
  getBankList,
  getIssuePlaceList,
  getProvinceList,
  sendOtp,
  verifyOtp
} = vdscApi

const AutoInput: React.FC = (): JSX.Element => {
  // const {
  //   dataOpenStockAccount,
  //   setDataOpenStockAccount,
  //   currentStepAutoInput,
  //   onGoBack,
  //   onGoForward,
  //   issuePlaceList,
  //   provinceList,
  //   bankList,
  //   onRefreshClientId
  // } = props
  const navigate = useNavigate()
  const [currentStepAutoInput, setCurrentStepAutoInput] = React.useState(0)
  const [issuePlaceList, setIssuePlaceList] = React.useState([])
  const [provinceList, setProvinceList] = React.useState([])
  const [bankList, setBankList] = React.useState([])

  const [visibleAuthMethodModal, setVisibleAuthMethodModal] =
    React.useState(false)
  const [spinningChooseTypeOtp, setSpinningChooseTypeOtp] =
    React.useState(false)
  const [visibleConfirmOTPModal, setVisibleConfirmOTPModal] =
    React.useState(false)
  const handleCancelConfirmOTPModal = () => {
    setVisibleConfirmOTPModal(false)
  }
  const [spinningConfirmOTPModal, setSpinningConfirmOTPModal] =
    React.useState(false)

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

  React.useEffect(() => {
    if (!dataOpenStockAccount.clientId && currentStepAutoInput === 1) {
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
  }, [currentStepAutoInput, dataOpenStockAccount.clientId])
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

  const handleGoBackAutoInput = () => {
    if (currentStepAutoInput === 0) {
      navigate(UrlInternal.HOME_PAGE)
      // setTypeDisplay(TYPE_DISPLAY.CHOOSE_ACCOUNT_AUTHENTICATION_METHOD)
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

  const handleSubmitOtp = (value: string) => {
    if (spinningConfirmOTPModal) return

    setSpinningConfirmOTPModal(true)
    verifyOtp({
      otp: value
    })
      .then(() => {
        setVisibleConfirmOTPModal(false)
        setCurrentStepAutoInput(currentStepAutoInput + 1)
      })
      .catch((error: any) => {
        NativeMethod.toast(error?.response?.data.message)
      })
      .finally(() => {
        setSpinningConfirmOTPModal(false)
      })
  }

  React.useEffect(() => {
    NativeMethod.changeTitle('Tự nhập liệu')
  }, [])
  return (
    <VdscLayout>
      <Wrapper>
        <div className='auto_input_steps'>
          <HorizontalStep step={currentStepAutoInput} />
        </div>

        {currentStepAutoInput === 0 && (
          <div className='personal_information'>
            <PersonalInformation
              dataOpenStockAccount={dataOpenStockAccount}
              setDataOpenStockAccount={setDataOpenStockAccount}
              onGoBack={handleGoBackAutoInput}
              onGoForward={handleGoForwardAutoInput}
              issuePlaceList={issuePlaceList}
              provinceList={provinceList}
              bankList={bankList}
            />
          </div>
        )}

        {currentStepAutoInput === 1 && (
          <div className='register_service'>
            <RegisterService
              onGoBack={handleGoBackAutoInput}
              onGoForward={handleGoForwardAutoInput}
              dataOpenStockAccount={dataOpenStockAccount}
              setDataOpenStockAccount={setDataOpenStockAccount}
              onRefreshClientId={handleRefreshClientId}
            />
          </div>
        )}

        {currentStepAutoInput === 2 && (
          <div className='confirm_form'>
            <ConfirmForm
              dataOpenStockAccount={dataOpenStockAccount}
              setDataOpenStockAccount={setDataOpenStockAccount}
            />
          </div>
        )}

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
      </Wrapper>
    </VdscLayout>
  )
}

export default AutoInput
