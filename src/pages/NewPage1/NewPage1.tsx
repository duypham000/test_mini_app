import styles from './style'
import { Link } from 'react-router-dom'
import mainAxios from '@/apis/main-axios'
import React from 'react'
import { useAppSelector } from '@/redux/hooks'
import { UrlInternal } from '@/constants/url-internal'
import NativeMethod from '@/NativeMethod'

const NewPage1: React.FC = () => {
  const handleToast = () => {
    NativeMethod.toast('Page 1')
  }
  const handleTest = async () => {
    try {
      await mainAxios.get('/api/personalize/ta-indicator-favorite/list')
      document.getElementById('test')!.innerHTML = 'done'
    } catch (error) {
      document.getElementById('test')!.innerHTML = 'error'
    }
  }

  const userInfo = useAppSelector((state) => state.profile.userInfo)
  React.useEffect(() => {
    console.log(userInfo)
  }, [userInfo])

  return (
    <div css={styles.wrapper}>
      <p>Page 1</p>
      <p id='test'>Result</p>
      <button onClick={handleToast} css={styles.btn}>
        Toast
      </button>
      <button onClick={handleTest} css={styles.btn}>
        Test Axios
      </button>
      <Link to={UrlInternal.SUPPORT_VDSC}>
        <button css={styles.btn}>To Page 2</button>
      </Link>
    </div>
  )
}

export default NewPage1
