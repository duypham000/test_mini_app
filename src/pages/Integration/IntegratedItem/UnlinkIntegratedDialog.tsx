import Typography from '@/components/Typography/Typography'
import { CloseIconBlack300 } from '@/icons/CloseIconBlack300'
import Dialog from 'rc-dialog'
import { dialog } from './styles'
import { Row } from '@/components/GridLayout'
import { Theme, ThemeCss } from '@/themes/theme'
import { css } from '@emotion/react'

interface Props {
  visible: boolean
  onClose: () => void
  submitEvent: () => void
}
const UnlinkIntegratedDialog: React.FC<Props> = (props): JSX.Element => {
  const { onClose, visible, submitEvent } = props
  return (
    <Dialog
      prefixCls='simplize-dialog'
      title={
        <div
          css={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Typography variant='heading_three'>{`Yêu cầu hủy tích hợp`}</Typography>
        </div>
      }
      visible={visible}
      onClose={onClose}
      closeIcon={<CloseIconBlack300 width={16} height={16} />}
      css={dialog.wrapper()}
    >
      <Row align='middle'>
        <Typography
          variant='body_two'
          css={(theme: Theme) => ({
            color: theme.color.dc015
          })}
        >{`Bạn có chắc chắn muốn hủy tích hợp tài khoản chứng khoán?`}</Typography>
        <Typography
          variant='body_two'
          css={(theme: Theme) => ({
            color: theme.color.dc015
          })}
        >{`Sau khi hủy tích hợp, toàn bộ dữ liệu của danh mục Rồng Việt trên Simplize sẽ bị xóa.`}</Typography>
        <Typography
          variant='body_two'
          css={() => (theme: ThemeCss) =>
            css({
              color: theme.color.dc015,
              display: 'inline-block'
            })
          }
        >
          {`Nếu bạn cần hỗ trợ, hãy `}
          <a
            href={`https://www.facebook.com/simplize.vn`}
            target='_blank'
            rel='noreferrer'
          >
            <Typography
              variant='sub_heading_four'
              css={() => (theme: ThemeCss) =>
                css({
                  color: theme.color.blue500,
                  display: 'inline-block'
                })
              }
            >
              {` inbox Simplize `}
            </Typography>
          </a>
          {` hoặc liên hệ tới hotline 0388408668 nhé!`}
        </Typography>
      </Row>
      <Row
        css={{
          marginTop: 24
        }}
        justify='space-between'
      >
        <div css={[dialog.btn(), dialog.btnGray()]} onClick={() => onClose()}>
          <Typography variant='sub_heading_four'>Bỏ qua</Typography>
        </div>
        <div
          css={[dialog.btn(), dialog.btnRed()]}
          onClick={() => {
            submitEvent()
            onClose()
          }}
        >
          <Typography variant='sub_heading_four'>Hủy tích hợp</Typography>
        </div>
      </Row>
    </Dialog>
  )
}

export default UnlinkIntegratedDialog
