import styles from './style'
import { Link } from 'react-router-dom'
import NativeMethod from '@/NativeMethod'
import { UrlInternal } from '@/constants/url-internal'

const NewPage2: React.FC = () => {
  const handleToast = () => {
    NativeMethod.toast('Page 2')
  }
  return (
    <div css={styles.wrapper}>
      <p>Page 2</p>
      <button onClick={handleToast} css={styles.btn}>
        Toast
      </button>
      <Link to={UrlInternal.CREATE_VDSC}>
        <button css={styles.btn}>To Page 1</button>
      </Link>
    </div>
  )
}

export default NewPage2
