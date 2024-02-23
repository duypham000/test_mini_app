import React from 'react'
import { ContactHelpIcon } from '@/icons/ContactHelpIcon'
import Typography from '@/components/Typography'
import { Col, Row } from '@/components/GridLayout'
import styles from './styles'
import { XIconRed500 } from '@/icons/XIconRed500'
import UnlinkIntegratedDialog from './UnlinkIntegratedDialog'
import { integrationApi } from '../apis'
import { Link, useNavigate } from 'react-router-dom'
import NativeMethod from '@/NativeMethod'
import { UrlInternal } from '@/constants/url-internal'

interface Props {
  data: any
  formId: string
}

const IntegratedItem: React.FC<Props> = (props) => {
  const { data, formId } = props
  const [visible, setVisible] = React.useState(false)
  const navigate = useNavigate()
  const [accountData, setAccountData] = React.useState<{
    formId: string
    clientId: string
    partner: string
    code: string
  }>()

  const selectAccount = (data: {
    formId: string
    clientId: string
    partner: string
    code: string
  }) => {
    setAccountData(data)
    setVisible(true)
  }

  const unlinkAccount = async () => {
    if (!accountData) {
      return
    }
    try {
      await integrationApi.closedSecuritiesAccount(accountData)
      window.location.reload()
    } catch (error: any) {
      NativeMethod.toast(error?.response?.data?.message)
    }
  }

  return (
    <div css={styles.wrapper()}>
      <Row align='middle'>
        <div
          css={{
            position: 'relative',
            width: 28,
            height: 28,
            borderRadius: `50%`,
            overflow: 'hidden'
          }}
        >
          <img css={styles.img()} src={data.imageLogoUrl} />
        </div>
        <Typography
          variant='heading_three'
          cssCustom={styles.securitiesCompany()}
        >
          {data.partnerName}
        </Typography>
      </Row>

      <Row css={{ marginTop: 14 }} justify='space-between'>
        <Col>
          <Typography variant='body_two' cssCustom={styles.gray100ToGray500()}>
            Tên tài khoản
          </Typography>
          <Typography
            variant='sub_heading_two'
            cssCustom={styles.gray300ToGray400()}
          >
            {data.fullName}
          </Typography>

          <Typography
            variant='body_two'
            cssCustom={[
              styles.gray100ToGray500(),
              { display: `inline-block`, marginTop: 8 }
            ]}
          >
            Trạng thái tích hợp
          </Typography>
          <Typography
            variant='sub_heading_two'
            cssCustom={styles.status(data.status)}
          >
            {data.statusName}
          </Typography>
        </Col>

        <Col>
          <Typography variant='body_two' cssCustom={styles.gray100ToGray500()}>
            Số tài khoản
          </Typography>
          <Typography
            variant='sub_heading_two'
            cssCustom={styles.gray300ToGray400()}
          >
            {data.clientId}
          </Typography>

          <Typography
            variant='body_two'
            cssCustom={[
              styles.gray100ToGray500(),
              { display: `inline-block`, marginTop: 8 }
            ]}
          >
            Ngày tích hợp
          </Typography>
          <Typography
            variant='sub_heading_two'
            cssCustom={styles.gray300ToGray400()}
          >
            {data.createdDate}
          </Typography>
        </Col>
      </Row>

      <Row css={{ marginTop: 16 }} justify='space-between'>
        <Col>
          <Row align='middle'>
            <ContactHelpIcon />
            <Link to={'/contact'}>
              <Typography
                variant='sub_heading_two'
                cssCustom={styles.contactHelp()}
              >
                Liên hệ hỗ trợ
              </Typography>
            </Link>
          </Row>
        </Col>
        {data?.status !== 'ACTIVE' && (
          <Col>
            <Row
              align='middle'
              css={{
                cursor: 'pointer',
                userSelect: 'none'
              }}
              onClick={() => {
                selectAccount({
                  clientId: data.clientId,
                  formId: formId,
                  partner: 'VDSC',
                  code: data?.code
                })
              }}
            >
              <XIconRed500 />

              <Typography variant='sub_heading_two' cssCustom={styles.unlink()}>
                Hủy tích hợp
              </Typography>
            </Row>
          </Col>
        )}
      </Row>
      <UnlinkIntegratedDialog
        visible={visible}
        onClose={() => setVisible(false)}
        submitEvent={() => {
          unlinkAccount()
          navigate(UrlInternal.HOME_PAGE)
        }}
      />
    </div>
  )
}

export default IntegratedItem
