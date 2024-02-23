import React from 'react'
import ConfirmForm from '../components/ConfirmForm'
import PersonalInformation from '../components/PersonalInformation'
import RegisterService from '../components/RegisterService'
import { Wrapper } from './styles'
import HorizontalStep from '@/components/HorizontalStep'

interface Props {
  dataOpenStockAccount: any
  setDataOpenStockAccount: any
  currentStepAutoInput: number
  onGoBack: any
  onGoForward: any
  issuePlaceList: any
  provinceList: any
  bankList: any
  onRefreshClientId: any
}

const AutoInput: React.FC<Props> = (props): JSX.Element => {
  const {
    dataOpenStockAccount,
    setDataOpenStockAccount,
    currentStepAutoInput,
    onGoBack,
    onGoForward,
    issuePlaceList,
    provinceList,
    bankList,
    onRefreshClientId
  } = props

  return (
    <Wrapper>
      <div className='auto_input_steps'>
        <HorizontalStep step={currentStepAutoInput} />
      </div>

      {currentStepAutoInput === 0 && (
        <div className='personal_information'>
          <PersonalInformation
            dataOpenStockAccount={dataOpenStockAccount}
            setDataOpenStockAccount={setDataOpenStockAccount}
            onGoBack={onGoBack}
            onGoForward={onGoForward}
            issuePlaceList={issuePlaceList}
            provinceList={provinceList}
            bankList={bankList}
          />
        </div>
      )}

      {currentStepAutoInput === 1 && (
        <div className='register_service'>
          <RegisterService
            onGoBack={onGoBack}
            onGoForward={onGoForward}
            dataOpenStockAccount={dataOpenStockAccount}
            setDataOpenStockAccount={setDataOpenStockAccount}
            onRefreshClientId={onRefreshClientId}
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
    </Wrapper>
  )
}

export default AutoInput
