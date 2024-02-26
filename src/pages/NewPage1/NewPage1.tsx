import styles from './style'
import { Link } from 'react-router-dom'
import React from 'react'
import { useAppSelector } from '@/redux/hooks'
import { UrlInternal } from '@/constants/url-internal'
import NativeMethod from '@/NativeMethod'

const NewPage1: React.FC = () => {
  const inputRef = React.useRef<any>()
  const handleToast = () => {
    NativeMethod.toast('Page 1')
  }
  // function loadVideoFromBase64String(base64Video) {}
  const userInfo = useAppSelector((state) => state.profile.userInfo)
  React.useEffect(() => {
    console.log(userInfo)
  }, [userInfo])

  const handleRecord = () => {
    NativeMethod.videoRecord({
      callback: (base64Video) => {
        const video = document.createElement('video')
        video.src = 'data:video/mp4;base64,' + base64Video
        video.controls = true
        document.body.appendChild(video)
      }
    })
  }

  return (
    <div css={styles.wrapper}>
      <p>Page 1</p>
      <p ref={inputRef} id='test'>
        Result
      </p>
      <input
        type='file'
        id='inpt'
        onChange={(e: any) => {
          console.log(e.target.files)
        }}
      />
      <video id='video' controls></video>
      <img alt='' />
      <button onClick={handleToast} css={styles.btn}>
        Toast
      </button>
      <button onClick={handleRecord} css={styles.btn}>
        record
      </button>
      <Link to={UrlInternal.SUPPORT_VDSC}>
        <button css={styles.btn}>To Page 2</button>
      </Link>
    </div>
  )
}

export default NewPage1
