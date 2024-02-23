import React from 'react'
import DialogWrap from 'rc-dialog'
import Typography from '@/components/Typography'
import styles from './styles'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { Theme } from '@/themes/theme'
import { Link, useNavigate } from 'react-router-dom'
import { setVisibleConnectToVdsc } from '@/redux/slices/portfolio-slice'
import { CloseIconBlack500 } from '@/icons/CloseIconBlack500'
import { UrlInternal } from '@/constants/url-internal'
// import { WarningIcon2 } from '@/components/icons/WarningIcon2';

const ConnectToVdscDialog: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const visibleConnectToVdsc = useAppSelector(
    (state) => state.portfolio.visibleConnectToVdsc
  )

  return (
    <DialogWrap
      prefixCls='simplize-dialog'
      visible={visibleConnectToVdsc}
      title={
        <Typography variant='heading_three'>{`Bạn muốn liên kết ngay?`}</Typography>
      }
      onClose={() => dispatch(setVisibleConnectToVdsc(false))}
      closeIcon={<CloseIconBlack500 width={28} height={28} />}
      css={styles.wrapper()}
    >
      <div css={styles.btnGroup()}>
        <div
          css={styles.btnCreate()}
          onClick={() => {
            dispatch(setVisibleConnectToVdsc(false))
            navigate(`${UrlInternal.CREATE_VDSC}/create/vdsc`)
          }}
        >
          <Typography
            variant='sub_heading_one'
            cssCustom={(theme: Theme) => ({
              color: theme.color.gray100,
              marginBottom: 8
            })}
          >{`Tôi chưa có tài khoản Rồng Việt`}</Typography>

          <Typography
            variant='body_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.gray200
            })}
          >{`Mở tài khoản chứng khoán Rồng Việt online một cách dễ dàng, nhanh chóng`}</Typography>
        </div>

        {/* <p>
          <WarningIcon2 css={{ transform: 'translateY(2px)' }} />
          <span
            css={(theme) => ({
              color: theme.color.dc011,
              margin: '0px 4px',
            })}
          >{`Lưu ý:`}</span>
          <span
            css={(theme) => ({
              color: theme.color.dc014,
            })}
          >{`Tạm thời những tài khoản đã mở ở CTCP Chứng khoán Rồng Việt (VDSC) từ trước đang chưa thể tích hợp được với Simplize. VDSC và Simplize sẽ sớm tìm giải pháp cho vấn đề này.`}</span>
        </p> */}

        <Link
          to={UrlInternal.SUPPORT_VDSC}
          css={styles.btnLink()}
          // onClick={() => {
          //   dispatch(setVisibleConnectToVdsc(false));
          //   dispatch(setVisibleSynchronizedToVdsc(true));
          // }}
        >
          <Typography
            variant='sub_heading_one'
            cssCustom={{ marginBottom: 8 }}
          >{`Tôi đã có tài khoản Rồng Việt`}</Typography>

          <Typography
            variant='body_two'
            cssCustom={(theme: Theme) => ({
              color: theme.color.dc013
            })}
          >{`Bạn sẽ chỉ cần thực hiện một vài thao tác đơn giản để liên kết với tài khoản chứng khoán Rồng Việt`}</Typography>
        </Link>
      </div>
    </DialogWrap>
  )
}

export default ConnectToVdscDialog