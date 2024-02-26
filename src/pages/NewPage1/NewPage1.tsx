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
  const handleTest = async () => {
    // try {
    //   fetch(
    //     'file:///C:/Users/khanh/Pictures/Camera%20Roll/WIN_20240128_20_35_16_Pro.jpg'
    //   ).then((e) => {
    //     console.log(e)
    //     document.getElementById('test')!.innerHTML = 'done'
    //   })
    // } catch (error) {
    //   document.getElementById('test')!.innerHTML = 'error'
    // }
    console.log(inputRef.current.files)
  }

  // function loadVideoFromBase64String(base64Video) {}
  NativeMethod.addEventListener({
    name: 'loadVideoFromBase64String',
    handle: (base64Video) => {
      const video: any = document.getElementById('video')
      video.src = 'data:video/mp4;base64,' + base64Video
      video.play()
    }
  })
  const userInfo = useAppSelector((state) => state.profile.userInfo)
  React.useEffect(() => {
    console.log(userInfo)
  }, [userInfo])

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
      <button onClick={handleTest} css={styles.btn}>
        Test get Img
      </button>
      <Link to={UrlInternal.SUPPORT_VDSC}>
        <button css={styles.btn}>To Page 2</button>
      </Link>
    </div>
  )
}

export default NewPage1
