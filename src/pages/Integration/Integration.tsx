// import Button from '@/components/Button';
import { EmptyListIcon } from '@/icons/EmptyListIcon'
import Spin from '@/components/Spin'
import Typography from '@/components/Typography'
import { IResponse } from '@/types'
import { Col, Row } from '@/components/GridLayout'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import React from 'react'
import IntegratedItem from './IntegratedItem'
import styles from './styles'
import { integrationApi } from './apis'
import Button from '@/components/Button'
// import Link from '@/components/Link';
import { Theme } from '@/themes/theme'
import { setAccountList } from '@/redux/slices/profile-slice'
import { setVisibleConnectToVdsc } from '@/redux/slices/portfolio-slice'

const IntegrationModule: React.FC = () => {
  const dispatch = useAppDispatch()

  const accountList: any = useAppSelector((state) => state.profile.accountList)

  const currentUser = useAppSelector((state) => state.profile.currentUser)

  React.useEffect(() => {
    ;(async () => {
      try {
        const response: IResponse<any[]> = await integrationApi.getAccountList()

        dispatch(setAccountList(response.data))
      } catch (error) {
        console.log(error)
      }
    })()
  }, [currentUser])

  return (
    <Col span={24} css={styles.wrapper()}>
      <Row>
        <Typography variant='sub_heading_two' cssCustom={styles.heading()}>
          Danh sách các tài khoản chứng khoán đã tích hợp
        </Typography>
      </Row>

      {(!accountList && (
        <Row justify='center' align='middle' css={styles.contentWrapper()}>
          <Spin size='large' />
        </Row>
      )) ||
        (accountList?.length && (
          <Row
            css={{ width: '100%', marginTop: 24 }}
            justify='space-between'
            gutter={[20, 10]}
          >
            {accountList.map((integration: any) => (
              <Col
                span={12}
                key={integration.clientId + integration.partner}
                css={(theme: Theme) => ({
                  [theme.mediaQuery.mobile]: {
                    flex: '0 0 100%',
                    maxWidth: '100%'
                  }
                })}
              >
                <IntegratedItem
                  data={integration}
                  formId={integration.formId}
                />
              </Col>
            ))}
          </Row>
        )) || (
          <Row align='middle' justify='center' css={styles.contentWrapper()}>
            <EmptyListIcon />
            <Typography variant='body_one' cssCustom={styles.body()}>
              Bạn chưa tích hợp tài khoản chứng khoán
            </Typography>

            {/* <Link href={'/portfolio'}> */}
            <Button
              cssCustom={styles.button()}
              styleType='primary'
              onClick={() => dispatch(setVisibleConnectToVdsc(true))}
            >
              Tích hợp ngay
            </Button>
            {/* </Link> */}
          </Row>
        )}
    </Col>
  )
}

export default IntegrationModule
