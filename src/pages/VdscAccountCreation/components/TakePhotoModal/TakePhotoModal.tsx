import Button from '@/components/Button'
import { CloseIconBlack500 } from '@/icons/CloseIconBlack500'
// import ReactWebcam from '@/components/ReactWebcam'
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
// import { getImageFile } from '@/utils/webcam'
import classNames from 'classnames'
import DialogWrap from 'rc-dialog'
import React from 'react'
import { styles, Wrapper } from './styles'

interface Props {
  onCancel: any
  visible: boolean
  onUseImageFile: (imageFile: any) => void
  isSwitchCamera?: boolean
  onVisibleTakePhotoOfIDModal: any
}

const TakePhotoModal: React.FC<Props> = (props) => {
  const {
    visible,
    onCancel,
    onUseImageFile,
    // isSwitchCamera,
    onVisibleTakePhotoOfIDModal
  } = props

  const [imageFile, setImageFile] = React.useState(null)
  // const [isSwitchCamera, setIsSwitchCamera] = React.useState(false);
  // const webcamRef = React.useRef(null)

  const handleReset = () => {
    setImageFile(null)
  }

  const handleTakePhoto = () => {
    // const imageFile: any = getImageFile(webcamRef)
    setImageFile(imageFile)
  }

  const handleUseImageFile = () => {
    onUseImageFile(imageFile)
    handleReset()
    onCancel()
  }

  return (
    <DialogWrap
      prefixCls='simplize-dialog'
      visible={visible}
      onClose={onCancel}
      closeIcon={<CloseIconBlack500 width={28} height={28} />}
      css={styles.wrapper()}
    >
      <Wrapper>
        <div
          className={classNames(`react_webcam`, {
            capturing: !imageFile
          })}
        >
          {imageFile && <img src={URL.createObjectURL(imageFile)} />}
          {/* {!imageFile && (
            <ReactWebcam
              webcamRef={webcamRef}
              isSwitchCamera={isSwitchCamera}
            />
          )} */}
          {!imageFile && (
            <p>
              <Typography
                variant='sub_heading_four'
                cssCustom={(theme: Theme) => ({
                  color: theme.color.gray100
                })}
              >{`Bạn vui lòng chụp rõ nét, đảm bảo nhìn rõ thông tin, không bị mờ, tối hoặc chói sáng trước khi chụp.`}</Typography>
              <div onClick={onVisibleTakePhotoOfIDModal}>
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
            </p>
          )}
        </div>
        <div className='btn_group'>
          {!imageFile && (
            <>
              {/* <ButtonAntd
                onClick={() => setIsSwitchCamera(!isSwitchCamera)}
              >{`Đổi camera`}</ButtonAntd> */}
              <Button
                cssCustom={{
                  padding: '10px 24px'
                }}
                onClick={handleTakePhoto}
              >
                <Typography
                  variant='sub_heading_four'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.gray100
                  })}
                >{`Chụp ảnh`}</Typography>
              </Button>
            </>
          )}
          {imageFile && (
            <>
              <Button
                cssCustom={(theme: Theme) => ({
                  padding: '10px 24px',
                  backgroundColor: theme.color.dc044,
                  '&:hover': {
                    backgroundColor: theme.color.dc044
                  }
                })}
                onClick={handleReset}
              >
                <Typography
                  variant='sub_heading_four'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.dc014
                  })}
                >{`Chụp lại`}</Typography>
              </Button>
              <Button
                cssCustom={{
                  padding: '10px 24px',
                  marginLeft: 15
                }}
                onClick={handleUseImageFile}
              >
                <Typography
                  variant='sub_heading_four'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.gray100
                  })}
                >{`Dùng ảnh`}</Typography>
              </Button>
            </>
          )}
        </div>
      </Wrapper>
    </DialogWrap>
  )
}

export default TakePhotoModal
