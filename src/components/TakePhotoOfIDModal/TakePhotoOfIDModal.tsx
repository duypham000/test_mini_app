import Button from '@/components/Button'
import { AboveIcon } from '@/icons/AboveIcon'
import { CloseIconBlack500 } from '@/icons/CloseIconBlack500'
import { ErrorCmndIcon } from '@/icons/ErrorCmndIcon'
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
import DialogWrap from 'rc-dialog'
import React from 'react'
import { styles, Wrapper } from './styles'

interface Props {
  onCancel: any
  visible: boolean
}

const TakePhotoOfIDModal: React.FC<Props> = (props) => {
  const { visible, onCancel } = props
  return (
    <DialogWrap
      prefixCls='simplize-dialog'
      visible={visible}
      title={
        <Typography variant='heading_three'>{`Hướng dẫn chụp ảnh CMMD/CCCD`}</Typography>
      }
      onClose={onCancel}
      closeIcon={<CloseIconBlack500 width={28} height={28} />}
      css={styles.wrapper()}
      zIndex={1001}
    >
      <Wrapper>
        <div css={{ marginBottom: 16 }}>
          <Typography variant='sub_heading_two'>{`Bạn hãy đảm bảo:`}</Typography>
        </div>

        <div css={{ marginBottom: 24 }}>
          <div css={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <AboveIcon />

            <Typography
              variant='body_two'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc015,
                marginLeft: 8
              })}
            >{`Hình chụp rõ nét, rõ thông tin, không bị mờ, tối hay chói sáng`}</Typography>
          </div>

          <div css={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <AboveIcon />

            <Typography
              variant='body_two'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc015,
                marginLeft: 8
              })}
            >{`Hình chụp giấy tờ không bị mất góc, cắt xén, chỉnh sửa`}</Typography>
          </div>

          <div css={{ display: 'flex', alignItems: 'center' }}>
            <AboveIcon />

            <Typography
              variant='body_two'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc015,
                marginLeft: 8
              })}
            >{`Giấy tờ phải là bản gốc, còn hạn sử dụng`}</Typography>
          </div>
        </div>

        <div css={{ marginBottom: 16 }}>
          <Typography variant='sub_heading_two'>{`Các trường hợp không hợp lệ:`}</Typography>
        </div>
        <div
          css={{
            marginBottom: 24,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div className='take_photo_of_id_error_item'>
            <ErrorCmndIcon className='icon-wapper' />

            <img
              width={96}
              height={56}
              css={{ marginTop: 8, objectFit: `contain` }}
              src={`https://cdn.simplize.vn/simplizevn/community/images/1679562243709-Group_711.png`}
            />

            <Typography
              variant='sub_heading_four'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc014
              })}
            >{`Mờ`}</Typography>
          </div>

          <div className='take_photo_of_id_error_item'>
            <ErrorCmndIcon className='icon-wapper' />

            <img
              width={96}
              height={56}
              css={{ marginTop: 8, objectFit: `contain` }}
              src={`https://cdn.simplize.vn/simplizevn/community/images/1679562564874-Group_712.png`}
            />

            <Typography
              variant='sub_heading_four'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc014
              })}
            >{`Tối`}</Typography>
          </div>

          <div className='take_photo_of_id_error_item'>
            <ErrorCmndIcon className='icon-wapper' />

            <img
              width={96}
              height={56}
              css={{ marginTop: 8, objectFit: `contain` }}
              src={`https://cdn.simplize.vn/simplizevn/community/images/1679562291171-Group_713.png`}
            />

            <Typography
              variant='sub_heading_four'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc014
              })}
            >{`Chói sáng`}</Typography>
          </div>

          <div className='take_photo_of_id_error_item'>
            <ErrorCmndIcon className='icon-wapper' />

            {/* <CmndInfrontIcon
              className="icon-wapper"
              style={{
                width: 96,
                height: 56,
                transform: 'translate(10px, 0px) rotate(-10deg)',
              }}
            /> */}
            <img
              width={96}
              height={56}
              css={{ marginTop: 8, objectFit: `contain` }}
              src={`https://cdn.simplize.vn/simplizevn/community/images/1679562381473-Group_714.png`}
            />

            <Typography
              variant='sub_heading_four'
              cssCustom={(theme: Theme) => ({
                color: theme.color.dc014
              })}
            >{`Mất góc`}</Typography>
          </div>
        </div>

        <div css={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            cssCustom={{
              width: 100,
              height: 40,
              padding: 0
            }}
            onClick={onCancel}
          >{`Đã hiểu`}</Button>
        </div>
      </Wrapper>
    </DialogWrap>
  )
}

export default TakePhotoOfIDModal
