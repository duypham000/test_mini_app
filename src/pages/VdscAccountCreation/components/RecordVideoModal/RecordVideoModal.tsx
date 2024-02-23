import Button from '@/components/Button'
import { CloseIconBlack500 } from '@/icons/CloseIconBlack500'
// import ReactWebcam from '@/components/ReactWebcam'
import Typography from '@/components/Typography'
import { Theme } from '@/themes/theme'
// import { getImageFile } from '@/utils/webcam'
import classNames from 'classnames'
import DialogWrap from 'rc-dialog'
import React from 'react'
// import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { styles, Wrapper } from './styles'
// import { useMediaQuery } from "react-responsive";

interface Props {
  onCancel: any
  visible: boolean
  isSwitchCamera?: boolean
  onUseVideoFile: any
  onUseImageFile: any
}

const RecordVideoModal: React.FC<Props> = (props) => {
  const {
    visible,
    onCancel,
    // isSwitchCamera,
    onUseVideoFile,
    onUseImageFile
  } = props
  // const isMobile = useMediaQuery({ maxWidth: 767 });

  const webcamRef = React.useRef<any>(null)
  const mediaRecorderRef = React.useRef<any>(null)
  const [capturing, setCapturing] = React.useState(false)
  const [recordedChunks, setRecordedChunks] = React.useState([])
  const [imageFile, setImageFile] = React.useState(null)
  // const [isSwitchCamera, setIsSwitchCamera] = React.useState(false);

  // React.useEffect(() => {
  //   if (window.MediaRecorder == undefined) {
  //     console.error("MediaRecorder not supported, boo");
  //   } else {
  //     var contentTypes = [
  //       "video/webm",
  //       "video/webm;codecs=vp8",
  //       "video/x-matroska;codecs=avc1",
  //       "audio/webm",
  //       "video/mp4;codecs=avc1",
  //       "video/invalid",
  //     ];
  //     contentTypes.forEach((contentType) => {
  //       console.log(
  //         contentType +
  //           " is " +
  //           (MediaRecorder.isTypeSupported(contentType)
  //             ? "supported"
  //             : "NOT supported ")
  //       );
  //     });
  //   }
  // }, []);

  // const iOS = React.useMemo(() => {
  //   const WINDOW: any = window;
  //   const isIOS =
  //     /iPad|iPhone|iPod/.test(navigator.userAgent) && !WINDOW.MSStream;
  //   return isIOS;
  // }, []);

  // const mimeType = React.useMemo(() => {
  //   const contentTypes = [
  //     "video/webm",
  //     "video/webm;codecs=vp8",
  //     "video/x-matroska;codecs=avc1",
  //     "video/mp4;codecs=avc1",
  //     "video/invalid",
  //   ];
  //   contentTypes.forEach((contentType: string) => {
  //     if (MediaRecorder.isTypeSupported(contentType)) {
  //       return contentType;
  //     }
  //   });
  //   return "video/webm";
  // }, []);

  const handleStartCaptureClick = () => {
    setCapturing(true)
    // mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
    //   mimeType: `${iOS ? "video/mp4" : "video/webm"}`,
    // });
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream)
    mediaRecorderRef.current?.addEventListener(
      'dataavailable',
      handleDataAvailable
    )
    mediaRecorderRef.current?.start()
  }

  const handleDataAvailable = ({ data }) => {
    if (data.size > 0) {
      setRecordedChunks((prev) => prev.concat(data))
    }
  }

  // const handleStopCaptureClick = () => {
  //   mediaRecorderRef.current?.stop()
  //   setCapturing(false)

  //   handleTakePhoto()
  // }

  const handleDownload = () => {
    if (recordedChunks.length) {
      // const blob = new Blob(recordedChunks, {
      //   type: "video/mp4",
      // });
      const blob = new Blob(recordedChunks)
      // const url = URL.createObjectURL(blob);
      const myFile = new File([blob], `${Date.now()}.mp4`, {
        type: 'video/mp4'
      })
      // console.log({ myFile, blob });
      onUseVideoFile(myFile)
      onUseImageFile(imageFile)
      onCancel()
      // const a: any = document.createElement("a");
      // document.body.appendChild(a);
      // a.style = "display: none";
      // a.href = url;
      // a.download = `${Date.now()}.mp4`;
      // a.click();
      // window.URL.revokeObjectURL(url);
    }
  }

  // const handleTakePhoto = () => {
  //   // const imageFile: any = getImageFile(webcamRef)
  //   setImageFile(imageFile)
  // }

  const handleRecordBack = () => {
    setRecordedChunks([])
    setImageFile(null)
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
          {imageFile && <img alt='' src={URL.createObjectURL(imageFile)} />}
          {/* {!imageFile && (
            <>
              <ReactWebcam
                webcamRef={webcamRef}
                isSwitchCamera={isSwitchCamera}
              />
              <div className='count_down'>
                <CountdownCircleTimer
                  isPlaying={capturing}
                  duration={5}
                  colors={'#E14040'}
                  size={64}
                  onComplete={() => {
                    handleStopCaptureClick()
                    return { shouldRepeat: true }
                  }}
                >
                  {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
              </div>
            </>
          )} */}
        </div>
        <div className='btn_group'>
          {!capturing && recordedChunks.length === 0 && (
            <>
              {/* <ButtonAntd
                onClick={() => setIsSwitchCamera(!isSwitchCamera)}
              >{`Đổi camera`}</ButtonAntd> */}
              <Button
                cssCustom={{
                  padding: '10px 24px'
                }}
                onClick={handleStartCaptureClick}
              >
                <Typography
                  variant='sub_heading_four'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.gray100
                  })}
                >{`Quay video`}</Typography>
              </Button>
            </>
          )}
          {!capturing && recordedChunks.length > 0 && (
            <>
              <Button
                cssCustom={(theme: Theme) => ({
                  padding: '10px 24px',
                  backgroundColor: theme.color.dc044,
                  '&:hover': {
                    backgroundColor: theme.color.dc044
                  }
                })}
                onClick={handleRecordBack}
              >
                <Typography
                  variant='sub_heading_four'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.dc011
                  })}
                >{`Quay lại`}</Typography>
              </Button>
              <Button
                cssCustom={{
                  padding: '10px 24px',
                  marginLeft: 16
                }}
                onClick={handleDownload}
              >
                <Typography
                  variant='sub_heading_four'
                  cssCustom={(theme: Theme) => ({
                    color: theme.color.gray100
                  })}
                >{`Dùng video`}</Typography>
              </Button>
            </>
          )}
        </div>
      </Wrapper>
    </DialogWrap>
  )
}

export default RecordVideoModal
